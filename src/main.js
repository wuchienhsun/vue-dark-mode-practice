import Vue from 'vue'
import VueDarkMode from "vuedarkmode";
import App from './App.vue'
import store from './store'
import router from "./router/index"
// import router from './router'
Vue.use(VueDarkMode, {
  // Specify the components to declare globally in your project
  // When undefined, null or given an empty array, all components will be imported
  components: [
    // Base components
    "alert", "avatar", "badge", "button", "divider", "heading", "icon", "progress-bar", "social-login", "spinner",

    // Form components
    "checkbox", "file", "input", "label", "message", "radios", "select", "tabs", "textarea", "toggle"
  ]
});
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
