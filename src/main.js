import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//axios
import axios from 'axios'
Vue.prototype.axios=axios;
//better-scroll
import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller)

//loading
import Loading from '@/components/Loading'
	Vue.component('Loading',Loading)

Vue.filter('setWH',(url,arg)=>{
	return url.replace(/w\.h/,arg);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
