<template>
  <div>
    <Navbar class="uppernavbar"/>
    <SidebarTeacher />
    <Nuxt />
  </div>
</template>

<style scoped> 
.uppernavbar {
  position: sticky;
  top: 0;
  z-index: 9999;
}
  .nuxt {
  margin-left: 140px;
}
</style>