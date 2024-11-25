<template>
  <div id="why" class="relative mb-20 bg-[#f7f7f7] py-24 ">
    <div class="absolute -bottom-[50px] end-0 top-0 z-10">
      <img src="~/assets/images/shape-1.png"  alt="Icon" class="opacity-10" />
    </div>
    <div class="container " >
      <div
        class="grid grid-cols-1 flex-wrap gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        <div class="col-span-1 flex-1 md:col-span-2 lg:col-span-2">
          <h2  class="text-xl font-bold text-secondary sm:text-2xl lg:text-4xl">
            {{$t("labels.why1")}}
          </h2>
          <p  class="mt-2 text-lg text-subtitle">
            {{$t("labels.why2")}}     </p>     <div  class="mt-10 flex flex-col sm:flex-row flex-wrap gap-5">
            <div class="basis-[45%] flex-1 flex gap-4">
              <h2 class="text-xl font-semibold text-primary sm:text-3xl">01.</h2>
              <h3 class="text-lg font-semibold text-blackTitle sm:text-xl">
                {{$t("labels.why3")}}              </h3>
            </div>
            <div class="basis-[45%] flex-1 flex gap-4">
              <h2 class="text-xl font-semibold text-primary sm:text-3xl">02.</h2>
              <h3 class="text-lg font-semibold text-blackTitle sm:text-xl">
                {{$t("labels.why4")}}              </h3>
            </div>
            <div class="basis-[45%] flex-1 flex gap-4">
              <h2 class="text-xl font-semibold text-primary sm:text-3xl">03.</h2>
              <h3 class="text-lg font-semibold text-blackTitle sm:text-xl">
                {{$t("labels.why5")}}              </h3>
            </div>
            <div class="basis-[45%] flex-1 flex gap-4">
              <h2 class="text-xl font-semibold text-primary sm:text-3xl">04.</h2>
              <h3 class="text-lg font-semibold text-blackTitle sm:text-xl">
                {{$t("labels.why6")}}              </h3>
            </div>
            <div class="basis-[45%] flex-1 flex gap-4">
              <h2 class="text-xl font-semibold text-primary sm:text-3xl">05.</h2>
              <h3 class="text-lg font-semibold text-blackTitle sm:text-xl">
                {{$t("labels.why7")}}              </h3>
              
            </div>
          </div>
        </div>
        <img
          class="relative z-[50] col-span-1 lg:h-[400px] w-full lg:w-[400px] md:col-span-2 rounded-[12px] lg:col-span-1"
          src="~/assets/images/about.jpg"
          alt="why"
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

<style lang="scss"></style>
