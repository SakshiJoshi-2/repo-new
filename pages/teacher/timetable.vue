<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h1 style="text-align: center">
        <i
          class="fa fa-calendar"
          aria-hidden="true"
          style="font-size: 40px; color: grey"
        ></i>
        Timetable
      </h1>
      <hr style="height: 2px; border-width: 0; background-color: lightgrey" />
      <!-- <client-only>
       <div style="width: 600px">
      <vue-table-dynamic :params="params" ref="table"></vue-table-dynamic></div></client-only>-->
      <table class="table table-bordered table-hover table-condensed">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td v-for="(column, indexColumn) in columns" :key="indexColumn">
              {{ item[column] }}
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col" class="text-center" colspan="2">
              Assigned Subjects
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col">Subject:</th>
            <th scope="col">Techer:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maths</td>
            <td>Sir</td>
          </tr>
          <tr>
            <td>Science</td>
            <td>xyzMam</td>
          </tr>
          <tr>
            <td>English</td>
            <td>Whoever</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import VueTableDynamic from 'vue-table-dynamic'

export default {
  layout: 'teacherlayout',

  data() {
    return {
      items: [
        {
          day: 'Monday',
          '10:00am to 11:00am': 'English',
          '11:00am to 12:00am': 'Maths',
          '12:00am to 1:00pm': 'Science',
        },
        {
          day: 'Tuesday',
          '10:00am to 11:00am': 'English',
          '11:00am to 12:00am': 'Maths',
          '12:00am to 1:00pm': 'Science',
        },
        {
          day: 'Wednesday',
          '10:00am to 11:00am': 'English',
          '11:00am to 12:00am': 'Maths',
          '12:00am to 1:00pm': 'Science',
        },
        {
          day: 'THrusday',
          '10:00am to 11:00am': 'English',
          '11:00am to 12:00am': 'Maths',
          '12:00am to 1:00pm': 'Science',
        },
        {
          day: 'Friday',
          '10:00am to 11:00am': 'English',
          '11:00am to 12:00am': 'Maths',
          '12:00am to 1:00pm': 'Science',
        },
        {
          day: 'Saturday',
          '10:00am to 11:00am': 'English',
          '11:00am to 12:00am': 'Maths',
          '12:00am to 1:00pm': 'Science',
        },
      ],
      columns: [
        'day',
        '10:00am to 11:00am',
        '11:00am to 12:00am',
        '12:00am to 1:00pm',
      ],
    }
  },
}
</script>

<style type="text/css">
.container1 {
  box-shadow: 10px 10px 5px lightgrey;
  padding: 40px;
  text-align: center;
}
</style>
