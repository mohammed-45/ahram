<template>
  <div class="relative my-20">
    <div class="container">
      <div class="flex items-center justify-between gap-2">
        <h2 
        class="text my-0 text-xl font-bold text-secondary sm:text-2xl lg:text-4xl"
      >
        
معلومات تهمك 

      </h2>
      <NuxtLink :to="localePath('/blogs')">
      <GeneralButton class="text-white bg-secondary hover:bg-primary" :text="$t('BUTTONS.showMore')"></GeneralButton> </NuxtLink>
      </div>
      <div 
        class="mt-10 grid grid-cols-1 gap-x-6 sm:gap-y-6 gap-y-3 md:grid-cols-2 lg:grid-cols-3"
      >
        <div class="bg-white shadow-xl group rounded-2xl p-6">
          <div class="overflow-hidden rounded-xl  mb-4">
          <img src="~/assets/images/blog-1.jpg" alt="blog" class="transition duration-[400] group-hover:scale-[1.1] w-full max-w-[100%] rounded-xl object-cover h-[280px]">

          </div>
          <h3 
        class="text mb-2 text-lg font-bold   text-primary sm:text-xl lg:text-2xl"
      >
        
الولادة المائية

      </h3>
      <p class="line-clamp-3 text-sm sm:text-base font-medium text-subtitle">
        
        في الولادة المائية، تلد الأم وهي مغمورة في الماء، عادة في حوض قابل للنفخ أو ثابت. يمكنها أيضًا اختيار المخاض في الماء والولادة خارجه
        . قد يكون هذا خيارًا جيدًا إذا كنت تريد فوائد العلاج المائي             </p>
        <GeneralButton class="text-white mt-4 py-3 bg-primary hover:bg-secondary !h-auto" :text="$t('BUTTONS.showMore')"></GeneralButton>
       
      </div>
        <div class="bg-white shadow-xl group rounded-2xl p-6">
          <div class="overflow-hidden rounded-xl  mb-4">
          <img src="~/assets/images/blog-2.jpg" alt="blog" class="transition duration-[400] group-hover:scale-[1.1] w-full max-w-[100%] rounded-xl object-cover h-[280px]">

          </div>
          <h3 
        class="text mb-2 text-lg font-bold   text-primary sm:text-xl lg:text-2xl"
      >
        
      الغيبوبة السكرية

      </h3>
      <p class="line-clamp-3 text-sm sm:text-base font-medium text-subtitle">
        
        غيبوبة السكري هي اضطراب مهدّد للحياة يسبّب الإغماء. إذا كنتَ مصابًا بداء السكري، فقد يؤدي الارتفاع الخطير في سكر الدم (فرط سكر الدم) أو الانخفاض الخطير في سكر الدم (نقص سكر الدم) إلى حدوث غيبوبة السكري.           </p>
        <GeneralButton class="text-white mt-4 py-3 bg-primary hover:bg-secondary !h-auto" :text="$t('BUTTONS.showMore')"></GeneralButton>
       
      </div>
        <div class="bg-white shadow-xl group rounded-2xl p-6">
          <div class="overflow-hidden rounded-xl  mb-4">
          <img src="~/assets/images/blog-3.jpg" alt="blog" class="transition duration-[400] group-hover:scale-[1.1] w-full max-w-[100%] rounded-xl object-cover h-[280px]">

          </div>
          <h3 
        class="text mb-2 text-lg font-bold   text-primary sm:text-xl lg:text-2xl"
      >
        
      العناية بالبشرة

      </h3>
      <p class="line-clamp-3 text-sm sm:text-base font-medium text-subtitle">
        
        العناية بالبشرة عبارة عن مجموعة ممارسات من أجل المحافظة على سلامة البشرة، وتعزيز المظهر الخارجي وتحسينه، بالإضافة إلى تقليل أمراض الجلد والشيخوخة.      </p>
        <GeneralButton class="text-white mt-4 py-3 bg-primary hover:bg-secondary !h-auto" :text="$t('BUTTONS.showMore')"></GeneralButton>
       
      </div>
        <div class="bg-white shadow-xl group rounded-2xl p-6">
          <div class="overflow-hidden rounded-xl  mb-4">
          <img src="~/assets/images/blog-4.jpg" alt="blog" class="transition duration-[400] group-hover:scale-[1.1] w-full max-w-[100%] rounded-xl object-cover h-[280px]">

          </div>
          <h3 
        class="text mb-2 text-lg font-bold   text-primary sm:text-xl lg:text-2xl"
      >
        
      العناية بالشعر

      </h3>
      <p class="line-clamp-3 text-sm sm:text-base font-medium text-subtitle">
        
        العناية بالشعر هو مصطلح شامل للنظافة والجمال اللذين ينطويان على شعر رأس الإنسان. وتشمل العناية بالشعر تهذيبه أو تشذيبه أو حلقه وفقا لموضع الشعر ونوعه، ووفقا لمختلف العمليات التي يمكن تطبيقها على الشعر. تختلف أنواع الشعر فهو مظهر من مظاهر التنوع البشري.   </p>
        <GeneralButton class="text-white mt-4 py-3 bg-primary hover:bg-secondary !h-auto" :text="$t('BUTTONS.showMore')"></GeneralButton>
       
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function setErrorImg(e) {
  e.target.src = "/about.png";
}
</script>

<style lang="scss"></style>
