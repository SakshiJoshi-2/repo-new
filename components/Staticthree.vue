<template>
  <div>
    <div class="row px-0mx-0">
      <div class="col-5 mx-auto">
        <h3>Static Three</h3>
        <!-- <img :src="image" alt="show image" /> -->
        <!-- <br /> -->
        <input type="file" @change="handleImage" accept="image/*" />
        <button @click="uploadImage">Upload</button>
      </div>
      <div class="col-5 mx-auto">
        <pre>{{ image }} </pre>
      </div>
    </div>
  </div>
</template>

<script>
let fileUpload = require('fuctbase64')
export default {
  data() {
    return {
      image: 'No Data',
    }
  },
  methods: {
    async handleImage(event) {
      //   let result = fileUpload(event, true).then((results) => {
      //     this.image = result
      //     console.log('Results', result)
      //   })
      let fileResult = await fileUpload(event, true)
      this.image = fileResult.base64
      console.log(fileResult)
    },
    uploadImage() {
        this.$axios({
          method: 'post',
          url: `${process.env.BASE_URL}/testaddblob`,
          data: {
            img: this.image,
          },
        }).then((res) => {
          console.log('uploaded', res)
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
