<template>
    <div>
  <div class="container">
      <h2 class="heading-center">Assignment</h2>
    </div>
    <div class="container p-2 my-2 border">
        <div class="btn-group">
          <button
            class="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Class</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">1st</a>
            <a class="dropdown-item" href="#">2nd</a>
            <a class="dropdown-item" href="#">3rd</a>
          </div>
        </div>
    
    <div class="btn-group">
          <button class="btn btn-secondary btn-sm" type="button">Subject</button>
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

        <div class="text-center">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-secondary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >Create Assignment</button>
          
        </div>
        <div class="modal-dialog modal-dialog-centered">
  ...
</div>


</div>
</template>
<script>
export default {
    layout:'teacherlayout',
    data(){
    return{
      date_today:''
    }
  }
}
   
</script>

<style type="text/css">
.heading-center{
 text-align:center;
 }
</style>