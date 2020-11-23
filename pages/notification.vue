<template>
  <div class="container-fluid" style="background-color: #ffffff">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h1>
        <i
          class="fa fa-envelope"
          aria-hidden="true"
          style="font-size: 40px; color: grey"
        ></i>
        Notification
      </h1>
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />
      <div id="table">
        <table class="table table-bordered table-hover table-condensed">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Date</th>
              <th>Recipient</th>
              <th>Notification</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in xyz" :key="i">
              <td>{{ xyz[i].RowKey }}</td>
              <td>{{ xyz[i].date }}</td>
              <td>{{ xyz[i].recipient }}</td>
              <td>{{ xyz[i].notification }}</td>

              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="details(i)"
                >
                  Open
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="form">
        <MyForm
          :form="test1"
          :formPreviewData="xxx"
          :readOnly="true"
          v-on:getFormData="notification = { ...$event }"
        ></MyForm>

        <button type="button" class="btn btn-primary" @click="close()">
          close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { notification } from '../Config/form'
// import { notification } from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  data() {
    return {
      test1: notification,
      notice: [],
      notification: [],
      xyz: [],
      xxx: [],
    }
  },
  methods: {
    details(i) {
      let aa = i
      this.xxx = this.xyz[aa]
      let x = document.getElementById('table')
      x.style.display = 'none'
      let hide1 = document.getElementById('form')
      hide1.style.display = 'block'
    },
    close() {
      let x = document.getElementById('table')
      x.style.display = 'block'
      let hide1 = document.getElementById('form')
      hide1.style.display = 'none'
    },
  },

  created() {
    this.$axios({
      method: 'post',
      url: 'http://localhost:3000/api/shownotification',
      data: {
        PartitionKey: 'notification',
      },
    }).then((result) => {
      console.log('res', result.data)
      this.xyz = result.data
      let hide1 = document.getElementById('form')
      hide1.style.display = 'none'
      console.log('form')
    })
  },
}
</script>

<style lang="scss" scoped></style>
