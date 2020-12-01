<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 220px"
    >
      <h1 style="text-align: center">
        <i
          class="fa fa-clock-o"
          aria-hidden="true"
          style="font-size: 40px; color: grey"
        ></i>
        Attendance
      </h1>
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />
      <div class="container" style="padding: 60px 50px 50px 400px">
        <client-only>
          <vc-calendar :attributes="attrs" />

          <!-- <vdate-picker v-model="selectedDate" 

 /> -->
          {{ attrs[0].dates }}
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'users',
  data() {
    // const date = new Date();
    // const year = date.getFullYear();
    // const month = date.getMonth();
    return {
      abc: '',
      pdate: [],
      pdatestring: '',
      adate: '11-12-2020',
      attrs: [
        {
          highlight: {
            color: 'red',
            fillMode: 'solid',
          },
          // dates: this.adate,
          dates: null,
        },
        {
          highlight: {
            color: 'green',
            fillMode: 'solid',
          },

          dates: new Date(this.adate),
          // dates: new Date('11-12-2020'),
        },
      ],
    }
  },
  methods: {
    dates() {
      for (var x = 0; x < this.abc.length; x++) {
        console.log('3', this.abc.attendence)
      }
    },
  },
  created: function showattendance() {
    this.$axios({
      method: 'post',
      url: `${process.env.BASE_URL}/showattendance`,
      data: {
        RowKey: '75c9e0f7-cfc9-4812-9492-986de9e7a020',
      },
    }).then((result) => {
      console.log('res', result.data)
      this.abc = result.data

      for (var x = 0; x < this.abc.length; x++) {
        if (this.abc[x].attendence == 'present') {
          this.pdate = this.abc[x].PartitionKey

          console.log('present', this.pdate)
        } else {
          this.attrs[0].dates = this.abc[x].PartitionKey

          console.log('absent', this.attrs[0].dates)
        }
      }
    })
  },
}
</script>

<style scoped>
.container1 {
  box-shadow: 10px 10px 5px lightgrey;
}
</style>
