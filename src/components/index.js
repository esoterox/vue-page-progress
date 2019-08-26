import VuePageProgress from "@/components/VuePageProgress";

VuePageProgress.install = function install(Vue) {
  Vue.component("vue-page-progress", VuePageProgress);
};

export default VuePageProgress;
