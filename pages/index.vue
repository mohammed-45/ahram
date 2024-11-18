<template>
  <div>
    <GeneralLoader v-if="status == 'pending'" />
    <BackError v-if="status == 'error'" />
    <template v-else>
      <NotFound v-if="homeData?.status == 404" />
      <BackError v-if="homeData?.status == 500" />
      <div v-else class="relative">
        <button  class="fixed top-1/3 items-center gap-1 ltr:!rounded-l-[8px]  rtl:!rounded-r-[8px] bg-[#EFD803] px-2 vertical-btn  text-base font-medium text-blackTitle duration-300 disabled:cursor-not-allowed disabled:opacity-60 py-5  z-100" > <img src="~/assets/images/chat.svg" class="w-5  h-5" /> <p style="line-height: initial;">المحادثة اضغط هنا</p> 
        
        
        </button>
        <HomeHero
         
        />
        <!-- <HomeStats
         
        />
        <HomeAbout
         
        />
        <HomeRulings
         
        /> -->
        <HomeWhy
         
        />
        <HomeFeatures />

        <HomeApp
         
        />
        <HomeAgents
         
        />
        <HomeNews
         
        />
        <HomeContact
         
        />
        <HomeClients
         
        />
        <!-- <HomeHero
          v-if="homeData?.data.slider && homeData?.data.slider.length"
          :items="homeData?.data.slider"
          :desc="homeData?.data.slider_description"
        />
        <HomeAbout v-if="homeData?.data.about" :items="homeData?.data.about" />
        <HomeSections
          v-if="homeData?.data.department && homeData?.data.department.length"
          :items="homeData?.data.department"
        />
        <HomeOwner
          v-if="homeData?.data.ownerWord"
          :item="homeData?.data.ownerWord"
        />
        <HomeBusiness
          v-if="homeData?.data.fieldJobs && homeData?.data.fieldJobs.length"
          :items="homeData?.data.fieldJobs"
          :desc="homeData?.data.field_description"
        />
        <HomeClients
          v-if="homeData?.data.partners && homeData?.data.partners.length"
          :items="homeData?.data.partners"
        />
        <HomeNews
          v-if="homeData?.data.news && homeData?.data.news.length"
          :items="homeData?.data.news"
        />

        <HomeTools
          v-if="homeData?.data.tools && homeData?.data.tools.length"
          :items="homeData?.data.tools"
        /> -->

        <!-- <HomeBlog
          v-if="homeData?.data.blog && homeData?.data.blog.length"
          :items="homeData?.data.blog"
        />
        <HomeNews
          v-if="homeData?.data.news && homeData?.data.news.length"
          :items="homeData?.data.news"
        /> -->

        <!-- <HomeContact /> -->
      </div>
    </template>
  </div>
</template>

<script setup>
const axios = useNuxtApp().$axios;

const { data: homeData, status } = await useLazyAsyncData("homeData", () =>
  axios
    .get(`client/home`)
    .then((res) => res.data)
    .catch((err) => err.response)
);
</script>

<style lang="scss">
.vertical-btn {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-rl; /* Vertical text direction */
  text-align: center;
}

[dir="rtl"] .vertical-btn {
  writing-mode: vertical-rl; /* Text flows top-to-bottom, right-to-left */
  left: 0px;
}

[dir="ltr"] .vertical-btn {
  writing-mode: vertical-lr; /* Text flows top-to-bottom, left-to-right */
  left: unset;
  right: 0;

}
</style>