<template>
  <div class="hero relative z-50 flex items-center justify-center" >
    <Swiper
      :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
      :modules="[Autoplay, Pagination, SwiperEffectCreative, A11y, Navigation]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }"
      :effect="'creative'"
      :navigation="{
        nextEl: '.products-next',
        prevEl: '.products-prev',
      }"
      :pagination="{ clickable: true }"
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
      <SwiperSlide>
        <div class="overlay"></div>
    
        <img
          src="~/assets/images/1.jpg"
          alt="hero"
          class="relative z-[1] size-full"
        />
        <div class="container relative z-[3] h-full">
          <div
            class="flex h-full flex-col  justify-center space-y-8"
           
          >
           
            <h1
              class="max-w-[700px] text-3xl font-bold text-white lg:text-4xl xl:text-5xl"
            >
            {{$t("labels.ahram")}}

            </h1>
            <p class="max-w-[700px] text-lg font-medium text-white">
              {{$t("labels.desc1")}}
            </p>
            <div class="flex items-center gap-4 flex-wrap">
            <a
             href="#why"
              class=" inline-block  justify-center text-center"
            >
              <GeneralButton
                type="button"
                class="bg-white !text-blackTitle !w-[150px] hover:bg-secondary hover:!text-white"
                :text="$t('BUTTONS.showMore')"
              >
              </GeneralButton>
            </a>
            <a 
              href="https://wa.me/+201205385813"
              class="inline-block  justify-center text-center"
            >
              <GeneralButton
                type="button"
                class=" !w-[150px] bg-secondary !text-white"
                :text="$t('labels.contact')"
              >
              </GeneralButton>
            </a>
           </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="overlay"></div>
    
        <img
          src="~/assets/images/2.jpg"
          alt="hero"
          class="relative z-[1] size-full"
        />
        <div class="container relative z-[3] h-full">
          <div
            class="flex h-full flex-col  justify-center space-y-8"
           
          >
          
            <h1
              class="max-w-[700px] text-3xl font-bold text-white lg:text-4xl xl:text-5xl"
            >
            {{$t("labels.ahram")}}
            </h1>
            <p class="max-w-[700px] text-lg font-medium text-white">
              {{$t("labels.desc2")}}
            </p>
           <div class="flex items-center gap-4 flex-wrap">
            <a
             href="#why"
              class=" inline-block  justify-center text-center"
            >
              <GeneralButton
                type="button"
                class="bg-white !text-blackTitle !w-[150px] hover:bg-secondary hover:!text-white"
                :text="$t('BUTTONS.showMore')"
              >
              </GeneralButton>
            </a>
            <a
              href="https://wa.me/+201205385813"
              class=" inline-block  justify-center text-center"
            >
              <GeneralButton
                type="button"
                class=" !w-[150px] bg-secondary !text-white"
                :text="$t('labels.contact')"
              >
              </GeneralButton>
            </a>
           </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="overlay"></div>
    
        <img
          src="~/assets/images/3.jpg"
          alt="hero"
          class="relative z-[1] size-full"
        />
        <div class="container relative z-[3] h-full">
          <div
            class="flex h-full flex-col  justify-center space-y-8"
           
          >
          
            <h1
              class="max-w-[700px] text-3xl font-bold text-white lg:text-4xl xl:text-5xl"
            >
            {{$t("labels.ahram")}}

            </h1>
            <p class="max-w-[700px] text-lg font-medium text-white">
              {{$t("labels.desc3")}}
            </p>
           <div class="flex items-center gap-4 flex-wrap">
            <a
             href="#why"
              class=" inline-block  justify-center text-center"
            >
              <GeneralButton
                type="button"
                class="bg-white !text-blackTitle !w-[150px] hover:bg-secondary hover:!text-white"
                :text="$t('BUTTONS.showMore')"
              >
              </GeneralButton>
            </a>
            <a
              href="https://wa.me/+201205385813"
              class=" inline-block  justify-center text-center"
            >
              <GeneralButton
                type="button"
                class=" !w-[150px] hover:bg-primary bg-secondary !text-white"
                :text="$t('labels.contact')"
              >
              </GeneralButton>
            </a>
           </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="overlay"></div>
    
        <img
          src="~/assets/images/4.jpg"
          alt="hero"
          class="relative z-[1] size-full"
        />
        <div class="container relative z-[3] h-full">
          <div
            class="flex h-full flex-col  justify-center space-y-8"
           
          >
           
            <h1
              class="max-w-[700px] text-3xl font-bold text-white lg:text-4xl xl:text-5xl"
            >
            {{$t("labels.ahram")}}

            </h1>
            <p class="max-w-[700px] text-lg font-medium text-white">
              {{$t("labels.desc4")}}
            </p>
           <div class="flex items-center gap-4 flex-wrap">
            <a
             href="#why"
              class=" inline-block  justify-center text-center"
            >
              <GeneralButton
                type="button"
                class="bg-white !text-blackTitle !w-[150px] hover:bg-secondary hover:!text-white"
                :text="$t('BUTTONS.showMore')"
              >
              </GeneralButton>
            </a>
            <a
              href="https://wa.me/+201205385813"
              class=" inline-block  justify-center text-center"
            >
              <GeneralButton
                type="button"
                class=" !w-[150px] bg-secondary !text-white"
                :text="$t('labels.contact')"
              >
              </GeneralButton>
            </a>
           </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
   
      <button class="products-next z-[9999] hidden me-2 absolute top-1/2 -translate-y-1/2 end-0 sm:flex items-center justify-center">
        <img
          src="~/assets/images/arrow-left.svg"
          alt="arrow"
          class="h-12 w-12"
          :class="$i18n.locale === 'ar' ? '' : 'rotate-180'"
        />
      </button>

      <button class="products-prev z-[9999] absolute top-1/2 ms-2 -translate-y-1/2 start-0 hidden sm:flex items-center justify-center">
        <img
          src="~/assets/images/arrow-right.svg"
          alt="arrow"
          class="h-12 w-12"
          :class="$i18n.locale === 'ar' ? '' : 'rotate-180'"
        />
      </button>
  </div>
