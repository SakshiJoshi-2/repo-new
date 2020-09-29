<template>
  <div class="container-fluid" style="background-color: #ffffff">
    <div class="container1">

       <div class="text-center"><br>
          <button type="submit" class="btn btn-primary" value="Submit Button">Sign Up</button>
        </div>
  </div></div>
</template>

<script>
import { signupform } from '../Config/form.js'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
   
  },
  components: {
   
  },
}
</script>

<style scoped>
.container1 {
  border-radius: 25px;
  border: 2px solid grey;
  padding: 20px;
  width: 20%;
  height: auto;
  margin: auto;
}
</style>