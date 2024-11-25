<template>
  <div  class="footer mt-auto bg-[url('/public/footer_bg.jpg')] bg-cover bg-center">
    <div class="container flex items-center justify-center flex-col pb-14 pt-8">
      
      <img
          src="~/assets/images/logo.png"
          alt="logo"
          width="140"
          height="90"
          loading="lazy"
          class="h-[90px] sm:aspect-[1/2]  sm:w-[100px]"
        />
        <h2
        class=" text-center mb-6 text-xl font-bold text-white sm:text-2xl lg:text-3xl"
      >
      {{ $t("labels.ahram") }}
      </h2>
      
      
      <a href="https://maps.app.goo.gl/mDdXegeaEiUiCBKx6" target="_blank"  class=" text-center mb-6 text-lg text-white">
      {{ $t("labels.location2") }}
      </a>
     
      <p  class=" text-center text-lg text-white">
      {{ $t("labels.ahramDesc") }}

      </p>
      <ul class="socials mt-8">
           
            <li>
              <a href="https://www.instagram.com/ala.hram2024?igsh=MW9ibGk3Ynh0aXM" target="_blank" rel="noopener">
                <img
                  src="~/assets/images/insta.svg"
                  alt="instagram"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61563856761217&mibextid=ZbWKwL" target="_blank" rel="noopener">
                <img
                  src="~/assets/images/facebook.svg"
                  alt="facebook"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            
          
           
          </ul>
    </div>

    <div
      class="border-t border-[#989898] py-4 text-center text-sm font-medium text-white"
    >
      <p>{{ $t("labels.rights") }}</p>
    </div>
  </div>
</template>

<script setup>
// defineProps({
//   settings: {
//     required: true,
//     type: Object,
//   },
// });
function setErrorImg(e) {
  e.target.src = "/logo.svg";
}
</script>

<style lang="scss">
.socials {
  @apply flex flex-wrap items-center gap-3 sm:gap-4;
  li a {
    @apply relative inline-flex h-8 w-8 cursor-pointer items-center justify-center gap-4 rounded-full border border-primary text-center capitalize text-white transition-all duration-500;
  }
  img {
    @apply h-4 w-4;
  }
}
</style>
