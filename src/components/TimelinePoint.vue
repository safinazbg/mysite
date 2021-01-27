<template>
  <div>
    <div
        class="uk-card uk-card-body"
        :class="{'uk-card-default': isEven}"
    >{{ leftData }}</div>
  </div>
  <div class="divider"></div>
  <div>
    <div
        class="uk-card uk-card-body"
        :class="{'uk-card-default': !isEven}"
    >{{ rightData }}</div>
  </div>
</template>

<script>
export default {
name: "TimelinePoint",
  props:{
    isEven: {
      type: Boolean,
      default: false
    },
    point: {
      type: Object,
      required: true
    },
  },
  computed: {
    leftData() {
      return this.isEven ? this.point.date : this.point.details
    },
    rightData() {
      return this.isEven ? this.point.details: this.point.date
    }
  }
}
</script>

<style scoped>
  .divider {
    border-color: white!important;
    border-left: 1px solid;
  }
</style>
