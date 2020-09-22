<template>
    <div class="container-fluid" style="background-color: #f5f5ef ">
             <div class="container1" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 160px">
      <h1 class="heading-center">
        <i class="fa fa-rupee" aria-hidden="true" style="font-size:40px;color:grey;"></i> Fees
      </h1>
       <hr style="height:2px;border-width:0;background-color:lightgrey" />
      <div id="form">
      <form name="fees" >
        <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="totalFees">Total Fees:</label>
            <input class="form-control" type="text" id="totalFees" v-model="totalFees" placeholder="Enter Total Fees" />
          </div>
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="contact2">Paid Fees:</label>
            <input class="form-control" type="text" id="paidFees" v-model="paidFees"  placeholder="Enter Paid Fees"/>
          </div></div>
          <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="remainingFees">Remaining Fees:</label>
            <input class="form-control" type="text" id="remainingFees" v-model="remainingFees" placeholder="Enter Remaining Fees " />
          </div>
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="monthlyInstallments">Monthly Installments:</label>
            <input class="form-control" type="text" id="monthlyInstallments" v-model="monthlyInstallments"  placeholder="Enter Monthly Installments"/>
          </div></div>
          <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="paidUpto">Paid upto:</label>
            <input class="form-control" type="text" id="paidUpto" v-model="paidUpto" placeholder="Enter last paid month" />
          </div>
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="lastPaidOn">Last paid on:</label>
            <input class="form-control" type="text" id="lastPaidOn" v-model="lastPaidOn"  placeholder="Enter last paid date"/>
          </div></div>
          <div class="row">
          <div class="col-sm-12" style="border:1px solid lightgrey ;padding:10px">
            <label for="lastDate">Last date to pay next installement:</label>
            <input class="form-control" type="text" id="lastDate" v-model="lastDate" placeholder="Enter last date to pay installements" />
          </div>
          </div>

        </form></div></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>