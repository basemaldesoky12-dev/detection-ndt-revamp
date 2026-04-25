# Detection NDT Chatbot — Setup Guide

## Overview

A simple AI chatbot for the Detection NDT website powered by:
- **n8n** (your self-hosted instance) for the workflow
- **Google Gemini 2.0 Flash** (free — 1,500 requests/day)
- **No vector database** — all company content fits in the system prompt

---

## Step 1: Get a Free Google Gemini API Key

1. Go to https://aistudio.google.com/apikey
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the API key — you'll need it in Step 3

No credit card required. Free tier gives you 1,500 requests/day.

---

## Step 2: Import the Workflow into n8n

1. Open your n8n instance
2. Click **"Add workflow"** (or the + button)
3. Click the **"..."** menu (top right) → **"Import from File"**
4. Select the file: `n8n-chatbot-workflow.json` from this directory
5. The workflow should appear with 4 nodes:
   - Chat Trigger
   - AI Agent
   - Google Gemini Chat Model
   - Window Buffer Memory

---

## Step 3: Add Gemini Credentials in n8n

1. In the imported workflow, click on the **"Google Gemini Chat Model"** node
2. Under **Credential**, click **"Create New Credential"**
3. Select **"Google Gemini (PaLM) API"**
4. Paste your API key from Step 1
5. Click **Save**
6. Close the node

---

## Step 4: Activate the Workflow

1. Toggle the workflow to **Active** (top right switch)
2. Click on the **"Chat Trigger"** node
3. Copy the **Production URL** — it looks like:
   ```
   https://your-n8n-instance.com/webhook/detection-ndt-chat
   ```

---

## Step 5: Test the Chatbot

Click the **"Chat"** button in the bottom-right of the n8n workflow editor to test it directly.

Try these questions:
- "What services do you offer?"
- "What is ultrasonic testing?"
- "How can I contact Detection NDT?"
- "Do you offer training programs?"
- "Tell me about your projects"

---

## Step 6: Embed on the Website

### Option A: Environment Variable (Recommended)

1. In your Vercel project dashboard, go to **Settings → Environment Variables**
2. Add:
   - **Name:** `NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL`
   - **Value:** Your production webhook URL from Step 4
3. Redeploy the site (push a commit or trigger manually)

The chat widget will automatically appear as an orange floating button on the bottom-right of every page.

### Option B: Direct Edit

Edit `site/src/components/ChatWidget.tsx` and replace the fallback URL:

```tsx
const N8N_CHAT_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL || "https://your-n8n-instance.com/webhook/detection-ndt-chat";
```

---

## Customization

### Chat Widget Colors
The widget is pre-configured to match the Detection NDT design:
- **Chat button:** Orange (#FF6B35)
- **Header:** Navy (#0A1628)
- **User messages:** Orange (#FF6B35)
- **Bot messages:** Light gray (#F4F6F8)

To change colors, edit the `theme` object in `ChatWidget.tsx`.

### System Prompt
To update what the chatbot knows, edit the `systemMessage` in the AI Agent node in n8n. The full company content is embedded directly in the system prompt.

### Memory
The chatbot remembers the last 10 messages in a conversation (configured in the Window Buffer Memory node). Adjust `contextWindowLength` to change this.

---

## Cost

**$0/month** with Google Gemini free tier (up to 1,500 requests/day).

If you exceed the free tier, Gemini pricing is very affordable (~$0.10 per 1M input tokens).

---

## Alternative Free LLMs

If you prefer not to use Google Gemini, you can swap the LLM node:

| Provider | n8n Node | Free Tier |
|----------|----------|-----------|
| Google Gemini | Gemini Chat Model | 1,500 req/day |
| Groq | Groq Chat Model | Check current limits |
| HuggingFace | HTTP Request node | Limited free tier |

To swap: delete the Gemini node, add the alternative LLM node, and connect it to the AI Agent's `ai_languageModel` input.
