<script setup>
defineProps({
  eyebrow: { type: String, default: 'Record' },
  title: { type: String, required: true },
  href: { type: String, default: '' },
  badge: { type: String, default: '' },
  body: { type: String, required: true },
  meta: { type: Array, default: () => [] }, // [{label, value}]
})
</script>

<template>
  <article class="border-t border-hairline pt-6 first:border-t-0 first:pt-0 first:mt-0 mt-8">
    <div class="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-graphite">
      <span>{{ eyebrow }}</span>
      <span v-if="badge" class="rounded-full border border-hairline px-2 py-0.5 text-rust">{{ badge }}</span>
    </div>

    <h3 class="mt-2 font-serif text-xl sm:text-2xl text-ink">
      <a
        v-if="href"
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        class="underline decoration-hairline decoration-2 underline-offset-4 hover:decoration-rust transition-colors focus-ring"
      >{{ title }}</a>
      <template v-else>{{ title }}</template>
    </h3>

    <p class="mt-3 text-[15px] leading-relaxed text-ink/80 max-w-2xl">{{ body }}</p>

    <dl v-if="meta.length" class="mt-4 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-widest">
      <div v-for="item in meta" :key="item.label">
        <dt class="text-graphite">{{ item.label }}</dt>
        <dd class="mt-0.5 font-serif normal-case tracking-normal text-sm text-ink">{{ item.value }}</dd>
      </div>
    </dl>
  </article>
</template>
