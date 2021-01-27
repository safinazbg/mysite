<template>
  <div class="timeline">
    <TimelinePoint
        v-for="(item, index) in points"
        :key="index"
        :isEven="index % 2 === 0"
        :point="item"
    ></TimelinePoint>
  </div>
</template>

<script>
  import TimelinePoint from "@/components/TimelinePoint";
  export default {
    name: "TimeLine",
    components: {
      TimelinePoint
    },
    data() {
      return {
        points: [
          {
            date: '2017-present',
            details: 'PhD Student at uni'
          }, {
            date: 'date',
            details: 'other thingses'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .timeline {
    display: grid;
    grid-column-gap: .5rem;
    grid-template-columns: 1fr 1px 1fr;
  }
</style>
