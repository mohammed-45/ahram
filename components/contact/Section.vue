<template>
  <div>
    <div class="bg-[url('/public/sections-bg.png')] bg-cover py-14">
      <div class="container">
        <div class="text-white">
          <NuxtLink :to="localePath('/')" class="text-xl text-white">{{
            $t("NAV.home")
          }}</NuxtLink>
          .
          <span class="text-xl text-[#CECECE]">{{ $t("NAV.contact") }}</span>
        </div>
        <h1 class="mt-4 text-4xl text-white">{{ $t("NAV.contact") }}</h1>
      </div>
    </div>
    <div class="mb-12 mt-28 bg-white">
      <div class="container">
        <div class="relative grid grid-cols-2 gap-8">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            class="relative col-span-3 max-w-[100%] xl:col-span-1"
          >
            <div>
              <h2
                class="mb-4 text-xl font-bold text-blackTitle sm:text-2xl md:text-3xl"
              >
                {{ $t("labels.stayInContact") }}
              </h2>
              <p class="mb-6 text-blackTitle">{{ $t("labels.askAbout") }}</p>
              <div class="form_wrapper">
                <VeeForm
                  as="div"
                  @submit="onSubmit"
                  :validation-schema="schema"
                >
                  <form class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div class="col-span-1">
                      <inputs-base
                        id="full_name"
                        name="full_name"
                        type="text"
                        :placeholder="$t('FORMS.Placeholders.fullName')"
                      />
                    </div>

                    <div class="col-span-1">
                      <inputs-base
                        id="email_address"
                        name="email"
                        type="email"
                        :placeholder="$t('FORMS.Placeholders.yourEmail')"
                      />
                    </div>

                    <div class="col-span-2">
                      <inputs-textarea
                        rows="6"
                        id="subject"
                        name="subject"
                        :placeholder="$t('FORMS.Placeholders.subject')"
                      />
                    </div>

                    <GeneralButton
                      class="!h-[56px] max-w-[220px] !text-lg font-medium rtl:!leading-5"
                      :text="$t('BUTTONS.send')"
                      type="submit"
                    >
                      <!-- {{ $t("BUTTONS.send") }  } -->
                    </GeneralButton>
                  </form>
                </VeeForm>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            class="relative z-10 col-span-3 max-w-[100%] rounded-xl bg-black px-6 py-10 xs:px-10 xl:col-span-1"
          >
            <div class="space-y-8" v-if="settings">
              <div
                class="flex gap-4 border-b border-primary border-opacity-25 pb-6"
                v-if="settings?.location"
              >
                <div
                  class="flex h-16 w-16 items-center justify-center rounded-full border border-primary border-opacity-25"
                >
                  <img
                    src="~/assets/images/location.svg"
                    alt="location"
                    width="32"
                    height="32"
                    class="h-8 w-8"
                  />
                </div>
                <div>
                  <h4 class="mb-2 text-xl text-white">
                    {{ $t("labels.location") }}
                  </h4>
                  <span
                    class="break-all text-base font-medium text-secondarySubtitle"
                    >{{ settings?.location }}
                  </span>
                </div>
              </div>
              <div
                class="flex gap-4 border-b border-primary border-opacity-25 pb-6"
                v-if="settings?.phones?.length"
              >
                <div
                  class="flex h-16 w-16 items-center justify-center rounded-full border border-primary border-opacity-25"
                >
                  <img
                    src="~/assets/images/phone.svg"
                    alt="phone"
                    width="32"
                    height="32"
                    class="h-8 w-8"
                  />
                </div>
                <div>
                  <h4 class="mb-2 text-xl text-white">
                    {{ $t("labels.phones") }}
                  </h4>

                  <a
                    dir="ltr"
                    class="block break-all text-base font-medium text-secondarySubtitle"
                    v-for="phone in settings.phones"
                    :href="`tel:${phone.phone_code}${phone.phone}`"
                    >{{ phone.phone_code }} {{ phone.phone }}</a
                  >
                </div>
              </div>
              <div
                class="flex gap-4 border-b border-primary border-opacity-25 pb-6"
                v-if="settings?.email"
              >
                <div
                  class="flex h-16 w-16 items-center justify-center rounded-full border border-primary border-opacity-25"
                >
                  <img
                    src="~/assets/images/envelope.svg"
                    alt="envelope"
                    width="32"
                    height="32"
                    class="h-8 w-8"
                  />
                </div>
                <div>
                  <h4 class="mb-2 text-xl text-white">
                    {{ $t("FORMS.Placeholders.email") }}
                  </h4>

                  <a
                    class="break-all text-base font-medium text-secondarySubtitle"
                    :href="`mailto:${settings.email}`"
                    >{{ settings?.email }}</a
                  >
                </div>
              </div>
            </div>
            <h2 class="mt-8 text-xl font-bold text-white">
              {{ $t("labels.socialMedia") }}:
            </h2>
            <ul class="socials mt-4">
              <li>
                <a
                  :href="settings.instagram"
                  target="_blank"
                  rel="noopener"
                  class="!border-primary !border-opacity-35"
                >
                  <img
                    src="~/assets/images/instagram.svg"
                    alt="instagram"
                    width="20"
                    height="20"
                  />
                </a>
              </li>
              <li>
                <a
                  :href="settings.facebook"
                  target="_blank"
                  rel="noopener"
                  class="!border-primary !border-opacity-35"
                >
                  <img
                    src="~/assets/images/facebook.svg"
                    alt="facebook"
                    width="20"
                    height="20"
                  />
                </a>
              </li>
              <li>
                <a
                  :href="settings.linkendin"
                  target="_blank"
                  rel="noopener"
                  class="!border-primary !border-opacity-35"
                >
                  <img
                    src="~/assets/images/linkedin.svg"
                    alt="linkedin"
                    width="20"
                    height="20"
                  />
                </a>
              </li>
              <!-- <li>
                <a
                  :href="`${settings.whats_app}`"
                  target="_blank"
                  rel="noopener"
                  class="!border-primary !border-opacity-35"
                >
                  <img
                    src="~/assets/images/whatsapp.svg"
                    alt="whatsapp"
                    width="20"
                    height="20"
                  />
                </a>
              </li> -->
              <li>
                <a
                  :href="settings.twitter"
                  target="_blank"
                  rel="noopener"
                  class="!border-primary !border-opacity-35"
                >
                  <img
                    src="~/assets/images/x.svg"
                    alt="x"
                    width="20"
                    height="20"
                  />
                </a>
              </li>
            </ul>
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

const appStore = useGlobalStore();

const settings = computed(() => appStore.settings);

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

  subject: yup.string().required(i18n.t("FORMS.Validation.subject")),
});

const onSubmit = async (values, actions) => {
  btnLoading.value = true;

  await $fetch(`${baseURL}client/contact-us`, {
    method: "POST",
    body: {
      fullname: values.full_name,
      content: values.subject,
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
.container-bg {
  @apply w-full md:w-[80%];
}
</style>
