---
title: "Segmentation & Activation Builder"
description: "Translates marketing and business requirements into precise Data Cloud segmentation rules and designs the payload delivery (activation) to downstream systems like Marketing Cloud Engagement, Growth, or Advanced."
sample_prompt: |
  Marketing wants: "VIP customers who have not purchased in 30 days but opened an email in the last 14 days," activating to Marketing Cloud Engagement. Apply this skill to set the segment target (UnifiedIndividual vs Account), break down direct vs related attributes, list any Calculated Insights we should build first for aggregates, write segment logic in AND/OR form like the Segment Builder UI, and define the activation payload fields (SubscriberKey, personalization attributes) with exact field names.
---

### Purpose

Translates marketing and business requirements into precise Data Cloud segmentation rules and designs the payload delivery (activation) to downstream systems like Marketing Cloud Engagement, Growth, or Advanced.

### When To Use

During demo preparation, POV execution, or validating if a specific marketing campaign can be built natively within Data Cloud's Segment Builder.

### Inputs

* **Business goals:** Campaign objectives (e.g., "Target VIP customers who haven't purchased in 30 days but opened an email recently").
* **Existing Salesforce footprint:** Destination platforms.
* **Data sources:** Available DMOs and Calculated Insights.

### Instructions

1.  **Identify the Target Audience (Segment Target):** Define the base DMO for the segment (almost always `UnifiedIndividual` for B2C or `Account` for B2B).
2.  **Construct the Segment Logic:** Break down the business rules into Direct Attributes (1:1 relationships, e.g., Loyalty Tier) and Related Attributes (1:N relationships, e.g., Purchase History, Email Clicks).
3.  **Apply Calculated Insights (CIs):** If the criteria involves aggregations (e.g., "spent over $500 in last 6 months"), leverage CIs instead of raw Related Attributes to optimize segment processing time.
4.  **Design the Activation Target:** Select the destination (e.g., Marketing Cloud Engagement).
5.  **Define the Activation Payload:** Specify the exact Additional Attributes to include in the activation payload so the downstream system can personalize the message (e.g., `First Name`, `Loyalty Points Balance`, `Last Purchased Item`).

### Output Format

* **Segment Logic Definition:** Structured boolean logic (AND/OR) mimicking the Data Cloud UI.
* **Calculated Insights Prerequisites:** List of CIs needed before segment creation.
* **Activation Payload:** JSON or table format of the schema being pushed to the target.

### Constraints

* Segment filters on Related Attributes must include time constraints to optimize performance.
* Only activate attributes connected to the Unified Individual through valid relationship paths.
* Assume the user needs to know the exact field names to pull into the activation payload.

### Example

**Scenario:** Wealth management firm targeting High Net Worth individuals for a new tax product.

**Output Snippet:**

* **Segment Target:** `UnifiedIndividual`
* **Logic:**
    * `UnifiedIndividual.Direct.Loyalty_Tier` EQUALS 'Platinum' AND
    * `Related.Financial_Accounts.Balance` SUM > 1000000 (Via CI: `Total_AUM`) AND
    * `Related.Email_Engagement.Open` >= 1 WHERE `Date` = LAST 30 DAYS
* **Activation Target:** Marketing Cloud Engagement (creates Data Extension).
* **Payload:** `SubscriberKey`, `EmailAddress`, `FirstName`, `Total_AUM`, `Primary_Advisor_Name`.
