<template>
  <div>
    <sidebar-menu :menu="menus" :width="width" :collapsed="collapsed" />
    <!-- :widthCollapsed="widthCollapsed" -->
    <!-- {{ menus }} -->
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters('modules/user', ['user']),
    menus() {
      if (this.user['custom:role'] == 'admin') {
        return this.adminmenu
      } else if (this.user['custom:role'] == 'teacher') {
        return this.teachermenu
      } else if (this.user['custom:role'] == 'student') {
        return this.studentmenu
      } else if (this.user['custom:role'] == 'principal') {
        return this.principalmenu
      } else if (this.user['custom:role'] == 'systemadmin') {
        return this.systemadminmenu
      } else {
        let blankmenu = []
        return blankmenu
      }
    },
  },
  components: {
    SidebarMenu,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '200px',
    },
    widthCollapsed: {
      type: String,
      default: '50px',
    },
  },
  data() {
    return {
      adminmenu: [
        {
          header: true,
          title: 'Admin',
        },
        {
          href: '/admin',
          title: 'Dashboard',
          icon: 'fa fa-user',
        },
        {
          href: '/admin/createrole',
          title: 'Create  Role',
          icon: 'fa fa-users',
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
          href: '/admin/fees',
          title: 'Fees',
          icon: '	fa fa-rupee',
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
      principalmenu: [
        {
          href: '/principal/attendence',
          title: 'Attendance',
          icon: 'fa fa-clock-o',
        },
        {
          href: '/principal/timetable',
          title: 'Timetable',
          icon: 'fa fa-calendar',
        },
      ],
      teachermenu: [
        {
          header: true,
          title: 'Teacher',
        },
        {
          href: '/teacher',
          title: 'My Profile',
          icon: 'fa fa-user',
        },
        {
          href: '/teacher/attendance',
          title: 'Attendance',
          icon: 'fa fa-clock-o',
        },
        {
          href: '/teacher/teachertimetable',
          title: 'Timetable',
          icon: 'fa fa-calendar',
        },
        {
          href: '/teacher/createsyllabus',
          title: 'Syllabus',
          icon: 'fa fa-book',
        },
        {
          href: '/teacher/assignment',
          title: 'Assignment',
          icon: 'fa fa-edit',
        },
        {
          href: '/teacher/complaints',
          title: 'Complaint',
          icon: 'fa fa-envelope',
        },
        {
          href: '/teacher/mysalary',
          title: 'My Salary',
          icon: '	fa fa-rupee',
        },
      ],
      studentmenu: [
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
      systemadminmenu: [
        {
          header: true,
          title: 'System Admin',
        },
        {
          href: '/systemadmin',
          title: 'Dashboard',
          icon: 'fa fa-user',
        },
        {
          href: '/systemadmin/createpage',
          title: 'Create  Page',
          icon: 'fa fa-users',
        },
      ],
    }
  },
}
</script>
<style scoped>
.v-sidebar-menu {
  /* width: 200px; */
  top: 55px;
  /* margin-right: 20px; */
}
</style>
