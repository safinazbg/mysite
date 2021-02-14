<template>
  <div
      class="uk-card uk-card-body info"
  >
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
          <img
              class="uk-border-circle"
              width="40"
              height="40"
              :src="logoSrc">
        </div>
        <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">{{ title }}</h3>
          <p class="uk-text-meta uk-margin-remove-top"><time>{{ date }}</time></p>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "timelineInfoCard",
  props: {
    body: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    logoSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },

  }
}
</script>

<style scoped>
</style>
