import svgIcon from '../components/svgIcon.vue'
import 'virtual:svg-icons-register'
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('svg-icon', svgIcon)
})