<template>
    <div class="form-row">
        <div class="form-group" v-for="(field,key) in config" :key="key" :class="field.class" style="margin:10px 10px 10px 10px"><br>
            <label>{{field.l}}:</label>

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
            <!-- <span>{{errors.first(field.name)}}</span> -->
            <!-- <label for="">{{field.label}}</label>
            <input :type="field.type">
         </div> --> 
    </div>
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
            formValues:{}
            
        }
    },
    computed:{
        // disabled(){
        //     return Object.keys(this.fields).some(key => this.fields[key].invalid)
        // }
    },
    created(){
        this.config.map(f => {
            Vue.set(this.formValues, f.name, null)
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
        RadioButton

    }
}
</script>
<style lang="scss" scoped>


</style>