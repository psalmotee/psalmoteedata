// src/data/faqData.js

export const FAQ_DATA = [
  {
    id: 'general',
    label: 'General',
    icon: '📋',
    questions: [
      {
        q: 'What is PsalmoteeData?',
        a: 'PsalmoteeData is a digital platform that allows you to buy airtime, data, electricity tokens, and pay bills instantly. We support all major Nigerian networks and utility providers.',
      },
      {
        q: 'Do I need an account to use your services?',
        a: "No. You can use the Guest Purchase option to buy services without an account. However, creating an account gives you access to wallet management, full transaction history, and faster checkout on future purchases.",
      },
    ],
  },
  {
    id: 'payments',
    label: 'Payments & Wallet',
    icon: '💳',
    questions: [
      {
        q: 'How do I fund my wallet?',
        a: 'After logging in, go to your dashboard and select "Fund Wallet". You can pay using your debit card, bank transfer, or other available payment methods. Funds reflect instantly.',
      },
      {
        q: 'What happens if my transaction fails?',
        a: "If a transaction fails, your wallet balance is automatically refunded within a few minutes. If the refund doesn't reflect after 10 minutes, please contact our support team with your transaction details.",
      },
      {
        q: 'How long do transactions take?',
        a: 'Most transactions are processed instantly. Occasional delays may occur due to network provider issues, but these are typically resolved within 5 minutes.',
      },
    ],
  },
  {
    id: 'airtime',
    label: 'Airtime & Data',
    icon: '📱',
    questions: [
      {
        q: 'Is airtime delivery instant?',
        a: 'Yes! Airtime is delivered instantly in almost all cases. The few exceptions involve network provider delays which are typically resolved within 5 minutes.',
      },
      {
        q: 'Can I recharge any network?',
        a: 'Yes! We support all major Nigerian networks including MTN, Airtel, Glo, and 9mobile. Simply select your network when purchasing.',
      },
      {
        q: "What if I don't receive my data?",
        a: "Wait a few minutes and refresh your device's data settings. If the data still doesn't appear after 10 minutes, please contact our support team with your phone number and transaction ID.",
      },
    ],
  },
  {
    id: 'electricity',
    label: 'Electricity & Bills',
    icon: '⚡',
    questions: [
      {
        q: 'How long does electricity token delivery take?',
        a: 'Electricity tokens are usually delivered instantly after payment confirmation. The token is sent to the phone number you provide during purchase.',
      },
      {
        q: "What if I don't receive my token?",
        a: "Contact our support team immediately with your meter number and transaction ID. We'll resolve it as quickly as possible.",
      },
    ],
  },
  {
    id: 'guest',
    label: 'Guest Purchase',
    icon: '👤',
    questions: [
      {
        q: 'What is guest purchase?',
        a: "Guest purchase allows you to buy airtime, data, and other services without creating an account. Simply provide your phone number and payment details to complete the transaction.",
      },
      {
        q: 'Can I track my transaction as a guest?',
        a: "Guest purchases don't include transaction history tracking. We recommend saving your transaction confirmation message for reference. Creating an account gives you full transaction history.",
      },
      {
        q: 'Why should I create an account?',
        a: "With an account, you get access to a wallet (fund once, buy multiple times), full transaction history, faster checkout, and exclusive member discounts. Registration takes less than 2 minutes.",
      },
    ],
  },
]

export const MINI_FAQS = [
  {
    q: 'Is airtime delivery instant?',
    a: "Yes! Airtime is delivered instantly in most cases. Occasional delays are resolved within minutes.",
  },
  {
    q: 'What happens if my transaction fails?',
    a: "Your wallet is automatically refunded. If not reflected in 10 minutes, contact support with your transaction details.",
  },
  {
    q: 'Can I buy without creating an account?',
    a: "Yes! Use Guest Purchase. However, guests don't have access to wallet or transaction history.",
  },
  {
    q: 'How long does data delivery take?',
    a: "Data bundles are delivered within seconds of payment confirmation.",
  },
]
