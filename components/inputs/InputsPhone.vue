<template>
  <div>
    <label class="label !text-base" :for="id">{{ label }}</label>

    <div class="phone_wrapper">
      <VeeField type="text" :name="phoneCodeName" v-slot="{ meta }">
        <ClientOnly>
          <Menu
            as="div"
            v-if="country"
            class="relative flex items-center"
            v-slot="{ open }"
          >
            <MenuButton :id="code_id">
              <div class="flex items-center gap-1 bg-white text-[#171717]">
                <nuxt-img
                  format="webp"
                  width="20"
                  height="15"
                  :alt="country.flag.alt"
                  :src="country.flag.media"
                  :srcset="`${country.flag.media} 480w, ${country.flag.media} 1080w`"
                  loading="lazy"
                  :class="`  flag h-auto w-5 flag-${country.phone_code}`"
                />

                +{{ country.phone_code }}

                <ClientOnly>
                  <font-awesome-icon
                    class="fa-solid text-lg"
                    :icon="
                      open ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'
                    "
                  />
                </ClientOnly>
              </div>
            </MenuButton>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute top-full z-[1002] w-[100px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                :class="$i18n.locale == 'ar' ? 'left-0  ' : '   right-0'"
              >
                <MenuItem
                  as="div"
                  class="text-start"
                  v-for="(item, index) in countries"
                  :key="index"
                >
                  <button
                    type="button"
                    class="text-text-subtitle flex items-center gap-2 px-2 py-4 text-start"
                    @click="country = item"
                  >
                    <nuxt-img
                      format="webp"
                      width="20"
                      height="15"
                      :alt="item.name"
                      :src="item.flag.media"
                      :class="` flag h-4 w-5 flag-${item.phone_code}`"
                      loading="lazy"
                    />
                    <span>+ {{ item.phone_code }}</span>
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </ClientOnly>
      </VeeField>

      <!-- <div class="h-4 w-px bg-[#f3f4f7]"></div> -->
      <VeeField type="phone" :name="phoneName" v-slot="{ field, meta }">
        <div
          class="mb-0 flex-1 flex-col"
          :class="!meta.valid && meta.touched ? 'error' : ''"
        >
          <input
            type="phone"
            :id="id"
            v-bind="field"
            class="!m-0"
            :placeholder="placeholder"
            :class="[
              !meta.valid &&
                meta.touched &&
                'error   border-red-500 text-sm placeholder:text-red-500 lg:text-lg',
            ]"
          />
        </div>
      </VeeField>
    </div>
    <VeeErrorMessage
      :name="phoneCodeName"
      as="div"
      class="mt-1 pt-2 text-sm text-red-500"
    />
    <VeeErrorMessage
      :name="phoneName"
      as="div"
      class="mt-1 pt-2 text-sm text-red-500"
    />
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useGlobalStore } from "@/stores/global";

const props = defineProps({
  placeholder: {
    required: false,
  },
  label: {
    required: false,
  },
  id: {
    required: true,
  },
  code_id: {
    required: false,
  },
  phoneCodeName: {
    type: String,
    required: true,
  },
  phoneName: {
    type: String,

    required: true,
  },
});

const phoneCode = useField(`${props.phoneCodeName}`);
const country = ref(null);
const appStore = useGlobalStore();

const countries = computed(() => appStore.countries);

watch(
  () => countries.value,
  () => {
    if (countries.value?.length) {
      country.value = countries.value[0];
      phoneCode.setValue(country.value);
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>
<style lang="scss"></style>
