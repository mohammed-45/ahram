<template>
  <button
    :type="type || 'button'"
    class="h-[55px] min-w-[180px] max-w-[100%] !rounded-[8px] bg-primary px-3 text-base font-medium text-blackTitle duration-300 disabled:cursor-not-allowed disabled:opacity-60 "
    :disabled="loading"
    :aria-label="text"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: null,
    required: true,
  },
  type: {
    type: String,
    default: "button",
    required: false,
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
