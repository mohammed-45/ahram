<template>
  <div class="bg-[url('/public/objects-2.png')] bg-cover pt-24" v-if="items">
    <div class="container relative" data-aos="fade-up" data-aos-duration="1500">
      <h2
        class="relative mx-auto mb-8 mt-1.5 w-fit pb-6 text-center text-lg font-bold text-title before:absolute before:bottom-0 before:start-1/2 before:h-[4px] before:w-[220px] before:translate-x-1/2 before:rounded-[14px] before:bg-primary sm:text-xl md:text-2xl lg:text-3xl ltr:before:-translate-x-1/2"
      >
        {{ $t("labels.sectionsTitle") }}
      </h2>
      <p class="mb-10 text-center text-base text-description">
        "{{ $t("labels.sectionsDesc") }}"
      </p>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-12">
        <SectionsCard
          class="col-span-1 sm:col-span-6 lg:col-span-4"
          v-for="card in items"
          :key="card.id"
          :item="card"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss"></style>
