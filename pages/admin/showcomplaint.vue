<template>
  <div>
    <div>
      <h1 class="text-center">
        <i
          class="fa fa-envelope"
          aria-hidden="true"
          style="font-size: 40px; color: grey"
        ></i>
        Complains
      </h1>
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />

      <table
        class="table table-bordered table-hover table-condensed"
        id="table"
      >
        <thead>
          <tr>
            <th>PartitionKey</th>
            <th>RowKey</th>
            <th>To</th>
            <th>description</th>
            <th>Show Complaint</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in abc" :key="i">
            <td>{{ abc[i].PartitionKey }}</td>
            <td>{{ abc[i].RowKey }}</td>
            <td>{{ abc[i].to }}</td>
            <td>{{ abc[i].description }}</td>
            <td>
              <Modal>
                <template v-slot:button>
                  <button
                    type="button"
                    class="btn btn-primary btn-xs"
                    data-toggle="modal"
                    data-target="#myModal"
                    @click="aaa(i)"
                  >
                  Open
                  </button>
                </template>
                <template v-slot:header>Complaint <i
          class="fa fa-envelope"
          aria-hidden="true"
          style="font-size: 40px; color: grey"
        ></i></template>
                <template v-slot:body>
                  <MyForm
                    :form="test1"
                    :formPreviewData="xxx"
                    :readOnly="true"
                    v-on:getFormData="mycomplaint = { ...$event }"
                  ></MyForm>
                </template>
                <template v-slot:footer>
                <!-- <button
                    type="button"
                    class="btn btn-secondary"
                    @click="deleterole"
                  >
                    Delete
                  </button> -->

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
import { complain } from '../../Config/form.js'

import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'users',
  data() {
    return {
      test1: complain,
      mycomplaint: [],
      abc: [],
      xxx: [],
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
    async saveComplain() {
      await this.submitvalue(true)
      if ((await this.mycomplaint) != '') {
        console.log(this.mycomplaint)
      } else {
        console.log(this.mycomplaint)
      }
    },

    // readcomplaint() {
    //   this.$axios({
    //     method: 'post',
    //     url: `${process.env.BASE_URL}/readcomplaint`,
    //     data: {
    //       PartitionKey1: this.mycomplaint.PartitionKey1,
    //       RowKey1: this.mycomplaint.RowKey1,
    //     },
    //   }).then((result) => {
    //     // console.log('res', result.data)
    //     this.xxx = result.data[0]
    //   })
    // },
    aaa(i) {
      let aa = i
      console.log('aa',aa)
      this.xxx = this.abc[aa]
    },
  },
  created: function showcomplaint() {
    this.$axios({
      method: 'post',
      url: `${process.env.BASE_URL}/showcomplaint`,
      data: {
        PartitionKey1: 'complaint',
        RowKey1: this.mycomplaint.RowKey1,
      },
    }).then((result) => {
      // console.log('res', result.data)
      this.abc = result.data
    })
  },
}
</script>

<style scoped>
.container1 {
  box-shadow: 10px 10px 5px lightgrey;
  padding: 40px;
  text-align: center;
}
</style>
