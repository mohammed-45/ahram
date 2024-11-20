<template>
  <Html :lang="$i18n.locale">
    <Body :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
      <div class="flex min-h-[100vh] flex-col overflow-x-clip bg-[#e8edf0]">

        <HeaderNavbar />
        <div class="app_wrapper" id="app_wrapper">
          <slot />
        </div>
        <WhatsUp  />
        <Phone  />
      
        <Footer class="mt-auto" />
      </div>
    </Body>
  </Html>
</template>

<script setup>
</script>

<style></style>
