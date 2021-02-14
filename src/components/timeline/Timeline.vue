<template>
  <div class="timeline">
    <div
        v-for="(point, index) in points"
        :key="index"
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
        uk-grid
    >
      <div
          class="uk-card-media-left uk-cover-container"
          :class="{'uk-card-media-left': index % 2, 'uk-flex-last@s': points.length === index + 1}"
      >
        <div class="spacer"></div>
        <canvas width="600" height="200"></canvas>
      </div>
      <timelineInfoCard
          :body="point.body"
          :date="point.date"
          :logo-src="point.logoSrc"
          :title="point.title"
      ></timelineInfoCard>
    </div>
  </div>
</template>

<script>
  import TimelineInfoCard from "@/components/timeline/TimelineInfoCard";
  export default {
    name: "TimeLine",
    components: {
      TimelineInfoCard,
    },
    data() {
      return {
        points: [
          {
            body: 'PhD Student at uni',
            date: '2017-present',
            logoSrc: './avatars/sdu_logo.png',
            title: 'not body',
          }, {
            body: 'The other PhD at uni',
            date: '2009-present',
            logoSrc: './avatars/hacettepe^2.png',
            title: 'not body',
          },
        ]
      }
    }
  }
</script>
<style scoped>

</style>
