<script setup>
const props = defineProps({
  index: { type: Number, required: true },
  fileNo: { type: String, required: true },
  status: { type: String, required: true },
  statusTone: { type: String, default: 'active' }, // active | maintained | quiet | closed
  updated: { type: String, required: true },
  roleLabel: { type: String, default: 'Role' },
  roleValue: { type: String, required: true },
  tabLabel: { type: String, required: true },
  id: { type: String, required: true },
})

const stickyTop = computed(() => `${5 * 1 + props.index * 2.75}rem`)

const toneClasses = computed(() => {
  switch (props.statusTone) {
    case 'active':
      return 'text-moss border-moss'
    case 'maintained':
      return 'text-rust border-rust'
    case 'quiet':
      return 'text-graphite border-graphite'
    default:
      return 'text-ink border-ink'
  }
})
</script>

<template>
  <section :id="id" class="sticky z-[var(--z)]" :style="{ top: stickyTop, '--z': index + 1 }">
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6 pb-6">
      <!-- paper-stack depth: faint sheets peeking from behind the active card -->
      <div class="absolute inset-x-3 top-3 bottom-0 rounded-sm border border-ink/10 bg-paper-dim -z-10 translate-y-1">
      </div>
      <div class="absolute inset-x-6 top-5 bottom-0 rounded-sm border border-ink/10 bg-paper-dim -z-20 translate-y-2">
      </div>

      <!-- pull tab, notched flush onto the card's top edge -->
      <div
        class="absolute -top-[1px] left-8 sm:left-12 flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase bg-ink text-paper px-3 py-1.5 rounded-t-md border border-b-0 border-ink -translate-y-full">
        <span class="inline-block h-1.5 w-1.5 rounded-full"
          :class="statusTone === 'active' ? 'bg-moss' : statusTone === 'maintained' ? 'bg-rust' : 'bg-paper'"></span>
        Pull forward &middot; {{ tabLabel }}
      </div>

      <div class="relative rounded-sm border border-ink/80 bg-folder shadow-[0_18px_40px_-20px_rgba(33,30,25,0.45)]">
        <!-- status badge -->
        <div
          class="hidden sm:flex absolute -top-4 right-6 sm:right-10 items-center justify-center border rounded-sm px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest bg-paper"
          :class="toneClasses">
          {{ status }}
        </div>
        <!-- ...sisanya (metadata row + slot) tetap sama seperti sebelumnya -->

        <!-- metadata row -->
        <div
          class="grid grid-cols-2 md:grid-cols-4 divide-x divide-hairline border-b border-hairline font-mono text-[11px] uppercase tracking-widest">
          <div class="px-4 sm:px-6 py-3">
            <p class="text-graphite">File No.</p>
            <p class="mt-0.5 font-semibold text-ink normal-case tracking-normal font-mono text-sm">{{ fileNo }}</p>
          </div>
          <div class="px-4 sm:px-6 py-3">
            <p class="text-graphite">Status</p>
            <p class="mt-0.5 font-semibold normal-case tracking-normal font-mono text-sm"
              :class="toneClasses.split(' ')[0]">{{ status }}</p>
          </div>
          <div class="px-4 sm:px-6 py-3">
            <p class="text-graphite">Updated</p>
            <p class="mt-0.5 font-semibold text-ink normal-case tracking-normal font-mono text-sm">{{ updated }}</p>
          </div>
          <div class="px-4 sm:px-6 py-3">
            <p class="text-graphite">{{ roleLabel }}</p>
            <p class="mt-0.5 font-semibold text-ink normal-case tracking-normal font-mono text-sm truncate">{{
              roleValue }}</p>
          </div>
        </div>

        <!-- content -->
        <div class="px-5 sm:px-10 md:px-14 py-10 md:py-14 bg-paper">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
