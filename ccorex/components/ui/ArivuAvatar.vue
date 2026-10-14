<template>
  <span class="arivu relative inline-flex shrink-0" :class="[float ? 'arivu-float' : '']" :style="{ width: `${size}px`, height: `${size}px` }" role="img" :aria-label="label">
    <svg viewBox="0 0 120 120" class="h-full w-full overflow-visible" aria-hidden="true">
      <defs>
        <radialGradient :id="`${uid}-body`" cx="38%" cy="30%" r="75%">
          <stop offset="0%" stop-color="#7ee8f5" />
          <stop offset="45%" stop-color="#01acc8" />
          <stop offset="100%" stop-color="#6938ef" />
        </radialGradient>
        <radialGradient :id="`${uid}-glow`" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#33cfe7" stop-opacity=".55" />
          <stop offset="100%" stop-color="#33cfe7" stop-opacity="0" />
        </radialGradient>
        <linearGradient :id="`${uid}-visor`" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#062a33" stop-opacity=".95" />
          <stop offset="100%" stop-color="#0b111c" stop-opacity=".95" />
        </linearGradient>
      </defs>
      <!-- glow + orbit ring -->
      <circle cx="60" cy="64" r="58" :fill="`url(#${uid}-glow)`" class="arivu-pulse" />
      <ellipse cx="60" cy="66" rx="54" ry="16" fill="none" stroke="#9b8afb" stroke-opacity=".45" stroke-width="1.5" stroke-dasharray="5 9" class="arivu-ring" />
      <!-- antenna spark -->
      <line x1="60" y1="22" x2="60" y2="10" stroke="#9fe8f3" stroke-width="3" stroke-linecap="round" />
      <path d="M60 0 L63 6 L69 9 L63 12 L60 18 L57 12 L51 9 L57 6 Z" fill="#fff" class="arivu-spark" />
      <!-- body -->
      <circle cx="60" cy="64" r="42" :fill="`url(#${uid}-body)`" />
      <ellipse cx="46" cy="44" rx="14" ry="8" fill="#fff" opacity=".35" transform="rotate(-25 46 44)" />
      <!-- visor -->
      <rect x="28" y="50" width="64" height="34" rx="17" :fill="`url(#${uid}-visor)`" />
      <!-- eyes -->
      <g class="arivu-eyes">
        <ellipse cx="47" cy="64" rx="5.5" ry="6.5" fill="#7ee8f5" />
        <ellipse cx="73" cy="64" rx="5.5" ry="6.5" fill="#7ee8f5" />
      </g>
      <!-- mouth: smile when idle, voice wave when talking -->
      <path v-if="!talking" d="M53 76 Q60 81 67 76" fill="none" stroke="#7ee8f5" stroke-width="2.5" stroke-linecap="round" />
      <g v-else fill="#7ee8f5">
        <rect v-for="(b, k) in 5" :key="k" :x="50 + k * 4.4" y="72" width="2.6" height="8" rx="1.3" class="arivu-wave" :style="{ animationDelay: `${k * 0.09}s` }" />
      </g>
    </svg>
  </span>
</template>

<script setup lang="ts">
// ARIVU's avatar: a friendly AI orb. Blinks, floats, and shows a voice wave while "talking".
withDefaults(defineProps<{ size?: number; talking?: boolean; float?: boolean; label?: string }>(), {
  size: 48, talking: false, float: true, label: 'ARIVU, the CCorex AI assistant'
})
const uid = useId()
</script>

<style scoped>
.arivu-float { animation: arivu-float 4.5s ease-in-out infinite; }
@keyframes arivu-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6%); } }
.arivu-eyes { transform-origin: 60px 64px; animation: arivu-blink 5s infinite; }
@keyframes arivu-blink { 0%, 92%, 100% { transform: scaleY(1); } 95% { transform: scaleY(.1); } }
.arivu-spark { transform-origin: 60px 9px; animation: arivu-spark 2.4s ease-in-out infinite; }
@keyframes arivu-spark { 0%, 100% { transform: scale(1) rotate(0); opacity: 1; } 50% { transform: scale(.7) rotate(45deg); opacity: .7; } }
.arivu-ring { animation: arivu-ring 4s linear infinite; }
@keyframes arivu-ring { to { stroke-dashoffset: -56; } }
.arivu-pulse { transform-origin: 60px 64px; animation: arivu-pulse 3s ease-in-out infinite; }
@keyframes arivu-pulse { 0%, 100% { transform: scale(.92); opacity: .8; } 50% { transform: scale(1.05); opacity: 1; } }
.arivu-wave { transform-box: fill-box; transform-origin: center; animation: arivu-wave .6s ease-in-out infinite alternate; }
@keyframes arivu-wave { from { transform: scaleY(.35); } to { transform: scaleY(1.25); } }
@media (prefers-reduced-motion: reduce) { .arivu-float, .arivu-eyes, .arivu-spark, .arivu-ring, .arivu-pulse, .arivu-wave { animation: none; } }
</style>
