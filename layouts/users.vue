<template>
  <div>
    <Navbar class="uppernavbar" />
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
  margin-left: 210px;
}
</style>
