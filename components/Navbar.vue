<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">SMS</a>
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
        <ul class="navbar-nav mr-auto" v-if="!show">
          <li class="nav-item active">
            <!-- <nuxt-link class="nav-link" to="/">Home</nuxt-link> -->
            <a href="/" class="nav-link">Home</a>
          </li>

          <!-- <li class="nav-item active">
            <nuxt-link class="nav-link" to="/features">Features</nuxt-link>
            <a href="/features" class="nav-link">Features</a>
          </li> -->
          <li class="nav-item active">
            <!-- <nuxt-link class="nav-link" to="/pricing">Pricing</nuxt-link> -->
            <a href="/pricing" class="nav-link">Pricing</a>
          </li>

          <li class="nav-item active">
            <!-- <nuxt-link class="nav-link" to="/login">Login</nuxt-link> -->
            <a href="/login" class="nav-link">Login</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="show">
          <li class="nav-item active">
            <logout />
          </li>
          <!-- <li class="nav-item active">
            <nuxt-link class="nav-link" to="#">{{ show }}</nuxt-link>
          </li> -->
        </ul>
      </div>
    </nav>
    <sidebar v-if="show" />
  </div>
</template>

<script>
import Logout from './Logout'
import Sidebar from './Sidebar'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    logout: Logout,
    sidebar: Sidebar,
  },
  computed: {
    ...mapGetters('modules/user', ['user']),
    show() {
      if (this.user != null) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style scoped>
.navbar {
  z-index: 2;
}
.test {
  border: 2px solid red;
}
</style>
