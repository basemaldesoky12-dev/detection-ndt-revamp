"use client";

import { useEffect } from "react";

const N8N_CHAT_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL || "";

export default function ChatWidget() {
  useEffect(() => {
    if (!N8N_CHAT_WEBHOOK_URL) return;

    // Load n8n chat CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    // Load and initialize n8n chat
    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: '${N8N_CHAT_WEBHOOK_URL}',
        target: '#n8n-chat-widget',
        mode: 'window',
        showWelcomeScreen: false,
        initialMessages: [
          'Hello! I\\'m the Detection NDT assistant.',
          'Ask me about our services, NDT methods, training, or anything else!'
        ],
        i18n: {
          en: {
            title: 'Detection NDT Support',
            subtitle: 'Ask us anything about our services',
            inputPlaceholder: 'Type your question...',
            getStarted: 'New Conversation',
            footer: '',
          },
        },
        theme: {
          button: {
            backgroundColor: '#FF6B35',
            iconColor: '#ffffff',
            size: 'large',
          },
          chat: {
            backgroundColor: '#ffffff',
            headerBackgroundColor: '#0A1628',
            headerTextColor: '#ffffff',
            botMessageBackgroundColor: '#F4F6F8',
            botMessageTextColor: '#0A1628',
            userMessageBackgroundColor: '#FF6B35',
            userMessageTextColor: '#ffffff',
            inputBackgroundColor: '#F4F6F8',
            inputTextColor: '#0A1628',
            inputBorderColor: '#E8ECF0',
            inputSendButtonColor: '#FF6B35',
          },
        },
      });
    `;
    document.body.appendChild(script);

    return () => {
      link.remove();
      script.remove();
    };
  }, []);

  if (!N8N_CHAT_WEBHOOK_URL) return null;

  return <div id="n8n-chat-widget" />;
}
