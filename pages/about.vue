<template>
  <div>
    <GeneralLoader v-if="status == 'pending'" />
    <BackError v-if="status == 'error'" />
    <template v-else>
      <NotFound v-if="aboutData?.status == 404" />
      <BackError v-if="aboutData?.status == 500" />
      <div v-else>
        <!-- <GeneralHero
          v-if="aboutData?.data.slider"
          :items="aboutData?.data.slider"
        /> -->
        <AboutSection
          v-if="aboutData?.data"
          :items="aboutData?.data"
        />
        <!-- <HomeAbout
          :showMore="true"
          v-if="aboutData?.data.About"
          :items="aboutData?.data.About"
        /> -->
        <!-- <AboutFeatures
          v-if="aboutData?.data.Feture && aboutData?.data.Feture.length"
          :items="aboutData?.data.Feture"
        /> -->
      </div>
    </template>
  </div>
</template>

<script setup>
const axios = useNuxtApp().$axios;

const { data: aboutData, status } = await useLazyAsyncData("about", () =>
  axios
    .get(`client/about`)
    .then((res) => res.data)
    .catch((err) => err.response)
);
</script>
