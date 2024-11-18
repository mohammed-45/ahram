<template>
  <div
    v-if="items"
    class="relative my-28  bg-cover bg-center bg-no-repeat before:absolute before:h-full before:w-full before:bg-[#040D1E82]"
    style="background-image: url('/features.webp')"
  >
    <div class="container relative py-28">
      <div class="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item in items"
          :key="item.id"
          data-aos="fade-up"
          data-aos-duration="1000"
          class="flex min-h-[360px] flex-col gap-6 rounded-lg bg-white px-5 py-8"
        >
          <div
            v-if="item?.logo"
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8E8E8]"
          >
            <img
              :src="item?.logo"
              :alt="item?.name"
              width="40"
              height="40"
              class="h-10 w-10"
            />
          </div>
          <h3
            v-if="item?.name"
            class="break-words text-center text-lg text-blackTitle"
          >
            {{ item?.name }}
          </h3>
          <p
            v-if="item?.description"
            class="mb-6  text-lg text-[#6F6F6F]"
          >
            {{ item?.description }}
          </p>
        </div>
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
