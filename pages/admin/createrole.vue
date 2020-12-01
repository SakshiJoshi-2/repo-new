<template>
  <div class="px-2 pt-2">
    <div id="table">
      <table
        id="example"
        class="table border border-dark bg-white responsive sortable"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in data" :key="i">
            <td>{{ item.name }}</td>
            <td>{{ item.designation }}</td>
            <td>{{ item.department }}</td>
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
                <template v-slot:header> Create Role </template>
                <template v-slot:body>
                  <MyForm
                    :form="test1"
                    :formPreviewData="formdata"
                    :readOnly="true"
                    v-on:getFormData="myinfo = { ...$event }"
                  ></MyForm>
                </template>
                <template v-slot:footer>
                  <button type="button" class="btn btn-secondary">
                    Create
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                 
                </template>
              </Modal>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { create_role } from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
export default {
  layout: 'adminlayout',

  data() {
    return {
      test1: create_role,
      myinfo: [],
      uid: uuidv4(),
      data: [],
      readOnly: false,
      formdata: [],
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),

    details(i) {
      let aa = i
      this.formdata = this.data[aa]
    },
    // readcandidate() {
    //   this.$axios({
    //     method: 'post',
    //     url: 'http://localhost:3000/api/readcandidate',
    //     data: {
    //   RowKey: this.myinfo.RowKey,
    //     },
    //   }).then((result) => {
    //     console.log('res', result.data)
    //     this.formdata = result.data[0]
    //   })
    // },
  },
  created() {
    this.$axios({
      method: 'post',
      url: 'http://localhost:3000/api/showcandidate',
      data: {
        PartitionKey: 'candidate',
        RowKey: this.myinfo.RowKey,
      },
    }).then((result) => {
      console.log('res', result.data)
      this.data = result.data
    })
  },
}
</script>

<style scoped></style>
