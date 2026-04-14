<script setup lang="ts">
defineProps<{
  label: string
  url: string
  icon: string
}>()
</script>

<template>
  <v-btn
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    block
    variant="outlined"
    size="large"
    class="link-btn"
  >
    <span class="link-btn-content">
      <v-icon :icon="icon" />
      <span>{{ label }}</span>
    </span>
  </v-btn>
</template>

<style scoped>
.link-btn {
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.link-btn-content {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.link-btn :deep(.v-btn__content) {
  gap: 0.75rem;
}

.link-btn:hover {
  background-color: rgb(var(--v-theme-on-surface)) !important;
  color: rgb(var(--v-theme-surface)) !important;
  border-color: rgb(var(--v-theme-on-surface)) !important;
}
</style>
