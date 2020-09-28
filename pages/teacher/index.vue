<template>
  <div>
    <div>
      <button @click="createtable()">createtable</button>
    </div>
    <div><button @click="Updatetable()">Updatetable</button></div>
    <div><button @click="Deletetable()">Deletetable</button></div>
    <div><button @click="Readtable()">Readtable</button></div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  methods: {
    async createtable() {
      let res = await this.$axios.get('http://localhost:3000/api/createtable')
      console.log(res)
    }
  },
  mounted() {
    var teacher = [];
    teacher[0]=("name:xyz");
     teacher[1]=("email:teacher@gmail.com");
      teacher[2]=("MObno:123456");
 teacher[3]=("add:xyz");
    teacher[4] = ("id:dfghjk");

localStorage.setItem("teacher", JSON.stringify(teacher));
var storedNames = JSON.parse(localStorage.getItem("teacher"));

    
  },
}
</script>
