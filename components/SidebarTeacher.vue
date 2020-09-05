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
    export default {
     
        
    }
</script>

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