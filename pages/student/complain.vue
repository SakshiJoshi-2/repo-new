<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 220px"
    >
      <h1>
        <i
          class="fa fa-envelope"
          aria-hidden="true"
          style="font-size: 40px; color: grey"
        ></i>
        Complain
      </h1>
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />
      <MyForm
        :form="test"
        v-on:getFormData="mycomplaint = { ...$event }"
      ></MyForm>
      <button @click="saveComplain">Submit</button>
      <button class="btn btn-primary" @click="addcomplaint()">Complain</button>
      <button class="btn btn-primary" @click="updatecomplaint()">
        Update Complain
      </button>
      <button class="btn btn-primary" @click="deletecomplaint()">
        Delete Complain
      </button>
      <!-- <form>
        <div class="form-group">
          <label for="to">To:</label>
          <input type="text" class="form-control" id="to" />
          <br />
          <label for="complaint">Complaint:</label>
          <textarea
            class="form-control"
            rows="8"
            id="complaint"
            placeholder="Write your complaint...."
          ></textarea>
        </div>
        <div class="text-center">
          <button class="btn btn-primary" value="Submit Button">Send</button>
        </div>
      </form> -->
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
      test: complain,
      mycomplaint: [],
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
 
    async addcomplaint() {
      await this.saveComplain()
      await this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/addcomplaint`,
        data: {
          PartitionKey: this.mycomplaint.PartitionKey,
          RowKey: this.mycomplaint.RowKey,
          to: this.mycomplaint.to,
          description: this.mycomplaint.description,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
    async deletecomplaint() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/deletecomplaint`,
        data: {
          PartitionKey: this.mycomplaint.PartitionKey,
          RowKey: this.mycomplaint.RowKey,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },

    updatecomplaint() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/updatecomplaint`,
        data: {
          PartitionKey: this.mycomplaint.PartitionKey,
          RowKey: this.mycomplaint.RowKey,
          to: this.mycomplaint.to,
          description: this.mycomplaint.description,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
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
