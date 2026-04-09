---
title: "Consent & Data Governance"
description: "Designs the architecture to ingest, harmonize, and enforce customer consent and data privacy preferences (GDPR, CCPA) within Data Cloud and downstream activation platforms."
sample_prompt: |
  Global bank: GDPR across email and mobile push; consent lives partly in OneTrust and CRM. Apply this skill to map source consent fields into standard Consent DMOs, describe harmonization to UnifiedIndividual, define mandatory segment baseline filters, activation consent filtering settings for Marketing Cloud, and an RTBF / deletion protocol including source cascade—stress channel-specific opt-in/out rules.
---

### Purpose

Designs the architecture to ingest, harmonize, and enforce customer consent and data privacy preferences (GDPR, CCPA) within Data Cloud and downstream activation platforms.

### When To Use

During architecture validation, especially for highly regulated industries (Financial Services, HLS) or global enterprise deployments subject to strict privacy laws.

### Inputs

* **Data sources:** Systems of record for consent (e.g., OneTrust, Salesforce Preference Center, custom preference portals).
* **Business goals:** Ensure compliance, prevent unauthorized marketing, manage Right to be Forgotten (RTBF) requests.
* **Existing Salesforce footprint:** Marketing Cloud, Core CRM.

### Instructions

1.  **Ingest Consent Data:** Map the external consent flags into the standard Data Cloud privacy model (`Consent`, `ContactPointConsent`, `PartyConsent` DMOs).
2.  **Harmonize Consent:** Define how consent applied to a specific email/device rolls up to the `UnifiedIndividual`.
3.  **Enforce Segmentation Guardrails:** Create mandatory baseline filters for all Segment Builder queries (e.g., "Exclude if `DoNotMarket` = True").
4.  **Configure Activation Filtering:** Utilize Data Cloud's native consent filtering during the Activation process to ensure opted-out contact points are suppressed before the payload reaches Marketing Cloud.
5.  **Design RTBF/Data Deletion Workflow:** Outline the process for handling "Right to be Forgotten" requests using Data Cloud's Data Deletion APIs.

### Output Format

* **Data Model Mapping:** Source Consent Fields -> Standard Consent DMOs.
* **Segmentation Baseline:** The exact boolean logic that marketers must append to every segment.
* **Activation Configuration:** Specific settings to enable on the Activation Target to enforce channel-level consent.
* **Data Deletion Protocol:** Step-by-step API flow for processing purge requests.

### Constraints

* Consent is channel-specific. An opt-out for Email does not automatically mean an opt-out for SMS unless defined by business rules.
* Always use the standard Data Cloud Consent DMOs; custom objects will not be respected by native activation filtering.
* RTBF requests must cascade to the data sources; Data Cloud deleting a record is insufficient if the source re-ingests it tomorrow.

### Example

**Scenario:** Global bank managing GDPR requirements across email and mobile push.

**Output Snippet:**

* **Data Model:** OneTrust `Email_Opt_In` maps to `ContactPointConsent`. `PrivacyConsentStatus` = 'OptIn'.
* **Harmonization:** If any `ContactPointEmail` linked to the `UnifiedIndividual` has an 'OptOut' status, the overarching `PartyConsent` for marketing is flagged as restricted.
* **Activation Guardrail:** During Marketing Cloud Activation setup, select "Filter by Consent" and map to the `ContactPointConsent` DMO to ensure only emails with 'OptIn' are packaged into the Data Extension.
* **RTBF:** Establish a Flow in Core CRM that catches deletion requests and triggers an HTTP Callout to the Data Cloud Data Deletion API.
