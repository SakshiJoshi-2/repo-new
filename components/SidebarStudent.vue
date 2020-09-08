<template>
  <div>
    <sidebar-menu :menu="menu" />
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'

export default {
  components: {
    SidebarMenu,
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Student',
        },

        {
          href: '/student/myprofile',
          title: 'My Profile',
        },
        {
          href: '/student/attendance',
          title: 'Attendance',
        },
        {
          href: '/student/timetable',
          title: 'Timetable',
        },
        {
          href: '/student/assignment',
          title: 'Assignment',
        },
        {
          href: '/student/syllabus',
          title: 'Syllabus',
        },
        {
          href: '/student/fees',
          title: 'Fees',
        },
        {
          href: '/student/complain',
          title: 'Complain',
        },
      ],
    }
  },
}
</script>
<style scoped>
.v-sidebar-menu {
  width: 150px;
  top: 55px;
  margin-right: 40px;
}
</style>