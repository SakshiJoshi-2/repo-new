<template>
  <div>
    <div class="sidenav">
      <a href="/pages/admin/createrole.vue">Create Role</a>
      <a href="/pages/admin/attendance.vue">Attendance</a>
      <a href="/pages/admin/timetable.vue">Timetable</a>
      <a href="/pages/admin/staffdetails.vue">Staff details</a>
      <a href="/pages/admin/notification.vue">Notification</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0;
  background-color: #212529;
  overflow-x: hidden;
  padding-top: 20px;
  margin-top: 30px;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}
</style>


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
          href: '/admin/showcomplaint',
          title: 'Complaints',
          icon: 'fa fa-envelope',
        },
        {
          href: '/admin/registration',
          title: 'Registration',
        },
        {
          href: '/admin/admission',
          title: 'Admission',
        },
      ],
    }
  },
}
</script>
<style scoped>
.v-sidebar-menu {
  width: 200px;
  top: 55px;
  margin-right: 20px;
}
</style>
