<template>
  <div class="row">
    <div class="col-12">
      <h1 class="heading-center"><i class="fa fa-edit"></i>Assignment</h1>
      <hr />

      <table class="table table-bordered table table-hover">
        <thead class="thead-dark">
          
          <tr>
            <th>Subject</th>
            <th>Created On</th>
            <th>Topics</th>
            <th>Submit In</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in data" :key="i">
            <!-- <td>{{ data[i].Created}}</td> -->
            <td>{{ data[i].RowKey }}</td>
            <td>{{ data[i].Wassignment }}</td>
            <td>{{ data[i].Cassignment }}</td>
            <td>{{ data[i].Dassignment }}</td>

            <td>
              <Modal>
                <template v-slot:button>
                  <button
                    type="button"
                    class="btn btn-primary btn-xs"
                    data-toggle="modal"
                    data-target="#myModal"
                    @click="details(i)"
                  >
                    Details
                  </button>
                </template>
                <template v-slot:header>Details </template>

                <template v-slot:body>
                  <MyForm
                    :form="form1"
                    :formPreviewData="formdata"
                    :readOnly="true"
                  ></MyForm>{{data[0].topics}}
                </template>
                <template v-slot:footer> </template>
              </Modal>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { teacherassignment } from '../../helper/formhh'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'users',
  data() {
    return {
      date_today: '',
        form1: teacherassignment,
      myinfo: [],
      data: [],
      formdata: [],
      partionkey: '',
      selectedclass: 'class1',
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
        details(i) {
      let key = i
      this.formdata = this.data[key]
    },
  },
  created: function readtAssignment() {
    this.$axios({
      method: 'post',
      url: `${process.env.BASE_URL}/readtAssignment`,
      data: {
        PartitionKey: 'class1',
        RowKey: this.myinfo.RowKey,
      },
    }).then((result) => {
      console.log('res', result.data)
      this.data = result.data
    })
  },
}
</script>


