<template>
  <div class="">
    <div class="">
      <h1 class="text-center">
        <i
          class="fa fa-envelope"
          aria-hidden="true"
          style="font-size: 40px; color: grey"
        ></i>
        Notification
      </h1>
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />

      <MyForm
        :form="test"
        v-on:getFormData="notification = { ...$event }"
      ></MyForm>
     
      <button
        type="button"
        class="btn btn-success"
        @click="
          saveDataIndatabase()
          addnotification()
        "
      >
        Add Notification
      </button>
      <button
        type="button"
        class="btn btn-primary"
        @click="
          saveDataIndatabase()
          updatenotification()
        "
      >
        Update Notification
      </button>
      <button
        type="button"
        class="btn btn-danger"
        @click="
          saveDataIndatabase()
          deletenotification()
        "
      >
        Delete Notification
      </button>

    </div>
  </div>
</template>

<script>
import { notification } from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'users',

  data() {
    return {
      test: notification,
      notification: [],
      notice: [],
      xyz: [],
      xxx: [],
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
    async saveDataIndatabase() {
      await this.submitvalue(true)
      if ((await this.notification) != '') {
        console.log(this.notification)
      } else {
        console.log(this.notification)
      }
    },
    async addnotification() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/addnotification`,
        data: {
          PartitionKey: 'notification',
          RowKey: this.notification.RowKey,
          date: this.notification.date,
          recipient: this.notification.recipient,
          notification: this.notification.notification,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },

    updatenotification() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/updatenotification`,
        data: {
          PartitionKey: 'notification',
          RowKey: this.notification.RowKey,
          recipient: this.notification.recipient,
          notification: this.notification.notification,
        }
      }).then((result) => {
        console.log('res', result)
      })
    },
    async deletenotification() {
      this.$axios({
        method: 'post',
        url: `${process.env.BASE_URL}/deletenotification`,
        data: {
          PartitionKey: 'notification',
          RowKey: this.notification.RowKey,
        },
      }).then((result) => {
        console.log('res', result)
      })
    },
    details(i) {
      let aa = i
      this.xxx = this.aa
      let x = document.getElementById('table')
      x.style.display = 'none'
      let hide1 = document.getElementById('form')
      hide1.style.display = 'block'
    },
  },
}
</script>

<style scoped></style>
