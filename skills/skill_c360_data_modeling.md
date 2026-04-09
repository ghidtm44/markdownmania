---
title: "Customer 360 Data Modeling & Activation"
description: "Translates raw customer data sources into a canonical Salesforce Data Cloud architecture. This skill guides the agent to map source schemas to Data Lake Objects (DLOs), harmonize them into Data Model Objects (DMOs), and design Calculated Insights (CIs) required for segmentation and activation."
sample_prompt: |
  We're in the architecture phase for a retail POV: POS in Snowflake, web analytics, and a legacy CRM feed. Follow this skill to categorize streams (Profile vs Engagement), propose DLO → DMO harmonization to the standard C360 model (including Contact Point DMOs for IDR), define which objects feed UnifiedIndividual / UnifiedContactPoint, draft Calculated Insights for high-value churn risk, and outline activation to Marketing Cloud Engagement and Service Cloud enrichments. Output using the harmonization table, CI definitions, and activation strategy sections from the skill.
---

### Purpose

Translates raw customer data sources into a canonical Salesforce Data Cloud architecture. This skill guides the agent to map source schemas to Data Lake Objects (DLOs), harmonize them into Data Model Objects (DMOs), and design Calculated Insights (CIs) required for segmentation and activation.

### When To Use

During the Architecture or POV phase when analyzing customer data dictionaries, defining the harmonization strategy, or preparing a Data Cloud implementation sprint.

### Inputs

* **Discovery notes:** Business objectives (e.g., reduce churn, increase cross-sell).
* **Data sources:** Source systems (e.g., POS, Web Analytics, Legacy CRM) with sample schemas.
* **Industry context:** Retail, Financial Services, HLS, etc.
* **Existing Salesforce footprint:** Sales Cloud, Service Cloud, Marketing Cloud.

### Instructions

1.  **Analyze Data Sources:** Categorize inbound data streams into Profile, Engagement, or Other subject areas.
2.  **DLO to DMO Harmonization:** Map the raw source attributes to the standard Data Cloud Customer 360 Data Model. Identify custom DMO requirements if standard objects (e.g., `Individual`, `ContactPointEmail`, `SalesOrder`) do not suffice.
3.  **Define the Unified Individual:** Specify which DMOs contribute to the `UnifiedIndividual` and `UnifiedContactPoint` objects.
4.  **Design Calculated Insights (CIs):** Based on the business goals, write the logical SQL definitions for required CIs (e.g., `RFM_Score`, `Lifetime_Value`, `Propensity_to_Churn`).
5.  **Define Activation Targets:** Determine the required activation pathways (e.g., Marketing Cloud Engagement for email, Service Cloud for Next Best Action via Data Cloud enrichments).

### Output Format

The output must be structured as follows:

* **Harmonization Table:** Matrix of Source System -> DLO -> Standard/Custom DMO.
* **Calculated Insights Definition:** Bulleted list of CIs with their logical SQL constructs and dimensions/measures.
* **Activation Strategy:** Clear mapping of the Unified Individual payload to the destination system.

### Constraints

* Strictly adhere to the standard C360 Data Model where possible.
* Always map to standard Contact Point DMOs for identity resolution to function correctly.
* Assume enterprise-scale data volumes (minimize complex joins in CIs where pre-aggregation in DLOs is possible).

### Example

**Scenario:** Retailer wanting to activate high-value churn risks.

**Output Snippet:**

* **Harmonization:** `Snowflake POS (Source)` -> `POS_Transactions_DLO` -> `SalesOrder (DMO)` and `SalesOrderLineItem (DMO)`.
* **Calculated Insight:** `High_Value_Churn_Risk`. Dimensions: `UnifiedIndividual.Id`. Measures: `SUM(SalesOrder.GrandTotalAmount) > 5000` AND `MAX(SalesOrder.CreatedDate) < NOW() - 180 DAYS`.
* **Activation:** Map `UnifiedIndividual` + `High_Value_Churn_Risk` to Marketing Cloud Engagement via Activation Target, creating a Data Extension for Journey Builder.
