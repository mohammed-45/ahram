<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :color="'#e94477'" :height="5" />

    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import AOS from "aos";

onMounted(() => {
  if (process.client) {
    AOS.init();
  }
});
</script>
