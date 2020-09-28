<template>
  <div class="container-fluid" style="background-color: #ffffff">
    <div class="container1">
      <form-builder :config="formConfig"></form-builder>
       <div class="text-center"><br>
          <button type="submit" class="btn btn-primary" value="Submit Button">Sign Up</button>
        </div>
  </div></div>
</template>

<script>
import { signupform } from '../Config/form.js'
import FormBuilder from '@/components/formBuilder.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    formConfig() {
      return signupform
    },
  },
  components: {
    FormBuilder,
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