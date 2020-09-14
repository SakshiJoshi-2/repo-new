<template>
  <div>
    <div class="container">
      <h2 class="heading-center">My Salary</h2>
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
            Year
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">2018</a>
            <a class="dropdown-item" href="#">2019</a>
            <a class="dropdown-item" href="#">2020</a>
          </div>
        </div>
        <div class="btn-group">
          <button class="btn btn-secondary btn-sm" type="button">Month</button>
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
            <a class="dropdown-item" href="#">Jan</a>
            <a class="dropdown-item" href="#">Feb</a>
            <a class="dropdown-item" href="#">Mar</a>
            <a class="dropdown-item" href="#">Apr</a>
            <a class="dropdown-item" href="#">May</a>
            <a class="dropdown-item" href="#">Jun</a>
            <a class="dropdown-item" href="#">Jul</a>
            <a class="dropdown-item" href="#">Aug</a>
            <a class="dropdown-item" href="#">Sep</a>
            <a class="dropdown-item" href="#">Oct</a>
            <a class="dropdown-item" href="#">Nov</a>
            <a class="dropdown-item" href="#">Dec</a>
          </div>
        </div>
      </div>
      <div class="container">
        <table class="table table-bordered table table-hover ">
          <thead class="thead-dark">
            <tr>
              <th colspan="2">Personal Details:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>Days Worked:</td>
            </tr>
            <tr>
              <td>Leave Taken:</td>
              <td>Joining Date:</td>
            </tr>
            <tr>
              <td>Alowed Leaves:</td>
              <td>Department:</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="container">
        <table class="table table-bordered">
          <thead  class="thead-dark">
            <tr>
              <th colspan="2">Earning:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic</td>
              <td>HRA:</td>
            </tr>
            <tr>
              <td>Conv Allowance</td>
              <td>Medical Alowance</td>
            </tr>
            <tr>
              <td>Days Worked:</td>
              <td>Department:</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container">
        <table class="table table-bordered">
          <thead  class="thead-dark">
            <tr>
              <th>Payment Details:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Date of Transfer</td>
            </tr>
            <tr>
              <td>Bank Name</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container">
        <table class="table table-bordered">
          <thead  class="thead-dark">
            <tr>
              <th>Total Amount:</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
