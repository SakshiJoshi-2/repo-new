<template>
    <div class="container" style="margin:30px 0px 30px 160px ">
  <form>
   
       <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="name"> Name</label>
            <input class="form-control" type="text" id="name" value="Sakshi Joshi" >
       </div>  
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="dob">D.O.B</label>
          <input class="form-control" type="text" id="dob" value="21-02-2000" > 
        
      </div>

      </div>   
      <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
             <label for="dob">Maritial Status</label>
              <input class="form-control" type="text" id="ms" value="single" >
       </div>  
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="age">Age</label>
          <input class="form-control" type="number" id="age" value="15" > 
        
       </div>  
       
      </div>  
      <div class="row">
        
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
             <label for="contact1">Contact Numbher</label>
              <input class="form-control" type="number" id="contact1" value="9874561233" >
       </div>  
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="contact2">Alternate Contact Number</label>
          <input class="form-control" type="text" id="contact2" value="8529637451" > 
        
       </div>  
      </div>  
        <div class="row">
        
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
             <label for="email1">Email address</label>
              <input class="form-control" type="text" id="email1" value="abc@gmail.com" >
       </div>  
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="gen"> Gender</label><br>
         <input type="radio" id="male" name="gender" value="male">
           <label for="male">Male</label>
           <input type="radio" id="female" name="gender" value="female">
          <label for="female">Female</label>
          <input type="radio" id="other" name="gender" value="other">
           <label for="other">Other</label>
        
       </div>  
      </div>  

      <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="qua">qualification</label>
            <input class="form-control" type="text" id="quali" value="b.com" >
       </div>  
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="we">work experiance</label>
          <input class="form-control" type="text" id="work" value="no" > 
        
      </div>

      </div>  

      <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="design"> Designation</label>
            <input class="form-control" type="text" id="design" value="teacher" >
       </div>  
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="dept">department</label>
          <input class="form-control" type="text" id="dept" value="teaching" > 
        
      </div>

      </div>    

        <div class="row">
        
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
             <label for="address">Address</label>
              <input class="form-control" type="text" id="address" value="Railtoli, Gondia" >
       </div> 
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
             <label for="jd">join date</label>
              <input class="form-control" type="text" id="jd" value="20-09-2020" >
       </div> 
       
       </div>  
       
    
  </form>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>