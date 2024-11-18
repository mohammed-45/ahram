<template>
  <div class="bg-cover  flex items-center mb-10 py-14 bg-[url('/public/contact.png')]">
<div class="container">
  <div class="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
    <div class="col-span-1 px-4">
      <h2
      class="text-start text-xl font-bold text-white sm:text-3xl lg:text-5xl"
    >
   تواصل معنا   </h2>
    <p class="mt-8 max-w-[1000px] text-start text-lg !leading-[40px] sm:text-2xl text-white">
     نحن هنا لخدمتك وتسهيل كل خطواتك.   </p>
   
    </div>
    <div class="col-span-1 lg:col-span-2">
      <div class="bg-white rounded-[24px] p-12 w-full">
        <div class="form_wrapper">
              <VeeForm as="div" @submit="onSubmit" :validation-schema="schema">
                <form class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <inputs-base
                      id="full_name"
                      name="full_name"
                      :label="$t('labels.name')"
                      

                      :placeholder="$t('FORMS.Placeholders.fullName')"
                    />
                  </div>

                  
                  <div>
                    <inputs-phone
                      id="phone2"
                      phoneName="phone"
                      :label="$t('labels.phone')"
                      phoneCodeName="phone_code"
                      
                      :placeholder="$t('FORMS.Placeholders.yourPhone')"
                    />
                  </div>
                  <div>
                    <inputs-base
                      id="email_address"
                      name="email"
                      type="email"
                      :label="$t('labels.email')"
                      

                      :placeholder="$t('FORMS.Placeholders.yourEmail')"
                    />
                  </div>
                  <div>
                    <inputs-select
                      id="section"
                      name="section"
                      type="select"
                      :label="$t('labels.section')"
                      

                      :placeholder="$t('FORMS.Placeholders.yourEmail')"
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <inputs-textarea
                      rows="4"
                      id="subject"
                      :label="$t('labels.subject')"
                      name="subject"
                      
                      :placeholder="$t('FORMS.Placeholders.subject')"
                    />
                  </div>

                  <GeneralButton :text="$t('BUTTONS.send')" class="w-full !py-4 col-span-1 sm:col-span-2 !text-black" type="submit">
                  </GeneralButton>
                </form>
              </VeeForm>
            </div>
      </div>
    </div>
  </div>
      
</div>
  </div>
</template>

<script setup>
import * as yup from "yup";
import { useToast } from "vue-toastification";
import { useGlobalStore } from "@/stores/global";
function setErrorImg(e) {
  e.target.src = "/about.png";
}
const i18n = useI18n();
const toast = useToast();
const {
  public: { baseURL },
} = useRuntimeConfig();
const btnLoading = ref(false);

const schema = yup.object({
  full_name: yup.string().required(i18n.t("FORMS.Validation.name")),
  email: yup
    .string()
    .required(i18n.t("FORMS.Validation.email"))
    .test("email", i18n.t("FORMS.Validation.validEmail"), (value) => {
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-z])*$/.test(
        value
      );
    }),
  phone: yup.string().required(i18n.t("FORMS.Validation.phone")),

  subject: yup.string().required(i18n.t("FORMS.Validation.subject")),
});
</script>

<style lang="scss">

</style>
