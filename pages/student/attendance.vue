<template>
 <div class="container-fluid" style="background-color: #f5f5ef ">
    <div class="container1" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 220px">
      <h1 style=" text-align: center;">
        <i class="fa fa-clock-o" aria-hidden="true" style="font-size:40px;color:grey;"></i> Attendance
      </h1>
       <hr style="height:2px;border-width:0;background-color:lightgrey" />
       <div class="container" style="padding:60px 50px 50px  400px ">
       <client-only>
      <vc-calendar />
      <vdate-picker v-model="selectedDate" />
    </client-only> 
    </div>
    </div>   
  </div>
</template>

<script>
export default {
  layout: 'studentlayout',
  data() {
    return { selectedDate: null }
  },
}
</script>

<style  >
.container1{
  
  box-shadow: 10px 10px 5px lightgrey;

}
</style>