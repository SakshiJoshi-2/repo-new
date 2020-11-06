<template>
<<<<<<< HEAD
  <div>
    <input class="mx-auto mt-5" v-model="xyz" type="text" />
    <!-- <button class="btn btn-sm btn-info" @click="test">Test</button> -->
    <button class="btn btn-sm btn-info" @click="switchdays">Test</button>
    {{ day }}
    <!-- <div id="container" >
         <h1>Time table</h1><br/>
         start time and end time: <input type="text" v-model="first" id="app1"><br>
         subject 1: <input type="text" v-model="second" id="app2"><br>
        subject 2: <input type="text" v-model="third" id="app3"><br>
        subject 3: <input type="text" v-model="fourth" id="app4"><br>
        subject 4: <input type="text" v-model="fifth" id="app5"><br>
        subject 5: <input type="text" v-model="sixth" id="app6"><br>

        <button @click="displaydetails" class="btn btn-info" id="app7">add</button>
        <hr style="height:2px;border-width:0;background-color:lightgrey " />
     </div>
     <table id="display" >
       <tr>
         <th>Time</th>
         <th>Monday</th>
         <th>Teusday</th>
         <th>Wednesday</th>
         <th>Thursday</th>
         <th>friday</th>
       </tr>
       </table> -->
=======
  <div class="container-fluid" style="background-color: #f5f5ef ">
    <div class="container" style="background-color: #ffffff;width:80% ;margin:30px 0px 30px 160px">
      <h1 style=" text-align: center;">
        <i class="fa fa-calendar" aria-hidden="true" style="font-size:40px;color:grey;"></i> Timetable
      </h1>
      <hr style="height:2px;border-width:0;background-color:lightgrey" />
    
    </div>
    <div class="container">
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
            <!-- <td>{{subject[i].RowKey}}</td> -->
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
>>>>>>> f076ea858e9fd00d83c6d42bf067a7d6b75c996e
  </div>
</template>
<script>
<<<<<<< HEAD
export default {
  // layout: 'adminlayout',
  data() {
    return {
      xyz: '',
      day: '',
    }
  },
  methods: {
    // days(val) {
    //   let x = ''
    //   if (val == 'sun') {
    //     x = 0
    //     return x
    //   } else if (val == 'mon') {
    //     x = 1
    //     return x
    //   } else if (val == 'tha') {
    //     x = 2
    //     return x
    //   } else if (val == 'wed') {
    //     x = 3
    //     return x
    //   }
    // },
    switchdays() {
      console.log(this.xyz)
      switch (this.xyz) {
        case 'Sunday':
          this.day = '0'
          break
        case 'Monday':
          this.day = '1'
          break
        case 'Tuesday':
          this.day = '2'
          break
        default:
          this.day = 'Looking forward to the Weekend'
      }
    },
    test() {
      let z = this.days(this.xyz)
      console.log(this.xyz, z)
    },
  },
  //  data(){
  //    return{
  //        first:'',
  //        second:'',
  //        third:'',
  //        fourth:'',
  //        fifth:'',
  //        sixth:'',
  //        row : 1,
  //        new:''
  //    }
  //  },
  //  methods: {
  //   displaydetails () {
  //   var st= this.first,
  //    var s1= this.second,
  //     var s2= this.third,
  //      var s3= this.fourth,
  //       var s4= this.fifth,
  //        var s5= this.sixth,

  //        var display=this.display,
  //        var newrow=dispaly.insertRow(1)
  //    }
  //  }
}
// var row = 1;
// var entry = document.getElementById("entry");
// entry.addEventListener("click",displaydetails);

// function displaydetails(){
//   var st = document.getElementById("st").value;
//    var et = document.getElementById("et").value;
//     var s1 = document.getElementById("s1").value;
//      var st = document.getElementById("s2").value;
//       var st = document.getElementById("s3").value;
//        var st = document.getElementById("s4").value;
//         var st = document.getElementById("s5").value;

//      var display = document.getElementById("display");
//      var newRow = display.insertRow(row);
//       var cell1=  newRow.insertCell(0);
//        var cell2=  newRow.insertCell(1);
//        var cell3=  newRow.insertCell(2);
//        var cell4=  newRow.insertCell(3);
//        var cell5=  newRow.insertCell(4);
//        var cell6=  newRow.insertCell(5);
//        var cell7=  newRow.insertCell(6);

//        cell1.innerhtml = st;
//        cell2.innerhtml = et;
//        cell3.innerhtml = s1;
//        cell4.innerhtml = s2;
//        cell5.innerhtml = s3;
//        cell6.innerhtml = s4;
//        cell7.innerhtml = s5;

//        row++;
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
#container {
  text-align: center;
}

