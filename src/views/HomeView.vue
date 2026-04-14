<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'
import LinkButton from '@/components/LinkButton.vue'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)
const email = ref('')

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
  <v-container fluid class="fill-height page-container">
    <!-- Theme toggle -->
    <v-btn
      icon
      variant="text"
      class="theme-toggle-btn"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      @click="toggleTheme"
    >
      <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>

    <v-row align="center" justify="center" class="fill-height">
      <!-- Left: hero -->
      <v-col cols="12" md="6" class="hero-col">
        <div class="hero-text">Design<br>with me.</div>
        <p class="hero-sub">Let's build something great together —<br>reach out and let's get started.</p>

        <div class="contact-row">
          <v-text-field
            v-model="email"
            placeholder="Enter your email"
            variant="solo"
            rounded="xl"
            density="comfortable"
            hide-details
            class="contact-input"
          />
          <v-btn
            size="large"
            rounded="xl"
            class="contact-btn"
            :href="`mailto:parker@example.com?subject=Let's work together`"
          >
            Contact Me
          </v-btn>
        </div>
      </v-col>

      <!-- Right: profile card -->
      <v-col cols="12" md="4" class="d-flex justify-center">
        <v-card class="pa-8 text-center profile-card" rounded="xl" elevation="4">
          <v-avatar size="80" class="profile-avatar">
            <v-img src="/PG_Avatar.jpg" alt="Parker Gibson" />
          </v-avatar>

          <div class="text-h5 font-weight-bold mb-3">Parker Gibson</div>
          <div class="text-body-1 text-medium-emphasis">Builder of things on the web</div>

          <div class="link-group">
            <LinkButton
              v-for="link in links"
              :key="link.label"
              :label="link.label"
              :url="link.url"
              :icon="link.icon"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.page-container {
  position: relative;
}

.theme-toggle-btn {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 100;
}

.hero-col {
  padding: 2rem;
}

.hero-text {
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
}

.hero-sub {
  font-size: 1.1rem;
  opacity: 0.6;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.contact-row {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
}

.contact-input {
  flex: 1;
  min-width: 200px;
}

.contact-btn {
  background-color: rgb(var(--v-theme-on-surface)) !important;
  color: rgb(var(--v-theme-surface)) !important;
  font-weight: 600;
  white-space: nowrap;
}

.profile-card {
  width: 100%;
  max-width: 380px;
}

.profile-avatar {
  margin-bottom: 1.75rem;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}
</style>
