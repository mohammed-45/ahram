<template>
  <div  class="footer mt-auto bg-[#090B0E]">
    <div class="container pb-14 pt-16">
      <div
        class="grid grid-cols-1 gap-x-14 gap-y-14 sm:grid-cols-4 xl:grid-cols-12"
      >
        <div class="col-span-1 sm:col-span-4 xl:col-span-4">
          <img
            src="~/assets/images/logo-dark.svg"
            @error="setErrorImg($event)"
            alt="logo"
           
            loading="lazy"
          />
          <h4 class="mb-8 mt-8 leading-[1.8] text-sm text-[#C3CDD9]">
            {{ $t("labels.footerDesc") }}
          </h4>
          <div class="flex flex-wrap justify-between items-end gap-2 mt-2">
            <span class="text-sm text-white"><span class="text-primary">رقم ضريبي:</span>  ٣١٠١٦٢٨٩٦٥٠٠٠٣  </span>
            <img
            src="~/assets/images/2030.svg"
            @error="setErrorImg($event)"
            alt="logo"
           
            loading="lazy"
          />
          </div>
        </div>
        <div class="col-span-1 sm:col-span-2 md:col-span-2 xl:col-span-3">
          <h5 class="mb-6 text-lg sm:text-xl font-semibold  text-white">
            {{ $t("labels.download") }}
          </h5>
          <h6 class="mb-4 mt-8 leading-[1.8] text-sm text-[#C3CDD9]">
            الآن يمكنك تحميل تطبيق موكَّل والعثور بسهولة على من يؤدي العمرة نيابةً عنك.
          </h6>
          <div class="flex flex-wrap gap-4">
        <a href="#" target="_blank">
          <img
            src="~/assets/images/huawei.png"
            alt="huawei"
            width="70"
            height="23"
            loading="lazy"
            class="h-[23px] flex-1"
          />
        </a>
        <a href="#" target="_blank">
          <img
            src="~/assets/images/Google_Play.png"
            alt="Google_Play"
            width="70"
            height="23"
            loading="lazy"
            class="h-[23px] flex-1"
          />
        </a>
        <a href="#" target="_blank">
          <img
            src="~/assets/images/App_Store.png"
            alt="App_Store"
            width="70"
            height="23"
            loading="lazy"
            class="h-[23px] flex-1"
          />
        </a>
      </div>
          <div class="flex items-center mt-8 justify-center flex-wrap gap-2">
        
          <img
            src="~/assets/images/pay-1.svg"
            alt="huawei"
           
            loading="lazy"
           
          />
       
        
          <img
            src="~/assets/images/pay-2.svg"
            alt="Google_Play"
           
            loading="lazy"
          />
       
        
          <img
            src="~/assets/images/pay-3.svg"
            alt="App_Store"
           
            loading="lazy"
          />

          <img
            src="~/assets/images/pay-4.svg"
            alt="App_Store"
           
            loading="lazy"
          />

          <img
            src="~/assets/images/pay-5.svg"
            alt="App_Store"
           
            loading="lazy"
          />
       
      </div>
        </div>
        <div class="col-span-1 sm:col-span-2 md:col-span-2 xl:col-span-2">
          <h5 class="mb-6 text-lg sm:text-xl font-semibold text-white">
            {{ $t("labels.intresting") }}
          </h5>
          <ul class="space-y-6 break-words text-base text-white">
            <li>
              <NuxtLink :to="localePath('/questions')">{{
                $t("NAV.questions")
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/privacy')">{{
                $t("NAV.privacy")
              }}</NuxtLink>
            </li>
            
            <li>
              <NuxtLink :to="localePath('/terms')">{{
                $t("NAV.terms")
              }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="col-span-1 sm:col-span-2 md:col-span-2 xl:col-span-3">
          <h5 class="mb-6 sm:text-xl font-semibold text-lg  text-white">
            {{ $t("labels.contact") }}
          </h5>
          <ul class="space-y-6 break-words text-base text-white">
            <li class="flex items-center gap-3">
              <img
                src="~/assets/images/location.svg"
                alt="location"
                width="32"
                height="32"
                class="h-5 w-5"
              />
              <!-- <div>
                <h4 class="mb-2 text-sm text-white">
                  {{ $t("labels.phones") }}:
                </h4>

                <a
                  dir="ltr"
                  class="block text-sm"
                  v-for="phone in settings.phones"
                  :href="`tel:${phone.phone_code}${phone.phone}`"
                  >{{ phone.phone_code }} {{ phone.phone }}</a
                >
              </div> -->
              <span class="text-sm">المملكة العربية السعودية، جدة، شارع صاري، الخالدية، برج الغيداء</span>

            </li>

            <li class="flex items-center gap-3">
              <img
                src="~/assets/images/sms.svg"
                alt="sms"
                width="32"
                height="32"
                class="h-5 w-5"
              />
              <!-- <div>
                <h4 class="mb-2 text-sm text-white">
                  {{ $t("FORMS.Placeholders.email") }}:
                </h4>

                <a class="text-sm" :href="`mailto:${settings.email}`">{{
                  settings.email
                }}</a>
              </div> -->
              <span class="text-sm">support@moakkal.com</span>
            </li>
            <li class="flex items-center gap-3">
              <img
                src="~/assets/images/phone.svg"
                alt="phone"
                width="32"
                height="32"
                class="h-5 w-5"
              />
              <!-- <div>
                <h4 class="mb-2 text-sm text-white">
                  {{ $t("labels.location") }}:
                </h4>
                <span class="text-sm">{{ settings.location }}</span>
              </div> -->
              <span class="text-sm">+966 12 699 6699</span>

            </li>
            <li class="flex items-center gap-3">
              <img
                src="~/assets/images/whatsapp.svg"
                alt="whatsapp"
                width="32"
                height="32"
                class="h-5 w-5"
              />
              <!-- <div>
                <h4 class="mb-2 text-sm text-white">
                  {{ $t("labels.location") }}:
                </h4>
                <span class="text-sm">{{ settings.location }}</span>
              </div> -->
              <span class="text-sm">+966 54 114 1111</span>

            </li>
          </ul>
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
              <a  target="_blank" rel="noopener">
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
          <!-- <ul class="socials">
            <li>
              <a :href="settings.instagram" target="_blank" rel="noopener">
                <img
                  src="~/assets/images/instagram.svg"
                  alt="instagram"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li>
              <a :href="settings.facebook" target="_blank" rel="noopener">
                <img
                  src="~/assets/images/facebook.svg"
                  alt="facebook"
                  width="20"
                  height="20"
                />
              </a>
            </li>
            <li>
              <a :href="settings.linkendin" target="_blank" rel="noopener">
                <img
                  src="~/assets/images/linkedin.svg"
                  alt="linkedin"
                  width="20"
                  height="20"
                />
              </a>
            </li>
          
            <li>
              <a :href="settings.twitter" target="_blank" rel="noopener">
                <img
                  src="~/assets/images/x.svg"
                  alt="x"
                  width="20"
                  height="20"
                />
              </a>
            </li>
          </ul> -->
        </div>
      </div>
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
