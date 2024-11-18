<template>
  <div class="mt-20 bg-[#f7f7f7] py-20">
    <div class="container">
      <h2
        class="mb-10 text-center text-xl font-bold text-secondary sm:text-2xl lg:text-4xl"
      >
        الخدمات الاضافية
      </h2>
      <!-- <p  class="mt-2 text-center text-lg text-subtitle">
        تتميز عياداتنا بعدة تخصصات تجعل تجربة مرضانا فريدة من نوعها
      </p> -->
      <ClientOnly>
        <TabGroup as="template">
          <TabList class="flex flex-wrap gap-3">
            <Tab v-slot="{ selected }" as="template"
              ><div
                class="tabs after:hidden after:lg:block flex-1 cursor-pointer"
                :class="selected ? 'active' : ''"
              >
                <div>
                  <span><img src="~/assets/images/liver.png" alt="Icon" /></span>
                  <span class="text-base font-bold sm:text-xl relative z-10"
                    >الغسيل الكلوي</span
                  >
                </div>
              </div></Tab
            >
            <Tab v-slot="{ selected }" as="template"
              ><div
                class="tabs after:hidden after:lg:block flex-1 cursor-pointer"
                :class="selected ? 'active' : ''"
              >
                <div>
                  <span><img src="~/assets/images/x-ray.png" alt="Icon" /></span>
                  <span class="text-base font-bold sm:text-xl relative z-10"
                    >الاشعة</span
                  >
                </div>
              </div></Tab
            >
            <Tab v-slot="{ selected }" as="template"
              ><div
                class="tabs after:hidden after:lg:block flex-1 cursor-pointer"
                :class="selected ? 'active' : ''"
              >
                <div>
                  <span><img src="~/assets/images/pill.png" alt="Icon" /></span>
                  <span class="text-base font-bold sm:text-xl relative z-10"
                    >العلاج الطبيعي</span
                  >
                </div>
              </div></Tab
            >
            <Tab v-slot="{ selected }" as="template"
              ><div
                class="tabs after:hidden after:lg:block flex-1 cursor-pointer"
                :class="selected ? 'active' : ''"
              >
                <div>
                  <span><img src="~/assets/images/blood-test.png" alt="Icon" /></span>
                  <span class="text-base font-bold sm:text-xl relative z-10"
                    >التحاليل</span
                  >
                </div>
              </div></Tab
            >
          </TabList>
          <TabPanels>
            <TabPanel
              class="tab-content grid mt-12 gap-x-10  rounded-lg border  border-[#ddd] p-2.5 grid-cols-1 md:grid-cols-2"
              data-aos="fade-in"
              data-aos-duration="1000"
              >
              <img src="~/assets/images/liver-hero.jpg" alt="liver" class="rounded-lg  max-w-[100%] h-full  w-full" >
              <div class="py-4">
                <h3 class="text-base mb-2 md:mb-6 text-primary sm:text-3xl font-bold">
                    خدمة الغسيل الكلوي
                </h3>
                <p class="text-base font-semibold text-subtitle sm:text-xl">
غسيل الكلى الدموى :يستخدم للمرض الدين فقدت كليتهم القدره على اداء وظائفها الطبيعيه .يتم اللجوء الي الغسيل الكلوي عندما تكون الكلى غير قاده على تصفيه السموم والفضلات من الدم بشكل كاف 
.
              </p>
              <NuxtLink
              :to="localePath('/contact')"
              class=" inline-block  justify-center mt-6 text-center"
            >
              <GeneralButton
                type="button"
                class=" !w-[150px] bg-secondary hover:bg-primary !text-white"
                :text="$t('labels.contact')"
              >
              </GeneralButton>
            </NuxtLink>
              </div>
              </TabPanel
            >
            <TabPanel
              class="tab-content grid mt-12 gap-10 rounded-lg border  border-[#ddd] p-2.5 grid-cols-1 md:grid-cols-2"
              data-aos="fade-in"
              data-aos-duration="1000"
              >
              <img src="~/assets/images/x-ray-hero.jpg" alt="liver" class="rounded-lg  max-w-[100%]  w-full" >
              <div class="py-4">
                <h3 class="text-base mb-6 text-primary sm:text-3xl font-bold">
                
