<template>
  <div  class="footer mt-auto bg-[#090B0E]">
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
      عيادات الأهرام الدولية
      </h2>
      
      <p  class=" text-center text-lg text-white">
        ابقى مطلعا وحافظ على صحتك
      </p>

      <ul class="socials mt-8">
            <li>
              <a  target="_blank" rel="noopener">
                <img
                  src="~/assets/images/snapchat.svg"
                  alt="snapchat"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li>
              <a  target="_blank" rel="noopener">
                <img
                  src="~/assets/images/youtube.svg"
                  alt="youtube"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li>
              <a  target="_blank" rel="noopener">
                <img
                  src="~/assets/images/linkedin.svg"
                  alt="linkedin"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li>
              <a  target="_blank" rel="noopener">
                <img
                  src="~/assets/images/x.svg"
                  alt="x"
                  width="20"
                  height="20"
                />
              </a>
            </li>
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
              <a  target="_blank" rel="noopener">
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
