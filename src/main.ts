import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";
import PageTitle from "./components/PageTitle.vue";
import PrimaryButton from "./components/PrimaryButton.vue";
import InputField from "./components/InputField.vue";
import ExternalLink from "./components/ExternalLink.vue";

const pinia = createPinia();

import "./assets/base.css";

const i18n = createI18n({
  locale: "en",

  messages,

  datetimeFormats: {
    en: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
    ja: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
    de: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
    },
  },
});

const app = createApp(App);

app.component("PageTitle", PageTitle);
app.component("PrimaryButton", PrimaryButton);
app.component("InputField", InputField);
app.component("ExternalLink", ExternalLink);

app.use(router);
app.use(i18n);
app.use(pinia);

app.directive("christmas", (el, binding) => {
  const duration = binding.value ?? 2; // the length of the animation in seconds
  const color = binding.arg ?? "red-green"; // the class to add for the different colors

  // this will be called for both `mounted` and `updated`
  el.classList.add("christmas-text", color);

  el.style.animationDuration = duration + "s"; // change the animation depending on the length
});

app.mount("#app");
