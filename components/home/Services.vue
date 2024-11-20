<template>
  <div class="mt-20 bg-[#f7f7f7] py-20">
    <div class="container">
      <h2
        class="mb-10 text-center text-xl font-bold text-secondary sm:text-2xl lg:text-4xl"
      >
        {{ $t("labels.services1") }}
      </h2>
      <ClientOnly>
        <TabGroup as="template">
          <TabList class="flex flex-wrap gap-3">
            <Tab v-slot="{ selected }" as="template"
              ><div
                class="tabs flex-1 cursor-pointer after:hidden after:lg:block"
                :class="selected ? 'active' : ''"
              >
                <div>
                  <span
                    ><img src="~/assets/images/liver.png" alt="Icon"
                  /></span>
                  <span class="relative z-10 text-base font-bold sm:text-xl">
                    {{ $t("labels.services2") }}
                  </span>
                </div>
              </div></Tab
            >
            <Tab v-slot="{ selected }" as="template"
              ><div
                class="tabs flex-1 cursor-pointer after:hidden after:lg:block"
                :class="selected ? 'active' : ''"
              >
                <div>
                  <span
                    ><img src="~/assets/images/x-ray.png" alt="Icon"
                  /></span>
                  <span class="relative z-10 text-base font-bold sm:text-xl">{{
                    $t("labels.services3")
                  }}</span>
                </div>
              </div></Tab
            >
            <Tab v-slot="{ selected }" as="template"
              ><div
                class="tabs flex-1 cursor-pointer after:hidden after:lg:block"
                :class="selected ? 'active' : ''"
              >
                <div>
                  <span><img src="~/assets/images/pill.png" alt="Icon" /></span>
                  <span class="relative z-10 text-base font-bold sm:text-xl">{{
                    $t("labels.services4")
                  }}</span>
                </div>
              </div></Tab
            >
            <Tab v-slot="{ selected }" as="template"
              ><div
                class="tabs flex-1 cursor-pointer after:hidden after:lg:block"
                :class="selected ? 'active' : ''"
              >
                <div>
                  <span
                    ><img src="~/assets/images/blood-test.png" alt="Icon"
                  /></span>
                  <span class="relative z-10 text-base font-bold sm:text-xl">{{
                    $t("labels.services5")
                  }}</span>
                </div>
              </div></Tab
            >
          </TabList>
          <TabPanels>
            <TabPanel
              class="tab-content mt-12 grid grid-cols-1 gap-x-10 rounded-lg border border-[#ddd] p-2.5 md:grid-cols-2"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <img
                src="~/assets/images/liver-hero.jpg"
                alt="liver"
                class="h-full w-full max-w-[100%] rounded-lg"
              />
              <div class="py-4">
                <h3
                  class="mb-2 text-base font-bold text-primary sm:text-3xl md:mb-6"
                >
                  {{ $t("labels.services6") }}
                </h3>
                <p class="text-base font-semibold text-subtitle sm:text-xl">
                  {{ $t("labels.services7") }}
                </p>
                <NuxtLink
                  :to="localePath('/contact')"
                  class="mt-6 inline-block justify-center text-center"
                >
                  <GeneralButton
                    type="button"
                    class="!w-[150px] bg-secondary !text-white hover:bg-primary"
                    :text="$t('labels.contact')"
                  >
                  </GeneralButton>
                </NuxtLink>
              </div>
            </TabPanel>
            <TabPanel
              class="tab-content mt-12 grid grid-cols-1 gap-x-10 rounded-lg border border-[#ddd] p-2.5 md:grid-cols-2"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <img
                src="~/assets/images/x-ray-hero.jpg"
                alt="liver"
                class="h-full w-full max-w-[100%] rounded-lg"
              />
              <div class="py-4">
                <h3
                  class="mb-2 text-base font-bold text-primary sm:text-3xl md:mb-6"
                >
                  {{ $t("labels.services25") }}
                </h3>
                <p class="text-base font-semibold text-subtitle sm:text-xl">
                  {{ $t("labels.services8") }}
                </p>
                <ol
                  class="mt-6 list-inside list-disc space-y-2 text-sm text-subtitle sm:text-base"
                >
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >{{ $t("labels.services9") }}:</span
                    >
                    <span>{{ $t("labels.services33") }}</span>
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >{{ $t("labels.services10") }}:</span
                    >
                    <span> {{ $t("labels.services26") }}</span>
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >{{ $t("labels.services11") }}:</span
                    >
                    <span> {{ $t("labels.services27") }}</span>
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >{{ $t("labels.services12") }}:</span
                    >
                    <span> {{ $t("labels.services28") }}</span>
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >{{ $t("labels.services13") }}:</span
                    >
                    <span> {{ $t("labels.services29") }}</span>
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >{{ $t("labels.services14") }}:</span
                    >
                    <span> {{ $t("labels.services30") }}</span>
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >{{ $t("labels.services15") }}:</span
                    >
                    <span> {{ $t("labels.services31") }}</span>
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >{{ $t("labels.services16") }}:</span
                    >
                    <span
                      >{{ $t("labels.services32") }}
                      {{ $t("labels.services17") }}
                    </span>
                  </li>
                </ol>
                <NuxtLink
                  :to="localePath('/contact')"
                  class="mt-6 inline-block justify-center text-center"
                >
                  <GeneralButton
                    type="button"
                    class="!w-[150px] bg-secondary !text-white hover:bg-primary"
                    :text="$t('labels.contact')"
                  >
                  </GeneralButton>
                </NuxtLink>
              </div>
            </TabPanel>
            <TabPanel
              class="tab-content mt-12 grid grid-cols-1 gap-x-10 rounded-lg border border-[#ddd] p-2.5 md:grid-cols-2"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <img
                src="~/assets/images/natural.jpg"
                alt="liver"
                class="h-full w-full max-w-[100%] rounded-lg"
              />
              <div class="py-4">
                <h3
                  class="mb-2 text-base font-bold text-primary sm:text-3xl md:mb-6"
                >
                  {{ $t("labels.services18") }}
                </h3>
                <p class="text-base font-semibold text-subtitle sm:text-xl">
                  {{ $t("labels.services19") }}
                </p>

                <NuxtLink
                  :to="localePath('/contact')"
                  class="mt-6 inline-block justify-center text-center"
                >
                  <GeneralButton
                    type="button"
                    class="!w-[150px] bg-secondary !text-white hover:bg-primary"
                    :text="$t('labels.contact')"
                  >
                  </GeneralButton>
                </NuxtLink>
              </div>
            </TabPanel>
            <TabPanel
              class="tab-content mt-12 grid grid-cols-1 gap-x-10 rounded-lg border border-[#ddd] p-2.5 md:grid-cols-2"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <img
                src="~/assets/images/chemical.jpeg"
                alt="liver"
                class="h-full w-full max-w-[100%] rounded-lg"
              />
              <div class="py-4">
                <h3
                  class="mb-2 text-base font-bold text-primary sm:text-3xl md:mb-6"
                >
                  {{ $t("labels.services20") }}
                </h3>
                <p class="text-base font-semibold text-subtitle sm:text-xl">
                  {{ $t("labels.services21") }}
                </p>
                <ol
                  class="mt-6 list-inside list-disc space-y-2 text-sm text-subtitle sm:text-base"
                >
                  <li>
                    <span class="me-2 inline-block font-semibold">{{
                      $t("labels.services22")
                    }}</span>
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold">{{
                      $t("labels.services23")
                    }}</span>
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold">{{
                      $t("labels.services24")
                    }}</span>
                  </li>
                </ol>
                <NuxtLink
                  :to="localePath('/contact')"
                  class="mt-6 inline-block justify-center text-center"
                >
                  <GeneralButton
                    type="button"
                    class="!w-[150px] bg-secondary !text-white hover:bg-primary"
                    :text="$t('labels.contact')"
                  >
                  </GeneralButton>
                </NuxtLink>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
