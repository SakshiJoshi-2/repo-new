<template>
  <div>
    <sidebar-menu :menu="menu" />
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
<<<<<<< HEAD

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
          hiddenOnCollapse: true,
        },

        {
          href: '/pages/admin/create role.vue',
          title: 'Create role',
=======

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
          href: '/admin/create_role',
          title: 'Create_role',
>>>>>>> 73f4f6a3aebecc554b9f768b5bc24223a5fe49bb
        },
        {
          href: '/admin/attendence',
          title: 'Attendance',
        },
        {
<<<<<<< HEAD
          href: '/pages/admin/timetable.vue',
          title: 'Timetable',
        },
        {
          href: '/pages/admin/notification.vue',
          title: 'Notification',
        },
        {
          href: '/pages/admin/staffdetails.vue',
=======
          href: '/admin/timetable',
          title: 'Timetable',
        },
        {
          href: '/admin/notification',
          title: 'Notification',
        },
        {
          href: '/admin/staffdetails',
>>>>>>> 73f4f6a3aebecc554b9f768b5bc24223a5fe49bb
          title: 'Staff Details',
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
<<<<<<< HEAD
}
</style>
=======
  margin-right: 20px;
}
</style>
>>>>>>> 73f4f6a3aebecc554b9f768b5bc24223a5fe49bb
