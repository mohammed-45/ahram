<template>
    <div>
        <div class="breadcrumb py-[60px] lg:py-[150px] mt-20 lg:mt-0">
            <div class="fixed-bg bg-[url('/public/shape-2.png')]"></div>
            <div class="container relative z-10">
                <h2
        class="mb-10 text-center text-xl font-bold text-white sm:text-2xl lg:text-4xl"
      >
        {{ $t("NAV.features") }}
      </h2>
      <div class="flex gap-4 justify-center items-center font-semibold text-lg sm:text-2xl">
        <NuxtLink :to="localePath('/')" class="text-white">{{ $t("NAV.home") }} </NuxtLink> <span class="text-white">></span>  <span class="text-white underline">{{ $t("NAV.features") }}</span>
      </div>
            </div>
        </div>
        <div class="container">
          <div 
        class="my-14 grid grid-cols-1 flex-wrap gap-x-6 sm:gap-y-6 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/teeth.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
              <img
                src="~/assets/images/teeth.png"
                class="invert w-6 h-6"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              01
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature1")}}  

              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc1")}}  
            </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/brain.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
              <img
                src="~/assets/images/brain.png"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              02
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature2")}}  

              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc2")}}  
            
            </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/heart.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
              <img
                src="~/assets/images/heart.png"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              03
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature3")}}  

              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc3")}}  

            </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/born.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
              <img
                src="~/assets/images/ovary.png"
                class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              04
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature4")}}  
              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc4")}}  

            </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/tumour.webp')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
              <img
                src="~/assets/images/cancer.png"
                class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              05
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature5")}}  
 
              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc5")}}  
            </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/geriatric.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
              <img
                src="~/assets/images/old.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              06
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature6")}}  
              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc6")}}              </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/buety.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/makeup.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              07
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
                        {{$t("labels.feature7")}}  

              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc7")}}          </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/obecity.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
              <img
                src="~/assets/images/man.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              08
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature8")}}  
              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc8")}}        </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/tizm.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/medical.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              09
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature9")}}  
 
              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc9")}}         </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/masalek.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/urinary.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              10
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature10")}}  
  
              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc10")}}       </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/ramad.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/eye.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              11
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature11")}}  
   
              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc11")}}         </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/batna.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/batna.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              12
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature12")}}  

              
            </h3>
            <p
            
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc12")}}
             </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/ezam.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/joint.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              13
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature13")}}  
 
              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc13")}}
       </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/kids.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/kids.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              14
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature14")}}  
              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc14")}}
         </p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/ears.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/ears.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              15
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature15")}}  
              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc15")}}</p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/flesh.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/rash.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              16
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature16")}}  
 
              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc16")}}</p>
          </div>
        </div>
        <div
          class="group relative col-span-1 overflow-hidden rounded-2xl bg-[#f7f7f7] p-[30px] transition-transform duration-300"
        >
          <!-- Background -->
          <div
            class="absolute inset-0 h-full w-full bg-[url('/public/mar.jpg')] bg-cover bg-center opacity-100 sm:opacity-0 transition-opacity duration-300 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[#002261] after:opacity-80 after:transition-all after:duration-300 sm:group-hover:opacity-100"
          ></div>

          <div
            class="absolute sm:-bottom-14 sm:-end-14 h-14 w-14 rounded-[50%] bg-secondary transition-all duration-300 group-hover:-bottom-5 -bottom-5 -end-5 sm:group-hover:-end-5"
          ></div>

          <!-- Icon and Index -->
          <div class="relative z-10 flex items-center justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full sm:bg-primary shadow-md transition-all duration-300 bg-secondary sm:group-hover:bg-secondary"
            >
            <img
                src="~/assets/images/gender.png"
                 class="w-6 h-6 invert"
                alt="Service Icon"
              />
            </div>
            <h3
              class="text-4xl font-bold text-[#002261] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100"
              style="-webkit-text-stroke: 1px white"
            >
              17
            </h3>
          </div>

          <!-- Title and Subtitle -->
          <div class="relative z-10 mt-4">
            <h3
              class="mb-2 text-lg font-bold text-white sm:text-blackTitle transition-all duration-300 sm:group-hover:text-white sm:text-2xl"
            >
              
            {{$t("labels.feature17")}}  
              
            </h3>
            <p
              class="font-semibold text-white sm:text-subtitle transition-all duration-300 sm:group-hover:text-white"
            >
            {{$t("labels.featuresDesc17")}}
          </p>
          </div>
        </div>
      </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.breadcrumb {
    
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