---
title: "Measurement & Attribution Framework"
description: "Designs the architecture for tracking the performance, ROI, and attribution of campaigns driven by Data Cloud and Marketing Cloud, utilizing native Salesforce analytics tools."
sample_prompt: |
  Executive readout needed: prove ROI from Data Cloud–driven campaigns for a B2B SaaS motion. Using this skill, define primary/secondary KPIs, how we capture conversions back into Data Cloud, attribution CI logic (e.g., email exposure stitched to opportunities), pick MC Intelligence vs Tableau vs CRMA per persona, and describe the feedback loop into segmentation. Include example CI logic snippets where helpful.
---

### Purpose

Designs the architecture for tracking the performance, ROI, and attribution of campaigns driven by Data Cloud and Marketing Cloud, utilizing native Salesforce analytics tools.

### When To Use

During the final stages of architecture design or POV to prove the business value of the implementation to executive stakeholders (CMOs/CFOs).

### Inputs

* **Business goals:** KPIs being measured (e.g., ROAS, Conversion Rate, LTV uplift).
* **Data sources:** Ad platforms (Meta, Google Ads), E-commerce platforms, CRM Opportunity data.
* **Existing Salesforce footprint:** Marketing Cloud Intelligence (Datorama), Tableau, CRMA.

### Instructions

1.  **Define the KPIs:** Establish the primary and secondary metrics based on the business goals.
2.  **Design the Data Capture:** Identify how conversion events (e.g., Purchases, Closed Won Opportunities) will be ingested back into Data Cloud.
3.  **Construct Attribution Logic:** Define how Calculated Insights will be used to stitch campaign exposure (from Marketing Cloud) to conversion events (from Commerce/Sales Cloud).
4.  **Select the Visualization Layer:**
    * Recommend **Marketing Cloud Intelligence** for cross-channel ad spend and ROAS.
    * Recommend **Tableau** for deep-dive enterprise analytics and LTV modeling on top of Data Cloud.
    * Recommend **CRM Analytics** for embedded operational dashboards for Sales/Service reps.
5.  **Outline the Feedback Loop:** Detail how these insights will be fed back into Data Cloud to refine future segmentation.

### Output Format

* **KPI Matrix:** Metric -> Data Source -> Calculation Logic.
* **Architecture Diagram (Text):** Flow of data from Activation -> Exposure -> Conversion -> Analytics.
* **Visualization Strategy:** Which tool is used for which persona and why.
* **Calculated Insights Examples:** Logical SQL for ROI/Attribution metrics.

### Constraints

* Ensure the framework accounts for both online and offline conversions if applicable.
* Leverage native connectors in MC Intelligence before suggesting custom API integrations.
* Maintain a clear distinction between operational reporting (CRMA) and strategic analytics (Tableau).

### Example

**Scenario:** B2B SaaS company tracking marketing pipeline attribution.

**Output Snippet:**

* **Data Capture:** Marketing Cloud Engagement sends Email Send/Click data to Data Cloud. Sales Cloud sends Lead Creation and Opportunity Stage changes to Data Cloud.
* **Attribution Logic:** Build a Calculated Insight linking `Email_Click_DLO` to `Opportunity_DLO` based on `UnifiedContactPointEmail`. Assign fractional credit if multiple clicks occurred within 30 days of the `Opportunity.CreatedDate`.
* **Visualization:** Push the CI to Tableau via the Data Cloud connector to display a "Pipeline Influenced by Campaign" dashboard for the CMO.
