
  <template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 220px"
    >
      <h2 class="heading-center">Assignment</h2>

     
          <table class="table table-bordered table table-hover">
            <thead class="thead-dark">
              <tr>
                <th colspan="5">Assignments:</th>
              </tr>
            </thead>

            <thead>
              <tr>
                <th>Subject</th>
                <th>Created In</th>
                <th>Topics</th>
                <th>Submit In</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in xyz" :key="i">
                <!-- <td>{{ xyz[i].Created}}</td> -->
                <td>{{ xyz[i].RowKey }}</td>
                <td>{{ xyz[i].Wassignment }}</td>
                <td>{{ xyz[i].Cassignment }}</td>
                <td>{{ xyz[i].Dassignment }}</td>

                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#odalCenter"
                    @click="aaa(i)"
                  >
                    Details
                  </button>
                </td>
              
              </tr>
            </tbody>
          </table>

          <!-- <MyForm
      :form="test1"
      :formPreviewData="xyz"
      :readOnly="true"
      v-on:getFormData="myinfo = {...$event }"
      >
      </MyForm> -->
        </div>
      </div>
      
 
</template>
<script>
import { teacherassignment } from '../../helper/formhh'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'studentlayout',
  data() {
    return {
      date_today: '',
      test: teacherassignment,

      test1: teacherassignment,
      myinfo: [],
      xyz: [],
      xxx: [],
      partionkey: '',
      selectedclass:'class1',
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
    aaa(i) {
      let aa = i
      this.xxx = this.xyz[aa]
    },
   
      
  },
  created: function readtAssignment() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/readtAssignment',
        data: {
          PartitionKey:'class1',
          RowKey: this.myinfo.RowKey,
        },
      }).then((result) => {
        console.log('res', result.data)
        this.xyz = result.data
      })
    },

  

}
</script>

<style type="text/css">
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
