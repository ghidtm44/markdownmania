---
title: "Discovery → Solution Translator"
description: "Synthesizes raw discovery notes into a structured Salesforce architectural vision, generating a high-level solution map, a Bill of Materials (BOM), and a phased implementation approach."
sample_prompt: |
  Discovery notes: mid-size bank with siloed mortgage vs retail banking data; marketing sends irrelevant cross-sell. Synthesize using this skill into an executive summary, capability map (pain → feature → value), a realistic license BOM with current product names, phased crawl/walk/run roadmap, and technical risks with mitigations—keep Phase 1 OOTB and fast TTV.
---

### Purpose

Synthesizes raw discovery notes into a structured Salesforce architectural vision, generating a high-level solution map, a Bill of Materials (BOM), and a phased implementation approach.

### When To Use

Immediately following customer discovery sessions to prepare the POV scope, validate required licenses, and align the internal Salesforce account team.

### Inputs

* **Discovery notes:** Unstructured text or transcripts from customer meetings detailing pain points and current tech stack.
* **Business goals:** ROI targets, timelines.
* **Existing Salesforce footprint:** Current owned licenses.

### Instructions

1.  **Extract Pain Points & Capabilities:** Map the customer's stated problems to specific Salesforce capabilities (e.g., "Can't identify users across brands" -> Data Cloud Identity Resolution).
2.  **Define the Future State Architecture:** Outline the high-level flow of data, intelligence, and action across the Salesforce platform.
3.  **Generate the License BOM (Bill of Materials):** Identify the required SKUs (e.g., Data Cloud Starter, Marketing Cloud Advanced, Agentforce Service Agent, MuleSoft).
4.  **Create a Phased Roadmap:** Break the solution into manageable implementation phases (Crawl, Walk, Run) to accelerate Time to Value (TTV).
5.  **Identify Risks & Mitigations:** Highlight technical constraints (e.g., poor source data quality) and how the solution addresses them.

### Output Format

* **Executive Summary:** 2-3 sentences summarizing the value proposition.
* **Capability Map:** Table matching Pain Point -> Solution Feature -> Business Value.
* **Proposed BOM:** Bulleted list of required Salesforce products/add-ons.
* **Implementation Phases:**
    * *Phase 1 (MVP - 30/60 days)*
    * *Phase 2 (Expansion)*
    * *Phase 3 (Transformation)*
* **Technical Risks:** Bulleted list with mitigation strategies.

### Constraints

* Do not over-engineer Phase 1; focus on the quickest path to value using out-of-the-box connectors.
* Ensure the BOM aligns with current Salesforce product naming conventions (e.g., Data Cloud, Marketing Cloud Growth, Agentforce).
* Base assumptions purely on standard enterprise architectures, avoiding overly custom Apex/LWC development unless strictly necessary.

### Example

**Scenario:** Mid-sized bank struggling with siloed mortgage and retail banking data, leading to irrelevant marketing.

**Output Snippet:**

* **Capability Map:**
    * *Pain:* Sending credit card offers to users who just closed a mortgage.
    * *Solution:* Data Cloud Unified Profile + Marketing Cloud Suppression Segments.
* **BOM:**
    * Data Cloud Starter (Includes basic segmentation/IDR).
    * Marketing Cloud Engagement (Corporate Edition).
    * MuleSoft Anypoint (for legacy on-prem core banking ingestion).
* **Phase 1 (MVP):** Ingest Retail + Mortgage CRM data via native connector. Implement Identity Resolution. Build simple exclusion segments to stop conflicting offers. Activate to MC Engagement.
