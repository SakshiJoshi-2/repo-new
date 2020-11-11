<template>
    <div>
<sidebar-menu :menu="menu" />

    </div>
</template>

<script>
    export default {
     
        
    }
</script>



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
