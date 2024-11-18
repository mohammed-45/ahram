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
      <div class="content ">
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
          class="hover:bg-opacity-70 !font-medium text-white"
          :text="$t('labels.contact')"
        >
        </GeneralButton>
      </NuxtLink>

      <div class="flex mt-4 flex-col rounded-[8px] p-2 transition-all duration-500">
          <div
            class="relative flex cursor-pointer items-center gap-2 text-sm text-blackTitle transition-all duration-500"
          >
          <img v-if="$i18n.locale == 'en'"
            src="~/assets/images/SAUDI ARABIA.svg"
            alt="globe"
            class="h-4 w-6"
          />
          <img v-else
            src="~/assets/images/england.png"
            alt="globe"
            class="h-4 w-6"
          />
            <nuxt-link
                :to="switchLocalePath($i18n.locale == 'ar' ? 'en' : 'ar')"
                class="inline-block  "
              >
                {{ $i18n.locale == "ar" ? $t(`locale.en`) : $t(`locale.ar`) }}
              </nuxt-link>
           
          </div>
        </div>
        <ul class="socials mt-4">
            <li>
              <a  target="_blank" rel="noopener">
                <img
                  src="~/assets/images/snapchat.svg"
                  alt="snapchat"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li>
              <a  target="_blank" rel="noopener">
                <img
                  src="~/assets/images/youtube.svg"
                  alt="youtube"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li>
              <a  target="_blank" rel="noopener">
                <img
                  src="~/assets/images/linkedin.svg"
                  alt="linkedin"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li>
              <a  target="_blank" rel="noopener">
                <img
                  src="~/assets/images/x.svg"
                  alt="x"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ala.hram2024?igsh=MW9ibGk3Ynh0aXM" target="_blank" rel="noopener">
                <img
                  src="~/assets/images/insta.svg"
                  alt="instagram"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li>
              <a  target="_blank" rel="noopener">
                <img
                  src="~/assets/images/facebook.svg"
                  alt="facebook"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            
          
           
          </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();

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
.socials {
  @apply flex flex-wrap items-center gap-3 sm:gap-4;
  li a {
    @apply relative inline-flex h-8 w-8 cursor-pointer items-center justify-center gap-4 rounded-full border border-primary text-center capitalize text-white transition-all duration-500;
  }
  img {
    @apply h-4 w-4;
    filter: invert(46%) sepia(89%) saturate(485%) hue-rotate(172deg)
    brightness(91%) contrast(91%);
  }
}
</style>
