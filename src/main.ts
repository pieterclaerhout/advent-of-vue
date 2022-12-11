import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";
import PageTitle from "./components/PageTitle.vue";
import PrimaryButton from "./components/PrimaryButton.vue";
import InputField from "./components/InputField.vue";
import ExternalLink from "./components/ExternalLink.vue";

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

app.mount("#app");
