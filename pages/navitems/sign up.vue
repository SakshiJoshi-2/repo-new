<template>
    <div class="container" >
        <div class = "wrapper">
        <div class="title">sing up</div>
    <form>
     
     <div class="form-group row">
    <label for="input" class="col-sm-4 col-form-label">School Name</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="schoolname" placeholder="School Name">
    </div>
  </div>


     <div class="form-group row">
    <label for="input" class="col-sm-4 col-form-label">Username</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="inputuser" placeholder="Username">
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-4 col-form-label">Email</label>
    <div class="col-sm-8">
      <input type="email" class="form-control" id="inputEmail" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-4 col-form-label">Password</label>
    <div class="col-sm-8">
      <input type="password" class="form-control" id="Password" placeholder="Password">
    </div>
  </div>

   <div class="form-group row">
    <label for="inputPassword3" class="col-sm-4 col-form-label">Confirm Password</label>
    <div class="col-sm-8">
      <input type="password" class="form-control" id="cpassword" placeholder="confirm Password">
    </div>
  </div>
  
<div class="form-group row">
    <label for="inputPassword3" class="col-sm-4 col-form-label">Mobile no.</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="cpassword" placeholder="1122334455">
    </div>
  </div>

  <div class="text-center">
        <button type="button" class="btn btn-primary btn-lg">Sign up</button>
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

.wrapper {
  margin: 40px 30px 40px 350px;
  width: 380px;
  background: rgb(111, 211, 206);
  height : 590px;
}
form {
  margin-top: 30px;
}
.wrapper .title {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: rgb(16, 97, 163);
  user-select: none;
  background: #99a1a8;
}
.wrapper form .col-sm-8 .form-control{
  border-radius: 300px;
} 
.wrapper form .text-center button[type=button] {
  margin-top: 10px;
  width : 50%;
  border-radius: 30px;
 }
</style>