<template>
  <div class="relative my-20 ">
   
    <div class="container">
      <h2
      class="text-center text-xl font-bold text-secondary sm:text-2xl lg:text-4xl"
    >
    التخصصات    </h2>
    <p class="mt-2 text-center text-lg text-subtitle">
      تتميز عياداتنا بعدة تخصصات تجعل تجربة مرضانا فريدة من نوعها      </p>
      <div
        class="grid mt-10 grid-cols-1 sm:grid-cols-2 flex-wrap gap-6 md:grid-cols-3 lg:grid-cols-4 "
      >
        <div class="col-span-1   p-[30px] relative overflow-hidden bg-white rounded-2xl shadow-lg group hover:scale-105 transition-transform duration-300">
          <!-- Background -->
      <div
        class="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
        style="background-image: url('~/assets/images/service_bg.jpg');"
      ></div>

      <!-- Icon and Index -->
      <div class="relative z-10 flex items-center justify-between ">
        <div
          class="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full shadow-md"
        >
          <img src="~/assets/images/service_icon_2.png" alt="Service Icon" />
        </div>
        <h3 class="text-4xl font-bold text-blue-500">03</h3>
      </div>

      <!-- Title and Subtitle -->
      <div class="relative z-10 mt-4">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">
          <a href="/service/service-details" class="hover:text-blue-500">
            Hematology
          </a>
        </h3>
        <p class="text-sm text-gray-600">
          Medical competitor research startup to financial
        </p>
      </div>
        </div>
        <div class="col-span-1   p-[30px] relative overflow-hidden bg-white rounded-2xl shadow-lg group hover:scale-105 transition-transform duration-300">
          <!-- Background -->
      <div
        class="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
        style="background-image: url('~/assets/images/service_bg.jpg');"
      ></div>

      <!-- Icon and Index -->
      <div class="relative z-10 flex items-center  justify-between ">
        <div
          class="w-16 h-16 flex items-center justify-center bg-primary rounded-full shadow-md"
        >
          <img src="~/assets/images/service_icon_2.png" alt="Service Icon" />
        </div>
        <h3 class="text-4xl font-bold text-blue-500">03</h3>
      </div>

      <!-- Title and Subtitle -->
      <div class="relative z-10 mt-4">
        <h3 class="text-lg sm:text-2xl font-bold text-blackTitle mb-2">
          <a href="/service/service-details" class="hover:text-blue-500">
            الاسنان
          </a>
        </h3>
        <p class=" text-subtitle font-semibold">
          يعتبر الحفاظ على صحه الفم ضروريا ليس فقط للصحه العامه بل ايضا لجودة حياة افضل حيث يوثر على قدرة تناول الطعام 
        </p>
      </div>
        </div>
        <div class="col-span-1   p-[30px] relative overflow-hidden bg-white rounded-2xl shadow-lg group hover:scale-105 transition-transform duration-300">
          <!-- Background -->
      <div
        class="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
        style="background-image: url('~/assets/images/service_bg.jpg');"
      ></div>

      <!-- Icon and Index -->
      <div class="relative z-10 flex items-center  justify-between ">
        <div
          class="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full shadow-md"
        >
          <img src="~/assets/images/service_icon_2.png" alt="Service Icon" />
        </div>
        <h3 class="text-4xl font-bold text-blue-500">03</h3>
      </div>

      <!-- Title and Subtitle -->
      <div class="relative z-10 mt-4">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">
          <a href="/service/service-details" class="hover:text-blue-500">
            Hematology
          </a>
        </h3>
        <p class="text-sm text-gray-600">
          Medical competitor research startup to financial
        </p>
      </div>
        </div>
        <div class="col-span-1   p-[30px] relative overflow-hidden bg-white rounded-2xl shadow-lg group hover:scale-105 transition-transform duration-300">
          <!-- Background -->
      <div
        class="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
        style="background-image: url('~/assets/images/service_bg.jpg');"
      ></div>

      <!-- Icon and Index -->
      <div class="relative z-10 flex items-center  justify-between ">
        <div
          class="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full shadow-md"
        >
          <img src="~/assets/images/service_icon_2.png" alt="Service Icon" />
        </div>
        <h3 class="text-4xl font-bold text-blue-500">03</h3>
      </div>

      <!-- Title and Subtitle -->
      <div class="relative z-10 mt-4">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">
          <a href="/service/service-details" class="hover:text-blue-500">
            Hematology
          </a>
        </h3>
        <p class="text-sm text-gray-600">
          Medical competitor research startup to financial
        </p>
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

<style lang="scss"></style>
