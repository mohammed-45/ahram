<template>
  <div
    class="container my-20 relative z-50 grid grid-cols-1 items-center gap-10 py-6 text-center lg:grid-cols-2"
  >
    <img
      src="~/assets/images/about.png"
      alt="about"
      width="600"
      height="500"
      loading="lazy"
      class="h-auto w-auto max-w-[100%]"
    />
    <div class="space-y-6">
      <h2 class="text-xl font-bold text-secondary sm:text-2xl lg:text-4xl">
        عن موكل
      </h2>
      <h3 class="text-blackTitle text-xl lg:text-3xl">
        <span class="text-primary">{</span>وَتَعَاوَنُوا عَلَى الْبِرِّ
        وَالتَّقْوَى<span class="text-primary">}</span>
      </h3>
      <p class="text-lg text-subtitle">
        موكَّل معتمد من أكثر من ٧ جهات حكومية، مما يضمن لك أعلى مستويات
        المصداقية. بالإضافة إلى ذلك، نحن حاصلون على شهادة وزارة التجارة
        الإلكترونية وشهادة معروف، مما يعكس التزامنا بأعلى معايير النزاهة وتنفيذ
        العمرة بكل دقة وموثوقية.
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  // items: {
  //   type: Object,
  //   required: true,
  // },
  // showMore: {
  //   requierd: false,
  //   type: Boolean,
  // },
});
function setErrorImg(e) {
  e.target.src = "/about.png";
}
</script>

<style lang="scss"></style>
