<template>
    <div class="col-sm-6">
       <input @input="$emit('input',$event.target.value)"/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>