<template>

<div class="time-line">
  <div class="timeline is-centered">
    <header class="timeline-header">
      <span class="tag is-medium is-primary">Start</span>
    </header>
    <div class="timeline-item is-primary">
      <div class="timeline-marker is-primary"></div>
      <div class="timeline-content">
        <p class="heading">September 2017-February 2021</p>
        <p>Timeline content - Can include any HTML element</p>
      </div>
    </div>
    <div class="timeline-item is-warning">
      <div class="timeline-marker is-warning is-image is-32x32">
        <img src="https://bulma.io/images/placeholders/32x32.png">
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
        <electron-framework></electron-framework>
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


<!--  business card-->
  <div class="columns has-text-centered">
    <div class="column" id="left">
      <p class="is-size-5 mt-5 mb-5">
        Welcome to my homepage! <br>I am PhD fellow in Design, IT, and Communication <br>@ <a href="https://portal.findresearcher.sdu.dk/da/persons/safinaz">University of Southern Denmark</a> </p>
      <nav class="level">
        <div class="level-item">
          <a class="level-item" href="http://github.com">
              <span class="icon is-large">
                <IconGithub></IconGithub>
              </span>
          </a>
          <a class="level-item" href="http://twitter.com">
            <span class="icon is-large "><i class="mdi mdi-twitter-circle"></i></span>
          </a>
          <a class="level-item" href="http://linkedin.com">
            <span class="icon is-large"><i class="mdi mdi-linkedin"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-large"><i class="mdi mdi-email"></i></span>
          </a>
        </div>
      </nav>
    </div>
    <div class="column" id="right">
      <p class="is-size-6 has-text-justified">I am researching the interactional organization of agile software development meetings, more specifically scrum meetings. I work towards an understanding of the ways in which social interaction, organizational structures and professional practices turn into applied technologies.
        <br class="mb-5">My research interest lies at the intersection of EMCA, Workplace Studies, Human-Computer Interaction, and Computer-Supported Cooperative Work. </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "TimeLine"
  }
</script>

<style scoped>

</style>
