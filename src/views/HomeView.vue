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

const carouselSlides = [
  '/born-as-ghosts-1.png',
  '/born-as-ghosts-2.png',
  '/dream-big.jpg',
]

const links = [
  { label: 'Portfolio', url: 'https://parkergibson.com', icon: 'mdi-web', description: 'View my design and development work' },
  { label: 'Email', url: 'mailto:parker@example.com', icon: 'mdi-email-outline', description: 'Get in touch directly' },
]
</script>

<template>
  <v-container fluid class="page-container">
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

    <!-- Hero section -->
    <v-row align="center" class="hero-row">
      <!-- Left: hero text + contact -->
      <v-col cols="12" md="6" class="hero-col">
        <div class="hero-text">Design<br>with me.</div>
        <p class="hero-sub">Let's build something great together —<br>reach out and let's get started.</p>

        <div class="contact-row">
          <v-text-field
            v-model="email"
            placeholder="Enter your email"
            variant="outlined"
            rounded="xl"
            density="comfortable"
            hide-details
            class="contact-input"
          />
          <v-btn
            size="large"
            rounded="xl"
            variant="outlined"
            class="contact-btn"
            :href="`mailto:parker@example.com?subject=Let's work together`"
          >
            Contact Me
          </v-btn>
        </div>
      </v-col>

      <!-- Right: hero image carousel -->
      <v-col cols="12" md="6" class="d-flex justify-end">
        <div class="hero-image-wrap">
          <v-carousel
            height="480"
            hide-delimiter-background
            show-arrows="hover"
            rounded="xl"
            cycle
            interval="4000"
            class="hero-carousel"
          >
            <v-carousel-item
              v-for="slide in carouselSlides"
              :key="slide"
              :src="slide"
              cover
            />
          </v-carousel>
        </div>
      </v-col>
    </v-row>

    <!-- Profile + links section -->
    <v-row justify="start" class="profile-row">
      <v-col cols="12">
        <div class="profile-header">
          <v-avatar size="80" class="profile-avatar">
            <v-img src="/PG_Avatar.jpg" alt="Parker Gibson" />
          </v-avatar>
          <div class="text-h5 font-weight-bold mt-5 mb-2">Parker Gibson</div>
          <div class="text-body-1 text-medium-emphasis mb-8">Builder of things on the web</div>
        </div>
      </v-col>

      <v-col
        v-for="link in links"
        :key="link.label"
        cols="12"
        sm="6"
        md="4"
      >
        <LinkButton
          :label="link.label"
          :url="link.url"
          :icon="link.icon"
          :description="link.description"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.page-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
}

.theme-toggle-btn {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 100;
}

/* Hero ------------------------------------------------------------------ */
.hero-row {
  min-height: 80vh;
  padding: 2rem 0;
}

.hero-col {
  padding: 2rem 2rem 2rem 0;
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
  font-weight: 600;
  white-space: nowrap;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.contact-btn:hover {
  background-color: rgb(var(--v-theme-on-surface)) !important;
  color: rgb(var(--v-theme-surface)) !important;
  border-color: rgb(var(--v-theme-on-surface)) !important;
}

/* Hero image carousel --------------------------------------------------- */
.hero-image-wrap {
  width: 100%;
  max-width: 620px;
}

.hero-carousel {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
}

/* Profile + link cards -------------------------------------------------- */
.profile-row {
  padding-top: 3rem;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
