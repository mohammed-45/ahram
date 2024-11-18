<template>
  <div
    class="fixed start-0 top-0 z-[100] flex h-screen w-full items-center justify-center bg-[#090B0E] p-5 lg:p-0"
    @click="
      () => {
        if (!disabled) {
          $emit('close');
        }
      }
    "
  >
    <div
      @click.stop
      v-if="special" data-aos="zoom-in"
        data-aos-duration="1000"
      class="relative h-[500px] max-h-[100%] w-full max-w-[100%] rounded-[20px] lg:h-[800px] lg:w-[80%]"
    >
      <slot />
      <button
        type="button"
        @click="$emit('close')"
        class="absolute end-[20px] top-[20px] mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-white"
        aria-label="close-modal"
      >
        <img src="~/assets/images/close.svg" alt="close" class="h-4 w-4" />
      </button>
    </div>

    <div
      v-else
      @click.stop
      class="w-full rounded-[10px] bg-white p-1 xl:p-3"
      :class="width || 'lg:w-[500px]'"
    >
      <div class="relative max-h-[90vh] w-full overflow-auto px-3 py-5 xl:px-5">
        <button
          type="button"
          @click="$emit('close')"
          class="absolute end-[20px] top-[20px] mt-1 disabled:cursor-not-allowed disabled:opacity-60"
          :disabled="disabled"
          aria-label="close-modal"
        >
          <ClientOnly>
            <font-awesome-icon icon="fa-solid fa-close" class="text-2xl" />
          </ClientOnly>
        </button>

        <div class="mb-3 flex items-center justify-center">
          <img
            :src="settings.website_logo"
            class="h-[50px] w-[130px] object-contain"
            alt="logo"
            :draggable="false"
          />
        </div>

        <div
          class="flex flex-col items-start gap-3 text-title"
          :class="text ? 'mb-7' : 'mb-5'"
        >
          <h3 v-if="title" class="mt-5 text-2xl font-medium italic">
            {{ title }}
          </h3>

          <p v-if="text" v-html="text" />
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useGlobalStore } from "~/store/global";

defineProps({
  title: {
    type: String,
    required: false,
    default: null,
  },
  text: {
    type: String,
    required: false,
    default: null,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  width: {
    type: String,
    required: false,
    default: "",
  },
  special: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// const globalStore = useGlobalStore();
// const { settings } = storeToRefs(globalStore);

onMounted(() => {
  document.body.classList.add("overflow-hidden");
});

onUnmounted(() => {
  document.body.classList.remove("overflow-hidden");
});
</script>
