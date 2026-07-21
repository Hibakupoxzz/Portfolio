<script setup>
useHead({
  title: 'Case File — Personal Archive',
})

const stack = ['Profile', 'Projects', 'Experience', 'Writing', 'Contact']
</script>

<template>
  <div>
    <!-- intro strip -->
    <div class="mx-auto max-w-5xl px-4 sm:px-6 pt-10 pb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-graphite">
      <p>you / your-handle &middot; codename</p>
      <p class="mt-1 text-ink">Archive Stack / {{ new Date().toDateString() }}</p>
      <p class="mt-1">One stack / {{ stack.length }} documents</p>
    </div>

    <!-- 01 :: PROFILE -->
    <ArchiveDoc
      id="profile"
      :index="0"
      file-no="CHX-01"
      status="Active"
      status-tone="active"
      updated="Fri Jul 03 2026"
      role-label="Role"
      role-value="Frontend Engineer"
      tab-label="Profile"
    >
      <p class="font-mono text-[11px] uppercase tracking-[0.18em] text-graphite">Profile Document / Front Sheet</p>
      <h1 class="mt-3 font-serif text-4xl sm:text-6xl leading-[1.05] text-ink">Your Name</h1>
      <p class="mt-5 max-w-xl text-[15px] sm:text-base leading-relaxed text-ink/80">
        A short line about who you are and what kind of work you do &mdash; e.g. an engineer
        who cares about building interfaces that are easy to use, easy to maintain, and easy
        to understand.
      </p>

      <div class="mt-7 flex flex-wrap gap-3">
        <a href="#projects" class="focus-ring inline-flex items-center gap-2 rounded-sm border border-ink bg-ink px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-paper hover:bg-ink/85 transition-colors">
          Open Project File
        </a>
        <a href="#contact" class="focus-ring inline-flex items-center gap-2 rounded-sm border border-ink px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-ink hover:bg-ink hover:text-paper transition-colors">
          Open Contact Document
        </a>
      </div>

      <div class="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 border-t border-hairline pt-8">
        <div>
          <p class="font-mono text-[10px] uppercase tracking-widest text-graphite">Role</p>
          <p class="font-serif text-sm mt-0.5">Frontend Engineer</p>
        </div>
        <div>
          <p class="font-mono text-[10px] uppercase tracking-widest text-graphite">Location</p>
          <p class="font-serif text-sm mt-0.5">Your City, Country</p>
        </div>
        <div>
          <p class="font-mono text-[10px] uppercase tracking-widest text-graphite">Focus</p>
          <p class="font-serif text-sm mt-0.5">Software development</p>
        </div>
        <div>
          <p class="font-mono text-[10px] uppercase tracking-widest text-graphite">Status</p>
          <p class="font-serif text-sm mt-0.5">Available for thoughtful projects</p>
        </div>
      </div>

      <div class="mt-10 border-t border-hairline pt-8">
        <p class="font-mono text-[10px] uppercase tracking-widest text-graphite">About Me</p>
        <p class="mt-3 max-w-xl text-[15px] leading-relaxed text-ink/80">
          Write two or three sentences about your engineering philosophy here &mdash; what you
          optimize for, how you like to work, and what kind of problems you enjoy solving.
        </p>
      </div>

      <div class="mt-10 border-t border-hairline pt-8">
        <p class="font-mono text-[10px] uppercase tracking-widest text-graphite">Primary Stack</p>
        <div class="mt-3 flex flex-wrap gap-2">
          <span v-for="tech in ['TypeScript','Vue','Nuxt','React','Tailwind CSS','Node.js']" :key="tech"
            class="rounded-sm border border-hairline bg-paper-dim px-2.5 py-1 font-mono text-[11px] text-ink/80">
            {{ tech }}
          </span>
        </div>
      </div>
    </ArchiveDoc>

    <!-- 02 :: PROJECTS -->
    <ArchiveDoc
      id="projects"
      :index="1"
      file-no="CHX-02"
      status="Maintained"
      status-tone="maintained"
      updated="Fri Jul 03 2026"
      role-label="Scope"
      role-value="Selected Work"
      tab-label="Projects"
    >
      <p class="font-mono text-[11px] uppercase tracking-[0.18em] text-graphite">Project Archive</p>
      <h2 class="mt-3 font-serif text-3xl sm:text-4xl text-ink">Active blueprints &amp; archives.</h2>
      <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/80">
        A few selected projects pulled from the desk. Each file tracks the intent, the exact
        role, the stack, and its current state.
      </p>

      <RecordCard
        eyebrow="Project File"
        title="Project One"
        href="https://example.com"
        badge="Open Source"
        body="One or two sentences describing what the project does and the problem it solves."
        :meta="[{label:'Role', value:'Frontend Developer'},{label:'Year', value:'2026'},{label:'Stack', value:'Nuxt, Tailwind CSS'}]"
      />
      <RecordCard
        eyebrow="Project File"
        title="Project Two"
        href="https://example.com"
        badge="Maintained"
        body="A short description of the second project, what you built, and who it's for."
        :meta="[{label:'Role', value:'Fullstack Developer'},{label:'Stack', value:'Nuxt, Node.js, PostgreSQL'}]"
      />
      <RecordCard
        eyebrow="Project File"
        title="Project Three"
        href="https://example.com"
        badge="Discontinued"
        body="A project that has since been sunset, kept here as part of the record."
        :meta="[{label:'Role', value:'Fullstack Developer'},{label:'Stack', value:'Vue, Firebase'}]"
      />
    </ArchiveDoc>

    <!-- 03 :: EXPERIENCE -->
    <ArchiveDoc
      id="experience"
      :index="2"
      file-no="CHX-03"
      status="Active"
      status-tone="active"
      updated="Fri Jul 03 2026"
      role-label="Role"
      role-value="Engineering"
      tab-label="Experience"
    >
      <p class="font-mono text-[11px] uppercase tracking-[0.18em] text-graphite">Engineering Record</p>
      <h2 class="mt-3 font-serif text-3xl sm:text-4xl text-ink">Career tracked as a maintained record.</h2>
      <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/80">
        Companies, delivery contexts, and the habits that shaped how products were built and
        maintained.
      </p>

      <RecordCard
        eyebrow="Engineering Record"
        title="Current Company"
        badge="Current"
        body="Describe your current role, the kind of applications you work on, and what you're responsible for."
        :meta="[{label:'Role', value:'Frontend Engineer'},{label:'Period', value:'2024 — Present'},{label:'Location', value:'Your City'}]"
      />
      <RecordCard
        eyebrow="Engineering Record"
        title="Previous Company"
        badge="Completed"
        body="A short summary of the role, the team, and a notable contribution or two."
        :meta="[{label:'Role', value:'Frontend Developer'},{label:'Period', value:'2023 — 2024'},{label:'Location', value:'Your City'}]"
      />
    </ArchiveDoc>

    <!-- 04 :: WRITING -->
    <ArchiveDoc
      id="writing"
      :index="3"
      file-no="CHX-04"
      status="Coming Soon"
      status-tone="quiet"
      updated="Fri Jul 03 2026"
      role-label="Type"
      role-value="Technical Writing"
      tab-label="Writing"
    >
      <p class="font-mono text-[11px] uppercase tracking-[0.18em] text-graphite">Writing Notes</p>
      <h2 class="mt-3 font-serif text-3xl sm:text-4xl text-ink">Notes are being prepared for release.</h2>
      <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/80">
        This file stays open while the first set of articles is assembled. Swap this block for
        a list of posts once you have some &mdash; each entry can reuse the
        <code class="font-mono text-sm">RecordCard</code> component from the Projects file above.
      </p>

      <div class="mt-8 rounded-sm border border-dashed border-hairline p-6">
        <p class="font-mono text-[10px] uppercase tracking-widest text-graphite">Document status</p>
        <div class="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-[11px] uppercase tracking-widest">
          <div>
            <p class="text-graphite">Status</p>
            <p class="mt-0.5 font-serif normal-case tracking-normal text-sm text-ink">Coming Soon</p>
          </div>
          <div>
            <p class="text-graphite">Focus</p>
            <p class="mt-0.5 font-serif normal-case tracking-normal text-sm text-ink">Field notes</p>
          </div>
          <div>
            <p class="text-graphite">State</p>
            <p class="mt-0.5 font-serif normal-case tracking-normal text-sm text-ink">Draft queue active</p>
          </div>
        </div>
      </div>
    </ArchiveDoc>

    <!-- 05 :: CONTACT -->
    <ArchiveDoc
      id="contact"
      :index="4"
      file-no="CHX-05"
      status="Open"
      status-tone="closed"
      updated="Fri Jul 03 2026"
      role-label="Time"
      role-value="UTC+7"
      tab-label="Contact"
    >
      <p class="font-mono text-[11px] uppercase tracking-[0.18em] text-graphite">Contact Document</p>
      <h2 class="mt-3 font-serif text-3xl sm:text-4xl text-ink">Bring a concise brief or a system that needs cleanup.</h2>
      <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/80">
        Describe the kind of work you want to be contacted about here.
      </p>

      <div class="mt-8 flex flex-wrap items-center gap-4 font-mono text-sm">
        <a href="mailto:hello@example.com" class="focus-ring underline decoration-hairline decoration-2 underline-offset-4 hover:decoration-rust">hello@example.com</a>
        <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer" class="focus-ring underline decoration-hairline decoration-2 underline-offset-4 hover:decoration-rust">GitHub Record</a>
      </div>

      <dl class="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 border-t border-hairline pt-8 font-mono text-[11px] uppercase tracking-widest">
        <div>
          <dt class="text-graphite">Preferred Work</dt>
          <dd class="mt-0.5 font-serif normal-case tracking-normal text-sm text-ink">Product UI, design systems</dd>
        </div>
        <div>
          <dt class="text-graphite">Response Style</dt>
          <dd class="mt-0.5 font-serif normal-case tracking-normal text-sm text-ink">Direct, scoped, implementation-focused</dd>
        </div>
        <div>
          <dt class="text-graphite">Timezone</dt>
          <dd class="mt-0.5 font-serif normal-case tracking-normal text-sm text-ink">UTC+7</dd>
        </div>
        <div>
          <dt class="text-graphite">Primary Channel</dt>
          <dd class="mt-0.5 font-serif normal-case tracking-normal text-sm text-ink">Email first</dd>
        </div>
      </dl>
    </ArchiveDoc>

    <footer class="relative z-[999] mx-auto max-w-5xl px-4 sm:px-6 py-10 font-mono text-[11px] text-graphite">
      Workspace remains open for thoughtful work. &middot; Built with Nuxt.
    </footer>
  </div>
</template>
