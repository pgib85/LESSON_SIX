<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(true)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved ? saved === 'dark' : true
  applyTheme()
})

function toggle() {
  isDark.value = !isDark.value
  applyTheme()
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <button class="theme-toggle" @click="toggle" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
    {{ isDark ? '☀️' : '🌙' }}
  </button>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  background: var(--color-card-bg);
  border: 1px solid var(--color-card-border);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background 0.2s ease;
  z-index: 100;
}

.theme-toggle:hover {
  transform: scale(1.1);
}
</style>
