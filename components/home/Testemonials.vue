<template>
  <div class="testimonials relative container my-20" >
    <h2
        class="mb-10 text-center text-xl font-bold text-secondary sm:text-2xl lg:text-4xl"
      >
        أراء المرضي
      </h2>
    <Swiper
      :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
      :modules="[Autoplay, Pagination, SwiperEffectCreative, A11y, Navigation]"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 5000,
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
      <SwiperSlide >
    
        <div
    class="relative shadow-sm bg-white mt-14 p-6 space-y-5 border border-[#EAF3DC] rounded-xl flex flex-col"
  >
    <div class="flex items-center mb-6 flex-wrap gap-4">
      <img
        width="48"
        height="48"
        src="~/assets/images/1.jpg"
        class=" rounded-full w-24 h-24 absolute -top-8 start-8 object-cover"
        loading="lazy"
        data-wow-duration="1.3s"
        data-wow-delay="0s"
      />
      <div class="ms-32">
        <span
          class="text-black capitalize break-words text-xl font-medium block "
         
          >كريم العبيسي</span
        >
        <!-- <span
          class="text-[#8D839A] block break-words capitalize "
          data-wow-duration="1.3s"
          data-wow-delay="0s"
          >{{ item?.user_bio }}</span
        > -->
      </div>
    </div>
    <p
      class="text-lg max-w-[100%] font-normal break-words text-subtitle h-[60px] line-clamp-2 "
     
      
    >رعاية طبية شاملة</p>
    <!-- <div class="flex gap-3 items-center">
        <span class="space-x-1 text-base text-[#8D839A]">
          <ClientOnly>
            <font-awesome-icon
              icon="fa-solid fa-user"
              class="text-lg text-secondary mr-2"
            />
          </ClientOnly>
  
          {{ item?.students }} {{ item?.students > 1 ? "Students" : "Student" }}
        </span>
        <span class="space-x-1 text-base text-[#8D839A]">
          <ClientOnly>
            <font-awesome-icon
              icon="fa-solid fa-file-lines"
              class="text-lg text-secondary mr-2"
            />
          </ClientOnly>
  
          {{ item?.courses }} {{ item?.courses > 1 ? "Courses" : "Course" }}
        </span>
      </div> -->
  </div>
      </SwiperSlide>
      <SwiperSlide >
    
        <div
    class=" relative shadow-sm bg-white mt-14 p-6 space-y-5 border border-[#EAF3DC] rounded-xl flex flex-col"
  >
    <div class="flex items-center mb-6 flex-wrap gap-4">
      <img
        width="48"
        height="48"
        src="~/assets/images/1.jpg"
        class=" rounded-full w-24 h-24 absolute -top-8 start-8 object-cover"
        loading="lazy"
     
      />
      <div class="ms-32">
        <span
          class="text-black capitalize break-words text-xl font-medium block "
         
          >محمد فرغلي</span
        >
        <!-- <span
          class="text-[#8D839A] block break-words capitalize "
         
          >{{ item?.user_bio }}</span
        > -->
      </div>
    </div>
    <p
      class="text-lg max-w-[100%] font-normal break-words text-subtitle h-[60px] line-clamp-2 "
      data-wow-duration="1.3s"
      data-wow-delay="0s"
      
    >رعاية طبية رائعة</p>
    <!-- <div class="flex gap-3 items-center">
        <span class="space-x-1 text-base text-[#8D839A]">
          <ClientOnly>
            <font-awesome-icon
              icon="fa-solid fa-user"
              class="text-lg text-secondary mr-2"
            />
          </ClientOnly>
  
          {{ item?.students }} {{ item?.students > 1 ? "Students" : "Student" }}
        </span>
        <span class="space-x-1 text-base text-[#8D839A]">
          <ClientOnly>
            <font-awesome-icon
              icon="fa-solid fa-file-lines"
              class="text-lg text-secondary mr-2"
            />
          </ClientOnly>
  
          {{ item?.courses }} {{ item?.courses > 1 ? "Courses" : "Course" }}
        </span>
      </div> -->
  </div>
      </SwiperSlide>

    </Swiper>
   
      <!-- <div class="container">
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
      </div> -->
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
const responsiveOptions = ref({
  1400: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 2,
  },
  767: {
    slidesPerView: 1,
  },
  575: {
    slidesPerView: 1,
  },
});

</script>

<style lang="scss">

.testimonials .swiper {
  .swiper-slide {
    opacity: 0;
    visibility: hidden; 
    
  }
 .swiper-slide.swiper-slide-active {
  opacity: 100;
  visibility: visible;

 }
    
  // @apply overflow-hidden md:overflow-auto max-w-[100%];
  
 
  .products-next {
    @apply hidden md:flex absolute -top-[72px] end-0 bg-[#EAF3DC] rounded-full w-14 h-14 shadow-sm text-black;
  
  }
  .products-prev {
    @apply hidden md:flex absolute -top-[72px] end-16 bg-[#EAF3DC] rounded-full w-14 h-14 shadow-sm text-black;
  
  }
}


</style>
