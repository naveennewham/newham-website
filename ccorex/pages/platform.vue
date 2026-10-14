<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid gap-14 pb-24 pt-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:pt-24">
        <div>
          <p class="eyebrow-dark">The CCorex platform</p>
          <h1 class="h-display mt-5 text-white">One secure control plane for every app.</h1>
          <p class="lead-dark mt-6 max-w-xl">The CCorex portal at dash.ccorex.com is the single front door. Users sign in once and open every app they are entitled to. Your organisation admin manages users, roles and app settings in one place.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-accent">Book a live demo <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <a href="#security" class="btn-ghost-dark"><i class="fa-solid fa-shield-halved text-xs" aria-hidden="true"></i> Security &amp; access</a>
          </div>
          <ul class="mt-10 flex flex-wrap gap-2">
            <li v-for="p in heroPoints" :key="p" class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-100">
              <i class="fa-solid fa-check text-cyan-400" aria-hidden="true"></i>{{ p }}
            </li>
          </ul>
        </div>
        <div class="relative">
          <UiPlatformDiagram />
        </div>
      </div>
    </section>

    <!-- Portal -->
    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="One login" title="Your whole business behind one dashboard" lead="Sign in once at dash.ccorex.com and see a tile for each app you may open — DeepCost, DeepTrack, DeepHR, DeepPlan and DeepAssist (ARIVU), plus Deep Drive and PDF Editor, which are coming soon and will be included with every active subscription." />
          <ul class="mt-8 space-y-3">
            <li v-for="b in launcherPoints" :key="b" class="flex gap-3 text-ink-700"><i class="fa-solid fa-circle-check mt-1 text-brand-600" aria-hidden="true"></i>{{ b }}</li>
          </ul>
        </div>
        <UiReveal>
          <UiBrowserFrame src="/images/product/ccorex-portal.webp" alt="CCorex portal for a demo organisation: sidebar with Dashboard, Organizations, Users, Attendance, Helpdesk and App Settings; app tiles for DeepCost, DeepTrack, DeepHR, Deep Drive, PDF Editor and DeepAssist; and the AI bubble" url="dash.ccorex.com" caption="The portal as an organisation admin sees it, shown for a demo organisation." />
        </UiReveal>
      </div>
    </section>

    <!-- Organisation administration -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Organisation administration" title="Identity, people and access — managed once" lead="Your organisation admin runs these pages in the portal. The portal is the master for organisations, users and app entitlements; each app is the master for its own data and its own fine-grained permissions." />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UiReveal v-for="(c, i) in capabilities" :key="c.title" :delay="(i % 3) * 80">
            <UiFeatureCard :icon="c.icon" :title="c.title" :text="c.text" class="h-full" />
          </UiReveal>
        </div>
      </div>
    </section>

    <!-- SSO & provisioning -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="Single sign-on and sync" title="Sign in once. Changes follow the user." lead="On sign-in the portal issues a signed token. Each app checks the signature and finds the same user and organisation in its own records, because the same IDs are used everywhere. When an admin adds, changes, bulk-uploads or disables a user, the portal copies the change to each app." />
        <UiReveal class="mt-12"><DemoPlatformSso /></UiReveal>
      </div>
    </section>

    <!-- Packages -->
    <section class="section bg-ink-50">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="Subscriptions and packages" title="Who sees which app" lead="Your subscription package decides which apps your organisation has. Your admin decides who in the organisation may open each one, and with which role." />
          <ul class="mt-8 space-y-4">
            <li v-for="r in packageRules" :key="r.title" class="flex gap-3">
              <span class="icon-tile h-9 w-9 shrink-0 text-sm"><i :class="r.icon" aria-hidden="true"></i></span>
              <div><p class="font-semibold text-ink-900">{{ r.title }}</p><p class="text-sm text-ink-600">{{ r.text }}</p></div>
            </li>
          </ul>
        </div>
        <UiReveal>
          <figure class="rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-8">
            <div class="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <div class="rounded-2xl border border-ink-100 bg-ink-50 p-4 text-center">
                <i class="fa-solid fa-user-tag text-xl text-brand-600" aria-hidden="true"></i>
                <p class="mt-2 text-sm font-semibold text-ink-900">App assigned to the user</p>
                <p class="mt-1 text-xs text-ink-600">The assignment carries their role in that app</p>
              </div>
              <span class="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white">AND</span>
              <div class="rounded-2xl border border-ink-100 bg-ink-50 p-4 text-center">
                <i class="fa-solid fa-box-open text-xl text-brand-600" aria-hidden="true"></i>
                <p class="mt-2 text-sm font-semibold text-ink-900">Package switches the app on</p>
                <p class="mt-1 text-xs text-ink-600">From the organisation’s active subscription</p>
              </div>
              <span class="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-brand-950" aria-label="equals">=</span>
              <div class="rounded-2xl border-2 border-brand-500 bg-brand-50 p-4 text-center">
                <i class="fa-solid fa-table-cells-large text-xl text-brand-700" aria-hidden="true"></i>
                <p class="mt-2 text-sm font-semibold text-ink-900">Tile shows in the portal</p>
                <p class="mt-1 text-xs text-ink-600">Opens already signed in</p>
              </div>
            </div>
            <figcaption class="mt-5 text-center text-xs text-ink-500">With no apps assigned, the user sees an empty-state message instead of tiles.</figcaption>
          </figure>
        </UiReveal>
      </div>
    </section>

    <!-- Unified today, connected tomorrow -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Unified today, connected tomorrow" title="One user base now — deeper integration next" lead="CCorex already unifies sign-in and users across every app, and ARIVU already answers across them. Passing records between apps is on the roadmap. We label the two clearly so you know what you are buying today." />
        <div class="mt-12 grid gap-6 lg:grid-cols-2">
          <div class="card border-brand-200">
            <div class="flex items-center gap-3">
              <span class="icon-tile"><i class="fa-solid fa-circle-check" aria-hidden="true"></i></span>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-brand-700">Available today</p>
                <h3 class="text-xl font-bold">Unified access and identity</h3>
              </div>
            </div>
            <ul class="mt-6 divide-y divide-ink-100">
              <li v-for="t in today" :key="t.title" class="flex gap-3 py-4">
                <i :class="t.icon" class="mt-1 w-5 text-brand-600" aria-hidden="true"></i>
                <div><p class="font-semibold text-ink-900">{{ t.title }}</p><p class="text-sm text-ink-600">{{ t.text }}</p></div>
              </li>
            </ul>
          </div>
          <div class="card border-dashed">
            <div class="flex items-center gap-3">
              <span class="icon-tile bg-ink-100 text-ink-600"><i class="fa-solid fa-road" aria-hidden="true"></i></span>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">On the roadmap · not yet available</p>
                <h3 class="text-xl font-bold">Connected data across apps</h3>
              </div>
            </div>
            <ul class="mt-6 divide-y divide-ink-100">
              <li v-for="t in roadmap" :key="t.title" class="flex gap-3 py-4">
                <i :class="t.icon" class="mt-1 w-5 text-ink-400" aria-hidden="true"></i>
                <div>
                  <p class="flex flex-wrap items-center gap-2 font-semibold text-ink-900">{{ t.title }}<span class="rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-600">Roadmap</span></p>
                  <p class="text-sm text-ink-600">{{ t.text }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p class="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-600">Roadmap items are planned, not committed to a date. Ask us in your demo what is in the current release.</p>
      </div>
    </section>

    <!-- Cross-cutting -->
    <section id="security" class="section scroll-mt-20 bg-ink-50">
      <div class="container-site">
        <div class="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <UiSectionHeader eyebrow="Security & shared behaviour" title="The same rules in every app" lead="Estimates, budgets and payroll are sensitive. These behaviours are built into the platform, so they work the same way in DeepCost, DeepTrack, DeepHR and the other apps." />
          <p class="text-sm text-ink-600 lg:text-right"><NuxtLink to="/faq" class="font-semibold text-brand-700 hover:text-brand-900">Security questions answered <i class="fa-solid fa-arrow-right ml-1 text-xs" aria-hidden="true"></i></NuxtLink></p>
        </div>
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <UiReveal v-for="(s, i) in crossCutting" :key="s.title" class="card" :delay="(i % 5) * 60">
            <i :class="s.icon" class="text-xl text-brand-600" aria-hidden="true"></i>
            <h3 class="mt-4 text-base font-semibold">{{ s.title }}</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-ink-600">{{ s.text }}</p>
          </UiReveal>
        </div>
      </div>
    </section>

    <!-- Roles -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="Role-based access" title="Each person sees exactly what they need" lead="Roles are defined per organisation and per app, each with its own set of permissions. Each user has a role in each app they are assigned to." />
        <div class="mt-12 overflow-x-auto rounded-2xl border border-ink-100 bg-white shadow-card">
          <table class="w-full min-w-[640px] text-left text-sm">
            <caption class="sr-only">Roles in CCorex apps</caption>
            <thead class="bg-ink-50 text-xs uppercase tracking-wider text-ink-500">
              <tr><th scope="col" class="px-5 py-3 font-semibold">App</th><th scope="col" class="px-5 py-3 font-semibold">Roles</th></tr>
            </thead>
            <tbody class="divide-y divide-ink-100">
              <tr v-for="r in roles" :key="r.app">
                <th scope="row" class="whitespace-nowrap px-5 py-4 font-semibold text-ink-900"><i :class="r.icon" class="mr-2 text-brand-600" aria-hidden="true"></i>{{ r.app }}</th>
                <td class="px-5 py-4">
                  <ul class="flex flex-wrap gap-2"><li v-for="x in r.roles" :key="x" class="chip">{{ x }}</li></ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ARIVU -->
    <section class="section relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>
      <div class="container-site relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <UiSectionHeader dark eyebrow="AI across the platform" lead="ARIVU is a chat widget in every CCorex app. It sits on the same platform as your users and organisation, so one assistant can answer across the apps your team uses — without changing any data.">
            <template #title><span class="text-ai-gradient">ARIVU</span> works in every app</template>
          </UiSectionHeader>
          <ul class="mt-8 space-y-4">
            <li v-for="a in arivu" :key="a.title" class="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <i :class="a.icon" class="mt-1 text-cyan-400" aria-hidden="true"></i>
              <div><p class="font-semibold text-white">{{ a.title }}</p><p class="mt-1 text-sm leading-relaxed text-ink-300">{{ a.text }}</p></div>
            </li>
          </ul>
          <NuxtLink to="/products/arivu-ai" class="btn-accent mt-8">Explore ARIVU AI</NuxtLink>
        </div>
        <UiArivuChat />
      </div>
    </section>

    <UiTrustStrip />

    <UiCtaBand title="See the platform with your own team structure" lead="In a live demo we show your organisation, roles and apps, and how one sign-in works across estimating, projects and HR." />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Platform: SSO, roles & security',
  description: 'The CCorex platform gives every construction app one sign-in at dash.ccorex.com, one user base, roles per app, provisioning, tenancy and field encryption.',
  ogTitle: 'The CCorex platform — one secure control plane for every app',
  ogDescription: 'Single sign-on, self sign-up, user bulk upload, roles per app, provisioning, encryption and tenant isolation across DeepCost, DeepTrack and DeepHR.'
})
useHead({ link: [{ rel: 'canonical', href: config.public.siteUrl + '/platform' }] })

