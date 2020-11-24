<template>
  <div>
    <input type="text" v-model="xyz"> {{xyz}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      xyz:null
    }
  }
}
</script>