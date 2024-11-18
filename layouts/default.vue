<template>
  <Html :lang="$i18n.locale">
    <Body :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
      <div class="flex min-h-[100vh] flex-col overflow-x-clip bg-[#e8edf0]">
        <!-- <header> -->
        <!-- <HeaderTopNav /> -->
        <HeaderNavbar />
        <!-- </header> -->
        <div class="app_wrapper" id="app_wrapper">
          <slot />
        </div>
        <!-- <HomeSubscribe class="mt-auto" /> -->
        <!-- <Footer class="mt-auto" v-if="settings" :settings="settings" /> -->
        <!-- <Footer class="mt-auto" /> -->
      </div>
    </Body>
  </Html>
</template>

<script setup>
import { useGlobalStore } from "@/stores/global";

const appStore = useGlobalStore();

const settings = ref(null);
const axios = useNuxtApp().$axios;

function getSettings() {
  axios.get("client/company-info").then((res) => {
    let sett = {};
    sett = Object.assign({}, ...res.data.data.setting);
    // res.data.data.setting.map((el) => (sett[el.key] = el.value));
    settings.value = sett;
    appStore.settings = sett;
  });
}

onMounted(() => {
  getSettings();
});
</script>

<style></style>
