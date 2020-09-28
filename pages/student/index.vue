<template>
    <div>
     <MyForm :form="test"></MyForm>
    </div>
</template>

<script>
import{sellerForm} from '../../helper/formhh'
import MyForm from '@/components/MyForm.vue'
    export default {
        layout:'studentlayout',
        data(){
            return{
                test:sellerForm
            }
        }
    }
</script>

<style  scoped>

</style>