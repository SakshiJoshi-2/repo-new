<template>
  <div class="form-row">

    <hr />
    <div
      class="form-group"
      v-for="(item, i) in form"
      :key="i"
      :class="item.class"
      style="margin: 10px 10px 10px 10px"
    >
      <label>{{ item.l }}</label>
      <input
        v-if="readOnly && formPreviewData"
        :type="item.type"
        class="form-control"
        :id="item.id"
        :placeholder="item.p"
        :readonly="readOnly"
        :value="formPreviewData[item.id]"
      />
      <input
        v-else
        :type="item.type"
        class="form-control"
        :id="item.id"
        :placeholder="item.p"
        v-model="arr[item.id]"
        :style="item.style"
      />
    </div>

    <hr />
   
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      arr: [],
    }
  },
  props: {
    form: {
      type: Array,
      default: null,
    },
    readOnly: Boolean,
    formPreviewData: Object | Array,
    formsub: Boolean,
  },

  watch: {
    submit(val){
      if(val===true){
        console.log('submit',val)
        console.log('ggjh', ...[this.arr])
        this.$emit('getFormData', this.arr)
        this.submitvalue(false)
      }
    }
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']), 
  },
  computed:{
    ...mapState('modules/context',['submit'])
  }
}
</script>
