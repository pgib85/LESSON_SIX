<script setup lang="ts">
import LinkCard from '@/components/LinkCard.vue'

const links = [
  {
    label: 'Portfolio',
    url: 'https://parkergibson.com',
    icon: '🖥️',
  },
  {
    label: 'Email',
    url: 'mailto:parker@example.com',
    icon: '✉️',
  },
]
</script>

<template>
  <main class="bio">
    <div class="card">
      <div class="avatar">
        <span class="avatar-placeholder">PG</span>
      </div>
      <h1 class="name">Parker Gibson</h1>
      <p class="tagline">Builder of things on the web</p>
      <div class="links">
        <LinkCard
          v-for="link in links"
          :key="link.label"
          :label="link.label"
          :url="link.url"
          :icon="link.icon"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.bio {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

.card {
  width: 100%;
  max-width: 480px;
  text-align: center;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  overflow: hidden;
  background: var(--color-avatar-bg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-placeholder {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-avatar-text);
}

.name {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
  color: var(--color-heading);
}

.tagline {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin: 0 0 2rem;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
