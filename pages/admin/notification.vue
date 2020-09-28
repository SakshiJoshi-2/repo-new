<template>
  <div class="container-fluid" style="background-color: #f5f5ef ">
    <div class="container1" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 160px">
      <h1 >
        <i class="fa fa-envelope" aria-hidden="true" style="font-size:40px;color:grey;"></i>   Notification
      </h1>
      <hr style="height:2px;border-width:0;background-color:lightgrey" />
     <form-builder :config="formConfig"></form-builder><br>
      <!-- <form name="notification">
        <div class="form-group">
          <label for="to">To:</label>
          <input type="text" class="form-control" id="to" placeholder="to"/>
          <br />
          <label for="complaint">Notification:</label>
          <textarea
            class="form-control"
            rows="8"
            id="notification"
            placeholder="Enter content of notification...."
          ></textarea>
        </div>
        <div class="text-center">
          <button type="button" class="btn btn-primary" value="Submit Button">Send</button>
        </div>
      </form> -->
    </div>
  </div>
</template>

<script>
export default {
  layout: 'adminlayout',
}
</script>

<style  scoped>
.container1{
  
  box-shadow: 10px 10px 5px lightgrey;
  padding:40px;
    text-align: center;

}

</style>