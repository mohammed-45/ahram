<template>
  <div class="blog py-12">
    <div class="container relative">
      <div
        class="relative grid grid-cols-1 items-center gap-6 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      >
        <div class="col-span-4 w-full xl:col-span-1">
          <div class="flex w-full items-center justify-between gap-4 xl:block">
            <h2
              class="text-2xl font-medium text-blackTitle sm:text-3xl md:text-4xl lg:text-5xl"
            >
              {{ $t("labels.blog") }}
            </h2>
            <NuxtLink
              :to="localePath('/blog')"
              class="inline-block text-xl font-medium text-[#6F6F6F] xl:hidden"
              >{{ $t("labels.seeAll") }}</NuxtLink
            >
          </div>

          <p class="mt-4 text-xl font-medium text-description">
            {{ $t("labels.blogDesc") }}
          </p>
        </div>
        <div class="col-span-4 xl:col-span-3">
          <Swiper
            :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
            :modules="[Autoplay, Navigation, Pagination]"
            :breakpoints="responsiveOptions"
            :space-between="30"
            :loop="true"
            :pagination="{ clickable: true }"
            :allowTouchMove="false"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }"
            :navigation="{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
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
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                class="blog-card relative max-w-[100%] rounded-lg transition-all duration-500"
              >
                <div
                  class="image-active-wrapper relative h-[210px] w-full max-w-[100%] transition-all duration-500"
                >
                  <NuxtLink :to="localePath(`/blog/${item?.id}`)">
                    <img
                      :src="item?.image"
                      @error="setErrorImg($event)"
                      alt="news"
                      width="300"
                      height="210"
                      class="h-full w-full max-w-[100%] rounded-t-lg transition-all duration-500"
                    />
                  </NuxtLink>
                </div>
                <div
                  class="background-gradient relative rounded-b-lg px-4 pb-8 pt-4"
                >
                  <h3
                    class="line-clamp-2 break-words text-xl text-white transition-all duration-500"
                  >
                    {{ item?.title }}
                  </h3>
                  <span
                    class="line-clamp-1 inline-block pt-2 text-sm text-[#EFEFEFB2] transition-all duration-500"
                  >
                    {{ item?.date }}
                  </span>
                  <p
                    class="line-clamp-1 text-lg text-[#EFEFEFB2] transition-all duration-500"
                  >
                    {{ item?.description }}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="relative py-8">
        <div class="hidden justify-end xl:flex">
          <NuxtLink
            :to="localePath('/blog')"
            class="inline-block text-xl font-medium text-[#6F6F6F]"
            >{{ $t("labels.seeMore") }}</NuxtLink
          >
        </div>
        <button class="custom-next flex items-center justify-center">
          <img
            src="~/assets/images/arrow-left.svg"
            alt="arrow"
            class="h-6 w-6"
            :class="$i18n.locale === 'ar' ? '' : 'rotate-180'"
          />
        </button>

        <button class="custom-prev flex items-center justify-center">
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
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
defineProps({
  items: {
    type: Object,
    required: true,
  },
});
function setErrorImg(e) {
  e.target.src = "/about.png";
}
const responsiveOptions = ref({
  475: {
    slidesPerView: 2,
  },
  576: {
    slidesPerView: 2,
  },
  767: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 3,
  },
});
</script>

<style lang="scss">
.blog {
  .swiper {
    position: unset;
    margin-bottom: 0px;
    min-height: 460px;
    padding: 60px 0 0 !important;
    outline: none !important;
    // overflow-y: visible !important;
    @media (max-width: 475px) {
      .swiper-pagination {
        display: none !important;
      }
    }
    .swiper-pagination {
      @apply absolute  -bottom-[42px] start-1/2 flex w-fit -translate-x-1/2 items-center justify-center gap-1 rounded-full xl:-bottom-[55px];

      .swiper-pagination-bullet {
        width: 18px;
        height: 18px;
        border-radius: 9999px;
        background-color: #c6c6c6;
        opacity: 1;
        cursor: pointer;
      }
      .swiper-pagination-bullet-active {
        @apply w-[42px] rounded-[14px] bg-[#A3A3A3];
      }
    }
    .swiper-wrapper {
      overflow-y: visible !important;
      height: 300px;
    }
    @apply bg-transparent outline-none;

    .swiper-slide {
      @apply bg-transparent outline-none;
    }
    .swiper-slide:last-of-type {
      margin-left: unset !important;
    }
  }
  .swiper-slide-active {
    .blog-card {
      @apply md:-translate-y-7;
    }
    .image-active-wrapper {
      @apply md:h-[264px];
    }
  }
  @media (min-width: 476px) {
    .custom-next {
      inset-inline-start: calc(50% + 100px);
      @apply absolute bottom-1/2 h-12 w-12 translate-y-1/2 rounded-full bg-[#D9D9D9] text-black shadow-sm sm:h-14 sm:w-14;
      &::after {
        font-size: 20px;
      }
    }
    .custom-prev {
      inset-inline-end: calc(50% + 100px);
      @apply absolute bottom-1/2 h-12 w-12 translate-y-1/2 rounded-full bg-[#D9D9D9] text-black shadow-sm sm:h-14 sm:w-14;
      &::after {
        font-size: 20px;
      }
    }
  }
}
@media (min-width: 476px) {
  [dir="rtl"] .blog {
    .custom-next {
      // inset-inline-start: 5rem !important;
      inset-inline-start: calc(50% + 100px) !important;

      inset-inline-end: unset;
    }
    .custom-prev {
      inset-inline-end: calc(50% + 100px) !important;
      inset-inline-start: unset !important;
    }
    .swiper .swiper-pagination {
      @apply translate-x-1/2;
    }
  }
}
</style>