</template>

<script setup>
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";


</script>

<style lang="scss">
@keyframes niceAnimate {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.more {
  &:hover {
    img {
      @apply w-[18px] translate-x-0;
    }
  }
}
.hero {
  min-height: 100vh;
}
@media (max-width: 575px) {
  .hero {
    min-height: calc(100vh - 86px);
  }
}
.hero .swiper {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  .swiper-slide {
    min-height: 100%;
    width: 100%;
    height: 100%;
    min-width: 100%;

    video {
      min-height: 100%;
      object-fit: cover;
      width: 100%;
      height: 100%;
      min-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      // z-index: 10;
    }
    img {
      min-height: 100%;
      @media (max-width: 1024px) {
      object-fit: cover;
        
      }
      width: 100%;
      height: 100%;
      min-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      animation: niceAnimate 30s linear infinite alternate;

      // z-index: 10;
    }
  }
  .swiper-pagination {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 50px;

    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      margin-inline-end: 15px;
      border-radius: 9999px;
      background: white;
      cursor: pointer;
      opacity: 1;
      @media (max-width: 550px) {
        width: 54px;
      }
    }
    @media (max-width: 550px) {
      bottom: 40px;
    }
    .swiper-pagination-bullet-active {
      @apply bg-primary;
    }
  }
}
.products-next {
  @apply   rounded-full invert text-black ;
  &::after {
    font-size: 20px;
  }
}
.products-prev {
  @apply   rounded-full invert text-black ;
  &::after {
    font-size: 20px;
  }
}
// [dir="rtl"] {
//   .products-next {
//     inset-inline-start: 5rem !important;
//     inset-inline-end: unset;
//   }
//   .products-prev {
//     inset-inline-start: 0px !important;
//     inset-inline-end: unset;
//   }
// }
// .main_header {
//   background-size: cover !important;
//   background-position: center left !important;
//   &::before {
//     content: "";
//     @apply absolute left-0 top-0 h-full w-full;
//     background: v-bind(gradient);
//   }
// }
</style>
