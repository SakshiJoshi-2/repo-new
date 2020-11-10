<template>

    <div>
    <sidebar-menu :menu="menu" />
 
</div>

    
</template>


<style>
.sidenav {
  height: 100%;
  width: 160px;
  position:fixed;
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
           icon:"fa fa-clock-o"
        },

        {
          href: '/teacher/teachertimetable',
          title: 'Timetable',
             icon:"fa fa-calendar"
        },
        {
          href: '/teacher/createsyllabus',
          title: 'Syllabus',
             icon:"fa fa-book"
        },
        {
          href: '/teacher/assignment',
          title: 'Assignment',
           icon:"fa fa-edit"
        },
        {
          href: '/student/complaints',
          title: 'Complaint',
           icon:"fa fa-envelope"
        },
        {
          href: '/teacher/mysalary',
          title: 'My Salary',
             icon:'	fa fa-rupee'
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

