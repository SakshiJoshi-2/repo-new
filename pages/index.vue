<template>
  <div class="container">
    <!-- <button type="button" class="btn btn-primary" @click="add">Add</button> -->
    <button type="button" class="btn btn-primary" @click="createtable()">
      Create Table
    </button>
    <button type="button" class="btn btn-primary" @click="createblob()">
      Create Blob
    </button>
    <button type="button" class="btn btn-primary" @click="addblob()">
      Add Blob
    </button>
    <button type="button" class="btn btn-primary" @click="showblob()">
      Show Blob
    </button>
    <button type="button" class="btn btn-primary" @click="addentity()">
      Add Entity
    </button>
    <button type="button" class="btn btn-primary" @click="updateentity()">
      Update Entity
    </button>
    <button type="button" class="btn btn-primary" @click="deletetable()">
      Delete Table
    </button>
    <button type="button" class="btn btn-primary" @click="deleteentity()">
      Delete Entity
    </button>
    <button type="button" class="btn btn-primary" @click="readentity()">
      Read Entity
    </button>
     <label for="myfile">Select a file:</label>
  <input type="file" id="myfile" name="myfile" @change="onFileSelected" ><br><br>
  <!-- <button type="button" class="btn btn-primary" @click="onUpload">
    upload
    </button> -->
 <!-- {{url}} -->
 <img :src=url  alt="Girl in a jacket" width="70" height="100">
 {{data}}
  </div>

</template>

<script>
// import { db } from '../plugins/firebaseConfig'
// import { mapState, mapGetters } from 'vuex'
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      // formdata: '',
      selectedFile: null,
       url:null,
      data:'',
    }
  },
  methods: {
    onFileSelected(event){
       this.selectedFile=event.target.files[0]
       this.url=window.URL.createObjectURL(this.selectedFile)
       console.log(this.url)
       return
      
    },
  
    async createtable() {
      let res = await this.$axios.get('http://localhost:3000/api/createtable')
      console.log('res')
    },
    async showblob() {
       this.$axios({
      method: 'get',
      url: 'http://localhost:3000/api/showblob',
      
    }).then((result) => {
      console.log('res', result)
      this.data = result
   
    })
    },
    async createblob() {
      let res = await this.$axios.get('http://localhost:3000/api/createblob')
      console.log('res')
    },
    async addentity() {
      let res = await this.$axios.get('http://localhost:3000/api/addentity')
      console.log('res')
    },
    async addblob() {
      console.log('Hello')
       this.$axios({
        method: 'get',
        url: 'http://localhost:3000/api/addblob',
        data: {
         profile:this.url
        },
      }).then((result) => {
         console.log('res', result)
      })

    },
    async updateentity() {
      let res = await this.$axios.get('http://localhost:3000/api/updateentity?')
      console.log('res')
    },
    async deletetable() {
      let res = await this.$axios.get('http://localhost:3000/api/deletetable')
      console.log('res')
      this.axios({
        method: 'get',
        url: 'http://localhost:3000/api/deletetable',
        data: {
          xyz: 'test2',
        },
      })
    },

    async deleteentity() {
      let res = await this.$axios.get('http://localhost:3000/api/deleteentity')
      console.log('res')
    },
    async readentity() {
      let res = await this.$axios.get('http://localhost:3000/api/readentity')
      console.log('res')
    },

   
  },
}
</script>

<style scoped>
</style>