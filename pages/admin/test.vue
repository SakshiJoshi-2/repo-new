<template>
  <div class="container1">
    <input class="mx-auto mt-5" type="text" />
    <button class="btn btn-sm btn-info">Test</button>
  </div>
</template>

<script>
export default {
  layout: 'adminlayout',
  methods: {
    days(val) {
      if (val == 'mon') {
        let x = 0
        return x
      } else {
        let y = 1
        return y
      }
    },
    test(e) {
      let z = this.days(e)
      console.log(e, z)
    },
  },
}
</script>

<style scoped>
</style>