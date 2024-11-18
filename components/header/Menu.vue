<template>
  <div class="popup-mobile-menu">
    <div class="inner !bg-[#f3f1e9] !p-5 xs:!px-10 xs:!py-[25px]" @click.stop>
      <div class="menu-top">
        <div class="menu-header">
          <NuxtLink
            :to="localePath('/')"
            class="outline-none"
            @click="$emit('close')"
          >
            <img
              src="~/assets/images/logo.svg"
              alt="logo"
              width="140"
              height="90"
              loading="lazy"
              class="sm:aspect-[1/2] sm:h-[90px] sm:w-[140px]"
            />
          </NuxtLink>
          <div class="close-button h-11 w-11" @click="$emit('close')">
            <button class="close-menu-activation close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <h4 class="mb-5 mt-5 text-2xl font-bold text-primary">
          {{ $t("NAV.name") }}
        </h4>
        <!-- <p class="discription mb-5 mt-5 !text-xl !font-medium !text-black">
          {{ $t("labels.siteDesc") }}
        </p> -->
      </div>
      <div class="content pt-10">
        <ul class="flex flex-col gap-4 font-medium text-blackTitle">
          <li>
            <NuxtLink :to="localePath('/')" @click="$emit('close')">
              {{ $t("NAV.home") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/about')" @click="$emit('close')">
              {{ $t("NAV.about") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/our-sections')" @click="$emit('close')">
              {{ $t("NAV.ourSections") }}
            </NuxtLink>
          </li>

          <li>
            <NuxtLink :to="localePath('/business')" @click="$emit('close')">
              {{ $t("NAV.work") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/blog')" @click="$emit('close')">
              {{ $t("NAV.blog") }}
            </NuxtLink>
          </li>
        </ul>

        <!-- <ul class="socials mt-8">
          <li>
            <a :href="settings.instgram" target="_blank">
              <img src="~/assets/images/instagram.svg" alt="instagram" />
            </a>
          </li>
          <li>
            <a :href="settings.facebook" target="_blank">
              <img src="~/assets/images/facebook.svg" alt="facebook" />
            </a>
          </li>
          <li>
            <a :href="settings.linked_in" target="_blank">
              <img src="~/assets/images/linkedin.svg" alt="linkedin" />
            </a>
          </li>
          <li>
            <a :href="`${settings.whats_app}`" target="_blank">
              <img src="~/assets/images/whatsapp.svg" alt="whatsapp" />
            </a>
          </li>
          <li>
            <a :href="settings.twitter" target="_blank" rel="noopener">
              <img src="~/assets/images/x.svg" alt="x" />
            </a>
          </li>
        </ul> -->

        <NuxtLink
        :to="localePath('/business')"
        class="  mt-8 inline-block"
      >
        <GeneralButton
          type="button"
          class="hover:bg-opacity-70 !font-medium"
          :text="$t('labels.downloadApp')"
        >
        </GeneralButton>
      </NuxtLink>

      <div class="flex flex-col mt-6 rounded-[8px] p-2 transition-all duration-500">
        <div
          @click="showLangList = !showLangList"
          class="relative flex cursor-pointer items-center gap-2 text-sm text-blackTitle transition-all duration-500"
        >
          <img
            src="~/assets/images/SAUDI ARABIA.svg"
            alt="globe"
            class="h-6 w-6"
          />
          {{ $t(`locale.${$i18n.locale}`) }}
          <img
            src="~/assets/images/arrow-down.svg"
            alt="down"
            class="h-3 w-3 transition-all duration-500"
            :class="showLangList ? 'rotate-180 ' : ''"
          />
          <div
            @click.stop="showLangList = !showLangList"
            class="invisible absolute top-[40px] start-0 z-[10001] flex min-w-[220px] flex-col shadow-md rounded-lg bg-white py-2 px-4 text-center text-blackTitle opacity-0 transition-all duration-500"
            :class="showLangList ? '!visible !opacity-100' : ''"
          >
          
            <div class="flex items-center gap-2 py-2">
              <img
            src="~/assets/images/SAUDI ARABIA.svg"
            alt="globe"
            class="h-8 w-8"
          />
              <nuxt-link
              :to="switchLocalePath($i18n.locale == 'ar' ? 'ar' : 'en')"
              class="inline-block border-b border-white py-2"
            >
              {{ $t(`locale.${$i18n.locale}`) }}
            </nuxt-link>
            
            </div>
            <div class="flex items-center gap-2 py-2">
              <img
            src="~/assets/images/SAUDI ARABIA.svg"
            alt="globe"
            class="h-8 w-8"
          />
              <nuxt-link
              :to="switchLocalePath($i18n.locale == 'ar' ? 'en' : 'ar')"
              class="inline-block  "
            >
              {{ $i18n.locale == "ar" ? $t(`locale.en`) : $t(`locale.ar`) }}
            </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/stores/global";

const appStore = useGlobalStore();

const settings = computed(() => appStore.settings);
const localePath = useLocalePath();
const showLangList = ref(false);

const switchLocalePath = useSwitchLocalePath();
</script>

<style lang="scss">
.popup-mobile-menu {
  .socials {
    @apply flex flex-wrap items-center gap-4;
    img {
      @apply h-6 w-6;
    }
  }
}
</style>
