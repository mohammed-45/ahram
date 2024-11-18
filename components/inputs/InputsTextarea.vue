<template>
  <VeeField :name="name" v-slot="{ field, meta }">
    <div
      class="input_wrapper text_area"
      :class="!meta.valid && meta.touched ? 'error' : ''"
    >
      <label :for="id" class="label" v-if="label">{{ label }}</label>

      <textarea
        :rows="rows"
        :id="id"
        v-bind="field"
        :placeholder="placeholder"
        class="text-subtitle !m-0"
        :class="
          !meta.valid &&
          meta.touched &&
          'error min-h-[130px] resize-none border-red-500 text-sm   placeholder:text-red-500 lg:text-lg'
        "
      />

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
  rows: {
    required: false,
  },

  placeholder: {
    required: true,
  },
});
</script>

<style lang="scss">

</style>
