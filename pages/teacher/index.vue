<template><div>
    <button @click="createtable()">createtable</button></div>
</template>
<script>
import axios from "axios"
export default {
    methods:{
        async createtable(){
            let res= await this.$axios.get('http://localhost:3000/api/createtable');
            console.log(res);
        },
        
    }
}
</script>