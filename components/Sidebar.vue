<template>
  <div>
    <sidebar-menu
      :menu="menus"
      :width="width"
      :collapsed="collapsed"
      v-if="show"
    />
    <!-- :widthCollapsed="widthCollapsed" -->
    <!-- {{ menus }} -->
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      show: true,
    }
  },
  computed: {
    ...mapGetters('modules/user', ['user']),
    menus() {
      if (this.user != null) {
        if (this.user['custom:role'] == 'admin') {
          console.log(this.width)
          return this.adminmenu
        }
      } else {
        this.show = false
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
      teachermenu: [
        {
          header: true,
          title: 'Teacher',
        },
        {
          href: '/teacher/TeacherProfile',
          title: 'My Profile',
          icon: 'fa fa-user',
        },
        {
          href: '/teacher/Attendance',
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
          href: '/student/complaints',
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
