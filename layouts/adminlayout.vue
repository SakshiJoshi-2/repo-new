<template>
  <div>
    <Navbar class="uppernavbar" />
    <!-- <SidebarAdmin /> -->
    <Nuxt class="nuxt" />
  </div>
</template>

<style scoped>
.uppernavbar {
  position: sticky;
  top: 0;
  z-index: 9999;
}
.nuxt {
  width: auto;
  /* height: 100vh; */
  margin-left: 210px;
  /* background: yellow; */
}
</style>
