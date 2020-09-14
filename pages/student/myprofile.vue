<template>
  <div class="container-fluid" style="background-color: #f5f5ef ">
    <div class="container1" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 160px">
      <h1 class="heading-center">
        <i class="fa fa-user-circle-o" aria-hidden="true" style="font-size:40px;color:grey;"></i> My Profile
      </h1>
       <hr style="height:2px;border-width:0;background-color:lightgrey" />
      <div id="form">
      <form >
       

        <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="name">Name</label>
            <input class="form-control" type="text" id="name" v-model="name" readonly />
          </div>
          <div class="col-sm-3" style="border:1px solid lightgrey ;padding:10px">
            <label for="class">Standard</label>
            <input class="form-control" type="text" id="class" value="IX" readonly />
          </div>
          <div class="col-sm-3" style="border:1px solid lightgrey ;padding:10px">
            <label for="section">Section</label>
            <input class="form-control" type="text" id="section" value="B" readonly />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="dob">D.O.B</label>
            <input class="form-control" type="text" id="dob" value="12-02-1999" readonly />
          </div>
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="age">Age</label>
            <input class="form-control" type="number" id="age" value="15" readonly />
          </div>
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="blood_group">Blood Group</label>
            <input class="form-control" type="text" id="blood_group" value="B+" readonly />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="contact1">Contact Numbher</label>
            <input class="form-control" type="number" id="contact1" value="9874561233" readonly />
          </div>
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="contact2">Alternate Contact Number</label>
            <input class="form-control" type="text" id="contact2" value="8529637451" readonly />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="email1">Email address</label>
            <input class="form-control" type="text" id="email1" value="abc@gmail.com" readonly />
          </div>
          <div class="col-sm-6" style="border:1px solid lightgrey ;padding:10px">
            <label for="email2">Alternate Email</label>
            <input class="form-control" type="email" id="email2" value="abc@gmail.com" readonly />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12" style="border:1px solid lightgrey ;padding:10px">
            <label for="address">Address</label>
            <input class="form-control" type="text" id="address" value="Railtoli, Gondia" readonly />
          </div>
        </div>
        <br />
        <h3>Parents Information:</h3>
        <hr style="height:4px;border-width:0;background-color:lightgrey" />
        <div class="row">
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="fname">Father's Name</label>
            <input class="form-control" type="text" id="fname" value=" " readonly />
          </div>
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="f_contact">Contact Number</label>
            <input class="form-control" type="number" id="f_contact" value="7894563214 " readonly />
          </div>
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="f_email">Email address</label>
            <input class="form-control" type="email" id="f_email" value="xyz@gmail.com" readonly />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="mname">Mother's Name</label>
            <input class="form-control" type="text" id="mname" value=" " readonly />
          </div>
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="m_contact">Contact Number</label>
            <input class="form-control" type="number" id="m_contact" value="7894563214 " readonly />
          </div>
          <div class="col-sm-4" style="border:1px solid lightgrey ;padding:10px">
            <label for="m_email">Email address</label>
            <input class="form-control" type="email" id="m_email" value="xyz@gmail.com" readonly />
          </div>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'studentlayout',
      data() {
    return {
      name: 'Sakshi Joshi',
      myClass:'IX',
      section:'B',
      dob:'12/02/1999',
      contactNo:'9325456121',
      emailAddress:'sakshijoshi@gmail.com',
      bloodGroup:'B+',
      address:'Behind Shitala mata mandir, Railtoli,Gondia '


    }

}}
</script>
  <style type="text/css" scoped>
  #form{
    margin-block: 20px;
  }
  .container1{
  
  box-shadow: 10px 10px 5px lightgrey;
   padding: 40px;
}

  </style>
