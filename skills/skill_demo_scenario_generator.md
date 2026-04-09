---
title: "Demo Scenario Generator"
description: "Constructs end-to-end, compelling \"Tell-Show-Tell\" demo scripts that highlight the interoperability of Data Cloud, Marketing Cloud, and core Salesforce (Sales/Service)."
sample_prompt: |
  Build a Tell-Show-Tell demo script for an apparel retailer: link web behavior to in-store service, emphasize Data Cloud + MC Engagement + Service, audience is CMO + CIO. Use this skill to define personas, before/after, a day-in-the-life across four scenes, exact Salesforce screens/clicks for the SE, and talk tracks with value props—keep everything feasible in a standard demo org.
---

### Purpose

Constructs end-to-end, compelling "Tell-Show-Tell" demo scripts that highlight the interoperability of Data Cloud, Marketing Cloud, and core Salesforce (Sales/Service).

### When To Use

Before customer presentations to structure the demo flow, assign roles, and ensure technical features are tied directly to business value.

### Inputs

* **Industry context:** Target industry.
* **Business goals:** The main value drivers (e.g., personalization at scale, zero-copy value).
* **Existing Salesforce footprint:** Products to include in the demo.
* **Target Audience:** Who is in the room (CMO, CIO, IT Director).

### Instructions

1.  **Define the Personas:** Create relatable characters (e.g., "Rachel the Customer", "Mark the Marketer", "Sarah the Service Agent").
2.  **Establish the 'Before' State:** Briefly outline the current pain point (siloed data, delayed marketing).
3.  **Map the 'Day in the Life' Flow:** Step-by-step narrative bridging the systems.
    * *Scene 1:* Ingestion & Identity Resolution (IT Persona).
    * *Scene 2:* Segmentation & Insights (Marketer Persona).
    * *Scene 3:* Activation & Orchestration (Marketer/Customer Persona).
    * *Scene 4:* Agentic Action / Service interaction (Service Persona).
4.  **Extract the 'Show' Elements:** Detail exactly what screens and clicks the Solutions Engineer needs to execute in Salesforce.
5.  **Draft the 'Tell' Track:** Provide the talk-track and value statements for each scene.

### Output Format

* **Cast of Characters:** List of personas.
* **Demo Flow Architecture:** A brief A -> B -> C flow.
* **Scene-by-Scene Script:** Structured as Scene Title, Persona, Screen to Show, Talk Track, and Value Proposition.

### Constraints

* Must be realistic to build in a standard Salesforce demo org.
* Avoid highly customized UI screens; rely on standard Lightning components, Data Cloud UI, and Flow.
* Ensure transitions between clouds (e.g., Data Cloud to Marketing Cloud) are logically explained.

### Example

**Scenario:** Retail apparel company wanting to link online behavior with in-store service.

**Output Snippet:**

* **Scene 2: The Marketer's View**
    * **Screen:** Data Cloud Segment Builder.
    * **Action:** Show creation of "High Value Cart Abandoners" segment utilizing the `UnifiedIndividual` and the Databricks Zero-Copy web event table.
    * **Talk Track:** "Mark doesn't need to write SQL or wait for IT. He uses the drag-and-drop builder to query live data from Databricks combined with Salesforce CRM loyalty data."
    * **Value:** Speed to market, no data duplication.
