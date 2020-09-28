<template>
  <div class="container">
    
    <!-- <button type="button" class="btn btn-primary" @click="add">Add</button> -->
        <button type="button" class="btn btn-primary" @click="createtable()">Create Table</button>
        <button type="button" class="btn btn-primary" @click="addentity()">Add Entity</button>
         <button type="button" class="btn btn-primary" @click="updateentity()">Update  Entity</button>
         <button type="button" class="btn btn-primary" @click="deletetable()">Delete  Table</button>
         <button type="button" class="btn btn-primary" @click="deleteentity()">Delete  Entity</button>
<button type="button" class="btn btn-primary" @click="readentity()">Read  Entity</button>
  
  </div>
</template>

<script>
import { db } from '../plugins/firebaseConfig'
import { mapState, mapGetters } from 'vuex'
import axios from 'axios'
export default {
    data() {
    return {
     
      // formdata: '',
    }
  },
  methods: {
    async createtable(){
       let res= await this.$axios.get('http://localhost:3000/api/createtable')
       console.log('res')
    },
    async addentity(){
       let res= await this.$axios.get('http://localhost:3000/api/addentity')
       console.log('res')

    },
    async updateentity(){
       let res= await this.$axios.get('http://localhost:3000/api/updateentity?')
       console.log('res')

    },
     async deletetable(){
       let res= await this.$axios.get('http://localhost:3000/api/deletetable')
       console.log('res')
       this.axios({
         method:'get',
         url:'http://localhost:3000/api/deletetable',
         data:{
           xyz:'test2'
         }
       })

    },
    
     async deleteentity(){
       let res= await this.$axios.get('http://localhost:3000/api/deleteentity')
       console.log('res')

    },
     async readentity(){
       let res= await this.$axios.get('http://localhost:3000/api/readentity')
       console.log('res')

    },





  //  async add() {
  //     db.collection('cities')
  //       .doc('LA')
  //       .set({
  //         name: 'Los Angeles',
  //         state: 'CA',
  //         country: 'USA',
  //       })
  //       .then(function () {
  //         console.log('Document successfully written!')
  //       })
  //       .catch(function (error) {
  //         console.error('Error writing document: ', error)
  //       })
  //   },
  // },
// } , mounted() {
//           axios.get('http://localhost:3000/api/deleteentity').then(response => {
//             this.results = response.data
//           })
}, computed: {
     ...mapGetters('modules/context', ['test2']),
     test2() {
      return this.$store.getters.test;
    }
    }
}
</script>

<style scoped>
</style>