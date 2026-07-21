<script setup>
const stackCount = 5
</script>

<template>
  <div class="min-h-screen bg-paper text-ink">
    <a href="#profile"
      class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[999] focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:rounded"
    >Skip to active archive document</a>

    <header class="sticky top-0 z-[999] border-b border-hairline bg-paper/95 backdrop-blur">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-graphite">
        <div>
          <span class="text-ink font-semibold">you / your-handle / codename</span>
          <span> &nbsp;|&nbsp; Archive Stack / {{ new Date().toDateString() }}</span>
        </div>
        <div>One stack / {{ stackCount }} documents</div>
      </div>
    </header>

    <StickyNav />

    <main>
      <NuxtPage />
    </main>
  </div>
</template>