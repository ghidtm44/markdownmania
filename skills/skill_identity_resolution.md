---
title: "Identity Resolution Strategy"
description: "Architects the Identity Resolution (IDR) rulesets in Data Cloud to stitch disparate consumer records into a single UnifiedIndividual profile, managing match and reconciliation logic."
sample_prompt: |
  Retailer has guest ecommerce checkouts and in-store loyalty signups; leadership sees duplicate journeys. Follow this skill to map identifier availability by source, propose ordered match rules (exact vs fuzzy), define reconciliation (source priority / most recent) for name/email/phone, and call out Contact Point DMO requirements. Deliver an identifier matrix and ruleset configuration in the skill's output format.
---

### Purpose

Architects the Identity Resolution (IDR) rulesets in Data Cloud to stitch disparate consumer records into a single `UnifiedIndividual` profile, managing match and reconciliation logic.

### When To Use

During data modeling, technical discovery, and whenever a customer struggles with duplicate records or fragmented customer journeys across multiple systems.

### Inputs

* **Data sources:** All systems contributing customer profile data (e.g., E-commerce, CRM, Loyalty, legacy databases).
* **Business goals:** Strict compliance vs. broad marketing reach.
* **Industry context:** Implications of matching data (e.g., Healthcare requires strict matching, Retail can use fuzzy matching).

### Instructions

1.  **Analyze Identifier Availability:** Map out which identifiers (Email, Phone, Device ID, Party ID, Loyalty Number) exist in each source system.
2.  **Define Match Rules:** Create the specific criteria to link records. Determine where to use Exact Match vs. Fuzzy Match (e.g., Fuzzy Name + Exact Email).
3.  **Sequence Match Rules:** Order the match rules from most precise (e.g., Exact Party ID) to least precise (e.g., Fuzzy Name + Exact Phone).
4.  **Define Reconciliation Rules:** Determine how to select the "winning" attribute for the Unified Profile when conflicts occur.
    * *Source Priority:* E.g., CRM always wins over Web Leads.
    * *Most Recent:* E.g., Last updated address wins.
    * *Most Frequent:* E.g., Most commonly used email wins.
5.  **Establish Quality Metrics:** Define how the consolidation rate will be monitored.

### Output Format

* **Identifier Matrix:** Table of Source System vs. Available Identifiers.
* **Ruleset Configuration:**
    * **Match Rules:** Numbered list in execution order, specifying the exact fields used.
    * **Reconciliation Rules:** Table mapping key attributes (Name, Email, Phone) to their reconciliation logic (Source Priority, Most Recent, etc.).

### Constraints

* Do not over-match; false positives are harder to fix than false negatives.
* Always include a standard `PartyId` match rule if an enterprise MDM (Master Data Management) system exists.
* Ensure Contact Point objects are properly mapped; IDR cannot match on custom DMO fields, only standard Contact Point DMOs.

### Example

**Scenario:** Retailer with disparate online guest checkouts and in-store loyalty signups.

**Output Snippet:**

* **Match Rule 1:** Exact Match on `PartyIdentification.PartyId` (Catches users logged into both systems).
* **Match Rule 2:** Exact Match on `ContactPointEmail.EmailAddress` + Fuzzy Match on `Individual.FirstName`.
* **Reconciliation (First Name):** Source Priority -> 1. Loyalty Database, 2. E-Commerce.
* **Reconciliation (Phone):** Most Recent (captures the latest number provided during checkout).
