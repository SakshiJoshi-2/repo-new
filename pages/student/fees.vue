<template>
<div>
     
    
<div class="container">
  
    <h2 class='heading-center'>Fees Details</h2>
  
    <div class="row" >
    <div class="col-sm-6" >
      Total Fees:
    </div>
    <div class="col-sm-6" >
      Paid Fess:
    </div>
    <div class="col-sm-6">
      Remaining Fees:
    </div>
      <div class="col-sm-6" >
      Monthly Installments: 
    </div>
      <div class="col-sm-6" >
      Paid upto:
    </div>
      <div class="col-sm-6" >
      Last paid on:
    </div>
      <div class="col-sm-12" >
      Last date to pay next installement:
    </div>
  </div>
  
  <div class="text-center">
   <nuxt-link  to="/components/Home" button type="button" class="btn btn-primary" >Pay Online</nuxt-link>
   </div>
</div> 
</div>
</template>


  
  
 
  


<script>

export default {
    
}
</script>

<style type="text/css">
.heading-center{
 text-align:center;
 }
 .col-sm-6,.col-sm-12{
    border: 1px solid lightgrey;
    height:60px;
 }
 .row{
   margin:20px;
   border: 1px solid lightgrey;
 }
 
   

   


 

</style>