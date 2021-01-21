<template>
  <div class="small">
  <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
    <div id="me" class="uk-flex-last@s uk-card-media-right uk-cover-container">
      <canvas width="600" height="500"></canvas>
    </div>
    <div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">Media Right</h3>
        <p>Lorem ipsum dolor sit amet, consectetur <em>adipiscing elit</em>, sed do eiusmod tempor incididunt.</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
name: "AboutMe"
}
</script>

<style>
#me {
  background-image: url('../../assets/safi_green.png');
  background-size: cover;
  background-position-y: -23px;
}


</style>
