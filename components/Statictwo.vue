<template>
  <div>
    <div class="row px-0mx-0">
      <div class="col-5 mx-auto">
        <img :src="image" alt="show image" />
        <input type="file" @change="handleImage" accept="image/*" />
        <button @click="test">Test</button>
      </div>
    </div>
  </div>
</template>

<script>
// const base64Img = require('base64-img')
export default {
  data() {
    return {
      image: '',
    }
  },
  methods: {
    test() {
      console.log('base64Img')
    },
    handleImage(e) {
      const selectedImage = e.target.files[0]
      console.log(selectedImage)
      this.createBase64Image(selectedImage)
    },
    createBase64Image(fileObject) {
      //   const objectURL = URL.createObjectURL(e.target.files[0])
      //   this.images = objectURL
      const reader = new FileReader()

      reader.onload = (e) => {
        this.image = e.target.result
        this.uploadImage()
        // console.log('e target', e.target.result)
      }
      reader.readAsBinaryString(fileObject)
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
