<template>
  <div class="container-fluid" style="background-color: #f5f5ef ">
    <div class="container1" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 160px">
      <h1 class="heading-center">
        <i class="fa fa-edit" aria-hidden="true" style="font-size:40px;color:grey;"></i> Assignment
      </h1>
      <hr style="height:2px;border-width:0;background-color:lightgrey" />

      <div id="ex">
        <div class="container p-2 my-2 border">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Subject
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu">
              <button
                type="button"
                class="btn btn-secondary dropdown-item"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >English</button>
              <button
                type="button"
                class="btn btn-secondary dropdown-item"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >Maths</button>
              <button
                type="button"
                class="btn btn-secondary dropdown-item"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >Hindi</button>
              <button
                type="button"
                class="btn btn-secondary dropdown-item"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >Science</button>
            </div>
          </div>
        </div>
        <div>
          <div class="text-center">
            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Assignment</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">Assignment</div>

                  <form >
                    <textarea
                      id="Assignment"
                      name="Assignment"
                      rows="6"
                      cols="50"
                      value="......."
                      readonly
                    ></textarea>
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
  </div>
</template>
<script>
export default {
  layout: 'studentlayout',
}
</script>

<style type="text/css" scoped>
.heading-center {
  text-align: center;
}
#ex {
  border: 1px solid black;
  padding: 25px;
  background-size: auto;
}
 .container1{
  
  box-shadow: 10px 10px 5px lightgrey;
   padding: 40px;
}
</style>