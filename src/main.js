import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/css/bootstrap.min.css";
import "./assets/css/styles.css";

createApp(App).use(router).mount("#app");
