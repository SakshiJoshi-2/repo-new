<template>
  <div>
    <Navbar class="uppernavbar" />
    <SidebarAdmin />
    <Nuxt class="nuxt border border-dark" />
  </div>
</template>

<style>
.uppernavbar {
  position: sticky;
  top: 0;
  z-index: 9999;
}
.nuxt {
  /* margin-left: 350px; */
  background: yellow;
}
</style>
