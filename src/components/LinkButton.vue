<script setup lang="ts">
defineProps<{
  label: string
  url: string
  icon: string
  description?: string
}>()
</script>

<template>
  <v-card
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    variant="outlined"
    rounded="xl"
    class="link-card pa-6"
  >
    <div class="link-icon-chip mb-5">
      <v-icon :icon="icon" size="22" />
    </div>
    <div class="text-subtitle-1 font-weight-bold mb-2">{{ label }}</div>
    <div v-if="description" class="text-body-2 text-medium-emphasis">{{ description }}</div>
  </v-card>
</template>

<style scoped>
.link-card {
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.link-card:hover {
  background-color: rgb(var(--v-theme-on-surface)) !important;
  color: rgb(var(--v-theme-surface)) !important;
  border-color: rgb(var(--v-theme-on-surface)) !important;
}

.link-card:hover .text-medium-emphasis {
  color: rgb(var(--v-theme-surface)) !important;
  opacity: 0.7;
}

.link-icon-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background-color: rgba(var(--v-theme-on-surface), 0.08);
}
</style>
