<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <div id="ex">
        <h1 class="heading-center">
          <i
            class="fa fa-book"
            aria-hidden="true"
            style="font-size: 40px; color: grey"
          ></i>
          Syllabus
        </h1>
        {{ abc }}
      </div>
    </div>
  </div>
</template>

<script>
import { createsyllabus } from '../../helper/formhh'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'studentlayout',

  data() {
    return {
      abc: [],
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
  },
  created: function readSyllabus() {
    this.$axios({
      method: 'post',
      url: 'http://localhost:3000/api/readSyllabus',
      data: {
        PartitionKey: 'Class1AScience',
      },
    }).then((result) => {
      console.log('res', result.data)
      this.abc = result.data
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
  padding: 15px;
  background-size: auto;
}
.container1 {
  box-shadow: 10px 10px 5px lightgrey;
}
</style>
