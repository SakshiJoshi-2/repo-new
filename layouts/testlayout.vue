<template>
  <div>
    <Navbar class="uppernavbar" />
    <Nuxt class="nuxt border border-dark" />
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
  height: 100vh;
  margin-left: 210px;
  /* background: yellow; */
}
</style>
