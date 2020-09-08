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
          title: 'Teacher',
        },

        {
          href: '/teacher/mysalary',
          title: 'My Salary',
        },
        {
          href: '/teacher/attendence',
          title: 'Attendence',
        },
        {
          href: '/teacher/timetable',
          title: 'Timetable',
        },
        {
          href: '/teacher/syllabus',
          title: 'Syllabus',
        },
        {
          href: '/teacher/assignment',
          title: 'Assignment',
        },
        {
          href: '/teacher/Complaint',
          title: 'Complaint',
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
  margin-right: 20px;
}
</style>