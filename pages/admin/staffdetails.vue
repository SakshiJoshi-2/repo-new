<template>
  <div class="container" style="margin:30px 0px 30px 160px">
    <div class="row">
      <div class="col-sm-6" style="padding:10px">
        <h2 class="heading-center">Staff Details</h2>
      </div>
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Designation</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>teacher</td>
          <td>created</td>
          <td>
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
            >create account</button>
          </td>
        </tr>
        <tr>
          <td>Thornton</td>
          <td>clerk</td>
          <td>created</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
            >Create Account</button>
          </td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>liberian</td>
          <td>created</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
            >Create Account</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="container">
      <!-- The Modal -->
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">×</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              <registration  />
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
               
              <button type="button" class="btn btn-info" data-dismiss="modal">Create</button>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'adminlayout',
}
</script>

<style >
.modal {
  text-align: center;
}
 
</style>