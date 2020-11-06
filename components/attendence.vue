<template>
 <div class="container" >
    <div class="container1" style="background-color: #ffffff;">
      <h1 style=" text-align: center">
        <i class="fa fa-clock-o" aria-hidden="true" style="font-size:40px;color:grey;"></i> Attendance
      </h1>
       <hr style="height:2px;border-width:0;background-color:lightgrey" />
       <div class="container2" style="padding:20px 0px 50px  400px ">
       <client-only>
      <vc-calendar class="calc" />
      <vdate-picker v-model="selectedDate" />
    </client-only> 
    </div>
    </div>   
  </div>
</template>

<script>
export default {
  
  data() {
    return { selectedDate: null }
  },
}
</script>

<style  >
.container {
  text-align: center;
  width: 60%;
}
.container1{
  
box-shadow: 10px 10px 5px lightgrey;
padding:40px;
text-align: center;
margin: 20px 50px 30px 0px;
    
}
.calc{
    align-content: center;
    
}
</style>