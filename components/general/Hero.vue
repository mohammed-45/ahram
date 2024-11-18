<template>
  <div
    class="general-hero hero relative z-10 flex items-center justify-center"
    v-if="items"
  >
    <Swiper
      :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
      :modules="[SwiperAutoplay, Pagination, SwiperEffectCreative, A11y]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
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
        <video v-if="items?.slider" autoplay loop muted class="relative z-[1]">
          <source :src="items?.slider" type="video/mp4" />
          <!-- <source src="~/assets/images/test_video.mp4" type="video/mp4" /> -->
        </video>
        <div class="container relative z-[3] h-full">
          <div
            class="flex h-full flex-col justify-center space-y-14"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <!-- <h1
              v-if="items?.name"
              class="max-w-[988px] text-3xl font-medium text-white lg:text-6xl xl:text-[64px]"
            >
              {{ items?.name }}
            </h1>
            <p
              v-if="items?.description"
              class="max-w-[988px] text-3xl font-medium text-white lg:text-6xl xl:text-[64px]"
            >
              {{ items?.description }}
            </p> -->
            <h1
              v-if="items?.name"
              class="max-w-[700px] text-3xl font-medium text-white lg:text-6xl xl:text-[64px]"
            >
              "اكتشف بوابتك نحو عالم المقاولات والإنشاءات
            </h1>
            <p
              v-if="items?.description"
              class="max-w-[700px] text-3xl font-medium text-white lg:text-6xl xl:text-[64px]"
            >
              "اجعل من حلمك واقعاً مع خدماتنا الاحترافية في مجال المقاولات."
              "اختيارك الصحيح للمنزل يبدأ من هنا، دعنا نساعدك في كل خطوة." "فرص
              استثمارية مذهلة بانتظارك – اكتشفها الآن!" "منازل فاخرة وشقق أنيقة،
              نساعدك على إيجاد الأفضل لك .""فريق محترف يقدم لك الدعم والإرشاد
              طوال عملية البحث والشراء."
            </p>
            <NuxtLink
              :to="localePath('/about')"
              class="mt-10 inline-block !w-[150px] justify-center text-center"
            >
              <GeneralButton
                type="button"
                class="bg-white !text-blackTitle hover:bg-primary hover:text-white"
                :text="$t('labels.contact')"
              >
              </GeneralButton>
            </NuxtLink>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

defineProps({
  items: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss">
.more {
  &:hover {
    img {
      @apply w-[18px] translate-x-0;
    }
  }
}
.hero.general-hero {
  min-height: 70vh;
}
@media (max-width: 575px) {
  .hero.general-hero {
    min-height: 70vh;
  }
}
// .hero {
//   @apply relative before:absolute  before:h-full before:w-full;
//   &::before {
//     background: linear-gradient(
//         180deg,
//         rgba(8, 20, 47, 0.2) 0%,
//         rgba(12, 31, 74, 0.1622) 36%,
//         rgba(28, 74, 176, 0.02) 100%
//       ),
//       linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
//   }
// }

.hero .swiper {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
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
