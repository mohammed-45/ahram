<template>
  <div class="bg-[#f7f7f7] pb-10">
    <div class="breadcrumb">
      <div class="fixed-bg bg-[url('/public/shape-2.png')]"></div>
      <div class="container relative z-10">
        <h2
          class="mb-10 text-center text-xl font-bold text-white sm:text-2xl lg:text-4xl"
        >
          الخدمات
        </h2>
        <div
          class="flex items-center justify-center gap-4 text-lg font-semibold sm:text-2xl"
        >
          <NuxtLink :to="localePath('/')" class="text-white"
            >الرئيسية
          </NuxtLink>
          <span class="text-white">></span>
          <span class="text-white underline">الخدمات</span>
        </div>
      </div>
    </div>
    <div class="container my-14">
      <ClientOnly>
        <TabGroup as="template">
          <TabList class="flex flex-wrap gap-3">
            <Tab v-slot="{ selected }" as="template"
              ><div
                class="tabs flex-1 cursor-pointer after:hidden after:lg:block"
                :class="selected ? 'active' : ''"
              >
                <div>
                  <span
                    ><img src="~/assets/images/liver.png" alt="Icon"
                  /></span>
                  <span class="relative z-10 text-base font-bold sm:text-xl"
                    >الغسيل الكلوي</span
                  >
                </div>
              </div></Tab
            >
            <Tab v-slot="{ selected }" as="template"
              ><div
                class="tabs flex-1 cursor-pointer after:hidden after:lg:block"
                :class="selected ? 'active' : ''"
              >
                <div>
                  <span
                    ><img src="~/assets/images/x-ray.png" alt="Icon"
                  /></span>
                  <span class="relative z-10 text-base font-bold sm:text-xl"
                    >الاشعة</span
                  >
                </div>
              </div></Tab
            >
            <Tab v-slot="{ selected }" as="template"
              ><div
                class="tabs flex-1 cursor-pointer after:hidden after:lg:block"
                :class="selected ? 'active' : ''"
              >
                <div>
                  <span><img src="~/assets/images/pill.png" alt="Icon" /></span>
                  <span class="relative z-10 text-base font-bold sm:text-xl"
                    >العلاج الطبيعي</span
                  >
                </div>
              </div></Tab
            >
            <Tab v-slot="{ selected }" as="template"
              ><div
                class="tabs flex-1 cursor-pointer after:hidden after:lg:block"
                :class="selected ? 'active' : ''"
              >
                <div>
                  <span
                    ><img src="~/assets/images/blood-test.png" alt="Icon"
                  /></span>
                  <span class="relative z-10 text-base font-bold sm:text-xl"
                    >التحاليل</span
                  >
                </div>
              </div></Tab
            >
          </TabList>
          <TabPanels>
            <TabPanel
              class="tab-content mt-12 grid grid-cols-1 gap-x-10 rounded-lg border border-[#ddd] p-2.5 md:grid-cols-2"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <img
                src="~/assets/images/liver-hero.jpg"
                alt="liver"
                class="h-full w-full max-w-[100%] rounded-lg"
              />
              <div class="py-4">
                <h3
                  class="mb-2 text-base font-bold text-primary sm:text-3xl md:mb-6"
                >
                  خدمة الغسيل الكلوي
                </h3>
                <p class="text-base font-semibold text-subtitle sm:text-xl">
                  غسيل الكلى الدموى :يستخدم للمرض الدين فقدت كليتهم القدره على
                  اداء وظائفها الطبيعيه .يتم اللجوء الي الغسيل الكلوي عندما تكون
                  الكلى غير قاده على تصفيه السموم والفضلات من الدم بشكل كاف .
                </p>
                <NuxtLink
                  :to="localePath('/contact')"
                  class="mt-6 inline-block justify-center text-center"
                >
                  <GeneralButton
                    type="button"
                    class="!w-[150px] bg-secondary !text-white hover:bg-primary"
                    :text="$t('labels.contact')"
                  >
                  </GeneralButton>
                </NuxtLink>
              </div>
            </TabPanel>
            <TabPanel
              class="tab-content mt-12 grid grid-cols-1 gap-x-10 rounded-lg border border-[#ddd] p-2.5 md:grid-cols-2"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <img
                src="~/assets/images/x-ray-hero.jpg"
                alt="liver"
                class="h-full w-full max-w-[100%] rounded-lg"
              />
              <div class="py-4">
                <h3
                  class="mb-2 text-base font-bold text-primary sm:text-3xl md:mb-6"
                >
                  خدمة الأشعة
                </h3>
                <p class="text-base font-semibold text-subtitle sm:text-xl">
                  تساعد في تشخيص الإصابة ببعض الأمراض بطريقة غير مؤلمة وذلك بهدف
                  تقييم الخيارات العلاجية المتاحة.
                </p>
                <ol
                  class="mt-6 list-inside list-disc space-y-2 text-sm text-subtitle sm:text-base"
                >
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >اكس راي:</span
                    >
                    <span>
                      يستخدم بشكل شائع في الطب لتصوير الهياكل الداخليه
                      للجسم.</span
                    >
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold">سونار:</span>
                    <span>
                      تقنيه تصوير تستخدم الموجات الصوتيه عاليه الترددلانشاء صوره
                      لاعضاء والانسجه.</span
                    >
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold">ايكو:</span>
                    <span>
                      اشعه فوق الصوتيه القلبيه تستخدم لانشاء صور للقلب والاوعيه
                      الدمويه.</span
                    >
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >رسم القلب:</span
                    >
                    <span> اختبار يستخدم لتسجيل النشاط الكهربي للقلب.</span>
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold">هولتر:</span>
                    <span>
                      يستخدم لمراقبه النشاط الكهربائي للقلب على مدى فتره زمنيه
                      طويله عاده 24 ساعه او اكتر</span
                    >
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >رسم المخ:</span
                    >
                    <span>
                      تمثيل مرئي يوضح شكل ووظيفه الدماغ ,له عده انواع
                      مختلفه</span
                    >
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >رسم العصب:</span
                    >
                    <span>
                      تمثيل بصري يوضح تركيب البنيوى والوظيفي للاعصاب في
                      الجسم</span
                    >
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >الدوبلر:</span
                    >
                    <span>
                      يستخدم لقياس التغيرات في الترددات الناتجه عن الحركه ويكون
                      هدا قباسا سريعا لتدفق الدم في الاوعيه
                    </span>
                  </li>
                </ol>
                <NuxtLink
                  :to="localePath('/contact')"
                  class="mt-6 inline-block justify-center text-center"
                >
                  <GeneralButton
                    type="button"
                    class="!w-[150px] bg-secondary !text-white hover:bg-primary"
                    :text="$t('labels.contact')"
                  >
                  </GeneralButton>
                </NuxtLink>
              </div>
            </TabPanel>
            <TabPanel
              class="tab-content mt-12 grid grid-cols-1 gap-x-10 rounded-lg border border-[#ddd] p-2.5 md:grid-cols-2"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <img
                src="~/assets/images/natural.jpg"
                alt="liver"
                class="h-full w-full max-w-[100%] rounded-lg"
              />
              <div class="py-4">
                <h3
                  class="mb-2 text-base font-bold text-primary sm:text-3xl md:mb-6"
                >
                  خدمة العلاج الطبيعي
                </h3>
                <p class="text-base font-semibold text-subtitle sm:text-xl">
                  يستخدم تقنيات العلاج الحركي والعلاج اليدوي والتمارين البدنيه
                  لتحسين القدره على الحركه وتقليل الالم واستعاده الوظائف بعد
                  الاصابه او الجراحه (العلاج الطبيعي الحركي –العلاج الطبيعي
                  لاعاده التاهيل –العلاج الطبيعي للاطفال –العلاج الطبيعي لكبار
                  السن -..........)
                </p>

                <NuxtLink
                  :to="localePath('/contact')"
                  class="mt-6 inline-block justify-center text-center"
                >
                  <GeneralButton
                    type="button"
                    class="!w-[150px] bg-secondary !text-white hover:bg-primary"
                    :text="$t('labels.contact')"
                  >
                  </GeneralButton>
                </NuxtLink>
              </div>
            </TabPanel>
            <TabPanel
              class="tab-content mt-12 grid grid-cols-1 gap-x-10 rounded-lg border border-[#ddd] p-2.5 md:grid-cols-2"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              <img
                src="~/assets/images/chemical.jpeg"
                alt="liver"
                class="h-full w-full max-w-[100%] rounded-lg"
              />
              <div class="py-4">
                <h3
                  class="mb-2 text-base font-bold text-primary sm:text-3xl md:mb-6"
                >
                  خدمة التحاليل
                </h3>
                <p class="text-base font-semibold text-subtitle sm:text-xl">
                  اختبارات تجرى على عينات من الدم –البول –سوائل الجسم لتشخيص
                  الامراض وتقييم الحاله الصحيه او مراقبه فعاليه العلاج.
                </p>
                <ol
                  class="mt-6 list-inside list-disc space-y-2 text-sm text-subtitle sm:text-base"
                >
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >تحاليل الدم</span
                    >
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >تحاليل البول</span
                    >
                  </li>
                  <li>
                    <span class="me-2 inline-block font-semibold"
                      >تحاليل اخرى</span
                    >
                  </li>
                </ol>
                <NuxtLink
                  :to="localePath('/contact')"
                  class="mt-6 inline-block justify-center text-center"
                >
                  <GeneralButton
                    type="button"
                    class="!w-[150px] bg-secondary !text-white hover:bg-primary"
                    :text="$t('labels.contact')"
                  >
                  </GeneralButton>
                </NuxtLink>
              </div>
            </TabPanel>
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
.breadcrumb {
  padding: 200px 0;
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
