---
title: "Flow & Journey Orchestration"
description: "Architects event-driven automations and omnichannel customer journeys by seamlessly integrating Data Cloud, Salesforce Flow, and Marketing Cloud (Journey Builder or MC Advanced)."
sample_prompt: |
  Commerce brand wants real-time abandoned cart recovery for carts over $100; Gold tier gets a VIP path into Journey Builder. Use this skill to pick the trigger (streaming DLO / data change), outline a Data Cloud Triggered Flow (decisions, Data Cloud lookups), integration into MC Engagement (platform event / entry source), and sketch the journey (email, wait, decision split) including exit criteria and API-limit cautions.
---

### Purpose

Architects event-driven automations and omnichannel customer journeys by seamlessly integrating Data Cloud, Salesforce Flow, and Marketing Cloud (Journey Builder or MC Advanced).

### When To Use

During the design of real-time use cases, abandoned cart scenarios, onboarding journeys, or complex multi-step cross-cloud business processes.

### Inputs

* **Business goals:** e.g., Trigger an SMS immediately when a high-value customer drops a call.
* **Data sources:** Streaming data events, CRM data changes.
* **Existing Salesforce footprint:** Marketing Cloud Engagement vs Marketing Cloud Growth/Advanced.

### Instructions

1.  **Determine the Trigger:** Is this a batch segment activation or a real-time event? If real-time, identify the Streaming DLO or Data Cloud data change event.
2.  **Design the Data Cloud Triggered Flow:** Define the entry criteria for the Salesforce Flow based on Data Cloud Calculated Insights or Data Model changes.
3.  **Formulate the Orchestration Logic:** Within the Flow, design the decision trees (e.g., check `UnifiedIndividual.Loyalty_Tier`).
4.  **Connect to Marketing Cloud (Engagement):** If using MC Engagement, configure the Flow to publish a Platform Event or invoke a Journey Builder API Entry event.
5.  **Connect to Marketing Cloud (Growth/Advanced):** If using the newer MC Growth/Advanced, design the native Flow orchestration using the "Send Email" or "Send SMS" elements directly on the core platform.
6.  **Handle Wait/Listen States:** Utilize "Wait Until API Event" in Journey Builder or Flow pause elements for multi-step scenarios based on customer engagement.

### Output Format

* **Trigger Definition:** What initiates the process (Object, Condition).
* **Flow Architecture:** Step-by-step list of Flow elements (Get Records, Decision, Action).
* **Journey/Campaign Architecture:** Diagram (text) of the corresponding Marketing Cloud Journey canvas.
* **Integration Mechanism:** Exact method of passing data between Core/Data Cloud and Marketing Cloud.

### Constraints

* Minimize heavy data processing inside Flow; rely on Data Cloud to pre-calculate insights.
* Ensure the integration mechanism accounts for API limits (batch Platform Events if volumes are high).
* Always include an exit criteria or goal state in the Journey.

### Example

**Scenario:** Real-time abandoned cart recovery for a commerce brand.

**Output Snippet:**

* **Trigger:** Data Cloud Triggered Flow on `Cart_Abandon_Stream_DLO`. Condition: `Cart_Value` > $100.
* **Flow Logic:**
    * *Step 1:* Get `UnifiedIndividual` from Data Cloud to retrieve email and consent.
    * *Step 2:* Decision: Is `Loyalty_Tier` = Gold?
    * *Step 3 (Gold):* Fire `PlatformEvent: VIP_Cart_Abandon`.
* **Journey Builder (MC Engagement):**
    * *Entry:* Salesforce Data Event listening for `VIP_Cart_Abandon`.
    * *Step 1:* Send Email (Dynamic Content with cart items).
    * *Step 2:* Wait 24 Hours.
    * *Step 3:* Decision Split (Did they purchase?). If No -> Send SMS.
