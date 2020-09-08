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
           href: '/admin/dashboard',
          title: 'Dashboard',
        },

        {
          href: '/admin/create_role',
          title: 'Create_role',
        },
        {
          href: '/admin/attendence',
          title: 'Attendance',
        },
        {
          href: '/admin/timetable',
          title: 'Timetable',
        },
        {
          href: '/admin/notification',
          title: 'Notification',
        },
        {
          href: '/admin/staffdetails',
          title: 'Staff Details',
        },
        {
          href: '/admin/complaints',
          title: 'Complaints',
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
