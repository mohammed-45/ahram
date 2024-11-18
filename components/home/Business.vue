<template>
  <div
    class="business bg-[url('/public/objects-3.jpg')] bg-cover pt-20"
    v-if="items && desc"
  >
    <div
      class="relative grid min-h-[480px] grid-cols-1 gap-y-16 py-10 md:py-20 xl:grid-cols-12"
    >

      <div
        class="container col-span-1 xl:col-span-4"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h2
          class="relative mb-8 mt-1.5 pb-6 text-lg font-bold text-blackTitle before:absolute before:bottom-0 before:start-0 before:h-[4px] before:w-[220px] before:rounded-[14px] before:bg-primary sm:text-xl lg:text-2xl lg:text-3xl"
        >
          {{ desc.title }}
        </h2>
        <p class="mb-4 text-base text-description">
          {{ desc.description }}
        </p>
        <NuxtLink
          :to="localePath('/business')"
          class="mt-4 inline-block"
        >
          <GeneralButton
            type="button"
            :text="$t('labels.findMore')"
            class="hover:bg-black hover:!text-white"
          >
            
          </GeneralButton>
        </NuxtLink>
      </div>
      <div class="container col-span-1 xl:col-span-8 xl:!m-0 xl:!p-0">
        <Swiper
          :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
          :modules="[Autoplay]"
          :space-between="35"
          :loop="true"
          :allowTouchMove="true"
          :breakpoints="responsiveOptions"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }"
          :navigation="{
            nextEl: '.business-next',
            prevEl: '.business-prev',
          }"
          :mousewheel="true"
          :keyboard="true"
          :effect="'creative'"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide v-for="item in items" :key="item.id">
            <BusinessCard :item="item" />
          </SwiperSlide>
        </Swiper>
      </div>


    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
defineProps({
  items: {
    type: Object,
    required: true,
  },
  desc: {
    type: Object,
    required: true,
  },
});
const responsiveOptions = ref({
  767: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 3,
  },
  1200: {
    slidesPerView: 2.5,
  },
  1400: {
    slidesPerView: 3.5,
  },
});
</script>

<style lang="scss">

.swiper {
  margin-bottom: 32px;
  outline: none !important;
  @apply bg-transparent outline-none;

  .swiper-slide {
    @apply bg-transparent outline-none;
  }
  .swiper-slide:last-of-type {
    margin-left: unset !important;
  }
}
.business-next {
  @apply absolute bottom-0 end-0 h-16 w-16 rounded-full bg-[#D9D9D9] text-black shadow-sm;
  &::after {
    font-size: 20px;
  }
}
.business-prev {
  @apply absolute bottom-0 end-20 h-16 w-16 rounded-full bg-[#D9D9D9] text-black shadow-sm;
  &::after {
    font-size: 20px;
  }
}
[dir="rtl"] {
  .business-next {
    inset-inline-start: 5rem !important;
    inset-inline-end: unset;
  }
  .business-prev {
    inset-inline-start: 0px !important;
    inset-inline-end: unset;
  }
}
</style>
