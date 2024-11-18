<template>
  <div class="relative mt-32">
    <div class="absolute bottom-0 start-0 h-[330px] w-full overflow-hidden">
      <!-- <div class="relative z-0 h-full overflow-hidden"> -->
      <img
        src="~/assets/images/sub-bg.png"
        @error="setErrorImg($event)"
        alt="subs"
        width="400"
        height="260"
        class="absolute z-10 h-full w-full max-w-[100%] object-cover lg:object-fill"
      />

      <!-- </div> -->
    </div>
    <div
      class="container relative z-10 flex items-center justify-between gap-x-40 gap-y-14 py-20 xl:pb-8 xl:pt-20"
    >
      <div class="space-y-6 pt-0 xl:pt-40">
        <h3 class="text-lg font-bold text-white">
          {{ $t("labels.subscribe") }}
        </h3>
        <p class="b reak-words pb-4 text-2xl text-white">
          {{ $t("labels.subscribeDesc") }}
        </p>
        <VeeForm as="div" @submit="onSubmit" :validation-schema="schema">
          <form class="subscribe error">
            <img
              src="~/assets/images/sms.svg"
              @error="setErrorImg($event)"
              alt="subs"
              width="24"
              height="24"
              class="z-10 ms-4 h-6 w-6 max-w-[100%]"
            />
            <inputs-base
              id="email_address"
              name="email"
              type="x"
              :placeholder="$t('FORMS.Placeholders.yourEmail')"
            />
            <button
              class="whitespace-nowrap"
              :disabled="btnLoading"
              type="submit"
            >
              <img
                src="~/assets/images/send.svg"
                @error="setErrorImg($event)"
                alt="subs"
                width="24"
                height="24"
                class="z-10 h-6 w-6 max-w-[100%]"
              />
            </button>
          </form>
        </VeeForm>
      </div>
      <!-- <div class=""> -->
      <img
        src="~/assets/images/boldozer.png"
        @error="setErrorImg($event)"
        alt="subs"
        width="400"
        height="400"
        class="z-10 hidden h-[450px] w-[500px] max-w-[100%] xl:block"
      />
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>
import * as yup from "yup";

import { useToast } from "vue-toastification";
const toast = useToast();
const {
  public: { baseURL },
} = useRuntimeConfig();
const btnLoading = ref(false);
const i18n = useI18n();

const schema = yup.object({
  email: yup
    .string()
    .required(i18n.t("FORMS.Validation.email"))
    .test("email", i18n.t("FORMS.Validation.validEmail"), (value) => {
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-z])*$/.test(
        value
      );
    }),
});

const onSubmit = async (values, actions) => {
  btnLoading.value = true;

  await $fetch(`${baseURL}client/subscriptions`, {
    method: "POST",
    body: {
      email: values.email,
    },
    headers: {
      Accept: "application/json",

      "Accept-Language": i18n.locale.value,
    },
  })
    .then((res) => {
      actions.resetForm();
      toast.success(res.message);
    })
    .catch((err) => {
      toast.error(err.response._data.message);
    })
    .finally(() => (btnLoading.value = false));
};
</script>

<style lang="scss">
.subscribe {
  @apply relative flex h-[60px] max-w-[500px] items-center rounded-[10px]  bg-white p-1 outline-none;
  .input_wrapper {
    width: 100%;
    height: 100%;
    input {
      background: transparent !important;
      border-radius: 0 !important;
      width: 100% !important;
      height: 100% !important;
      font-size: 16px !important;
      padding: 24px 20px 24px 14px !important;
      color: black !important;

      border: none !important;
      outline: none !important;
      flex: 1 !important;
      caret-color: black !important;
    }
  }

  .subscribe.error {
    border-color: #ef4444 !important;
  }
  button {
    @apply flex h-full min-w-[80px] items-center justify-center rounded-md bg-primary  px-2 text-sm;
    font-weight: 700;
    // padding: 20px;
    // min-width: 180px;
    height: 100%;
    cursor: pointer;
  }
}
</style>
