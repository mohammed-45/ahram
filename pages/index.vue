<template>
  <div>
    <div class="relative">
      <HomeHero />
      <HomeWhy />
      <HomeFeatures />
    </div>
  </div>
</template>

<script setup></script>

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
