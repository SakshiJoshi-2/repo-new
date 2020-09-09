<template>
  <div class="">
    <h1>Add Product</h1>
    <label>Name</label>: <input>
    <label>Description</label>: <textarea></textarea>
    <button @click="addProduct">Add</button>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data() {
    return {
      product: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    addProduct() {
      console.log(this.product)
    }
  }
}
</script>