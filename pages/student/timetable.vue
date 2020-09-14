<template>
  <div class="container-fluid" style="background-color: #f5f5ef ">
    <div class="container" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 160px">
      <h1 style=" text-align: center;">
        <i class="fa fa-calendar" aria-hidden="true" style="font-size:40px;color:grey;"></i> Timetable
      </h1>
      <hr style="height:2px;border-width:0;background-color:lightgrey" />
      <!-- <client-only>
       <div style="width: 600px">
      <vue-table-dynamic :params="params" ref="table"></vue-table-dynamic></div></client-only>-->
        <table class="table table-bordered table-hover table-condensed">
<thead>
    <tr>
        <th v-for="(column, index) in columns" :key="index"> {{column}}</th>
    </tr>
</thead>
<tbody>
    <tr v-for="(item, index) in items" :key="index">
        <td v-for="(column, indexColumn) in columns" :key="indexColumn">{{item[column]}}</td>
    </tr>
</tbody>
       </table>

    </div>
  </div>
</template>

 <script>
// import VueTableDynamic from 'vue-table-dynamic'

export default {
  layout: 'studentlayout',
  // name: 'Demo',
  // data() {
  //   return {
  //     params: {
  //       data: [
  //         ['Days/Time', '10:00am to 11:00 am', '11:00am to 12:00am', '12:00 am to 1:00pm','1:00pm to 2:00pm'],
  //         [Monday,'10:00am to 11:00 am', '11:00am to 12:00am', '12:00 am to 1:00pm','1:00pm to 2:00pm'],
  //         [Tuesday,'10:00am to 11:00 am', '11:00am to 12:00am', '12:00 am to 1:00pm','1:00pm to 2:00pm' ],
  //         [Wednesday, '10:00am to 11:00 am', '11:00am to 12:00am', '12:00 am to 1:00pm','1:00pm to 2:00pm'],
  //         [Thrussday, '10:00am to 11:00 am', '11:00am to 12:00am', '12:00 am to 1:00pm','1:00pm to 2:00pm'],
  //         [Friday, '10:00am to 11:00 am', '11:00am to 12:00am', '12:00 am to 1:00pm','1:00pm to 2:00pm']
  //       ],
  //       header: 'row',
  //       border: true
  //     }
  //   }
  // },
  // components: { VueTableDynamic }
    data(){
      return{
        items: [
        {
            'day':'Monday',
            '10:00am to 11:00am': 'English',
            '11:00am to 12:00am': 'Maths',
            '12:00am to 1:00pm': 'Science'
        },
                {
            'day':'Tuesday',
            '10:00am to 11:00am': 'English',
            '11:00am to 12:00am': 'Maths',
            '12:00am to 1:00pm': 'Science'
        },
                {
            'day':'Wednesday',
            '10:00am to 11:00am': 'English',
            '11:00am to 12:00am': 'Maths',
            '12:00am to 1:00pm': 'Science'
        },
                {
            'day':'THrusday',
            '10:00am to 11:00am': 'English',
            '11:00am to 12:00am': 'Maths',
            '12:00am to 1:00pm': 'Science'
        },
                {
            'day':'Friday',
            '10:00am to 11:00am': 'English',
            '11:00am to 12:00am': 'Maths',
            '12:00am to 1:00pm': 'Science'
        },
                {
            'day':'Saturday',
            '10:00am to 11:00am': 'English',
            '11:00am to 12:00am': 'Maths',
            '12:00am to 1:00pm': 'Science'
        },





       
    ],
    columns: [ 'day', '10:00am to 11:00am', '11:00am to 12:00am', '12:00am to 1:00pm']

      }
    }

}
</script>

<style lang="scss" scoped></style>
