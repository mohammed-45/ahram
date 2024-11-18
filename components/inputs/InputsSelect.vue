<template>
  <VeeField :name="name" v-slot="{ field, meta }">
    <label class="label !text-base" :for="id">{{ label }}</label>

    <div class="select_wrapper">
      <ClientOnly>
        <Listbox v-bind="field" :defaultValue="{ name: options[0].name }">
          <div class="relative">
            <ListboxButton
              v-slot="{ value }"
              class=" relative w-full !text-sm !font-medium cursor-pointer rounded-full border border-white bg-white px-6 py-4 text-start focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2"
              :class="{
                error: !meta.valid && meta.touched,
              }"
            >
              <span class="block text-subtitle truncate">
                {{ value.name || value.title }}
              </span>
              <span
                class="pointer-events-none absolute inset-y-0 end-6 flex items-center"
              >
              <img src="~/assets/images/arrow-down.svg" alt="arrow" height="12" width="12">

              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-[120] mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white p-1 text-base ring-1 ring-black/5 focus:outline-none"
              >
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="option in options"
                  :key="option.id"
                  :value="option"
                  as="template"
                >
                  <li
                    :class="[
                      active ? 'bg-primary text-white' : 'text-subtitle',
                      'relative cursor-pointer select-none rounded-lg px-4 py-2',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-medium' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ option.name || option.title }}</span
                    >
                    <span
                      v-if="selected"
                      class="absolute inset-y-0 end-6 flex items-center text-black"
                    >
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </ClientOnly>

      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        class="mt-1 text-sm text-red-500"
      />
    </div>
  </VeeField>
</template>

<script setup>
const props = defineProps({
  // options: {
  //   required: true,
  // },
  name: {
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  defVal: {
    type: String,
    required: true,
  },
  optionLabel: {
    default: "name",
    required: false,
  },
  id: {
    type: String,
    required: true,
  },
  placeholder: {
    required: false,
  },
});

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const options = ref([{name: 'field'},{name:"field 2"}])
</script>

<style lang="scss">

</style>
