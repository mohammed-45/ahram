<template>
    <div>
        <div class="breadcrumb">
            <div class="fixed-bg bg-[url('/public/shape-2.png')]"></div>
            <div class="container relative z-10">
                <h2
        class="mb-10 text-center text-xl font-bold text-white sm:text-2xl lg:text-4xl"
      >
        معلومات تهمك
      </h2>
      <div class="flex gap-4 justify-center items-center font-semibold text-lg sm:text-2xl">
        <NuxtLink :to="localePath('/')" class="text-white">الرئيسية </NuxtLink> <span class="text-white">></span>  <span class="text-white underline">معلومات تهمك</span>
      </div>
            </div>
        </div>
        <div class="container my-14">
          <div 
        class="mt-10 grid grid-cols-1 gap-x-6 sm:gap-y-6 gap-y-3 md:grid-cols-2 lg:grid-cols-3"
      >
        <div class="bg-white shadow-xl group rounded-2xl p-6">
          <div class="overflow-hidden rounded-xl  mb-4">
          <NuxtLink :to="localePath('/water-birth')">
            <img src="~/assets/images/blog-1.jpg" alt="blog" class="transition duration-[400] group-hover:scale-[1.1] w-full max-w-[100%] rounded-xl object-cover h-[280px]">
          </NuxtLink>
          </div>
          <h3 
        class="text mb-2 text-lg font-bold   text-primary sm:text-xl lg:text-2xl"
      >
        
الولادة المائية

      </h3>
      <p class="line-clamp-3 text-sm sm:text-base font-medium text-subtitle">
        
        في الولادة المائية، تلد الأم وهي مغمورة في الماء، عادة في حوض قابل للنفخ أو ثابت. يمكنها أيضًا اختيار المخاض في الماء والولادة خارجه
        . قد يكون هذا خيارًا جيدًا إذا كنت تريد فوائد العلاج المائي             </p>
        <NuxtLink :to="localePath('/water-birth')"> <GeneralButton class="text-white mt-4 py-3 bg-primary hover:bg-secondary !h-auto" :text="$t('BUTTONS.showMore')"></GeneralButton>
       </NuxtLink>
      </div>
        <div class="bg-white shadow-xl group rounded-2xl p-6">
          <div class="overflow-hidden rounded-xl  mb-4">
            <NuxtLink :to="localePath('/diabetic-coma')">
            <img src="~/assets/images/blog-2.jpg" alt="blog" class="transition duration-[400] group-hover:scale-[1.1] w-full max-w-[100%] rounded-xl object-cover h-[280px]">
</NuxtLink>
          </div>
          <h3 
        class="text mb-2 text-lg font-bold   text-primary sm:text-xl lg:text-2xl"
      >
        
      الغيبوبة السكرية

      </h3>
      <p class="line-clamp-3 text-sm sm:text-base font-medium text-subtitle">
        
        غيبوبة السكري هي اضطراب مهدّد للحياة يسبّب الإغماء. إذا كنتَ مصابًا بداء السكري، فقد يؤدي الارتفاع الخطير في سكر الدم (فرط سكر الدم) أو الانخفاض الخطير في سكر الدم (نقص سكر الدم) إلى حدوث غيبوبة السكري.           </p>
        <NuxtLink :to="localePath('/diabetic-coma')">
        <GeneralButton class="text-white mt-4 py-3 bg-primary hover:bg-secondary !h-auto" :text="$t('BUTTONS.showMore')"></GeneralButton>
       </NuxtLink>
      </div>
        <div class="bg-white shadow-xl group rounded-2xl p-6">
          <div class="overflow-hidden rounded-xl  mb-4">
            <NuxtLink :to="localePath('/skin-care')">   <img src="~/assets/images/blog-3.jpg" alt="blog" class="transition duration-[400] group-hover:scale-[1.1] w-full max-w-[100%] rounded-xl object-cover h-[280px]">
</NuxtLink>
          </div>
          <h3 
        class="text mb-2 text-lg font-bold   text-primary sm:text-xl lg:text-2xl"
      >
        
      العناية بالبشرة

      </h3>
      <p class="line-clamp-3 text-sm sm:text-base font-medium text-subtitle">
        
        العناية بالبشرة عبارة عن مجموعة ممارسات من أجل المحافظة على سلامة البشرة، وتعزيز المظهر الخارجي وتحسينه، بالإضافة إلى تقليل أمراض الجلد والشيخوخة.      </p>
        <NuxtLink :to="localePath('/skin-care')">  <GeneralButton class="text-white mt-4 py-3 bg-primary hover:bg-secondary !h-auto" :text="$t('BUTTONS.showMore')"></GeneralButton>
       </NuxtLink>
      </div>
        <div class="bg-white shadow-xl group rounded-2xl p-6">
          <div class="overflow-hidden rounded-xl  mb-4">
            <NuxtLink :to="localePath('/hair-care')">    <img src="~/assets/images/blog-4.jpg" alt="blog" class="transition duration-[400] group-hover:scale-[1.1] w-full max-w-[100%] rounded-xl object-cover h-[280px]">
</NuxtLink>
          </div>
          <h3 
        class="text mb-2 text-lg font-bold   text-primary sm:text-xl lg:text-2xl"
      >
        
      العناية بالشعر

      </h3>
      <p class="line-clamp-3 text-sm sm:text-base font-medium text-subtitle">
        
        العناية بالشعر هو مصطلح شامل للنظافة والجمال اللذين ينطويان على شعر رأس الإنسان. وتشمل العناية بالشعر تهذيبه أو تشذيبه أو حلقه وفقا لموضع الشعر ونوعه، ووفقا لمختلف العمليات التي يمكن تطبيقها على الشعر. تختلف أنواع الشعر فهو مظهر من مظاهر التنوع البشري.   </p>
        <NuxtLink :to="localePath('/hair-care')">    <GeneralButton class="text-white mt-4 py-3 bg-primary hover:bg-secondary !h-auto" :text="$t('BUTTONS.showMore')"></GeneralButton>
        </NuxtLink>
      </div>
      </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.breadcrumb {
    padding: 200px 0;
    position: relative;
    background: linear-gradient(90deg, rgb(30, 113, 190) 0%, rgb(0, 67, 130) 100%);
    text-align: center ;

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