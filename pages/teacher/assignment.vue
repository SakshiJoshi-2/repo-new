<template>
<<<<<<< HEAD
  <div class="">
    <h1>Add Product</h1>
    <label>Name</label>: <input>
    <label>Description</label>: <textarea></textarea>
    <button @click="addProduct">Add</button>
  </div>
</template>
=======
  <div>
    <div class="container">
      <h2 class="heading-center">Assignment</h2>
    </div>

    <div id="ex">
      <div class="container p-2 my-2 border">
        <div class="btn-group">
          <button
            class="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Class
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">1st</a>
            <a class="dropdown-item" href="#">2nd</a>
            <a class="dropdown-item" href="#">3rd</a>
          </div>
        </div>
        <div class="btn-group">
          <button class="btn btn-secondary btn-sm" type="button">
            Subject
          </button>
          <button
            type="button"
            class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Maths</a>
            <a class="dropdown-item" href="#">Science</a>
            <a class="dropdown-item" href="#">History</a>
          </div>
        </div>
      </div>
      <div>
    <div class="text-center">
<!-- Button trigger modal -->
<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter">
 Create Assignment
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Assignment</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Write
      </div>
      
      <form action="/action_page.php">
          
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
          <input type="submit" value="Done" />
        </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
>>>>>>> 44e7105567a66771241531575f5118b04cd83208

      
      
    </div>
  </div>
</template>
<script>
export default {
<<<<<<< HEAD
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
=======
  layout: 'teacherlayout',
}
</script>

<style type="text/css">
.heading-center {
  text-align: center;
}
#ex {
  border: 1px solid black;
  padding: 25px;
  background-size: auto;
}
</style>
>>>>>>> 44e7105567a66771241531575f5118b04cd83208
