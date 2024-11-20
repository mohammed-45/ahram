<template>
  <div>
    <div class="breadcrumb py-[60px] lg:py-[150px] mt-20 lg:mt-0">
      <div class="fixed-bg bg-[url('/public/shape-2.png')]"></div>
      <div class="container relative z-10">
        <h2
          class="mb-10 text-center text-xl font-bold text-white sm:text-2xl lg:text-4xl"
        >
        {{$t("NAV.about")}}
        </h2>
        <div
          class="flex items-center justify-center gap-4 text-lg font-semibold sm:text-2xl"
        >
          <NuxtLink :to="localePath('/')" class="text-white"
            >{{ $t("NAV.home") }}
          </NuxtLink>
          <span class="text-white">></span>
          <span class="text-white underline">{{$t("NAV.about")}}</span>
        </div>
      </div>
    </div>
    <!-- <div class="container my-14"> -->
      <HomeWhy class="mb-0"/>
    <!-- </div> -->
  </div>
</template>

<script setup>
</script>

<style lang="scss">

.breadcrumb {
  
  position: relative;
  background: linear-gradient(
    90deg,
    rgb(30, 113, 190) 0%,
    rgb(0, 67, 130) 100%
  );
  text-align: center;

  .fixed-bg {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center left;
    opacity: 0.5;
  }
}
</style>
