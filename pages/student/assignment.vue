<template>
  <div>
    <div class="container">
      <h2 class="heading-center">Assignment</h2>
    </div>

    <div id="ex">
      <div class="container p-2 my-2 border">
        
        <div class="btn-group">
          
          <button
            type="button"
            class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Subject
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
              <button type="button" class="btn btn-secondary dropdown-item" data-toggle="modal" data-target="#exampleModalCenter">
                English
                </button>
                <button type="button" class="btn btn-secondary dropdown-item" data-toggle="modal" data-target="#exampleModalCenter">
                Maths
                </button>
                <button type="button" class="btn btn-secondary dropdown-item" data-toggle="modal" data-target="#exampleModalCenter">
                Hindi
                </button>
                <button type="button" class="btn btn-secondary dropdown-item" data-toggle="modal" data-target="#exampleModalCenter">
                Science
                </button>
           
          </div>
        </div>
      </div>
      <div>
    <div class="text-center">
<!-- Button trigger modal -->

<button type="button" class="btn btn-secondary dropdown-item" data-toggle="modal" data-target="#exampleModalCenter">
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
        Assignment
      </div>
      
      <form action="/action_page.php">
          
          <textarea id="w3review" name="w3review" rows="4" cols="50" value="......." readonly></textarea>
        
        </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
    </div>
  </div>

      
      
    </div>
  </div>
</template>
<script>
export default {
   layout:'studentlayout'

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