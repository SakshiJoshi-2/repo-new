<template>
    <div class="container" style="margin:30px 0px 30px 160px ">
         <form>
 <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="name">Full Name</label>
          <input class="form-control" type="text" id="name" value />
        </div>
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="class">D.O.B</label>
          <input class="form-control" type="text" id="class" value />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="dob">Maritial Status</label>
          <input class="form-control" type="text" id="dob" value />
        </div>
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="age">Age</label>
          <input class="form-control" type="number" id="age" value="15" />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="contact1">Contact Number</label>
          <input class="form-control" type="number" id="contact1" value />
        </div>
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="contact2">Alternate Contact Number</label>
          <input class="form-control" type="text" id="contact2" value />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="email1">Email address</label>
          <input class="form-control" type="email" id="email1" value />
        </div>
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="gender">Gender</label>
          <br />
          <input type="radio" id="male" name="gender" value="male" />
          <label for="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" />
          <label for="female">Female</label>
          <br />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="address">Address</label>
          <input class="form-control" type="text" id="address" value />
        </div>
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="address">Date of Join(mm/dd/yy)</label>
          <input class="form-control" type="text" id="address" value />
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="address">Qualification</label>
          <input class="form-control" type="text" id="address" value />
        </div>
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="address">Work Experiance</label>
          <input class="form-control" type="text" id="address" value />
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="address">Designation</label>
          <input class="form-control" type="text" id="address" value />
        </div>
        <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
          <label for="address">Department</label>
          <input class="form-control" type="text" id="address" value />
        </div>
      </div>
      </form>
  </div>
</template>
<script>
    export default {
        props{
            
        }
    }
</script>

<style lang="scss" scoped>

</style>