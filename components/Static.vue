<template>
  <div class="border border-dark pb-5">
    <div class="row px-0 mx-0 my-1 border-bottom border-dark">
      <div class="col">
        <button class="btn btn-sm btn-danger" @click="edit">Edit Mode</button>
        <button class="btn btn-sm btn-success" @click="preview">Preview</button>
      </div>
    </div>
    <div class="row px-0 mx-0 border border-danger">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/">SMS</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#staticnav"
            aria-controls="staticnav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="staticnav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a href="/" class="nav-link">Home</a>
              </li>
              <li class="nav-item active">
                <a href="/pricing" class="nav-link">Pricing</a>
              </li>
              <li class="nav-item active">
                <a href="#C4" class="nav-link">Chapter 4</a>
              </li>

              <li class="nav-item active">
                <a href="/login" class="nav-link">Login</a>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active"></li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="col-12 py-2">
        <input type="file" @change="preview" />
        <button class="btn btn-sm btn-success" @click="upfile">Upload</button>
        <img :src="images" alt="" width="150" height="120" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: '',
    }
  },
  methods: {
    edit() {
      alert('Edit Mode is on')
    },
    preview() {
      alert('Preview mode is On')
    },
    preview(e) {
      const objectURL = URL.createObjectURL(e.target.files[0])
      this.images = objectURL
      console.log(objectURL)
      //===============================

      // let reader = new FileReader()
      // let x = reader.readAsDataURL(e.target.files[0])
      // console.log('x', x)
      // let x = new Buffer(this.images).toString('base64')
      // console.log('x', x)
    },

    upfile() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/addblob`,
        data: {
          test: 'values',
          imgdata: this.images,
        },
      }).then((result) => {
        console.log('res', result.data)
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
