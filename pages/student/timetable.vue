<template>
  <div>
    <client-only>
      <vc-calendar />
      <vdate-picker v-model="selectedDate" />
    </client-only>
  </div>
</template>

<script>
// import { setupCalendar} from 'v-calendar'

export default {
  data() {
    return { selectedDate: null }
  },
}
</script>

<style lang="scss" scoped></style>
