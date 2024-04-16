<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "body"
  }
})
</script>

<style>
@import './animations.css';

.body {
  background-color: #010101;
  font-family: 'IBM Plex Sans', serif, sans-serif;
  font-weight: 400;
  margin: 0;
}
</style>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
