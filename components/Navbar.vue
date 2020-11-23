<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">SMS</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>

          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/features">Features</nuxt-link>
          </li>
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/pricing">Pricing</nuxt-link>
          </li>

          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
          </li>
          <li class="nav-item active">
            <!-- <nuxt-link class="nav-link" to="/login">Login</nuxt-link> -->
            <logout />
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Logout from './Logout'
export default {
  components: {
    logout: Logout,
  },
}
</script>

<style>
.navbar {
  z-index: 2;
}
</style>
