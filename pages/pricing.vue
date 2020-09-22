<template>
    <div>
<button type="button" class="btn btn-info" @click="show">show</button>
    </div>
</template>

<script>
 import {db} from '../plugins/firebaseConfig'
    export default {
        methods:{
          async  show(){
                db.collection("cities").doc("LA").set({
              name: "Los Angeles",
                 state: "CA",
                 country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});


            }
        }
    }
</script>

<style  scoped>

</style>