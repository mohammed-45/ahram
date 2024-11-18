<template>
  <div class="relative my-20">
    <div class="container">
      <h2
        class="text-center text-xl font-bold text-secondary sm:text-2xl lg:text-4xl"
      >
        التخصصات
      </h2>
      <p class="mt-2 text-center text-lg text-subtitle">
        تتميز عياداتنا بعدة تخصصات تجعل تجربة مرضانا فريدة من نوعها
      </p>
      <div
        class="mt-10 grid grid-cols-1 flex-wrap gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/teeth.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
              <img
                src="~/assets/images/teeth.png"
                class="invert w-6 h-6"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              01
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
                الاسنان
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
              يعتبر الحفاظ على صحه الفم ضروريا ليس فقط للصحه العامه بل ايضا
              لجودة حياة افضل حيث يوثر على قدرة تناول الطعام
            </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/brain.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
              <img
                src="~/assets/images/brain.png"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              02
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
                المخ والاعصاب 
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            نركز على الامراض والاصابات التي توثر على الجهاز العصبي ,مما يوثر على وظائف الجسم المختلفه
            </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/heart.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
              <img
                src="~/assets/images/heart.png"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              03
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
                قلب وأوعيه دمويه 
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            برنامج لاعاده تاهيل القلب للمساعده في استعاده النشاط البدني ونمط الحياه الصحي بعد الاصابه بامراض القلب. 
            </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/born.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
              <img
                src="~/assets/images/ovary.png"
                class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              04
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
                نسا وتوليد 
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            اجراء الفحوصات الدوريه مثل فحص سرطان عنق الرحم .                     
مراقبه المخاطر اثناء الحمل والولاده وتقديم الرعايه اثناء المخاض .

            </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/tumour.webp')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
              <img
                src="~/assets/images/cancer.png"
                class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              05
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
            اورام 
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            متابعه المرضي بعد العلاج لتقييم فعاليه العلاج واستقرار الحاله الصحيه . 
تقديم الدعم النفسي والعاطفي للمرضي وعائلاتهم .

            </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/geriatric.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
              <img
                src="~/assets/images/old.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              06
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
            طب المسنين 
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            رعايه شامله (نفسيه/جسديه/صحيه/اجتماعيه )مع الاخد في الاعتبار التغيرات التي تحدث في الجسم والعقل مع تقدم العمر.
            </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/buety.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/makeup.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              07
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
            تجميل 
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            يوثر المظهر الخارجي على الصحه النفسيه حيث يمكن لتحسين المظهر يودي الي زياده الثقه بالنفس والشعور بالسعاده.            </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/obecity.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
              <img
                src="~/assets/images/man.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              08
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
            سمنه ونحافه 
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            تزيد السمنه من خطر الاصابه بامراض القلب ,السكري من نوع 2 ,ارتفاع ضغط الدم  وبعض انواع السرطان ,بالاضافه الي مشاكل في المفصل .            </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/tizm.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/medical.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              09
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
            الروماتيزم 
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            يحدث عندما يتراكم حمض اليوريك في الجسم مما يودي الى نوابات مؤلمه من التهاب المفاصل.           </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/masalek.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/urinary.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              10
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
            المسالك  
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            نركز على صحه الجهاز التناسلى والبولى ,معالجه الامراض الشائعه مثل التهابات المثانه وحصى المثانه.           </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/ramad.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/eye.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              11
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
            رمد   
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            يركز على صحه العين والرؤيه ,نعالج المشاكل البصريه التى قد توثر على جوده الحياه.          </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/batna.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/batna.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              12
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
            باطنه عامه   
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            يلعب اطباء الباطنه دور حيويا في تقديم الرعايه الصحيه الشامله ,حيث يقومون بتشخيص وعلاج الامراض المزمنه والحاده.         </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/ezam.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/joint.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              13
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
            عظام 
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            المشاكل التي تصيب العظام يمكن ان تؤثر بشكل كبير على القدره ,الحركه والنشاط اليومي.</p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/kids.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/kids.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              14
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
            اطفال  
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            يركز على صحه الاطفال من الولاده حتي المراهقه ,يهتم اطباء الاطفال بتشخيص وعلاج الامراض ورعايه النمو والتطور السليم للطفل.</p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/ears.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/ears.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              15
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
            انف واذن  
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            يركز على تشخيص وعلاج الحالات المرتبطه بالانف والادن والحنجره بالاضافه الي بعض  مناطق الراس والعنق.</p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/flesh.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/rash.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              16
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
            جلديه 
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            يعتبر الجلد اكبر عضو في الجسم ,ويلعب دور رئيسيا في حمايه الجسم من العوامل الخارجيه ,دلك فان صحه الجلد تعكس صحه عامه .</p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-white p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/mar.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 group-hover:opacity-100"
          ></div>

          <div
            class="absolute -bottom-14 -end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-md transition-all duration-300 group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/gender.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-0 transition-all duration-300 group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              17
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-blackTitle transition-all duration-300 group-hover:text-white sm:text-2xl"
            >
              
            ذكوره  
              
            </h3>
            <p
              class="font-semibold text-subtitle transition-all duration-300 group-hover:text-white"
            >
            يركز على الوقايه والتشخيص والعلاج للمشاكل الصحيه التي توثر على الرجال ويعزز الوعى بالصحه العامه والعوامل المؤثره فيها.</p>
          </div>
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
