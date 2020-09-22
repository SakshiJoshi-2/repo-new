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
          title: 'Admin',
        },

        {
          href: '/admin/createrole',
          title: 'Create  Role',
          icon: 'fa fa-users',
        },
        {
          href: '/admin/attendence',
          title: 'Attendance',
          icon: 'fa fa-clock-o',
        },
        {
          href: '/admin/timetable',
          title: 'Timetable',
           icon: 'fa fa-calendar',
        },
        {
          href: '/admin/notification',
          title: 'Notification',
           icon: 'fa fa-bell',
        },
        {
          href: '/admin/staffdetails',
          title: 'Staff Details',
          icon: 'fa fa-file',
        },
        {
          href: '/admin/complaints',
          title: 'Complaints',
          icon: 'fa fa-envelope',
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
