---
title: "Data Ingestion & Zero-Copy Architecture"
description: "Designs the optimal data ingestion strategy for Data Cloud, balancing standard connectors, ingestion APIs, and modern Zero-Copy (Federated) architectures to minimize data movement and latency."
sample_prompt: |
  IT is pushing back on duplicating a large historical dataset. We have Snowflake (facts/dims), hourly Salesforce CRM updates, and first-party web events that need near–real-time triggers. Using this skill, recommend Zero-Copy vs physical ingestion per stream, specify native connectors and Ingestion API / SDK where needed, and produce a textual architecture diagram plus an ingestion matrix (source, type, frequency, target DLO) with technical prerequisites.
---

### Purpose

Designs the optimal data ingestion strategy for Data Cloud, balancing standard connectors, ingestion APIs, and modern Zero-Copy (Federated) architectures to minimize data movement and latency.

### When To Use

During technical discovery, architecture design, and addressing IT/security objections regarding data duplication and egress costs.

### Inputs

* **Data sources:** Existing enterprise data warehouse (EDW) or data lakes (Snowflake, Databricks, BigQuery, Redshift).
* **Data latency requirements:** Real-time, near real-time, or batch.
* **Data volumes:** Row counts and expected frequency of updates.
* **Business goals:** Use cases driving the data requirements.

### Instructions

1.  **Evaluate Zero-Copy Viability:** Determine if the enterprise uses a supported platform (Snowflake, Databricks, Google BigQuery, Redshift) for BYOL (Bring Your Own Lake) / Data Federation.
2.  **Design the Federation Layer:** Outline which data streams should remain in the external lake and be accessed via Zero-Copy (Data Federation) versus physically ingested (e.g., high-frequency engagement data needed for real-time triggers).
3.  **Specify Standard Connectors:** Identify systems that require native ingestion (e.g., Salesforce CRM connector, Marketing Cloud connector, B2C Commerce connector).
4.  **Design API/Streaming Ingestion:** Identify payloads requiring the Ingestion API or Web/Mobile SDK (e.g., real-time cart abandonment).
5.  **Determine Refresh Schedules:** For batch ingestion, define the data stream schedule to support the business use case without hitting platform limits.

### Output Format

* **Architecture Diagram (Textual Representation):** Using clear structural text to represent the flow from Source -> Ingestion Method -> Data Cloud.
* **Ingestion Matrix:** Table detailing Source, Ingestion Type (Zero-Copy, Native, API), Frequency, and Target DLO.
* **Technical Considerations:** Bulleted list of prerequisite configurations (e.g., Storage Integrations in Snowflake).

### Constraints

* Prioritize Zero-Copy for massive historical datasets or dimensional tables that do not require real-time processing in Data Cloud.
* Respect Data Cloud limits on streaming API payloads.
* Ensure Web/Mobile SDK is exclusively used for first-party behavioral tracking.

### Example

**Scenario:** Media company with massive viewership logs in Databricks and subscriber data in Salesforce CRM.

**Output Snippet:**

* **Zero-Copy Strategy:** Mount Databricks Delta tables as federated DLOs for `Viewership_History`. Zero data egress costs; Data Cloud queries Databricks live during segmentation.
* **Native Ingestion:** Use Salesforce CRM connector for `Contact` and `Subscription__c` objects (hourly sync).
* **Streaming:** Use Web SDK on the streaming portal to capture `Video_Play` and `Video_Pause` events into a Streaming DLO for real-time Data Cloud Triggered Flows.
