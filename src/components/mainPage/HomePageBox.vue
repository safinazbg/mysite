<template>
  <div class="small" >
  <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
        <div class="uk-card-media-left uk-cover-container">
          <img src="../../assets/alone.png" uk-cover/>
          <canvas width="600" height="400"></canvas>
        </div>
        <div class="couleur">
          <div class="uk-card-body">
            <h3 class="uk-card-title">Research</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
      <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
        <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
          <img id="together" src="../../assets/together.png" uk-cover/>
          <canvas width="600" height="400"></canvas>
        </div>
        <div class="couleur">
          <div class="uk-card-body">
            <h3 class="uk-card-title">Professional Experiences</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name: "HomePageBox"
}
</script>

<style>
.small {
  width: 700px;
}

.couleur {
  transition: color 3s;
  background-color: #f3f3f3;
}

</style>
