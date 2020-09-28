<template>
<<<<<<< HEAD
    <div class="form-row">
        <div class="form-group" v-for="(field,key) in config" :key="key" :class="field.class" style="margin:10px 10px 10px 10px"><br>
            <label>{{field.l}}:</label>

=======
    <div>
<<<<<<< HEAD
        <div v-for="(field,key) in conffig" :key="key">
=======
        <div v-for="(field,key) in config" :key="key">
>>>>>>> 23a91e9893b30ea58d24f64195ff10771ab4575f
            <label>{{field.label}}</label>
>>>>>>> d6c20ef288f541851f443343e2c64a087f859bd1
            <component
            :is="field.t"
            class="form-control"
            :placeholder="field.p"
            :name="field.name"
            :params="field.params"
            @input="updateField(field.name,$event)"
            v-validate="field.validation"
            :data-vv-as="field.label"
            
            >
                
            </component>
<<<<<<< HEAD
            <span>{{errors.first(field.name)}}</span>
        </div>
    
=======
            <!-- <span>{{errors.first(field.name)}}</span> -->
            <!-- <label for="">{{field.label}}</label>
            <input :type="field.type">
         </div> --> 
    </div>
>>>>>>> 23a91e9893b30ea58d24f64195ff10771ab4575f
    <div>
        <!-- <button type="submit" :disabled="disabled">Submit</button> -->
    </div>
    <!-- {{formValues}} -->
    </div>
</template>

<script>
import Vue from 'vue'
import Input from '../FormElements/Input'
import Checkbox from '../FormElements/Checkbox'
import RadioButton from '../FormElements/RadioButton'
export default {
    props:['config'],
    data(){
        return{
<<<<<<< HEAD
            formvalues:{}
=======
            formValues:{}
>>>>>>> 23a91e9893b30ea58d24f64195ff10771ab4575f
            
        }
    },
    computed:{
<<<<<<< HEAD
        disabled(){
            return Object.keys(this.fields).some(key => this.fields[key].invalid)
        }
    },
    created(){
        this.config.map(f => {
            Vue.set(this.formValues,f.name,null)
=======
        // disabled(){
        //     return Object.keys(this.fields).some(key => this.fields[key].invalid)
        // }
    },
    created(){
        this.config.map(f => {
            Vue.set(this.formValues, f.name, null)
>>>>>>> 23a91e9893b30ea58d24f64195ff10771ab4575f
        })
    },
    methods:{
        updateField(field,value){
            this.formValues[field] = value
        }
    },
    components:{
        Input,
        Checkbox,
<<<<<<< HEAD
        RadioButton,
=======
        RadioButton
>>>>>>> 23a91e9893b30ea58d24f64195ff10771ab4575f

    }
}
</script>
<style lang="scss" scoped>


</style>