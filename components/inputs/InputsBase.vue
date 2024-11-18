<template>
  <VeeField :type="type" :name="name" v-slot="{ field, meta }">
    <div
      class="input_wrapper relative"
      :class="(!meta.valid && meta.touched ? 'error' : '', classes)"
    >
      <label :for="id" class="label" v-if="label">{{ label }}</label>
      <input
        :type="type"
        :id="id"
        :accept="accept"
        v-bind="field"
        :placeholder="placeholder"
        class="!ps-4 text-subtitle"
        :class="
          !meta.valid &&
          meta.touched &&
          'error  border-red-500  text-sm placeholder:text-red-500 lg:text-lg'
        "
      />

      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        class="error pt-2"
      />
    </div>
  </VeeField>
</template>

<script setup>
defineProps({
  id: {
    required: true,
  },
  name: {
    required: true,
  },
  label: {
    required: false,
  },
  placeholder: {
    required: false,
  },
  classes: {
    required: false,
  },
  accept: {
    required: false,
  },
  type: {
    required: false,
    default: "text",
  },
});
const emit = defineEmits(["change"]);
</script>

<style lang="scss"></style>
