<template>
  <div class="container my-10">
    <div class="flex flex-wrap items-center gap-3">
      <span class="text-lg capitalize text-description">{{
        $t("NAV.home")
      }}</span>
      <span class="text-xl font-medium text-[#AEAEAE]">/</span>
      <span class="text-lg capitalize text-description" v-if="page">{{
        page
      }}</span>
      <span class="text-xl font-medium text-[#AEAEAE]">/</span>
      <span class="text-xl font-medium capitalize text-primary" v-if="name">{{
        name
      }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  page: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss"></style>