const heroPoints = ['Single sign-on', 'Self sign-up', 'Roles per app', 'Encrypted personal data']
const launcherPoints = [
  'A tile for each app the user is assigned to — and that your subscription package switches on',
  'Clicking a tile opens the app in a new tab, already signed in',
  'Face registration and check-in or check-out from the portal, through DeepHR',
  'A helpdesk bubble that emails the CCorex support team, and ARIVU in every app'
]
const capabilities = [
  { icon: 'fa-solid fa-building', title: 'Organisation', text: 'Company name, address, contact, registration ID and logo — kept once, in the portal.' },
  { icon: 'fa-solid fa-users-gear', title: 'Users & bulk upload', text: 'Add, edit, disable or bulk-upload users from an Excel template that lists your roles and app codes. Each new user gets a welcome email. Duplicate emails are blocked; a deleted user can be re-invited.' },
  { icon: 'fa-solid fa-user-lock', title: 'Roles per app', text: 'Roles are defined per organisation and per app — portal, DeepCost, DeepTrack, DeepHR and so on — each with its own set of permissions.' },
  { icon: 'fa-solid fa-sliders', title: 'App settings & connectors', text: 'Per-app configuration, including DeepCost permissions and connectors such as Zoho Books. Connector credentials are stored encrypted and can be tested from the screen.' },
  { icon: 'fa-solid fa-user-plus', title: 'Self sign-up', text: 'Sign up and CCorex creates your organisation and its first admin user. A first sign-in forces a password reset; forgotten passwords use a one-time code by email.' },
  { icon: 'fa-solid fa-user-xmark', title: 'Disable once', text: 'Disabling a user in the portal disables them in the apps too — one place to remove access.' }
]
const packageRules = [
  { icon: 'fa-solid fa-box-open', title: 'Packages switch apps on', text: 'Each package sets which apps are on, the user limit and the included services and features.' },
  { icon: 'fa-solid fa-folder-open', title: 'Documents included', text: 'Deep Drive and PDF Editor will be included with every active subscription (coming soon).' },
  { icon: 'fa-solid fa-bolt', title: 'Provisioned on subscribe', text: 'When your organisation subscribes, its roles, users and permissions are set up in each app.' },
  { icon: 'fa-solid fa-calendar-xmark', title: 'Lapsed means locked', text: 'Sign-in is refused when the organisation has no active subscription.' }
]
const today = [
  { icon: 'fa-solid fa-key', title: 'One sign-in', text: 'Sign in once at dash.ccorex.com — open any assigned app without signing in again.' },
  { icon: 'fa-solid fa-users', title: 'One user base', text: 'Users created in the portal are copied into DeepCost, DeepTrack, DeepHR and the other apps.' },
  { icon: 'fa-solid fa-user-lock', title: 'Roles per app', text: 'Roles defined per organisation and per app, each with its own permissions.' },
  { icon: 'fa-solid fa-wand-magic-sparkles', title: 'ARIVU across the apps', text: 'One read-only assistant that answers from your data in every app.' }
]
const roadmap = [
  { icon: 'fa-solid fa-address-book', title: 'Shared customers & contacts', text: 'Customers and contacts shared across apps.' },
  { icon: 'fa-solid fa-right-left', title: 'Cross-app data flow', text: 'Won tender → project → payroll, without re-entry.' },
  { icon: 'fa-solid fa-folder-open', title: 'Deep Drive & PDF Editor', text: 'Document storage, mark-up and signing — in development, coming soon.' }
]
const crossCutting = [
  { icon: 'fa-solid fa-building-shield', title: 'Tenancy', text: 'Every record belongs to one organisation; users only see their own organisation’s data. DeepCost also enforces this in the database.' },
  { icon: 'fa-solid fa-lock', title: 'Data protection', text: 'Names, emails, phone numbers, bank and identity details, connector credentials and chat messages are encrypted. Passwords are hashed.' },
  { icon: 'fa-solid fa-user-check', title: 'Access', text: 'The portal decides which apps a user may open; each app decides what they may do inside it.' },
  { icon: 'fa-solid fa-id-card', title: 'Subscriptions', text: 'Sign-in is refused when a subscription has lapsed. Packages cap users and switch apps on or off.' },
  { icon: 'fa-solid fa-folder-tree', title: 'Files', text: 'Attachments, drawings, payslips and documents are stored separately per app, environment and organisation.' },
  { icon: 'fa-solid fa-envelope', title: 'Email', text: 'Notification emails are queued, so a failed email never blocks a workflow. DeepHR email types can be switched on or off.' },
  { icon: 'fa-solid fa-clipboard-list', title: 'Audit', text: 'DeepTrack finance actions, DeepHR changes and period unlocks are written to audit logs.' },
  { icon: 'fa-solid fa-headset', title: 'Support', text: 'Every app has a support contact form and the ARIVU chat widget.' },
  { icon: 'fa-solid fa-file-export', title: 'Exports', text: 'Lists and reports export to Excel and PDF throughout the apps.' },
  { icon: 'fa-solid fa-plug', title: 'Integrations', text: 'Zoho Books links to DeepTrack for vendors and purchase orders.' }
]
const roles = [
  { app: 'DeepCost', icon: 'fa-solid fa-calculator', roles: ['Sales', 'Estimator', 'Manager', 'Admin', 'Per-trade assignment'] },
  { app: 'DeepTrack', icon: 'fa-solid fa-diagram-project', roles: ['Admin', 'Project Manager', 'Engineer', 'Buyer', 'Project Director', 'General Manager', 'Managing Director', 'Finance Controller', 'Payment Officer'] },
  { app: 'DeepHR', icon: 'fa-solid fa-user-group', roles: ['HR Admin', 'General Manager', 'Manager', 'Engineer', 'Site Engineer', 'Technician', 'External HR'] }
]
const arivu = [
  { icon: 'fa-regular fa-comments', title: 'Ask anything, in plain language', text: 'ARIVU answers from your organisation’s data across DeepCost, DeepTrack, DeepHR, DeepPlan and Deep Drive.' },
  { icon: 'fa-solid fa-chart-column', title: 'Charts, exports & documents', text: 'Charts, PDF and Excel exports, semantic document search and attachments, including scanned PDFs.' },
  { icon: 'fa-solid fa-eye', title: 'Read-only and contained', text: 'ARIVU never changes data, sees only your organisation’s records, and its messages are encrypted at rest.' }
]
</script>
