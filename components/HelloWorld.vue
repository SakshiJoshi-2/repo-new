<template>
  <div class="hello">
    <h1>Forms</h1>
    <form-builder :config="formConfig"></form-builder>
  </div>
</template>

<script>
import { form1, form2 } from '../Config/form.js'
import FormBuilder from './formBuilder'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    formConfig() {
      return form1
    },
  },
  components: {
    FormBuilder,
  },
}
</script>

<style lang="scss" scoped>
</style>