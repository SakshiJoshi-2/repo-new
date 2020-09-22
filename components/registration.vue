<template>
    <div class="container-fluid" style="background-color: #ffffff ">
    <div class="container-fluid" style="background-color: #ffffff; " >
     <!-- style="margin:30px 0px 30px 160px " -->
  <form name="CR">
   
       <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="name"> Name</label>
            <input class="form-control" type="text" id="name" value="" placeholder="Enter your name">
       </div>  
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="dob">D.O.B</label>
          <input class="form-control" type="text" id="dob" value="" placeholder="Enter your date of birth" > 
        
      </div>

      </div>   
      <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
             <label for="ms">Maritial Status</label>
              <input class="form-control" type="text" id="ms" value="" placeholder="Enter your Maritial status" >
       </div>  
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="age">Age</label>
          <input class="form-control" type="number" id="age" value=""  placeholder="Enter your Age"> 
        
       </div>  
       
      </div>  
      <div class="row">
        
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
             <label for="contact1">Contact Number</label>
              <input class="form-control" type="number" id="contact1" value="" placeholder="Enter contact no." >
       </div>  
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="contact2">Alternate Contact No.</label>
          <input class="form-control" type="text" id="contact2" value=""  placeholder="Enter alternate contact no."> 
        
       </div>  
      </div>  
        <div class="row">
        
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
             <label for="email1">Email address</label>
              <input class="form-control" type="text" id="email" value="" placeholder="Enter email" >
       </div>  
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="gen"> Gender</label><br>
         <input type="radio" id="m" name="gender" value="">
           <label for="male">Male</label>
         <input type="radio" id="f" name="gender" value="">
          <label for="female">Female</label>
         <input type="radio" id="o" name="gender" value="">
           <label for="other">Other</label>
        
       </div>  
      </div>  

      <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="qua">Qualification</label>
            <input class="form-control" type="text" id="quali" value="" placeholder="Enter qualification" >
       </div>  
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="we">work experiance</label>
          <input class="form-control" type="text" id="work" value="" placeholder="Enter work Experiance" > 
        
      </div>

      </div>  

      <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="design"> Designation</label>
            <input class="form-control" type="text" id="design" value="" placeholder="Designation">
       </div>  
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="dept">Department</label>
          <input class="form-control" type="text" id="dept" value="" placeholder="Department"> 
        
      </div>

      </div>    

        <div class="row">
        
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
             <label for="address">Address</label>
              <input class="form-control" type="text" id="address" value="" placeholder="Enter your address" >
       </div> 
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
             <label for="jd">Join Date</label>
              <input class="form-control" type="text" id="jd" value="" placeholder=" Enter join date" >
       </div> 
       
       </div>  
       
    
  </form>
</div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>

.container1{
  
  box-shadow: 10px 10px 5px lightgrey;
  padding:40px;
    text-align: center;

}
</style>