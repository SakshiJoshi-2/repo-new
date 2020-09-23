<template>
  <div>
       <formcomponent
    placeholder="Your Name"
    @keydown.enter="search"
    v-model="name"
    label="Name"
 /> 
 
   
  </div>
</template>

<script>
import { CR } from '../../helper/form'
export default {

}


</script>


<style lang="scss" scoped>
</style>