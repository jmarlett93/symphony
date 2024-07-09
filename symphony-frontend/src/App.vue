<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Symphony</h1>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
}
</style>
