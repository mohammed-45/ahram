<template>
  <div>
    <GeneralLoader v-if="status == 'pending'" />
    <BackError v-if="status == 'error'" />
    <template v-else>
      <NotFound v-if="privacyData?.status == 404" />
      <BackError v-if="privacyData?.status == 500" />
      <div v-else>
        <GeneralHero
          v-if="privacyData?.data.slider"
          :items="privacyData?.data.slider"
        />
        <PrivacySection
          v-if="privacyData?.data.data"
          :items="privacyData?.data.data"
        />
      </div>
    </template>
  </div>
</template>

<script setup>

const axios = useNuxtApp().$axios;

const {
  data: privacyData,
  status,
} = await useLazyAsyncData("privacy", () =>
  axios
    .get(`client/privacy_policy`)
    .then((res) => res.data)
    .catch((err) => err.response)
);
</script>
