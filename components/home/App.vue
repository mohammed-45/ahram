<template>
  <div class="container my-20">
    <h2
      class="text-center text-xl font-bold text-secondary sm:text-2xl lg:text-4xl"
    >
    التطبيق    </h2>
    <p class="mt-2 text-center text-lg text-subtitle">
      ينقسم تطبيق موكَّل الي وجهتين منفصلتين يمكنك تحميلهم حسب طلبك      </p>
    <div class="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 ">
      <div class="space-y-8">
        <img
            src="~/assets/images/app-1.png"
            alt="shaikh"
            width="275"
            height="566"
            loading="lazy"
            class="mx-auto"
          />
          <h3
      class="text-center text-lg font-bold text-secondary sm:text-2xl"
    >
    وجهة المؤدي    </h3>
    <div class="flex flex-wrap justify-center gap-2">
        <a href="#" target="_blank">
          <img
            src="~/assets/images/huawei.png"
            alt="huawei"
            width="140"
            height="40"
            loading="lazy"
            class="h-[45px]"
          />
        </a>
        <a href="#" target="_blank">
          <img
            src="~/assets/images/Google_Play.png"
            alt="Google_Play"
            width="140"
            height="40"
            loading="lazy"
            class="h-[45px]"
          />
        </a>
        <a href="#" target="_blank">
          <img
            src="~/assets/images/App_Store.png"
            alt="App_Store"
            width="140"
            height="40"
            loading="lazy"
            class="h-[45px]"
          />
        </a>
      </div>
      </div>
      <div class="space-y-8">
        <img
            src="~/assets/images/app-2.png"
            alt="shaikh"
            width="275"
            height="566"
            loading="lazy"
            class="mx-auto"
          />
          <h3
      class="text-center text-lg font-bold text-secondary sm:text-2xl"
    >
    وجهة الموكَّل    </h3>
    <div class="flex flex-wrap justify-center gap-2">
        <a href="#" target="_blank">
          <img
            src="~/assets/images/huawei.png"
            alt="huawei"
            width="140"
            height="40"
            loading="lazy"
            class="h-[45px]"
          />
        </a>
        <a href="#" target="_blank">
          <img
            src="~/assets/images/Google_Play.png"
            alt="Google_Play"
            width="140"
            height="40"
            loading="lazy"
            class="h-[45px]"
          />
        </a>
        <a href="#" target="_blank">
          <img
            src="~/assets/images/App_Store.png"
            alt="App_Store"
            width="140"
            height="40"
            loading="lazy"
            class="h-[45px]"
          />
        </a>
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
