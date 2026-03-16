<template>
  <div>
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 pt-32 pb-16 text-center">
      <div class="mb-6">
        <span class="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold">
          Help Center
        </span>
      </div>
      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </span>
      </h1>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        Find answers to common questions about CCorex, our apps, pricing, and implementation.
      </p>
    </section>

    <!-- FAQ Categories -->
    <section class="max-w-5xl mx-auto px-4 pb-20">
      <div v-for="category in faqCategories" :key="category.name" class="mb-16">
        <div class="mb-8">
          <div class="flex items-center gap-3 mb-3">
            <div class="text-3xl">{{ category.icon }}</div>
            <h2 class="text-3xl font-bold text-white">{{ category.name }}</h2>
          </div>
        </div>

        <div class="space-y-4">
          <details v-for="faq in category.questions" :key="faq.q" class="group p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary-500/30 transition-all">
            <summary class="cursor-pointer font-semibold text-lg text-white flex items-center justify-between">
              <span>{{ faq.q }}</span>
              <span class="text-primary-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p class="text-gray-300 mt-4 leading-relaxed">{{ faq.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Still Have Questions -->
    <section class="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Still Have Questions?
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          Our team is here to help. Get in touch and we'll answer any questions you have about CCorex.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">
            Contact Support
          </a>
          <a href="#" class="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-400 font-bold hover:bg-primary-500 hover:text-slate-900 transition-all">
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const faqCategories = [
  {
    name: 'General',
    icon: '❓',
    questions: [
      {
        q: 'What is CCorex?',
        a: 'CCorex is a unified construction management platform that combines four powerful applications: DeepPlanAI (digital takeoffs), DeepCost (AI cost estimation), DeepTrack (budget & PO management), and DeepHR (workforce management). These apps work together seamlessly to manage your entire construction lifecycle.'
      },
      {
        q: 'Can I use individual apps or do I need the full suite?',
        a: 'You can start with any individual app based on your needs. Each app works independently and delivers value on its own. However, you unlock the full potential of CCorex when you use multiple apps together, as data flows seamlessly between them without manual re-entry.'
      },
      {
        q: 'What types of construction projects is CCorex suitable for?',
        a: 'CCorex is designed for commercial construction projects of all sizes, with a focus on MEP (Mechanical, Electrical, and Plumbing) contractors. Our platform is used by general contractors, MEP contractors, quantity surveyors, and project managers across residential, commercial, and industrial projects.'
      },
      {
        q: 'Is CCorex cloud-based or on-premise?',
        a: 'CCorex is primarily a cloud-based SaaS platform, accessible from anywhere with an internet connection. We also offer on-premise deployment options for enterprise customers with specific security or compliance requirements. Contact our sales team to discuss your deployment needs.'
      }
    ]
  },
  {
    name: 'Implementation & Training',
    icon: '🚀',
    questions: [
      {
        q: 'How long does implementation take?',
        a: 'Typical CCorex implementations take 2-3 weeks from kickoff to full deployment. This includes system configuration, data migration, team training, and go-live support. The timeline may vary based on the number of apps, users, and complexity of your requirements.'
      },
      {
        q: 'What training and support do you provide?',
        a: 'We provide comprehensive onboarding including live training sessions, video tutorials, documentation, and hands-on workshops. After go-live, you get 24/7 customer support via phone, email, and chat. Enterprise customers also receive dedicated account managers and regular check-ins.'
      },
      {
        q: 'Can you help migrate data from our existing systems?',
        a: 'Yes! Our implementation team will help you migrate data from your existing systems including project data, cost libraries, supplier information, and employee records. We support imports from Excel, CSV, and direct integrations with popular construction software.'
      },
      {
        q: 'Do you offer ongoing training for new team members?',
        a: 'Absolutely. We provide ongoing training resources including on-demand video tutorials, webinars, and documentation. Enterprise customers can schedule additional training sessions for new team members at no extra cost.'
      }
    ]
  },
  {
    name: 'Pricing & Plans',
    icon: '💰',
    questions: [
      {
        q: 'How is CCorex priced?',
        a: 'CCorex is priced per user per month, with different tiers based on which apps you need. You can start with a single app like DeepCost ($149/user/month), upgrade to Project Control with DeepCost + DeepTrack ($249/user/month), or get the complete suite with custom enterprise pricing. Volume discounts are available for larger teams.'
      },
      {
        q: 'Is there a free trial available?',
        a: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. Our team will provide personalized onboarding to help you get the most out of your trial period.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and purchase orders for enterprise customers. Annual subscriptions can be paid via invoice with net-30 payment terms.'
      },
      {
        q: 'Can I cancel my subscription anytime?',
        a: 'Yes, you can cancel your subscription at any time. Monthly subscriptions can be cancelled with 30 days notice. Annual subscriptions are non-refundable but you retain access until the end of your billing period. We also offer data export upon cancellation.'
      }
    ]
  },
  {
    name: 'Security & Compliance',
    icon: '🔐',
    questions: [
      {
        q: 'Is my data secure?',
        a: 'Yes. CCorex uses bank-level 256-bit encryption for data at rest and in transit. We are SOC 2 Type II certified, GDPR compliant, and ISO 27001 certified. Our infrastructure is hosted on AWS with automatic backups, disaster recovery, and 99.9% uptime SLA.'
      },
      {
        q: 'Where is my data stored?',
        a: 'Data is stored in secure AWS data centers with multiple redundancy and backup systems. You can choose your preferred data region (US, EU, or Asia-Pacific) based on your compliance requirements. All data is encrypted and backed up daily.'
      },
      {
        q: 'Do you support Single Sign-On (SSO)?',
        a: 'Yes, CCorex supports SSO via SAML 2.0, OAuth 2.0, and integrations with popular identity providers including Okta, Azure AD, Google Workspace, and OneLogin. SSO is available on Project Control and Enterprise plans.'
      },
      {
        q: 'Can I control user permissions and access?',
        a: 'Yes, CCorex includes comprehensive role-based access control (RBAC). You can create custom roles, set granular permissions, and control what each user can view or edit. Audit logs track all user activities for compliance and security monitoring.'
      }
    ]
  },
  {
    name: 'Integrations',
    icon: '🔗',
    questions: [
      {
        q: 'What integrations are available?',
        a: 'CCorex integrates with leading construction and business software including Procore, Autodesk BIM 360, PlanGrid, QuickBooks, Xero, SAP, Microsoft Project, Primavera P6, Slack, Microsoft Teams, and more. We also provide a REST API for custom integrations.'
      },
      {
        q: 'Do you have an API for custom integrations?',
        a: 'Yes! CCorex provides a comprehensive REST API with full documentation, SDKs, and sandbox environment for testing. API access is available on all paid plans. Enterprise customers get dedicated API support and higher rate limits.'
      },
      {
        q: 'Can CCorex integrate with our accounting system?',
        a: 'Yes, CCorex integrates with QuickBooks, Xero, SAP, and other major accounting systems. You can sync invoices, expenses, purchase orders, and financial data bi-directionally. Our team can help set up custom integrations for other accounting systems.'
      }
    ]
  }
]
</script>
