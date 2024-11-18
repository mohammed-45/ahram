<template>
  <div class=" py-12">
    <div class="container relative">
      <div class="mb-8 flex flex-wrap items-center justify-between gap-6">
        <h2
          class="text-2xl font-medium text-blackTitle sm:text-3xl md:text-4xl lg:text-5xl"
        >
          {{ $t("NAV.products") }}
        </h2>
        <NuxtLink
          :to="localePath('/products')"
          class="text-2xl font-medium text-[#6F6F6F]"
          >{{ $t("labels.seeAll") }}</NuxtLink
        >
      </div>
      <p class="mb-10 text-xl text-description">
        {{ $t("labels.desc") }}
      </p>

      <Swiper
        :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
        :modules="[Autoplay, Navigation]"
        :space-between="50"
        :loop="true"
        :allowTouchMove="false"
        :breakpoints="responsiveOptions"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }"
        :navigation="{
          nextEl: '.products-next',
          prevEl: '.products-prev',
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
        <SwiperSlide
          v-for="item in items"
          :key="item.id"
        
        >
          <GeneralCard :item="item" />
        </SwiperSlide>
      </Swiper>

      <div class="container relative py-8">
        <button class="products-next flex items-center justify-center">
          <img
            src="~/assets/images/arrow-left.svg"
            alt="arrow"
            class="h-6 w-6"
            :class="$i18n.locale === 'ar' ? '' : 'rotate-180'"
          />
        </button>

        <button class="products-prev flex items-center justify-center">
          <img
            src="~/assets/images/arrow-right.svg"
            alt="arrow"
            class="h-6 w-6"
            :class="$i18n.locale === 'ar' ? '' : 'rotate-180'"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
defineProps({
  items: {
    type: Object,
    required: true,
  },
});
const responsiveOptions = ref({
  767: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
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
.products-next {
  @apply absolute bottom-0 end-0 h-16 w-16 rounded-full bg-[#D9D9D9] text-black shadow-sm;
  &::after {
    font-size: 20px;
  }
}
.products-prev {
  @apply absolute bottom-0 end-20 h-16 w-16 rounded-full bg-[#D9D9D9] text-black shadow-sm;
  &::after {
    font-size: 20px;
  }
}
[dir="rtl"] {
  .products-next {
    inset-inline-start: 5rem !important;
    inset-inline-end: unset;
  }
  .products-prev {
    inset-inline-start: 0px !important;
    inset-inline-end: unset;
  }
}
</style>
