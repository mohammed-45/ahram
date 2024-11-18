<template>
  <div
    class="container my-14 justify-between flex flex-wrap gap-6"
  >
    <div class="box flex items-center gap-4">
      
      <div class="text-center">
        <span class="text-subtitle font-bold text-2xl sm:text-4xl">10k+</span>
      <p class="mt-1 text-subtitle text-sm">عملائنا المميزين</p>
      </div >
      <div class="rounded-[12px] bg-subtitle flex items-center justify-center p-5 ">
        <img
            src="~/assets/images/downloads.svg"
            alt="active"
            width="28"
            height="28"
            loading="lazy"
            class="h-7 w-7"
          />
      </div>
    </div>
    <div class="box flex items-center gap-4">
      
      <div class="text-center">
        <span class="text-subtitle font-bold text-2xl sm:text-4xl">30k+</span>
      <p class="mt-1 text-subtitle text-sm">اجمالي التنزيلات</p>
      </div >
      <div class="rounded-[12px] bg-subtitle flex items-center justify-center p-5 ">
        <img
            src="~/assets/images/users.svg"
            alt="active"
            width="28"
            height="28"
            loading="lazy"
            class="h-7 w-7"
          />
      </div>
    </div>
    <div class="box flex items-center gap-4">
      
      <div class="text-center">
        <span class="text-subtitle font-bold text-2xl sm:text-4xl">15k+</span>
      <p class="mt-1 text-subtitle text-sm">مستخدم نشط</p>
      </div >
      <div class="rounded-[12px] bg-subtitle flex items-center justify-center p-5 ">
        <img
            src="~/assets/images/active.svg"
            alt="active"
            width="28"
            height="28"
            loading="lazy"
            class="h-7 w-7"
          />
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