</script>

<style lang="scss">
.tabs {
  @apply text-blackTitle;
  border-radius: 5px;
  outline: none;
  position: relative;
  background-color: #e8edf0;
  transition: all 0.4s ease;

  &::after {
    content: "";
    width: 30px;
    height: 30px;
    background-color: #002261;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -10px) rotate(45deg);
    opacity: 0;
    transition: all 0.4s ease;
  }

  & > div {
    display: flex;
    padding-inline-end: 30px;
    align-items: center;
    gap: 15px;
    font-size: 23px;
    height: 69px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.4s ease;

    & > span:first-of-type {
      width: 70px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border-inline-end: 2px solid transparent;
      border-radius: 60px 30px 30px 60px;

      margin-inline-start: -2px;
      position: relative;
      transition: all 0.4s ease;
      img {
        transition: all 0.4s ease;
        filter: invert(46%) sepia(89%) saturate(485%) hue-rotate(172deg)
          brightness(91%) contrast(91%);
      }
    }
  }

  &:hover,
  &.active {
    background-color: #002261;
    color: white;
    &::after {
      transform: translate(-50%, 14px) rotate(45deg);
      opacity: 1;
    }
    & > div {
      & > span:first-of-type {
        border-color: white;
        background-color: #0d8bdf;
        img {
          filter: invert(1);
        }
      }
    }
  }
}

[dir="ltr"] {
  .tabs {
    & > div {
      & > span:first-of-type {
        border-radius: 30px 60px 60px 30px;
      }
    }
  }
}
</style>
