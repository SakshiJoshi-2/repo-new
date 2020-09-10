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
          <th scope="col">Sr no.</th>
          <th colspan="12">Name</th>
          <th colspan="12">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="col">1</th>
          <td colspan="12">Mark</td>
          <td colspan="12">
            <button type="button" class="btn btn-info">View</button>
            <button type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="col">2</th>
          <td colspan="12">Jacob</td>
          <td colspan="12">
            <button type="button" class="btn btn-info">View</button>
            <button type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>

        <tr>
          <th scope="col">3</th>
          <td colspan="12">Jacob</td>
          <td colspan="12">
            <button type="button" class="btn btn-info">View</button>
            <button type="button" class="btn btn-danger">Delete</button>
          </td>
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