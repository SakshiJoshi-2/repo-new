<template>
  <div class="container-fluid" style="background-color: #f5f5ef ">
    <div class="container1" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 160px">
      <h1 >
        <i class="fa fa-envelope" aria-hidden="true" style="font-size:40px;color:grey;"></i>   Notification
      </h1>
      <hr style="height:2px;border-width:0;background-color:lightgrey" />
       
     <MyForm :form="test" v-on:getFormData="notification = { ...$event }"></MyForm>
      <!-- <form name="notification">
        <div class="form-group">
          <label for="to">To:</label>
          <input type="text" class="form-control" id="to" placeholder="to"/>
          <br />
          <label for="complaint">Notification:</label>
          <textarea
            class="form-control"
            rows="8"
            id="notification"
            placeholder="Enter content of notification...."
          ></textarea>
        </div>
        <div class="text-center">
          <button type="button" class="btn btn-primary" value="Submit Button">Send</button>
        </div>
      </form> -->
 <button type="button" class="btn btn-success" @click=" saveDataIndatabase();addnotification()">
        Add Notification
      </button>
       <button type="button" class="btn btn-primary" @click="saveDataIndatabase();updatenotification()">
        Update Notification
      </button>
       <button type="button" class="btn btn-danger" @click="saveDataIndatabase();deletenotification()">
        Delete Notification
      </button>
       
     
      {{notification}}
    </div>
  </div>
</template>

<script>
import { notification} from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'adminlayout',
  
  data() {
    return {
           test: notification,
      notification : [],
      notice:[],
        xyz: [],
      xxx: []
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
        url: 'http://localhost:3000/api/addnotification',
        data: {
          PartitionKey:"notification",
          RowKey: this.notification.RowKey,
          date:this.notification.date,
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
      url: 'http://localhost:3000/api/updatenotification',
      data: {
         PartitionKey: "notification",
          RowKey: this.notification.RowKey,
          recipient: this.notification.recipient,
              notification: this.notification.notification,
      },
    }).then((result) => {
      console.log('res', result)
   

    })
  },   
  async deletenotification() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/deletenotification',
        data: {
          PartitionKey: "notification",
          RowKey: this.notification.RowKey 
          
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

<style  scoped> 
.container1{
  
  box-shadow: 10px 10px 5px lightgrey;
  padding:40px;
    text-align: center;

}

</style>