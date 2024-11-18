<template>
  <div class="bg-cover min-h-[80vh] flex items-center mt-10 py-32 bg-[url('/public/Agents.png')]">
<div class="container">
  <h2
      class="text-start text-xl font-bold text-white sm:text-3xl lg:text-5xl"
    >
    وكلاء موكًَل    </h2>
    <p class="mt-8 max-w-[1000px] text-start text-lg !leading-[40px] sm:text-2xl text-white">
      تتعاون شركة موكَّل مع شبكة متنوعة من المكاتب المعتمدة والوكلاء الدوليين في عدة دول حول العالم. هدفنا هو توسيع نطاق خدماتنا الخاصة بعمرة البدل وإتاحتها للمسلمين في كل مكان، من خلال شراكات استراتيجية تضمن تقديم خدمات متميزة على مستوى عالمي.        </p>
   
      <NuxtLink
        :to="localePath('/join-us')"
        class=" justify-center text-center mt-8 inline-block"
      >
        <GeneralButton
          type="button"
          class="hover:bg-opacity-70"
          :text="$t('labels.join-us')"
        >
        </GeneralButton>
      </NuxtLink>
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
