<template>
  <div class="card-deck">
    <div class="card bg-light text-dark">
      <div class="card-body text-center">
        <div class="btn-group">
          <label>Select Class</label>

          <select name="class" id="class" v-model="selectedclass">
            <option :value="i" v-for="i in 12" :key="i">{{ i }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="card bg-light text-dark">
      <div class="card-body text-center">
        <div class="btn-group">
          <label>Select Section</label>

          <select
            name="class"
            id="class"
            v-model="selectedsection"
            @change="test"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedclass: '',
      selectedsection: '',
    }
  },
  watch: {},
  methods: {
    test() {
      this.$emit('getClass', {
        class: this.selectedclass,
        section: this.selectedsection,
      })
    },
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
</style>