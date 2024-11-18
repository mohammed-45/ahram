<template>
  <div>
    <GeneralLoader v-if="status == 'pending'" />
    <BackError v-if="status == 'error'" />
    <template v-else>
      <NotFound v-if="termsData?.status == 404" />
      <BackError v-if="termsData?.status == 500" />
      <div v-else>
        <!-- <GeneralHero
          v-if="termsData?.data.slider"
          :items="termsData?.data.slider"
        /> -->
        <TermsSection
          v-if="termsData?.data"
          :items="termsData?.data"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
const axios = useNuxtApp().$axios;

const { data: termsData, status } = await useLazyAsyncData("terms", () =>
  axios
    .get(`client/terms-of-use`)
    .then((res) => res.data)
    .catch((err) => err.response)
);
</script>
