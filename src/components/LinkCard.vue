<script setup lang="ts">
defineProps<{
  label: string
  url: string
  icon: string
}>()
</script>

<template>
  <a :href="url" class="link-card" target="_blank" rel="noopener noreferrer">
    <span class="link-icon">{{ icon }}</span>
    <span class="link-label">{{ label }}</span>
  </a>
</template>

<style scoped>
.link-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.25rem;
  border-radius: 12px;
  background: var(--color-card-bg);
  color: var(--color-card-text);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  border: 1px solid var(--color-card-border);
}

.link-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px var(--color-shadow);
  background: var(--color-card-hover);
  border: 3px solid var(--color-hover-border);
}

.link-card:active {
  transform: translateY(0);
}

.link-icon {
  font-size: 1.25rem;
}

.link-label {
  letter-spacing: 0.02em;
}
</style>
