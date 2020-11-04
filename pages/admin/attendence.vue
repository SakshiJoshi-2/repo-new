<template>
  <div class="container">
 <div class="container1" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 220px">
    
   <h1>Attendence</h1><br/>
   <hr style="height:2px;border-width:0;background-color:lightgrey" />

   <div class="row">
      <div class="col-sm-6" style="padding:10px">
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter1">Staff Attendence</button>
      </div>
       <div class="col-sm-6" style="padding:10px">
         <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter2">Student Attendence</button>
    </div>
    </div>    

            <div>
          <div class="text-center">
            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModalCenter1"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                   
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body"></div>

                  <form >
                   <label for="fname">Enter Name : </label>
                   <input type="text" id="fname" name="fname" size="20"><br><br>
                   <label for="Dept">Deparment : </label>
                   <input type="text" id="dept" name="dept"  size="15"><br><br>
                  </form>
                  <div class="modal-footer">
                    <button type="button" v-on:click="component='attendence'"  class="btn btn-info" >view</button>

                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
       

 <component v-bind:is="component"> </component>




            <div>
          <div class="text-center">
            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModalCenter2"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                   
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body"></div>

                  <form >
                   <label for="fname">Enter Name : </label>
                   <input type="text" id="fname" name="fname" size="25"><br><br>
                   <label for="sclass">Class : </label>
                   <input type="text" id="class" name="class"  size="16"><br><br>
                   <label for="ssection">Section : </label>
                   <input type="text" id="section" name="section"  size="7"><br><br>
                  </form>
                 
                  <div class="modal-footer">
                    <button type="button"  v-on:click="component='attendence'" class="btn btn-info" >view</button>

                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
       

 <component v-bind:is="component"> </component>



  </div>
  </div>
</template>
<script>

 import attendence from '@/components/attendence.vue';
    
  
    export default {
        layout:'adminlayout',
        components:{
            'attendence': attendence,
            
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

.container1{
  
  box-shadow: 10px 10px 5px lightgrey;
 
}

</style>
