<template>
  <div
    class="background-gradient flex min-h-[56px] w-full items-center justify-between gap-4 px-3 py-2 transition-all duration-500 sm:px-6"
  >
    <div class="flex flex-col rounded-[8px] p-2 transition-all duration-500">
      <div
        @click="showLangList = !showLangList"
        class="relative flex cursor-pointer items-center gap-2 text-white transition-all duration-500"
      >
        <img src="~/assets/images/globe.svg" alt="globe" class="h-5 w-5" />
        {{ $t(`locale.${$i18n.locale}`) }}
        <img
          src="~/assets/images/arrow-down.svg"
          alt="down"
          class="h-5 w-5 transition-all duration-500"
          :class="showLangList ? 'rotate-180 ' : ''"
        />
        <div
          @click.stop="showLangList = !showLangList"
          class="invisible absolute -bottom-[6.5rem] left-0 z-[10001] flex w-full flex-col rounded-lg bg-[#263965] p-2 text-center text-white opacity-0 transition-all duration-500"
          :class="showLangList ? '!visible !opacity-100' : ''"
        >
          <nuxt-link
            :to="switchLocalePath($i18n.locale == 'ar' ? 'ar' : 'en')"
            class="inline-block border-b border-white py-2"
          >
            {{ $t(`locale.${$i18n.locale}`) }}
          </nuxt-link>
          <nuxt-link
            :to="switchLocalePath($i18n.locale == 'ar' ? 'en' : 'ar')"
            class="inline-block border-white py-2"
          >
            {{ $i18n.locale == "ar" ? $t(`locale.en`) : $t(`locale.ar`) }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <ul class="socials" v-if="settings">
      <li>
        <a :href="settings.instgram" target="_blank">
          <img
            src="~/assets/images/instagram.svg"
            alt="instagram"
            width="20"
            height="20"
          />
        </a>
      </li>
      <li>
        <a :href="settings.facebook" target="_blank">
          <img
            src="~/assets/images/facebook.svg"
            alt="facebook"
            width="20"
            height="20"
          />
        </a>
      </li>
      <li>
        <a :href="settings.linked_in" target="_blank">
          <img
            src="~/assets/images/linkedin.svg"
            alt="linkedin"
            width="20"
            height="20"
          />
        </a>
      </li>
      <li>
        <a :href="`${settings.whats_app}`" target="_blank">
          <img
            src="~/assets/images/whatsapp.svg"
            alt="whatsapp"
            width="20"
            height="20"
          />
        </a>
      </li>
      <li>
        <a :href="settings.twitter" target="_blank" rel="noopener">
          <img src="~/assets/images/x.svg" alt="x" width="20" height="20" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/stores/global";

const appStore = useGlobalStore();

const settings = computed(() => appStore.settings);
const switchLocalePath = useSwitchLocalePath();
const showLangList = ref(false);
</script>

<style lang="scss">
.socials {
  @apply flex flex-wrap items-center gap-3 sm:gap-4;
  img {
    @apply h-5 w-5;
  }
}
</style>
