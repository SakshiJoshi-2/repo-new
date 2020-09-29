<template>
  <div class="form-row">
    <div
      class="form-group"
      v-for="(item, i) in form"
      :key="i"
      :class="item.class"
    >
      <label>{{ item.label }}</label>
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
        @input="onInput"
      />
    </div>
  </div>
</template>

<script>
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
  },
  methods: {
    onInput() {
      this.$emit('getFormData', Object.assign({}, this.arr))
    },
  },
}
</script>
