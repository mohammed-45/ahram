import axios from "axios";

// import { useGlobalStore } from "@/stores/global";

export default defineNuxtPlugin(async ({ $i18n, $config }) => {
  const router = useRouter();
  // const token = useCookie("quarterToken");
  const localePath = useLocalePath();
  const appStore = useGlobalStore();

  let api = axios.create({
    baseURL: $config.public.baseURL,
    headers: {
      common: {
        "Accept-Language": $i18n.locale.value,
      },
    },
  });

  api.interceptors.request.use(
    function (config) {
    //   if (token.value) {
    //     config.headers.Authorization = "Bearer " + token.value;
    //   }
      return config;
    },
    function (error) {
      if (error.response.status == "401") {
        // appStore.profile = null;
        // useCookie("quarterToken").value = null;
        router.push(localePath("/"));
      }
      return Promise.reject(error);
    }
  );
  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status == "401") {
        // appStore.profile = null;
        // useCookie("quarterToken").value = null;
        router.push(localePath("/"));
      }
      return Promise.reject(error);
    }
  );
  return {
    provide: {
      axios: api,
      axiosToken: axios,
    },
  };
});
