<template>
  <div class="container">
    <!-- <button type="button" class="btn btn-primary" @click="add">Add</button> -->
        <button type="button" class="btn btn-primary" @click="createtable">Create Table</button>
        <button type="button" class="btn btn-primary" @click="addentity">Add Entity</button>
         <button type="button" class="btn btn-primary" @click="updateentity">Update  Entity</button>
         <button type="button" class="btn btn-primary" @click="deleteentity">Delete  Entity</button>

  </div>
</template>

<script>
import { db } from '../plugins/firebaseConfig'
import axios from 'axios'
export default {
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
       let res= await this.$axios.get('http://localhost:3000/api/updateentity')
       console.log('res')

    },
     async deleteentity(){
       let res= await this.$axios.get('http://localhost:3000/api/deleteentity')
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
}}
</script>

<style scoped>
</style>