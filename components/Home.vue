<template>
  <div class="container">
    <div class="row">
      <div class="col">
      <span><h3>My Profile</h3></span>
      <hr />
      <br />
      <span><h5>Name : {{name}}</h5></span>
      <span><h5>class :{{myClass}}</h5></span>
      <span><h5>Section :{{Section}}</h5></span>
      <span><h5>D.O.B :{{dob}}</h5></span>
      <span><h5>Contact Number :{{contactNo}}</h5></span>
      <span><h5>Email address :{{emailAddress}}</h5></span>
      <span><h5>Blood Group :{{bloodGroup}}</h5></span>
      <span><h5>Address :{{address}}</h5></span>
    </div>
    </div>
  </div>
</template>
<script>
export default {
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
  },

}
</script>

<style scoped>
.row {
  background-color: white;
  margin: 30px;
  margin-left: 80px;
  width: 900px;
  height: 600px;
  padding: 20px 40px;
  /* padding-inline: 40px; */
}


</style>
