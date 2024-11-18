<template>
  <div>
    <div
      style="background-size: 100%"
      class="mb-10 flex min-h-[320px] flex-col items-center justify-center bg-[url('/public/intro-hero.png')] bg-no-repeat py-14"
    >
      <h2
        class="text-start text-xl font-bold text-white sm:text-3xl lg:text-5xl"
      >
      السياسة والخصوصية   </h2>
      <p
        class="mt-8 max-w-[1000px] text-start text-lg !leading-[40px] text-white sm:text-xl"
      >
      ندرك أن لديك بعض الاستفسارات حول خدماتنا، لذا قمنا بإعداد قائمة شاملة بالأسئلة الشائعة لتزويدك بكل المعلومات التي قد تحتاجها.     </p>
    </div>

    <div class="container">
      <div class="my-20">
        <ClientOnly>
          <TabGroup as="template">
            <TabList
              class=" flex my-16 flex-wrap items-center justify-between gap-6 rounded-2xl bg-white p-6"
            >
              <Tab v-slot="{ selected }" as="template"
                ><button
                  class="tabs"
                  :class="selected ? '!bg-[#734E10] !text-white' : ''"
                >
                  عن موكًل
                </button></Tab
              >
              <Tab v-slot="{ selected }" as="template"
                ><button
                  class="tabs"
                  :class="selected ? '!bg-[#734E10] !text-white' : ''"
                >
                  الاسئلة الشائعة بالموكَّل طالب العمرة
                </button></Tab
              >
              <Tab v-slot="{ selected }" as="template"
                ><button
                  class="tabs"
                  :class="selected ? '!bg-[#734E10] !text-white' : ''"
                >
                  الاسئلة الشائعة بالموكَّل مؤدى العمرة
                </button></Tab
              >
            </TabList>
            <TabPanels>
              <TabPanel
                class="tab_text space-y-4"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <ClientOnly>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn "
                    :unmount="true"
                  >
                    <DisclosureButton
                      class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                      :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel 
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >
                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >
                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >
                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >
                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >
                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </ClientOnly>
              </TabPanel>
              <TabPanel
                class="tab_text space-y-4"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <ClientOnly>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn "
                    :unmount="true"
                  >
                    <DisclosureButton
                      class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                      :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel 
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >
                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >
                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >
                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >
                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >



                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                      <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                                              <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </ClientOnly>
              </TabPanel>
              <TabPanel
                class="tab_text space-y-4"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <ClientOnly>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn "
                    :unmount="true"
                  >
                    <DisclosureButton
                      class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                      :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel 
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >
                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >
                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >
                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >
                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    v-slot="{ open }"
                    data-wow-duration="1.3s"
                    data-wow-delay="0s"
                    class="animated wow zoomIn"
                  >
                    <DisclosureButton
                    class="flex w-full justify-between items-center bg-white p-6 text-lg sm:text-xl  text-blackTitle outline-none"
                    :class="open ? 'rounded-t-2xl' : 'rounded-2xl'"
                    >
                      <h3 class="font-semibold">هل يجوز الاعتمار بدلاً عن شخص اخر؟</h3>
                                            <div style="box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);" class="size-12 bg-white rounded-full flex items-center justify-center">
                        <img
                        src="~/assets/images/arrow-down.svg"
                        alt="down"
                        class="h-5 w-5 transition-all duration-500"
                        :class="open ? 'rotate-180 ' : ''"
                      />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel
                      class="space-y-6 animated wow fade-down  rounded-b-2xl  bg-white p-6 text-base text-subtitle shadow-sm transition duration-300"
                    >
                      <div class="font-semibold">
                        هل يجوز الاعتمار بدلاً عن شخص اخر؟
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </ClientOnly>
              </TabPanel>

              <!-- <TabPanel
                    class="tab_text"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    >{{ items.overview[0].message_description }}</TabPanel
                  >
                  <TabPanel
                    class="tab_text"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    >{{ items.overview[0].vision_description }}</TabPanel
                  >
                  <TabPanel
                    class="tab_text"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    >{{ items.overview[0].mission_description }}</TabPanel
                  > -->
            </TabPanels>
            <!-- <TabPanels>
                  <TabPanel
                    class="tab_text"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    >{{ items.overview[0].breif_description }}</TabPanel
                  >
                  <TabPanel
                    class="tab_text"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    >{{ items.overview[0].message_description }}</TabPanel
                  >
                  <TabPanel
                    class="tab_text"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    >{{ items.overview[0].vision_description }}</TabPanel
                  >
                  <TabPanel
                    class="tab_text"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    >{{ items.overview[0].mission_description }}</TabPanel
                  >
                </TabPanels> -->
          </TabGroup>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
</script>

<style lang="scss">
.tabs {
  @apply rounded-lg bg-white p-4 text-lg font-semibold text-[#734E10] outline-none transition-all duration-300 sm:text-xl;
}
.tab_text {
  @apply text-description transition-all duration-300;
}
</style>
