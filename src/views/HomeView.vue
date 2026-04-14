<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useTheme } from 'vuetify'
import LinkButton from '@/components/LinkButton.vue'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)
const email = ref('')
const scrollBlur = ref(0)

function toggleTheme() {
  const next = isDark.value ? 'light' : 'dark'
  theme.global.name.value = next
  localStorage.setItem('theme', next)
}

function onScroll() {
  // Max blur of 12px reached after scrolling 400px
  scrollBlur.value = Math.min(window.scrollY / 400 * 12, 12)
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const links = [
  { label: 'Portfolio', url: 'https://parkergibson.com', icon: 'mdi-web' },
  { label: 'Email', url: 'mailto:parker@example.com', icon: 'mdi-email-outline' },
]
</script>

<template>
  <!-- Full-bleed fixed background image -->
  <div class="bg-image" />

  <!-- Scrollable page wrapper -->
  <div class="scroll-wrapper">
    <div
      class="content-layer"
      :style="{ filter: `blur(${scrollBlur}px)`, opacity: 1 - scrollBlur / 24 }"
    >
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
    </div>

    <!-- Spacer so the page is scrollable -->
    <div class="scroll-spacer" />
  </div>
</template>

<style scoped>
/* Full-bleed background fixed behind everything */
.bg-image {
  position: fixed;
  inset: 0;
  z-index: 0;
  background: url('/dream-big.jpg') center center / cover no-repeat;
}

/* Dark overlay so text stays readable */
.bg-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
}

.scroll-wrapper {
  position: relative;
  z-index: 1;
}

/* First screen: full viewport height, content sits here */
.content-layer {
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: filter 0.05s linear, opacity 0.05s linear;
  will-change: filter, opacity;
}

/* Extra height below the fold so there's scroll room */
.scroll-spacer {
  height: 100vh;
}

.page-container {
  position: relative;
  height: 100%;
}

.theme-toggle-btn {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 100;
  color: #fff !important;
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
  color: #fff;
}

.hero-sub {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
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
  background-color: #fff !important;
  color: #000 !important;
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
