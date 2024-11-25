<template>
  <div class="relative my-20">
    <div class="container">
      <div class="flex items-center justify-between gap-2">
        <h2
          class="text my-0 text-xl font-bold text-secondary sm:text-2xl lg:text-4xl"
        >
        {{$t("labels.blogs")}}

        </h2>
        <NuxtLink :to="localePath('/blogs')">
          <GeneralButton
            class="bg-secondary text-white hover:bg-primary"
            :text="$t('BUTTONS.showMore')"
          ></GeneralButton>
        </NuxtLink>
      </div>
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

<script setup>
function setErrorImg(e) {
  e.target.src = "/about.png";
}
</script>

<style lang="scss"></style>
