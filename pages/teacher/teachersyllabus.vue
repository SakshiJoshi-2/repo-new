<template>
   <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h2 class="heading-center">Syllabus</h2>

      <div id="ex">
        <div class="container p-2 my-2 border">
           <label for id="class">class</label>
          <input type='text' id='class' placeholder='Enter class'>
          <br /><br />
          
          </div>
          <div>
          <div class="text-center">
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-secondary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Create Syllabus
            </button>
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      Assignment
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body"></div>
                   <MyForm
                    :form="test"
                    v-on:getFormData="myinfo = { ...$event }"
                  ></MyForm>
                   <button
                    type="button"
                    class="btn btn-primary"
                    @click="
                      saveDataIndatabase()
                      addsyllabus()
                    "
                  >
                    Add Syllabus
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="updatesyllabus()"
                  >
                    Update Syllabus
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="deletesyllabus()"
                  >
                    Delete Syllabus
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="readsyllabus()"
                  >
                    Read Syllabus
                  </button>
                   </div>
              </div>
            </div>
          
          </div>
        </div>
      </div><pre>{{ myinfo }}</pre>
    </div>
   </div>
</template>

<script>
import { createsyllabus} from '../../helper/formhh'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
 layout: 'teacherlayout',
  data() {
    return {
       test: createsyllabus,
         myinfo: [],
    }
},
 methods: {
    ...mapMutations('modules/context', ['submitvalue']),
    async saveDataIndatabase() {
      await this.submitvalue(true)
      if ((await this.myinfo) != '') {
        console.log(this.myinfo)
      } else {
        console.log(this.myinfo)
      }
    },
    
     addsyllabus() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/addsyllabus',
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
         
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
     updatesyllabus() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/updatesyllabus',
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
         
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
      deletesyllabus() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/deletesyllabus',
        data: {
          PartitionKey: this.myinfo.PartitionKey,
          RowKey: this.myinfo.RowKey,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
}
}

</script>

<style scoped>
.heading-center {
  text-align: center;
}
#ex {
  border: 1px solid black;
  padding: 25px;
  background-size: auto;
}
.container1 {
  box-shadow: 10px 10px 5px lightgrey;
  padding: 40px;
  text-align: center;
}
.btn {
  text-align: center;
  margin: 4px 2px;
}
</style>