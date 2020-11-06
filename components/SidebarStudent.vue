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
