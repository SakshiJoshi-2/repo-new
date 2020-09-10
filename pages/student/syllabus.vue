<template>
    <div>
      
     <div id="ex">
      <div class="container p-2 my-2 border">
       <div class="row">  
           <div class="col-sm-8">
                <span>  <h2 style="margin-left:10px ">Syllabus</h2></span>
                <i class="fa fa-book" aria-hidden="true"></i>
           </div>
           <div class="col-sm-4  p-1" > 
            <div class="btn-group">
            
                <button
                    type="button"
                    class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Subject
                    <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                        <button type="button" class="btn btn-secondary dropdown-item" v-on:click="component='English'" >
                        English
                        </button>
                        <button type="button" class="btn btn-secondary dropdown-item" v-on:click="component='Maths'" >
                        Maths
                        </button>
                        
                        <button type="button" class="btn btn-secondary dropdown-item" v-on:click="component='Science'" >
                        Science
                        </button>
                
                </div>
            </div>
          </div> 
        </div>
       
      </div>
    </div>
        <component v-bind:is="component"></component>
      
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