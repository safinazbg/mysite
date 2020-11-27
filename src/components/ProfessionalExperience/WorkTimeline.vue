<template>
  <div class="work-timeline">


    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium is-primary">Start</span>
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                  <br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                </p>
              </div>
            </div>
          </article>
        </div>
      </header>
      <div class="timeline-item">
        <div class="timeline-marker is-image is-32x32">
          <img src="../../../public/avatars/sdu_logo.png" height="221" width="277"/>
        </div>
        <div class="timeline-content">
          <p class="heading">January 2016</p>
          <p>Timeline content - Can include any HTML element</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker is-image is-32x32">
          <img src="../../../public/avatars/microsoft.png" height="128"
                                                       width="128"/>
        </div>
        <div class="timeline-content">
          <p class="heading">February 2016</p>
          <p>Timeline content - Can include any HTML element</p>
        </div>
      </div>
      <header class="timeline-header">
        <span class="tag is-primary">2017</span>
      </header>
      <div class="timeline-item is-danger">
        <div class="timeline-marker is-danger is-icon">
          <i class="fa fa-flag"></i>
        </div>
        <div class="timeline-content">
          <p class="heading">March 2017</p>
          <p>Timeline content - Can include any HTML element</p>
        </div>
      </div>
      <header class="timeline-header">
        <span class="tag is-medium is-primary">End</span>
      </header>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WorkTimeline",

  }
</script>

<style scoped>
  .box {
    height: 200px;
    max-width: 400px;
    display: grid;
    grid-template-columns: 300px auto;
  }

</style>
