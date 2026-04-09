---
title: "Next Best Action / Agent Design"
description: "Designs intelligent, contextual agentic experiences using Agentforce/Einstein Copilot or traditional Next Best Action, leveraging Data Cloud as the grounding and reasoning layer."
sample_prompt: |
  Design an Agentforce-style service use case for a telecom retention scenario: high drop-call rates, goal is lower AHT while offering the right remedy. Use this skill to name the agent role, specify Data Cloud grounding (Unified Individual + which CIs to inject via enrichments), draft system instructions and guardrails, list action providers (Flows vs prompts), and if they are not ready for agents, outline a fallback Einstein NBA strategy (load/filter/sort/branch).
---

### Purpose

Designs intelligent, contextual agentic experiences using Agentforce/Einstein Copilot or traditional Next Best Action, leveraging Data Cloud as the grounding and reasoning layer.

### When To Use

During architecture design for Service, Sales, or Commerce clouds where proactive decisioning, autonomous agent intervention, or guided user experiences are required.

### Inputs

* **Business goals:** E.g., reduce average handle time (AHT), increase cross-sell win rate.
* **User Personas:** Customer (self-service agent), Support Rep, Sales Rep.
* **Data sources:** Data Cloud (CIs, Unified Profiles), CRM standard/custom objects.

### Instructions

1.  **Define the Agent Persona/Role:** Outline what the Agentforce agent is designed to do (e.g., "Billing Resolution Agent").
2.  **Determine Grounding Data:** Identify which Unified Profile data and Calculated Insights from Data Cloud will be exposed to the Agent via Data Cloud enrichments (Copy Fields or Related Lists).
3.  **Define Agent Topics & Instructions:** Create the natural language instructions that govern the agent's behavior and constraints.
4.  **Design Action Providers:** Map out the exact Flow, Apex, or Prompt Builder capabilities the agent can invoke. E.g., "Issue Refund Flow", "Generate Apology Email Prompt".
5.  **Traditional NBA (If applicable):** If the customer is not ready for Agentforce, design the standard Einstein Next Best Action recommendation strategy (Load, Filter, Sort, Branch).

### Output Format

* **Agent Configuration Summary:** Name, Role, System Prompt/Instructions.
* **Grounding Strategy:** Table linking Data Cloud CIs to the CRM prompt context.
* **Action Library:** List of tools the agent can use, categorized by type (Flow, Apex, Prompt).
* **Guardrails:** Explicit instructions on what the agent is *not* allowed to do.

### Constraints

* Focus on Agentforce as the primary architecture; use traditional NBA only as a fallback.
* Ensure all actions invoked by the agent respect CRM security and sharing models.
* Do not hallucinate data; all context must come from Data Cloud or CRM.

### Example

**Scenario:** Telecom service agent assisting a customer with high drop-call rates.

**Output Snippet:**

* **Agent:** `Retention_Copilot`
* **Grounding:** Retrieves `UnifiedIndividual` from Data Cloud. Injects CI `Average_Daily_Drop_Calls_Last_7_Days` into the context window.
* **Instructions:** "You are a retention specialist. If drop calls > 5, you must prioritize offering a microcell tower before discussing billing."
* **Action Providers:**
    * `Order_Microcell_Flow` (Screen Flow)
    * `Issue_Credit_Flow` (Autolaunched Flow)
* **Guardrails:** Maximum credit allowed is $50 without manager approval.
