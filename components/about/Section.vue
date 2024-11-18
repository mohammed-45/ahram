<template>
  <div v-if="items">
    <div class="bg-[url('/public/sections-bg.png')] bg-cover py-14">
      <div class="container">
        <div class="text-white">
          <NuxtLink :to="localePath('/')" class="text-xl text-white">{{
            $t("NAV.home")
          }}</NuxtLink>
          .
          <span class="text-xl text-[#CECECE]">{{ $t("NAV.about") }}</span>
        </div>
        <h1 class="mt-4 text-4xl text-white">{{ $t("NAV.about") }}</h1>
      </div>
    </div>
    <div class="mb-12 mt-28 bg-white">
      <div class="container">
        <HomeAbout :items="items.about_us[0]" />
      </div>
      <HomeOwner :item="items.owner_word[0]" />
      <div
        class="container my-20 py-20"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h2
          class="relative mb-8 mt-1.5 pb-6 text-lg font-bold text-title before:absolute before:bottom-0 before:start-0 before:h-[4px] before:w-[220px] before:rounded-[14px] before:bg-primary sm:text-xl md:text-2xl lg:text-3xl"
        >
          <!-- {{ items?.name }} -->
          {{ $t("labels.overviewTitle") }}
        </h2>
        <p class="mb-4 max-w-[640px] text-base text-description">
          {{ $t("labels.overviewDesc") }}
        </p>
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          src="~/assets/images/about.png"
          @error="setErrorImg($event)"
          :alt="items?.title"
          width="550"
          height="350"
          class="h-[250px] w-full max-w-[100%] sm:h-[500px]"
        />
        <p class="my-6 text-base text-description">
          {{ items.overview[0].description }}
        </p>
        <div
          class="relative grid grid-cols-2 gap-10"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div>
            <ClientOnly>
              <TabGroup as="template">
                <TabList class="flex gap-3">
                  <Tab v-slot="{ selected }" as="template"
                    ><button
                      class="tabs flex-1"
                      :class="selected ? '!border-primary !text-primary' : ''"
                    >
                      {{ $t("labels.brief") }}
                    </button></Tab
                  >
                  <Tab v-slot="{ selected }" as="template"
                    ><button
                      class="tabs flex-1"
                      :class="selected ? '!border-primary !text-primary' : ''"
                    >
                      {{ $t("labels.message") }}
                    </button></Tab
                  >
                  <Tab v-slot="{ selected }" as="template"
                    ><button
                      class="tabs flex-1"
                      :class="selected ? '!border-primary !text-primary' : ''"
                    >
                      {{ $t("labels.vision") }}
                    </button></Tab
                  >
                  <Tab v-slot="{ selected }" as="template"
                    ><button
                      class="tabs flex-1"
                      :class="selected ? '!border-primary !text-primary' : ''"
                    >
                      {{ $t("labels.mission") }}
                    </button></Tab
                  >
                </TabList>
                <TabPanels>
                  <TabPanel
                    class="tab_text"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    >{{ items.overview[0].breif_description }}</TabPanel
                  >
                  <TabPanel
                    class="tab_text"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    >{{ items.overview[0].message_description }}</TabPanel
                  >
                  <TabPanel
                    class="tab_text"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    >{{ items.overview[0].vision_description }}</TabPanel
                  >
                  <TabPanel
                    class="tab_text"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    >{{ items.overview[0].mission_description }}</TabPanel
                  >
                </TabPanels>
              </TabGroup>
            </ClientOnly>
          </div>
          <NuxtImg
            data-aos="fade-up"
            data-aos-duration="1000"
            :src="items.overview[0].image"
            @error="setErrorImg($event)"
            :alt="items?.title"
            width="600"
            height="220"
            class="h-[250px] w-full max-w-[100%] rounded-[20px]"
          />
        </div>
        <div class="my-20 py-20" data-aos="fade-up" data-aos-duration="1500">
          <h2
            data-aos="fade-up"
            data-aos-duration="1500"
            class="relative mx-auto mb-8 mt-1.5 w-fit max-w-[710px] pb-6 text-center text-lg font-bold text-title before:absolute before:bottom-0 before:start-1/2 before:h-[4px] before:w-[220px] before:translate-x-1/2 before:rounded-[14px] before:bg-primary sm:text-xl md:text-2xl lg:text-3xl ltr:before:-translate-x-1/2"
          >
            <!-- {{ items?.name }} -->
            {{ $t("labels.featuresTitle") }}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            class="mx-auto mb-10 max-w-[660px] text-center text-base text-description"
          >
            {{ $t("labels.featuresDesc") }}
          </p>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-12">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              class="col-span-1 flex gap-2 rounded-[20px] border-[0.5px] border-secondarySubtitle border-opacity-50 p-4 sm:col-span-6 lg:col-span-4"
              v-for="(item, i) in items.company_features"
              :key="item.id"
            >
              <div>
                <div class="mb-3 flex items-center">
                  <span
                    style="font-family: Poppins !important"
                    class="!font-poppins text-4xl font-semibold text-secondarySubtitle"
                    >{{ i < 10 ? "0" : "" }}{{ i + 1 }}</span
                  >
                  <h3 class="line-clamp-1 px-3 text-lg font-bold text-black">
                    {{ item.title }}:
                  </h3>
                </div>
                <p class="text-sm text-description">
                  {{ item.description }}
                </p>
              </div>
              <div
                class="flex h-[80px] w-[100px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[#e944771A] p-6"
              >
                <NuxtImg
                  :src="item.image"
                  :alt="item.title"
                  width="40"
                  height="48"
                  class="h-16 w-12"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="my-20 grid grid-cols-2 gap-10"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div>
            <h2
              class="relative mb-8 mt-1.5 pb-6 text-lg font-bold text-title before:absolute before:bottom-0 before:start-0 before:h-[4px] before:w-[220px] before:rounded-[14px] before:bg-primary sm:text-xl md:text-2xl lg:text-3xl"
            >
              {{ $t("labels.teamsTitle") }}
            </h2>
            <p class="mb-8 text-base text-description">
              {{ $t("labels.teamsDesc") }}
            </p>
            <div
              v-for="item in items.teams"
              :key="item.id"
              class="mb-6 flex items-center justify-between rounded-full bg-[#e944770D] px-[30px] py-5"
            >
              <span class="text-base font-medium">{{ item.name }}</span>
              <span class="text-xl font-bold"
                >{{ item.count }} {{ item.name }}</span
              >
            </div>
          </div>
          <img
            src="~/assets/images/people.png"
            alt="location"
            width="600"
            height="800"
            class="w-full rounded-[40px] border-4 border-[#735844]"
          />
        </div>
        <div class="my-20 py-20" data-aos="fade-up" data-aos-duration="1500">
          <h2
            class="relative mx-auto mb-8 mt-1.5 w-fit max-w-[710px] pb-6 text-center text-lg font-bold text-title before:absolute before:bottom-0 before:start-1/2 before:h-[4px] before:w-[220px] before:translate-x-1/2 before:rounded-[14px] before:bg-primary sm:text-xl md:text-2xl lg:text-3xl ltr:before:-translate-x-1/2"
          >
            <!-- {{ items?.name }} -->

            {{ $t("labels.objectivesTitle") }}
          </h2>
          <p
            class="mx-auto mb-10 max-w-[660px] text-center text-base text-description"
          >
            {{ $t("labels.objectivesDesc") }}
          </p>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-12">
            <div
              class="col-span-1 rounded-[20px] sm:col-span-6 lg:col-span-4"
              v-for="item in items.objectives"
              :key="item.id"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <NuxtImg
                :src="item.image"
                alt="location"
                width="400"
                height="223"
                class="h-full w-full rounded-[20px]"
              />
            </div>
          </div>
        </div>
        <HomeTools class="!mb-0 mt-14 !pb-0" :items="items?.tools" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

defineProps({
  items: {
    type: Object,
    required: true,
  },
});
function setErrorImg(e) {
  e.target.src = "/features.webp";
}
</script>

<style lang="scss">
.tabs {
  @apply mb-4 border-b-[3px] border-[#DADDDE] pb-2 text-lg font-bold text-description outline-none transition-all duration-300;
}
.tab_text {
  @apply text-description transition-all duration-300;
}
</style>