table {
  border-collapse: collapse;
  width: 50%;
  margin: 50px auto;
}
table,
th,
td {
  border: 2px solid black;
  padding: 5px;
}
th {
  font-size: 30px;
  font-family: arial;
  font-weight: 700;
  color: #0b0c0b;
}
td {
  font-size: 35px;
}
</style>
=======
import { teachertimetable } from '../../Config/form.js'
import MyForm from '@/components/MyForm.vue'
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  layout: 'adminlayout',
   data() {
    return {
      test: teachertimetable,
      myinfo: [],
      time: [],
      subject: [],
      PartitionKey: '',
      RowKey: '',
      count: '',
      col1: '',
      col2: '',
      col3: '',
      col4: '',
      col5: '',
      days:'',
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
      this.PartitionKey = this.myinfo.class + this.myinfo.teachersection
      if ((await this.myinfo.RowKey) == 0) {
        this.col1 = this.myinfo.lecture1
        this.col2 = this.myinfo.lecture2
        this.col3 = this.myinfo.lecture3
        this.col4 = this.myinfo.lecture4
        this.col5 = this.myinfo.lecture5
      } else {
        this.col1 = this.myinfo.subject1
        this.col2 = this.myinfo.subject2
        this.col3 = this.myinfo.subject3
        this.col4 = this.myinfo.subject4
        this.col5 = this.myinfo.subject5
      }
      //     switch (this.myinfo.days) {
      //   case 'Monday':
      //     this.RowKey = 1
      //     break;
      //   case 'Tuesday':
      //     this.RowKey = 2
      //     break;
      //   case ' Wednesday':
      //     this.RowKey = 3
      //     break;
      //   case 'Thursday':
      //     this.RowKey = 4
      //     break;
      //   case 'Friday':
      //     this.RowKey = 5
      //     break;
      //   case 'Saturday':
      //     this.RowKey = 6
      //     break;
      //   default:
      //     this.RowKey = 0
      // }
        this.days=this.myinfo.days
    },

    test1(days){
      if (days == 'mon') {
        return 1;
      }
      if (days == 'thu') {
        return 2;
      }
    },

    // async addtimetable() {
    //   await this.saveDataIndatabase()
    //   // for(this.Rowkey=0;this.RowKey<6)
    //   // {
    //   //   this.col1=this.myinfo.subject1

    //   // }
    //   let x = this.test1('mon')
    //   console.log('x',x)
  
    //   // console.log(this.RowKey)
    //   console.log('2')
    //   await this.$axios({
    //     method: 'post',
    //     url: 'http://localhost:3000/api/addtimetable',

    //     data: {
    //       PartitionKey: this.PartitionKey,
    //       RowKey: this.x,
    //       class: this.myinfo.class,
    //       days: this.myinfo.days,
    //       teachersection: this.myinfo.teachersection,

    //       // lecture1:this.myinfo.lecture1,
    //       col1: this.col1,
    //       col2: this.col2,
    //       col3: this.col3,
    //       col4: this.col4,
    //       col5: this.col5,
    //     },
    //   }).then((result) => {
    //     console.log('res', result)
    //   })
    //   console.log('3')
    // },
    // async updatetimetable() {
    //   await this.saveDataIndatabase()
    //   await this.$axios({
    //     method: 'post',
    //     url: 'http://localhost:3000/api/updatetimetable',
    //     data: {
    //       PartitionKey: this.myinfo.PartitionKey,
    //       RowKey: this.myinfo.RowKey,
    //       teacherday: this.myinfo.teacherday,
    //       teachersection: this.myinfo.teachersection,
    //       teacherhour: this.myinfo.teacherhour,
    //       teacherminute: this.myinfo.teacherminute,
    //       teachersubject: this.myinfo.teachersubject,
    //       teachername: this.myinfo.teachername,
    //     },
    //   }).then((result) => {
    //     console.log('res', result)
    //   })
    // },
    // async deletetimetable() {
    //   await this.saveDataIndatabase()
    //   await this.$axios({
    //     method: 'post',
    //     url: 'http://localhost:3000/api/deletetimetable',
    //     data: {
    //       PartitionKey: this.myinfo.PartitionKey,
    //       RowKey: this.myinfo.RowKey,
    //     },
    //   }).then((result) => {
    //     console.log('res', result)
    //   })
    },
     created:function
     readtimetable() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/readtimetable',
        data: {
          PartitionKey: "class1A",
          // teachersection:"A",
        },
      }).then((result) => {
        console.log('res', result.data)
        ;[this.time, ...this.subject] = result.data
        // this.time = result.data[0]
        // this.subject = result.data
      })
    },
  }

</script>


<style lang="scss" scoped></style>
>>>>>>> f076ea858e9fd00d83c6d42bf067a7d6b75c996e
