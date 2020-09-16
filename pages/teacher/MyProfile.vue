<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h1 class="heading-center">
        <i
          class="fa fa-user-circle-o"
          aria-hidden="true"
          style="font-size: 40px; color: grey"
        ></i>
        My Profile
      </h1>
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />
      <div id="form">
        <form>
          <div class="row">
            <div
              class="col-sm-6"
              style="border: 1px solid lightgrey; padding: 10px"
            >
              <label for="name">Name:</label>
              <input
                class="form-control"
                type="text"
                id="name"
                v-model="name"
                readonly
              />
            </div>
            <div
              class="col-sm-3"
              style="border: 1px solid lightgrey; padding: 10px"
            >
              <label for="email">Email:</label>
              <input
                class="form-control"
                type="text"
                id="email"
                value="jainpriya@"
                readonly
              />
            </div>
            <div
              class="col-sm-3"
              style="border: 1px solid lightgrey; padding: 10px"
            >
              <label for="number">Mob No:</label>
              <input
                class="form-control"
                type="text"
                id="number"
                value="8329111111"
                readonly
              />
            </div>
          </div>
          <div class="row">
            <div
              class="col-sm-4"
              style="border: 1px solid lightgrey; padding: 10px"
            >
              <label for="dob">D.O.B</label>
              <input
                class="form-control"
                type="text"
                id="dob"
                value="12-02-1999"
                readonly
              />
            </div>
            <div
              class="col-sm-4"
              style="border: 1px solid lightgrey; padding: 10px"
            >
              <label for="address">Address</label>
              <input
                class="form-control"
                type="text"
                id="address"
                value="civil lines,mama chok,gondia"
                readonly
              />
            </div>
            <div
              class="col-sm-4"
              style="border: 1px solid lightgrey; padding: 10px"
            >
              <label for="department">Department:</label>
              <input
                class="form-control"
                type="text"
                id="department"
                value="Teaching"
                readonly
              />
            </div>
          </div>

          <br />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'teacherlayout',
  data() {
    return {
      name: 'Abc',

      
      dob: '12/02/1999',
      contactNo: '83291111111',
      emailAddress: 'jainpriya@gmail',
      
      address: 'civil lines,mama chok,gondia',
    }
  },
}
</script>
<style type="text/css" scoped>
#form {
  margin-block: 20px;
}
.container1 {
  box-shadow: 10px 10px 5px lightgrey;
  padding: 40px;
}
</style>
