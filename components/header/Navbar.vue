<template>
  <div class="fixed left-0 right-0 top-0 z-[1000] min-h-[50px] lg:container">
    <nav
      id="mainNavbar"
      class="w-full bg-[#f7f7f7] shadow lg:mt-5 lg:rounded-[12px]"
    >
      <div class="container flex items-center justify-between gap-10">
        <NuxtLink :to="localePath('/')" class="outline-none">
          <img
            src="~/assets/images/logo.svg"
            alt="logo"
            width="140"
            height="90"
            loading="lazy"
            class="h-[80px] sm:aspect-[1/2] sm:w-[100px]"
          />
        </NuxtLink>

        <div class="flex items-center gap-6">
          <HeaderTopNavContent />
          <!-- :href="`tel:${settings?.phone}`" -->
          <div
            class="hidden items-center justify-center gap-4 text-center lg:flex"
          >
            <div
              class="flex flex-col rounded-[8px] p-2 transition-all duration-500"
            >
              <div
                class="relative flex  items-center gap-2 text-sm text-blackTitle transition-all duration-500"
              >
                <img
                  v-if="$i18n.locale == 'en'"
                  src="~/assets/images/SAUDI ARABIA.svg"
                  alt="globe"
                  class="h-4 w-6"
                />
                <img
                  v-else
                  src="~/assets/images/england.png"
                  alt="globe"
                  class="h-4 w-6"
                />
                <nuxt-link
                  :to="switchLocalePath($i18n.locale == 'ar' ? 'en' : 'ar')"
                  class="inline-block"
                >
                  {{ $i18n.locale == "ar" ? $t(`locale.en`) : $t(`locale.ar`) }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <button @click="sidebar = true" class="block cursor-pointer lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="#e94477"
            stroke="#e94477"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <teleport custom to="body">
          <HeaderMenu
            @close="sidebar = false"
            :class="sidebar ? 'menu-open' : ''"
            @click="sidebar = false"
          />
        </teleport>
      </div>
    </nav>
  </div>
</template>
<script setup>
const sidebar = ref(false);

const switchLocalePath = useSwitchLocalePath();
</script>

<style lang="scss">
.popup-mobile-menu {
  z-index: 9999;
  position: fixed;
  content: "";
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s ease-out;
  &.menu-open {
    visibility: visible;
    opacity: 1;
    .inner {
      opacity: 1;
      inset-inline-start: 0;
      overflow-y: auto;
    }
  }
  .inner {
    padding: 25px 40px;
    width: min(90vw, 400px);
    overflow-y: auto;
    z-index: 999;
    position: absolute;
    background: white;
    height: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);
    opacity: 0;
    inset-inline-start: -150px;
    transition: all 0.5s ease-out;
    .menu-top {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 20px;
      .menu-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .close-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          cursor: pointer;
          .close {
            opacity: 1;
            width: max-content;
            padding: 0;
            background-color: transparent;
            border: 0;
            svg {
              color: white;
              height: auto;
            }
            &::after {
              position: absolute;
              content: "";
              padding: 22px;
              background: #e94477;
              left: 50%;
              top: 50%;
              border-radius: 50%;
              transform: translate(-50%, -50%);
              z-index: -1;
            }
          }
        }
      }
      p.discription {
        font-size: 16px;
        line-height: 29px;
        margin-top: 20px;
        color: #878e99;
        padding-right: 0;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      .primary-menu {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        padding-left: 0;
        li {
          display: block;
          margin: 8px 0;
          font-size: 18px;
          line-height: 1.5;
          a {
            color: #c4cfde;
            position: relative;
            transition: all;
            transition-duration: 0.4s;
            font-size: 14px;
            text-transform: uppercase;
            margin: 0;
            padding: 0;
            display: inline;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
