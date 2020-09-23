<template>

  <input 
    type="text" 
    v-on="$listeners" 
    :value="value" 
    @input="$emit('update', $event.target.value)"
  />
</template>

  <script>
  export default {
    props: ["value"],
    model: {
      prop: "value",
      event: "update"
    }
  };
  </script>



<style lang="scss" scoped>

</style>