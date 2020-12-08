<template>
<div class="row">
  <div class="col-12">
   <h1 class="heading-center"><i class="fa fa-envelope"></i>Complain</h1>
      <hr />
          <MyForm
        :form="test"
        v-on:getFormData="mycomplaint = { ...$event }"
      ></MyForm>
     
      <button class="btn btn-primary" @click="addcomplaint()">Complain</button>
      <button class="btn btn-primary" @click="updatecomplaint()">
        Update Complain
      </button>
      <button class="btn btn-primary" @click="deletecomplaint()">
        Delete Complain
      </button>
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
       await this.submitvalue(true)
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
        await this.submitvalue(true)
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

   async updatecomplaint() {
        await this.submitvalue(true)
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
hr {
  height: 2px;
  border-width: 0;
  background-color: lightgrey;
}
i{
  font-size: 40px; color: grey; margin-right: 5px;
}
</style>
