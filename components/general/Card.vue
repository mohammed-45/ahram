<template>
  <div
    v-if="item"
    data-aos="fade-up"
    data-aos-duration="1000"
    class="card relative h-[420px] w-full max-w-[100%] overflow-hidden rounded-lg bg-white transition-all duration-500 sm:w-[350px]"
  >
    <div class="h-[250px] bg-transparent transition-all duration-500">
      <div
        v-if="item.image"
        class="move w-full rounded-lg bg-cover bg-center bg-no-repeat transition-all duration-500"
        :style="`background-image: url(${
          item.image ? item.image : '/about.png'
        })`"
      >
        <div
          class="title absolute bottom-24 start-0 px-4 transition-all duration-500"
        >
          <div
            class="h-[4px] w-10 rounded-sm bg-[#BBB8BF] transition-all duration-500"
          ></div>
          <h3
            v-if="item.name"
            class="title line-clamp-2 break-words py-2 text-3xl text-white transition-all duration-500"
          >
            {{ item.name }}
          </h3>
        </div>
      </div>
    </div>
    <div class="px-4 pb-4 pt-2">
      <p
        v-if="item.description"
        class="line-clamp-5 text-xl text-description transition-all duration-500"
      >
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss">
.card {
  .move {
    @apply absolute h-full;
  }
  &:hover {
    .move {
      @apply h-[250px] rounded-b-none;
      .title {
        @apply bottom-4;
      }
    }
  }
  .title {
    text-shadow: #000 1px 0 2px;
  }
}
</style>
