<template>
    <div>
       <input @input="$emit('input',$event.target.value)"/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>