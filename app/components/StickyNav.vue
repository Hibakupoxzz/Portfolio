<script setup>
const sections = [
  { id: 'profile', label: 'Profile', color: '#D9CFF2' },
  { id: 'projects', label: 'Projects', color: '#F6C9DC' },
  { id: 'experience', label: 'Experience', color: '#C6E8D1' },
  { id: 'writing', label: 'Writing', color: '#C3DBF6' },
  { id: 'contact', label: 'Contact', color: '#F6DDAF' },
]

const activeId = ref('profile')

onMounted(() => {
    
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting)
      if (visible.length) {
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        activeId.value = visible[0].target.id
      }
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
  )
  sections.forEach((s) => {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  })
  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <nav
    aria-label="Archive documents"
    class="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[9999] hidden md:flex flex-col items-end"
  >
    <a
      v-for="(s, i) in sections"
      :key="s.id"
      :href="`#${s.id}`"
      class="focus-ring group relative -mt-3 first:mt-0 w-32 rounded-[3px] border border-ink/15 px-3 py-2 shadow-[0_6px_14px_-6px_rgba(33,30,25,0.35)] transition-transform duration-200 hover:!rotate-0 hover:!translate-x-2"
      :style="{
        backgroundColor: s.color,
        transform: `rotate(${i % 2 === 0 ? -3 : 2.5}deg) translateX(${activeId === s.id ? '0px' : '14px'})`,
        zIndex: activeId === s.id ? 50 : 10 - i,
      }"
    >
      <span class="block font-mono text-[9px] uppercase tracking-[0.16em] text-ink/70">
        {{ activeId === s.id ? 'Active file' : 'Pull forward' }}
      </span>
      <span class="block font-mono text-[13px] font-bold uppercase tracking-wide text-ink">
        {{ s.label }}
      </span>
    </a>
  </nav>
</template>