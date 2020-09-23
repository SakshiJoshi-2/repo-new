<template>
<!-- v-for -->
<!-- <v-if></v-if> -->
  <input 
    type="text" 
    v-on="$listeners" 
    :value="value" 
    @mouseenter="$emit('update', $event.target.value)"
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