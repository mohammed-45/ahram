<template>
  <div class="container  py-11">
    <div class="flex flex-col items-center justify-center">
      <img
        width="500"
        height="500"
        src="~/assets/images/404.png"
        alt="not found icon"
        loading="lazy"
      />
      <div class="error_section">
        <h1 class="my-4 text-center text-2xl font-bold text-primary">
          {{ $t("something went wrong") }}
        </h1>
        <p class="max-w-[500px] text-center text-subtitle">
          {{ $t("pleaseKindlyTryAgain") }}
        </p>
        <div class="mt-5 flex justify-center">
          <nuxt-link
            :to="localePath('/')"
            class="rounded-full bg-secondary px-6 py-[10px] text-center font-medium text-white transition-all duration-300 hover:bg-opacity-70"
          >
            {{ $t("Back to home") }}
          </nuxt-link>
          <!-- <nuxt-link
            :to="localePath('/contact-us')"
            class="base-btn-white mx-2"
          >
            {{ $t("NAV.contact") }}
          </nuxt-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>
