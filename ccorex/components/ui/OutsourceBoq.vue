<template>
  <!-- Cross-link to Newham's BOQ estimation service for contractors who would rather outsource the estimate. -->
  <div class="card mt-6 flex items-start gap-4 border-brand-100">
    <i class="fa-solid fa-people-group mt-1 text-brand-600" aria-hidden="true"></i>
    <div>
      <p class="font-semibold text-ink-900">Prefer to outsource the estimate?</p>
      <p class="mt-1 text-sm text-ink-600">
        Short of estimators before a closing date? <a href="https://newhamtech.com/boq-estimation-services" class="font-semibold text-brand-700 hover:underline">Newham's BOQ estimation services</a>
        prepare the take-off and priced{{ trade ? ` ${trade}` : ' M&E' }} BOQ in your format, for tenders in Singapore.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ trade?: string }>()
</script>
