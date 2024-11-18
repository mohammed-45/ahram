<template>
  <ul
    class="hidden items-center justify-center gap-6 font-medium text-blackTitle lg:flex"
  >
    <li>
      <NuxtLink :to="localePath('/')">
        {{ $t("NAV.home") }}
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="localePath('/about')">
        {{ $t("NAV.about") }}
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="localePath('/features')">{{ $t("NAV.features") }} </NuxtLink>
    </li>

    <li>
      <NuxtLink :to="localePath('/services')">
        {{ $t("NAV.services") }}
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="localePath('/contact')">
        {{ $t("NAV.contact") }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
// .router-link-exact-active {
//   color: #e94477;
//   @apply relative transition duration-[5000] after:absolute after:-bottom-2 after:right-0 after:h-[2px] after:w-full   after:bg-primary  after:transition-all after:duration-300 after:ease-in-out  after:content-[''];
// }
.router-link-exact-active {
  color: #e94477;
  @apply relative transition duration-[5000]  after:-bottom-[52px] after:right-1/2 after:h-5 after:w-5 after:translate-x-1/2 after:rounded-full   after:bg-primary  after:transition-all after:duration-500 after:ease-in-out  after:content-[''];
}

a:not(.router-link-exact-active) {
  @apply relative transition duration-[5000]  after:-bottom-2 after:right-0 after:h-[2px] after:w-0 after:bg-primary   after:transition-all  after:duration-500 after:ease-in-out after:content-[''];

  &:hover {
    @apply text-primary;
  }
}
</style>
