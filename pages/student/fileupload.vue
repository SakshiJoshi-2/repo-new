<template>
  <div>

    <div class="row px-0mx-0">
      <div class="col-5 mx-auto">
        <h3>Static Three</h3>
        <input type="file" @change="handleImage" accept="image/*" />
      </div>
       <button type="button" class="btn btn-secondary" @click="addblob()">
        Add blob
      </button>
      <div class="col-5 mx-auto">
        <pre>{{ image }} </pre>
      </div>
    </div>
  </div>
</template>

<script>
let fileUpload = require('fuctbase64')
export default {
     layout: 'users',
  data() {
    return {
      image: 'No Data',
    }
  },
  methods: {
     
    handleImage(event) {
      let result = fileUpload(event).then((results) => {
        this.image = result
        console.log('Results', result)
      })
    },
    async addblob() {


      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/addblob`,
        data: {
         result : this.result
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
  },
   
}
</script>
