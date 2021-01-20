<template>
  <div class="work-timeline">


    <div class="timeline is-centered">
      <div class="timeline-content">
        <p>Timeline content - Can include any HTML element</p>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker is-image is-32x32">
          <img src="../../../public/avatars/sdu_logo.png" height="221" width="277"/>
        </div>
        <div class="timeline-content">
          <p class="heading">September 2017 - Present</p>
          <div class="box">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>PhD Fellow</strong> <small>@johnsmith</small> <small>31m</small>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker is-image is-32x32">
          <img src="../../../public/avatars/microsoft.png" height="128" width="128"/>
        </div>
        <div class="timeline-content">
          <p class="heading">February 2016</p>
          <p>Timeline content - Can include any HTML element</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker is-image is-32x32">
          <img src="../../../public/avatars/human.png" height="104" width="250"/>
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
