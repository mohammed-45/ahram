<template>
  <div class=" py-20 bg-[#e3e9ea]">
  <div class="container">
    <h2
      class="text-center text-xl font-bold text-secondary sm:text-2xl lg:text-4xl"
    >
      أخبارنا
    </h2>
    
    <div class="mt-8 grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-3">
      <div class="col-span-1   rounded-[24px] bg-white">
       
          <div class="py-14 px-10 h-[240px] border-b-[0.5px] border-[#B0B0B0]">
            <img
            src="~/assets/images/news-1.svg"
            alt="news"
            width="268"
            height="114"
            loading="lazy"
            class="w-full max-w-[100%] h-full"
          />
          </div>
        <div class=" px-4 py-6">
          <h3 class="break-words text-base font-semibold sm:text-xl line-clamp-2 text-blackTitle">
            موكَّل يعلن عن اطلاق خدماته المبتكره للمعتمرين          </h3>
            <p class="text-sm text-primary mt-4">دمج نظام نفاذ الوطني لتوفير مصادقة آمنة وسريعة للمستخدمين أثناء التسجيل والوصول الي الخدمات المتاحة دمج نظام نفاذ الوطني لتوفير مصادقة آمنة وسريعة للمستخدمين أثناء التسجيل والوصول الي الخدمات المتاحة <NuxtLink class="text-black text-base" to="#">{{ $t("labels.readMore") }} ...</NuxtLink></p>
        </div>
      </div>
      <div class="col-span-1   rounded-[24px] bg-white">
       
       <div class="py-14 px-10 h-[240px] border-b-[0.5px] border-[#B0B0B0]">
         <img
         src="~/assets/images/news-2.svg"
         alt="news"
         width="268"
         height="114"
         loading="lazy"
         class="w-full max-w-[100%] h-full"
       />
       </div>
     <div class=" px-4 py-6">
       <h3 class="break-words text-base font-semibold sm:text-xl line-clamp-2 text-blackTitle">
         موكَّل يعلن عن اطلاق خدماته المبتكره للمعتمرين          </h3>
         <p class="text-sm text-primary mt-4">دمج نظام نفاذ الوطني لتوفير مصادقة آمنة وسريعة للمستخدمين أثناء التسجيل والوصول الي الخدمات المتاحة دمج نظام نفاذ الوطني لتوفير مصادقة آمنة وسريعة للمستخدمين أثناء التسجيل والوصول الي الخدمات المتاحة <NuxtLink class="text-black text-base" to="#">{{ $t("labels.readMore") }} ...</NuxtLink></p>
     </div>
   </div>
   <div class="col-span-1   rounded-[24px] bg-white">
       
       <div class="py-14 px-10 h-[240px] border-b-[0.5px] border-[#B0B0B0]">
         <img
         src="~/assets/images/news-3.svg"
         alt="news"
         width="268"
         height="114"
         loading="lazy"
         class="w-full max-w-[100%] h-full"
       />
       </div>
     <div class=" px-4 py-6">
       <h3 class="break-words text-base font-semibold sm:text-xl line-clamp-2 text-blackTitle">
         موكَّل يعلن عن اطلاق خدماته المبتكره للمعتمرين          </h3>
         <p class="text-sm text-primary mt-4">دمج نظام نفاذ الوطني لتوفير مصادقة آمنة وسريعة للمستخدمين أثناء التسجيل والوصول الي الخدمات المتاحة دمج نظام نفاذ الوطني لتوفير مصادقة آمنة وسريعة للمستخدمين أثناء التسجيل والوصول الي الخدمات المتاحة <NuxtLink class="text-black text-base" to="#">{{ $t("labels.readMore") }} ...</NuxtLink></p>
     </div>
   </div>
    </div>
  </div>
  </div>
</template>

<script setup>
function setErrorImg(e) {
  e.target.src = "/about.png";
}
</script>

<style lang="scss">

</style>
