<template>
  <div>
    <div class="breadcrumb py-[60px] lg:py-[150px] mt-20 lg:mt-0">
      <div class="fixed-bg bg-[url('/public/shape-2.png')]"></div>
      <div class="container relative z-10">
        <h2
          class="mb-10 text-center text-xl font-bold text-white sm:text-2xl lg:text-4xl"
        >
        {{$t("labels.blogs")}}
        </h2>
        <div
          class="flex items-center justify-center gap-4 text-lg font-semibold sm:text-2xl"
        >
          <NuxtLink :to="localePath('/')" class="text-white"
            >{{$t("NAV.home")}}
          </NuxtLink>
          <span class="text-white">></span>
          <span class="text-white underline">{{$t("labels.blogs")}}</span>
        </div>
      </div>
    </div>
    <div class="container my-14">
      <div
        class="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:gap-y-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <div class="group rounded-2xl bg-white p-6 shadow-xl">
          <div class="mb-4 overflow-hidden rounded-xl">
            <NuxtLink :to="localePath('/water-birth')">
              <img
                src="~/assets/images/blog-1.jpg"
                alt="blog"
                class="h-[280px] w-full max-w-[100%] rounded-xl object-cover transition duration-[400] group-hover:scale-[1.1]"
              />
            </NuxtLink>
          </div>
          <h3
            class="text mb-2 text-lg font-bold text-primary sm:text-xl lg:text-2xl"
          >
          {{$t("labels.blog1")}}

          </h3>
          <p
            class="line-clamp-3 text-sm font-medium text-subtitle sm:text-base"
          >
        
            {{$t("labels.blogDesc1")}}
        
          </p>
          <NuxtLink :to="localePath('/water-birth')">
            <GeneralButton
              class="mt-4 !h-auto bg-primary py-3 text-white hover:bg-secondary"
              :text="$t('BUTTONS.showMore')"
            ></GeneralButton>
          </NuxtLink>
        </div>
        <div class="group rounded-2xl bg-white p-6 shadow-xl">
          <div class="mb-4 overflow-hidden rounded-xl">
            <NuxtLink :to="localePath('/diabetic-coma')">
              <img
                src="~/assets/images/blog-2.jpg"
                alt="blog"
                class="h-[280px] w-full max-w-[100%] rounded-xl object-cover transition duration-[400] group-hover:scale-[1.1]"
              />
            </NuxtLink>
          </div>
          <h3
            class="text mb-2 text-lg font-bold text-primary sm:text-xl lg:text-2xl"
          > 
          {{$t("labels.blog2")}}

          </h3>
          <p
            class="line-clamp-3 text-sm font-medium text-subtitle sm:text-base"
          >
         
            {{$t("labels.blogDesc2")}}
         
          </p>
          <NuxtLink :to="localePath('/diabetic-coma')">
            <GeneralButton
              class="mt-4 !h-auto bg-primary py-3 text-white hover:bg-secondary"
              :text="$t('BUTTONS.showMore')"
            ></GeneralButton>
          </NuxtLink>
        </div>
        <div class="group rounded-2xl bg-white p-6 shadow-xl">
          <div class="mb-4 overflow-hidden rounded-xl">
            <NuxtLink :to="localePath('/skin-care')">
              <img
                src="~/assets/images/blog-3.jpg"
                alt="blog"
                class="h-[280px] w-full max-w-[100%] rounded-xl object-cover transition duration-[400] group-hover:scale-[1.1]"
              />
            </NuxtLink>
          </div>
          <h3
            class="text mb-2 text-lg font-bold text-primary sm:text-xl lg:text-2xl"
          >
            {{$t("labels.blog3")}}
          </h3>
          <p
            class="line-clamp-3 text-sm font-medium text-subtitle sm:text-base"
          >
           
          {{$t("labels.blogDesc3")}}

          </p>
          <NuxtLink :to="localePath('/skin-care')">
            <GeneralButton
              class="mt-4 !h-auto bg-primary py-3 text-white hover:bg-secondary"
              :text="$t('BUTTONS.showMore')"
            ></GeneralButton>
          </NuxtLink>
        </div>
        <div class="group rounded-2xl bg-white p-6 shadow-xl">
          <div class="mb-4 overflow-hidden rounded-xl">
            <NuxtLink :to="localePath('/hair-care')">
              <img
                src="~/assets/images/blog-4.jpg"
                alt="blog"
                class="h-[280px] w-full max-w-[100%] rounded-xl object-cover transition duration-[400] group-hover:scale-[1.1]"
              />
            </NuxtLink>
          </div>
          <h3
            class="text mb-2 text-lg font-bold text-primary sm:text-xl lg:text-2xl"
          >
          {{$t("labels.blog4")}}
          </h3>
          <p
            class="line-clamp-3 text-sm font-medium text-subtitle sm:text-base"
          >
          {{$t("labels.blogDesc4")}}

          </p>
          <NuxtLink :to="localePath('/hair-care')">
            <GeneralButton
              class="mt-4 !h-auto bg-primary py-3 text-white hover:bg-secondary"
              :text="$t('BUTTONS.showMore')"
            ></GeneralButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.breadcrumb {
  
  position: relative;
  background: linear-gradient(
    90deg,
    rgb(30, 113, 190) 0%,
    rgb(0, 67, 130) 100%
  );
  text-align: center;

  .fixed-bg {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center left;
    opacity: 0.5;
  }
}
</style>
