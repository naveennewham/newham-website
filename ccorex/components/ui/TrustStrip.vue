<template>
  <section class="border-y border-ink-100 bg-ink-50" aria-label="Security and compliance">
    <div class="container-site grid gap-8 py-12 lg:grid-cols-[1fr_2.2fr] lg:items-center">
      <div>
        <p class="eyebrow">Enterprise-ready</p>
        <h2 class="mt-2 text-2xl font-bold">Secure by design. Built for Singapore.</h2>
      </div>
      <ul class="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
        <li v-for="t in items" :key="t.title" class="flex gap-3">
          <i :class="t.icon" class="mt-0.5 text-brand-600" aria-hidden="true"></i>
          <div>
            <p class="text-sm font-semibold text-ink-900">{{ t.title }}</p>
            <p class="text-xs leading-snug text-ink-500">{{ t.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  { icon: 'fa-solid fa-key', title: 'Single sign-on', text: 'One identity across every app' },
  { icon: 'fa-solid fa-user-shield', title: 'Role-based access', text: 'Granular view, add, edit, approve' },
  { icon: 'fa-solid fa-lock', title: 'Encrypted personal data', text: 'Names, contacts, bank and ID fields encrypted' },
  { icon: 'fa-solid fa-clipboard-list', title: 'Audit logs', text: 'Finance actions and HR changes logged' },
  { icon: 'fa-solid fa-building-shield', title: 'Tenant isolation', text: 'Each organisation fully separated' },
  { icon: 'fa-solid fa-landmark', title: 'CPF, SDL & SHG', text: 'Singapore payroll rules built in' },
  { icon: 'fa-solid fa-user-lock', title: 'Your data only', text: 'Users only see their own organisation' },
  { icon: 'fa-solid fa-cloud', title: 'Cloud-based', text: 'No servers or hardware to buy' }
]
</script>
