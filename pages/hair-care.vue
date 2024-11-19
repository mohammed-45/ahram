<template>
  <div>
    <div class="breadcrumb">
      <div class="fixed-bg bg-[url('/public/shape-2.png')]"></div>
      <div class="container relative z-10">
        <h2
          class="mb-10 text-center text-xl font-bold text-white sm:text-2xl lg:text-4xl"
        >
          العناية بالشعر
        </h2>
        <div
          class="flex items-center justify-center gap-4 text-lg font-semibold sm:text-2xl"
        >
          <NuxtLink :to="localePath('/')" class="text-white"
            >الرئيسية
          </NuxtLink>
          <span class="text-white">></span>
          <NuxtLink :to="localePath('/blogs')" class="text-white underline"
            >معلومات تهمك</NuxtLink
          >
          <span class="text-white">></span>
          <span class="text-white underline">العناية بالشعر </span>
        </div>
      </div>
    </div>
    <div class="container my-14">
      <img
        src="~/assets/images/blog-4.jpg"
        alt="blog"
        class="mb-6 w-full rounded-2xl sm:h-[550px]"
      />
      <h2 class="mb-6 text-lg font-bold sm:text-3xl">
        بعض النصائح للعناية بالشعر:
      </h2>
      <p class="mb-4 text-base font-semibold text-subtitle sm:text-xl">
        غسيل الشعر بانتظام:* اغسل شعرك بشكل منتظم باستخدام شامبو وبلسم مناسبين لنوع شعرك.
      </p>
      <p class="mb-4 text-base font-semibold text-subtitle sm:text-xl">
        تجنب التسريح الزائد:* تجنب تجفيف الشعر بالحرارة المرتفعة بانتظام واستخدام وسائل تصفيف لطيفة.
      </p>
      <p class="mb-4 text-base font-semibold text-subtitle sm:text-xl">
        التغذية الجيدة:* تناول الأطعمة الغنية بالفيتامينات والمعادن لتعزيز صحة فروة الرأس ونمو الشعر.
      </p>
      <p class="mb-4 text-base font-semibold text-subtitle sm:text-xl">
        تقليل التلوث:* حاول حماية شعرك من التلوث بارتداء قبعة أو استخدام واقيات الشعر.      </p>
      <p class="mb-4 text-base font-semibold text-subtitle sm:text-xl">
        تقصي الشعر بانتظام:* احرص على قص الشعر بانتظام للحفاظ على نهاياته الصحية والتخلص من التقصف.     </p>
   
      <p class="mb-4 text-base font-semibold text-subtitle sm:text-xl">
        من خلال اتباع نمط حياة صحي واعتناء منتظم بالبشرة والشعر، يمكنك الحفاظ على مظهر صحي وجميل لفترة طويلة.                                </p>
   
    </div>
  </div>
</template>

<script setup></script>

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
