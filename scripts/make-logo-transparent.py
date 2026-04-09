#!/usr/bin/env python3
"""
Make sticker-style logo background transparent (edge-connected flood fill).
Run from repo root:
  python3 -m venv .venv && .venv/bin/pip install pillow numpy
  .venv/bin/python scripts/make-logo-transparent.py
"""
from __future__ import annotations

import shutil
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "branding" / "accelerants-logo.png"
BACKUP = ROOT / "public" / "branding" / "accelerants-logo.original.png"
TOL = 36


def main() -> None:
    if not SRC.is_file():
        raise SystemExit(f"Missing {SRC}")

    if not BACKUP.is_file():
        shutil.copy(SRC, BACKUP)
        print("Wrote backup", BACKUP)

    img = Image.open(BACKUP).convert("RGBA")
    a = np.array(img)
    h, w = a.shape[:2]

    corners = np.vstack(
        [
            a[0, 0, :3],
            a[0, w - 1, :3],
            a[h - 1, 0, :3],
            a[h - 1, w - 1, :3],
        ]
    ).astype(np.float32)
    ref = corners.mean(axis=0)

    dist = np.sqrt(
        np.sum((a[:, :, :3].astype(np.float32) - ref.reshape(1, 1, 3)) ** 2, axis=2)
    )

    visit = np.zeros((h, w), dtype=bool)
    transparent = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()

    for i in range(h):
        for j in (0, w - 1):
            if dist[i, j] < TOL:
                q.append((i, j))
    for j in range(w):
        for i in (0, h - 1):
            if dist[i, j] < TOL:
                q.append((i, j))

    while q:
        i, j = q.popleft()
        if visit[i, j]:
            continue
        visit[i, j] = True
        if dist[i, j] >= TOL:
            continue
        transparent[i, j] = True
        for di, dj in ((0, 1), (0, -1), (1, 0), (-1, 0)):
            ni, nj = i + di, j + dj
            if 0 <= ni < h and 0 <= nj < w and not visit[ni, nj]:
                q.append((ni, nj))

    a2 = a.copy()
    a2[transparent, 3] = 0
    Image.fromarray(a2).save(SRC, optimize=True)
    print("Updated", SRC, "transparent pixels:", int(transparent.sum()))


if __name__ == "__main__":
    main()
