<template>

 <div class="container-fluid" style="background-color: #f5f5ef ">
    <div class="container1" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 160px">
     
    <div id="ex">
      <h1 class="heading-center">
        <i class="fa fa-book" aria-hidden="true" style="font-size:40px;color:grey;"></i> Syllabus
      </h1>
      <div class="container p-2 my-2 border">
        <div class="btn-group">
          <button
            class="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Subject</button>
          <div class="dropdown-menu">
            <button v-on:click="component='English'" class="dropdown-item" >English</button>
            <button v-on:click="component='Maths'" class="dropdown-item" >Maths</button>
            <button v-on:click="component='Science'" class="dropdown-item" >Science</button>
          </div>
        </div>
  </div>
  </div>
  <component v-bind:is="component"> </component>
  </div></div>
</template>

<script>
    import English from '@/components/english.vue';
    import Maths from '@/components/Maths.vue';
    import Science from '@/components/Science.vue';
    export default {
        layout:'studentlayout',
        components:{
            'English': English,
            'Maths': Maths,
            'Science':Science
        },
        data(){
            return{
                component:' '
            }
        }
        
    }
</script>
<style type="text/css">
.heading-center {
  text-align: center;
}
#ex {
  border: 1px solid black;
  padding: 15px;
  background-size: auto;
}
.container1{
  
  box-shadow: 10px 10px 5px lightgrey;

}

</style>