خدمة الأشعة
              </h3>
                <p class="text-base font-semibold text-subtitle sm:text-xl">
                
                    تساعد في تشخيص الإصابة ببعض الأمراض بطريقة غير مؤلمة وذلك بهدف تقييم الخيارات العلاجية المتاحة.
              </p>
              <ol class="text-sm sm:text-base text-subtitle list-inside space-y-2 list-disc mt-6">
                <li><span class="font-semibold inline-block me-2">اكس راي:</span> <span> يستخدم بشكل شائع في الطب لتصوير الهياكل الداخليه للجسم.</span></li>
                <li><span class="font-semibold inline-block me-2">سونار:</span> <span> تقنيه تصوير تستخدم الموجات الصوتيه عاليه الترددلانشاء صوره لاعضاء والانسجه.</span></li>
                <li><span class="font-semibold inline-block me-2">ايكو:</span> <span> اشعه فوق الصوتيه القلبيه تستخدم لانشاء صور للقلب والاوعيه الدمويه.</span></li>
                <li><span class="font-semibold inline-block me-2">رسم القلب:</span> <span> اختبار يستخدم لتسجيل النشاط الكهربي للقلب.</span></li>
                <li><span class="font-semibold inline-block me-2">هولتر:</span> <span> يستخدم لمراقبه النشاط الكهربائي للقلب على مدى فتره زمنيه طويله عاده 24 ساعه او اكتر</span></li>
                <li><span class="font-semibold inline-block me-2">رسم المخ:</span> <span> تمثيل مرئي يوضح شكل ووظيفه الدماغ ,له عده انواع مختلفه</span></li>
                <li><span class="font-semibold inline-block me-2">رسم العصب:</span> <span> تمثيل بصري يوضح تركيب البنيوى والوظيفي للاعصاب في الجسم</span></li>
                <li><span class="font-semibold inline-block me-2">الدوبلر:</span> <span> يستخدم لقياس التغيرات في الترددات الناتجه عن الحركه 
                    ويكون هدا قباسا سريعا لتدفق الدم في الاوعيه                                                     </span></li>
              </ol>
              <NuxtLink
              :to="localePath('/contact')"
              class=" inline-block  justify-center mt-6 text-center"
            >
              <GeneralButton
                type="button"
                class=" !w-[150px] bg-secondary hover:bg-primary !text-white"
                :text="$t('labels.contact')"
              >
              </GeneralButton>
            </NuxtLink>
              </div>
              </TabPanel
            >
            <TabPanel
              class="tab-content grid mt-12 gap-10 rounded-lg border  border-[#ddd] p-2.5 grid-cols-1 md:grid-cols-2"
              data-aos="fade-in"
              data-aos-duration="1000"
              >
              <img src="~/assets/images/natural.jpg" alt="liver" class="rounded-lg  max-w-[100%]  w-full" >
              <div class="py-4">
                <h3 class="text-base mb-6 text-primary sm:text-3xl font-bold">
                
خدمة العلاج الطبيعي
              </h3>
                <p class="text-base font-semibold text-subtitle sm:text-xl">
                
                    
يستخدم تقنيات العلاج الحركي والعلاج اليدوي والتمارين البدنيه لتحسين القدره على الحركه وتقليل الالم واستعاده الوظائف بعد الاصابه او الجراحه (العلاج الطبيعي الحركي –العلاج الطبيعي لاعاده التاهيل –العلاج الطبيعي للاطفال –العلاج الطبيعي لكبار السن -..........)

              </p>
             
              <NuxtLink
              :to="localePath('/contact')"
              class=" inline-block  justify-center mt-6 text-center"
            >
              <GeneralButton
                type="button"
                class=" !w-[150px] bg-secondary hover:bg-primary !text-white"
                :text="$t('labels.contact')"
              >
              </GeneralButton>
            </NuxtLink>
              </div>
              </TabPanel
            >
            <TabPanel
              class="tab-content grid mt-12 gap-10 rounded-lg border  border-[#ddd] p-2.5 grid-cols-1 md:grid-cols-2"
              data-aos="fade-in"
              data-aos-duration="1000"
              >
              <img src="~/assets/images/chemical.jpeg" alt="liver" class="rounded-lg  max-w-[100%]  w-full" >
              <div class="py-4">
                <h3 class="text-base mb-6 text-primary sm:text-3xl font-bold">
                
خدمة التحاليل
              </h3>
                <p class="text-base font-semibold text-subtitle sm:text-xl">
                
                    
                    اختبارات تجرى على عينات من الدم –البول –سوائل الجسم    لتشخيص الامراض وتقييم الحاله الصحيه او مراقبه فعاليه العلاج.
              </p>
              <ol class="text-sm sm:text-base text-subtitle list-inside space-y-2 list-disc mt-6">
                <li><span class="font-semibold inline-block me-2">تحاليل الدم</span> </li>
                <li><span class="font-semibold inline-block me-2">تحاليل البول</span></li>
                <li><span class="font-semibold inline-block me-2">تحاليل اخرى</span> </li>
               
              </ol>
              <NuxtLink
              :to="localePath('/contact')"
              class=" inline-block  justify-center mt-6 text-center"
            >
              <GeneralButton
                type="button"
                class=" !w-[150px] bg-secondary hover:bg-primary !text-white"
                :text="$t('labels.contact')"
              >
              </GeneralButton>
            </NuxtLink>
              </div>
              </TabPanel
            >
          </TabPanels>
        </TabGroup>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
</script>

<style lang="scss">
.tabs {
  @apply text-blackTitle;
  border-radius: 5px;
  outline: none;
  position: relative;
  background-color: #e8edf0;
  transition: all 0.4s ease;

  &::after {
    content: "";
    width: 30px;
    height: 30px;
    background-color: #002261;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -10px) rotate(45deg);
    opacity: 0;
    transition: all 0.4s ease;
  }

  & > div {
    display: flex;
    padding-inline-end: 30px;
    align-items: center;
    gap: 15px;
    font-size: 23px;
    height: 69px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.4s ease;

    & > span:first-of-type {
      width: 70px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border-inline-end: 2px solid transparent;
      border-radius: 60px 30px 30px 60px;
      margin-inline-start: -2px;
      position: relative;
      transition: all 0.4s ease;
      img {
        transition: all 0.4s ease;
        filter: invert(46%) sepia(89%) saturate(485%) hue-rotate(172deg)
          brightness(91%) contrast(91%);
      }
    }
  }

  &:hover,
  &.active {
    background-color: #002261;
    color: white;
    &::after {
      transform: translate(-50%, 14px) rotate(45deg);
      opacity: 1;
    }
    & > div {
      & > span:first-of-type {
        border-color: white;
        background-color: #0d8bdf;
        img {
          filter: invert(1);
        }
      }
     
    }
  }
}
</style>
