<template>
  <div class="form-row">
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
        :type="item.t"
        :style="item.style"
        class="form-control"
        :id="item.id"
        :placeholder="item.p"
        :readonly="readOnly"
        :value="formPreviewData[item.id]"
      />
      <input
        v-else-if="formPreviewData != null"
        :type="item.t"
        :style="item.style"
        class="form-control"
        :id="item.id"
        :placeholder="item.p"
        :readonly="readOnly"
        v-model="formPreviewData[item.id]"
      />
      <!-- <textarea
        v-else-if="item.t=='textarea' && formPreviewData.length != 0"
        :type="item.t"
        :rows="item.rows"
        :cols="item.cols"
        :style="item.style"
        class="form-control"
        :id="item.id"
          v-model="arr[item.id]"
        :placeholder="item.p"
       
      /> -->
      
      <textarea
        v-else-if="item.t=='textarea'"
        :type="item.t"
        :rows="item.rows"
        :cols="item.cols"
        :style="item.style"
        class="form-control"
        :id="item.id"
          v-model="arr[item.id]"
        :placeholder="item.p"
       
      />
      <!-- <span v-else-if="item.type === 'file'">
        <div class="file">
          <label class="file-label">
            <input class="file-input" type="file" @change="selectFile" />
            <span class="file-cta">
              <span class="file-icon">
              <i class="fa fa-upload"></i>
            </span>
              <span class="file-label"> {{ item.fileLabel }} </span>
            </span>
          </label>
        </div>
      </span> -->
      <input
        v-else
        :type="item.t"
        :style="item.style"
        class="form-control"
        :id="item.id"
        :placeholder="item.p"
        v-model="arr[item.id]"
        :required="item.required"
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
      file: null,
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
    // formsub(val) {
    //   console.log('formsub', val)
    //   this.test1({ xyz: this.arr })
    // },
    submit(val) {
      if (val === true) {
        console.log('submit', val)
        // this.$emit('getFormData', this.arr,formPreviewData)
        // this.$emit('getFormData', this.arr) Change
        this.$emit('getFormData', Object.assign({}, this.arr))
        this.submitvalue(false)
      }
      // const { file, obj , formPreviewData } = this
      // file === null
      //   ? this.$emit('getFormData', {...obj,...formPreviewData})
      //   : this.$emit('getFormData', { ...obj, file: file })
    },
  },
  methods: {
    ...mapMutations('modules/context', ['submitvalue']),
  },
  computed: {
    ...mapState('modules/context', ['submit']),
  },
}
</script>