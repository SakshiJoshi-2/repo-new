<template>
  <div>
    <div class="container">
      <h2 class="heading-center">Timetable</h2>
      <div class="container">
        <!-- <scheduler class="left-container" :events="events"></scheduler> -->
        <Scheduler class="left-container" :events="events"/>
      </div>
    </div>
  </div>
</template>
<script>
import Scheduler from '@/components/Scheduler.vue'
export default {
  layout: 'teacherlayout',

  components: { Scheduler },
  data() {
    return {
      events: [
        {
          id: 1,
          start_date: '2020-01-20 6:00',
          end_date: '2020-01-20 15:00',
          text: 'Event 1',
        },
        {
          id: 2,
          start_date: '2020-01-23 6:00',
          end_date: '2020-01-23 20:00',
          text: 'Event 2',
        },
      ],
    }
  },
}
</script>

<style type="text/css">
.heading-center {
  text-align: center;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.container {
  height: 100%;
  width: 100%;
}

.left-container {
  overflow: hidden;
  position: relative;
  height: 100vh;
}
</style>