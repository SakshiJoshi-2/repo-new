import Vue from 'vue'
import VCalendar from 'v-calendar'
import { setupCalendar } from 'v-calendar'

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'vc',
})

setupCalendar({
  componentPrefix: 'vc',
})
