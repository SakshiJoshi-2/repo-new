<template>
  <div class="row">
    <div class="col-12">
      <h1 class="heading-center"><i class="fa fa-calendar"></i>Timetable</h1>
      <hr />
      <div class="container p-2 my-2" v-if="(time == 0) & (subject == 0)">
        <h4>No Syllabus Available</h4>
      </div>
      <div v-else class="container">
        <table class="table table-bordered table table-hover">
          <thead class="thead-dark">
            <tr>
              <th>{{ 'Days|Time' }}</th>
              <th>{{ time.col1 }}</th>
              <th>{{ time.col2 }}</th>
              <th>{{ time.col3 }}</th>
              <th>{{ time.col4 }}</th>
              <th>{{ time.col5 }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in subject" :key="i">
              <td style="font-weight: bold">{{ subject[i].days }}</td>
              <td>{{ subject[i].col1 }}</td>
              <td>{{ subject[i].col2 }}</td>
              <td>{{ subject[i].col3 }}</td>
              <td>{{ subject[i].col4 }}</td>
              <td>{{ subject[i].col5 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios'
export default {
  layout: 'users',
  data() {
    return {
  
      time: [],
      subject: [],
    }
  },

  created: function readtimetable() {
    this.$axios({
      method: 'post',
      url: `${process.env.BASE_URL}/readtimetable`,
      data: {
        PartitionKey: 'class1A',
      },
    }).then((result) => {
      console.log('res', result.data)
      ;[this.time, ...this.subject] = result.data
    })
  },
}
</script>

<style lang="scss" scoped></style>
