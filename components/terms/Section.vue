<template>
  <div class="mb-12 mt-28 bg-white" v-if="items">
    <div class="container relative">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        class="mb-10 text-2xl font-medium text-blackTitle sm:text-3xl md:text-4xl lg:text-5xl"
      >
        {{ items?.title }}
      </h2>
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        src="~/assets/images/sections-details.jpeg"
        :alt="items?.title"
        @error="setErrorImg($event)"
        width="550"
        height="350"
        class="h-[250px] w-full max-w-[100%] rounded-[20px] sm:h-[550px]"
      />

      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        class="my-8 break-words text-lg font-medium text-description"
      >
        {{ items?.description }}
      </p>
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
function setErrorImg(e) {
  e.target.src = "/features.webp";
}
</script>

<style lang="scss"></style>
