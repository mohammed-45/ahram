<template>
  <div class="relative z-10 my-28 pt-40 lg:pt-0" v-if="item">
    <div
      class="absolute bottom-0 start-0 h-full w-full overflow-hidden lg:h-[470px]"
    >
      <!-- <div class="relative z-0 h-full overflow-hidden"> -->
      <img
        src="/public/owner-bg.png"
        @error="setErrorImg($event)"
        alt="about"
        width="400"
        height="600"
        class="absolute z-10 h-full w-full max-w-[100%] object-cover lg:object-fill"
      />
      <img
        src="/public/yellow-ball.png"
        @error="setErrorImg($event)"
        alt="about"
        class="absolute end-[-70px] top-[30px] z-10 hidden max-w-[100%] lg:block ltr:top-[18px] ltr:rotate-[94deg] rtl:rotate-[10deg]"
      />
      <img
        src="~/assets/images/owner-objects.png"
        @error="setErrorImg($event)"
        alt="about"
        class="absolute bottom-0 start-0 z-10 max-w-[100%]"
      />
      <!-- </div> -->
    </div>

    <div class="container relative z-10">
      <div
        class="grid grid-cols-1 items-center gap-x-20 gap-y-8 lg:grid-cols-12"
      >
        <div class="order-2 col-span-1 lg:order-2 lg:col-span-4">
          <img
            src="~/assets/images/owner.png"
            @error="setErrorImg($event)"
            alt="about"
            width="400"
            height="600"
            class="relative z-10 h-[600px] max-w-[100%]"
          />
        </div>
        <div class="order-1 col-span-1 lg:order-2 lg:col-span-8 lg:pt-52">
          <h2
            class="relative mb-8 mt-1.5 pb-6 text-lg font-bold text-white before:absolute before:bottom-0 before:start-0 before:h-[4px] before:w-[220px] before:rounded-[14px] before:bg-primary sm:text-xl lg:text-2xl lg:text-3xl"
          >
            {{ $t("labels.ownerTitle") }}
          </h2>
          <p class="mb-4 text-base text-secondarySubtitle">
            {{ item.description }}
          </p>
        </div>
      </div>
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
