<template>
  <div class="container" style="margin:30px 0px 30px 160px ">
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
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
  create account
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</td>
    </tr>
    <tr> 
      <td>Thornton</td>
      <td>clerk</td>
       <td>created</td>
      <td><button type="button" class="btn btn-info">Create Account</button></td>
    </tr>
    <tr>
      <td>Larry</td>
      <td>liberian</td>
       <td>created</td>
      <td><button type="button" class="btn btn-info">Create Account</button></td>
    </tr>
  </tbody>
</table>
</div>
</template>
<script>
export default {
  layout: 'adminlayout',
}
</script>

<style ></style>