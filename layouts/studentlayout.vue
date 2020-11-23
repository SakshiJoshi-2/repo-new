<template>
  <div>
    <Navbar class="uppernavbar" />
    <Nuxt />
  </div>
</template>

<style scoped>
.uppernavbar {
  position: sticky;
  top: 0;
  z-index: 9999;
}
</style>