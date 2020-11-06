<template>
<<<<<<< HEAD
    <div>
=======
  <div>
>>>>>>> 647c7b6249b9d1286f52bbfdd8fdbbbe6499a53e
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
<<<<<<< HEAD
            <a class="nav-link" href="/">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/navitems/about.vue">About</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="/pages/navitems/features.vue">Features</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="/pages/navitems/pricing.vue">Pricing</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="/pages/navitems/login.vue">Login</a>
          </li>
         
          
        </ul>
       
      </div>
    </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style >
.navbar{

  z-index: 2;
 
=======
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>

          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/navitems/features">Features</nuxt-link>
          </li>
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/navitems/pricing">Pricing</nuxt-link>
          </li>
         
         <li class="nav-item active">
            <nuxt-link class="nav-link" to="/navitems/login">Login</nuxt-link>
          </li>
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/navitems/notification">Notification</nuxt-link>
          </li>
            <li class="nav-item active">
            <nuxt-link class="nav-link" to="/admin/admission">Admin</nuxt-link>
          </li>
            <li class="nav-item active">
            <nuxt-link class="nav-link" to="/teacher/TeacherProfile">Teacher</nuxt-link>
          </li>
            <li class="nav-item active">
            <nuxt-link class="nav-link" to="/student/studentprofile">Student</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style >
.navbar {
  z-index: 2;
>>>>>>> 647c7b6249b9d1286f52bbfdd8fdbbbe6499a53e
}
</style>