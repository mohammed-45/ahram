<template>
  <div>
    <div class="breadcrumb">
      <div class="fixed-bg bg-[url('/public/shape-2.png')]"></div>
      <div class="container relative z-10">
        <h2
          class="mb-10 text-center text-xl font-bold text-white sm:text-2xl lg:text-4xl"
        >
          الولادة المائية
        </h2>
        <div
          class="flex items-center justify-center gap-4 text-lg font-semibold sm:text-2xl"
        >
          <NuxtLink :to="localePath('/')" class="text-white"
            >الرئيسية
          </NuxtLink>
          <span class="text-white">></span>
          <NuxtLink :to="localePath('/blogs')" class="text-white underline">معلومات تهمك</NuxtLink>
          <span class="text-white">></span>
          <span class="text-white underline">الولادة المائية</span>
        </div>
      </div>
    </div>
    <div class="container my-14">
      <img
        src="~/assets/images/blog-1.jpg"
        alt="blog"
        class="mb-6 w-full rounded-2xl sm:h-[550px]"
      />
      <h2 class="font-bold text-lg mb-6 sm:text-3xl"> كيفية إجراء الولادة المائية:</h2>
      <p class="text-base mb-4 font-semibold text-subtitle sm:text-xl">
        تجهيز البركة: يتم ملء بركة الماء بماء دافئ (عادة بين 37-38 درجة مئوية) بما يكفي لتغطية بطن الأم وأعلى فخذيها.


      </p>
      <p class="text-base mb-4 font-semibold text-subtitle sm:text-xl">
        مراقبة الأم والجنين: يجب مراقبة حالة الأم والجنين باستمرار خلال عملية الولادة. يتم قياس ضغط الدم ومعدل ضربات القلب وحرارة الماء بانتظام.
      </p>
      <p class="text-base mb-4 font-semibold text-subtitle sm:text-xl">
       
الولادة في الماء: عند بدء مراحل الولادة النشطة، تُسمح للأم بالانخراط في الماء لتخفيف الألم وتسهيل الولادة. الأم قد تجلس أو تقف أو تطفو في الماء خلال هذه الفترة.

      </p>
      <p class="text-base mb-4 font-semibold text-subtitle sm:text-xl">
       
        قيادة الأمر بالولادة: يقوم القابل أو الطبيب بإرشاد الأم خلال عملية الولادة المائية، ويمكنهم المساعدة في تحريك وضبط وضعية الجسم بشكل صحيح.
      </p>
      <p class="text-base mb-4 font-semibold text-subtitle sm:text-xl">
        استقبال الجنين: بعد ولادة الجنين، يتم رفعه بحذر من الماء ووضعه على صدر
        الأم. من المهم متابعة حالة الجنين والتأكد من أنه يتنفس ويستجيب بشكل
        طبيعي.
      </p>
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
