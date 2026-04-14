<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

function toggleTheme() {
  const next = isDark.value ? 'light' : 'dark'
  theme.global.name.value = next
  localStorage.setItem('theme', next)
}

const links = [
  { label: 'Portfolio', url: 'https://parkergibson.com', icon: 'mdi-web' },
  { label: 'Email', url: 'mailto:parker@example.com', icon: 'mdi-email-outline' },
]
</script>

<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="8" md="5">
        <v-card class="pa-8 text-center" rounded="xl" elevation="4">
          <v-avatar size="80" class="mb-4">
            <v-img src="/PG_Avatar.jpg" alt="Parker Gibson" />
          </v-avatar>

          <div class="text-h5 font-weight-bold mb-3">Parker Gibson</div>
          <div class="text-body-1 text-medium-emphasis mb-10">Builder of things on the web</div>

          <v-btn
            v-for="link in links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            block
            variant="outlined"
            size="large"
            class="mb-4"
            :prepend-icon="link.icon"
          >
            {{ link.label }}
          </v-btn>

          <v-btn
            icon
            variant="text"
            class="mt-2"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleTheme"
          >
            <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
