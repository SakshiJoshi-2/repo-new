<template>
  <div class="container-fluid" style="background-color: #f5f5ef ">
    <div class="container1" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 160px">
      <h1 class="heading-center">
        <i class="fa fa-rupee" aria-hidden="true" style="font-size:40px;color:grey;"></i> Fees Details
      </h1>
      <hr style="height:2px;border-width:0;background-color:lightgrey" />
      <div class="row">
        <div class="col-sm-6">Total Fees:</div>
        <div class="col-sm-6">Paid Fess:</div>
        <div class="col-sm-6">Remaining Fees:</div>
        <div class="col-sm-6">Monthly Installments:</div>
        <div class="col-sm-6">Paid upto:</div>
        <div class="col-sm-6">Last paid on:</div>
        <div class="col-sm-12">Last date to pay next installement:</div>
      </div>

      <div class="text-center">
        <nuxt-link to="/components/Home" button type="button" class="btn btn-primary">Pay Online</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'studentlayout',
}
</script>

<style type="text/css">
.heading-center {
  text-align: center;
}
.col-sm-6,
.col-sm-12 {
  border: 1px solid lightgrey;
  height: 60px;
}
.row {
  margin: 20px;
  border: 1px solid lightgrey;
}
.container1 {
  box-shadow: 10px 10px 5px lightgrey;

  padding: 40px;
}
</style>
