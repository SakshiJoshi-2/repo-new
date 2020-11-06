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
          href: '/student/studentprofile',
          title: 'My Profile',
          icon: 'fa fa-user',
        },
        {
          href: '/student/attendance',
          title: 'Attendance',
          icon: 'fa fa-clock-o',
        },
        {
          href: '/student/timetable',
          title: 'Timetable',
          icon: 'fa fa-calendar',
        },
        {
          href: '/student/assignment',
          title: 'Assignment',
          icon: 'fa fa-edit',
        },
        {
          href: '/student/syllabus',
          title: 'Syllabus',
          icon: 'fa fa-book',
        },
        {
          href: '/student/fees',
          title: 'Fees',
          icon: '	fa fa-rupee',
        },
        {
          href: '/student/complain',
          title: 'Complain',
          icon: 'fa fa-envelope',
        },
       
      ],
    }
  },
}
</script>
<style scoped>
.v-sidebar-menu {
  position: fixed;
  width: 200px;
  top: 55px;
  margin-right: 40px;
  z-index: 999;
}
</style>


