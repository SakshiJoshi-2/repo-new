<template>
    <div id="ex">
      <div class="container p-2 my-2 border">
        <div class="btn-group">
          <button
            class="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Class</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">1st</a>
            <a class="dropdown-item" href="#">2nd</a>
            <a class="dropdown-item" href="#">3rd</a>
          </div>
        </div>
  </div>
  </div>
</template>

<script>
    import English from '@/components/english.vue';
    import Maths from '@/components/Maths.vue';
    import Science from '@/components/Science.vue';
    export default {
        components:{
            'English': English,
            'Maths': Maths,
            'Science':Science
        },
        data(){
            return{
                component:'Enlish'
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
</style>