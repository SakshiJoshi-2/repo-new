<template>
    <div>
        <h1>Registration form</h1>
   <registration />
   <div class="text-center">
         <button type="button" class="btn btn-info">Register</button>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
    export default {
        layout: 'adminlayout',
    //     data () {
    //     return {
    //         user: {
    //             firstName: '',
    //             lastName: '',
    //             username: '',
    //             password: ''
    //         },
    //         submitted: false
    //     }
    // },
    // computed: {
    //     ...mapState('account', ['status'])
    // },
    // methods: {
    //     ...mapActions('account', ['register']),
    //     handleSubmit(e) {
    //         this.submitted = true;
    //         this.$validator.validate().then(valid => {
    //             if (valid) {
    //                 this.register(this.user);
    //             }
    //         });
    //     }
    // }
};
    
</script>

<style lang="scss" scoped>

</style>