<template>
  <div class="flex min-h-[100vh] flex-col">
    <!-- <no-internet-connection v-if="!isOnline" /> -->
    <!-- <template v-else> -->
    <!-- <div class="container py-20"> -->
    <!-- {{ error }} -->
    <div v-if="error?.statusCode == 500">
      <back-error />
    </div>
    <div v-if="error?.statusCode == 404">
      <not-found />
    </div>
    <!-- </div> -->
    <!-- </template> -->
  </div>
</template>
<script setup>
const i18n = useI18n();
const error = useError();
</script>
