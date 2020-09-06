
<template>
  <div >
  <sidebar-menu :menu="menu" />
  </div>

</template>

<script>
  import { SidebarMenu } from 'vue-sidebar-menu'

    export default {
          components: {
      SidebarMenu
    },
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Admin',
                        hiddenOnCollapse: true
                    },
                    
                     {
                        href: '/pages/admin/create role.vue',
                        title: 'Create role',
                        
                    }, {
                        href: '/pages/admin/attendence.vue',
                        title: 'Attendance',
                        
                    }, {
                        href: '/pages/admin/timetable.vue',
                        title:'Timetable',
                        
                    },
                    {
                        href: '/pages/admin/notification.vue',
                        title: 'Notification',
                        
                    },
                    {
                        href: '/pages/admin/staffdetails.vue',
                        title: 'Staff Details',
                        
                    },
                    
                ]
            }
        }
    }
</script>
<style  scoped>
.v-sidebar-menu {
    width:150px;
    top: 55px;


}
 

</style>