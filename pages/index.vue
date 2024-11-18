<template>
  <div>
    <GeneralLoader v-if="status == 'pending'" />
    <BackError v-if="status == 'error'" />
    <template v-else>
      <NotFound v-if="homeData?.status == 404" />
      <BackError v-if="homeData?.status == 500" />
      <div v-else class="relative">
        
        <HomeHero
         
        />
        <HomeWhy
         
        />
        <HomeFeatures />

      
        <!-- <HomeContact
         
        /> -->
       
       

     
      </div>
    </template>
  </div>
</template>

<script setup>
const axios = useNuxtApp().$axios;

const { data: homeData, status } = await useLazyAsyncData("homeData", () =>
  axios
    .get(`client/home`)
    .then((res) => res.data)
    .catch((err) => err.response)
);
</script>

<style lang="scss">
.vertical-btn {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-rl; /* Vertical text direction */
  text-align: center;
}

[dir="rtl"] .vertical-btn {
  writing-mode: vertical-rl; /* Text flows top-to-bottom, right-to-left */
  left: 0px;
}

[dir="ltr"] .vertical-btn {
  writing-mode: vertical-lr; /* Text flows top-to-bottom, left-to-right */
  left: unset;
  right: 0;

}
</style>