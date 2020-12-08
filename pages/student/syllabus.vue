
<template >
<div class="row">
  <div class="col-12" >
       <h1 class="heading-center"><i class="fa fa-book"></i>Syllabus</h1>
      <hr />
<div class="container p-2 my-2 " v-if="data==0">
 <h4>No Syllabus Available</h4> 
</div>
        <div class="container p-2 my-2 " v-else>
          
        
                <table class="table table-bordered table table-hover">
                <thead class="thead-dark">
                 
                  <tr>
                    <th>Chapters</th>

                    <th>Topics</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in data" :key="i">
                                     <td>{{ data[i].RowKey }}</td>
                                     
                    <td style="padding-left: 50px" v-html="data[i].topics"></td>
                  </tr>
                </tbody>
              </table>
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
  layout: 'users',
  data() {
    return {
      data: [],
    }
  },
    methods: {
    ...mapMutations('modules/context', ['submitvalue']),

  },
  created: function readSyllabus() {
    this.$axios({
      method: 'post',
      url: `${process.env.BASE_URL}/readSyllabus`,
      data: {
        PartitionKey: 'Class1AMaths',
      },
    }).then((result) => {
      console.log('res', result.data)
      this.data = result.data
    })
  },
}
</script>
