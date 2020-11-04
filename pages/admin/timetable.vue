<template>
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
  </div>
</template>

<script>
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
