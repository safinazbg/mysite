<template>
<div class="proExperienceCard">
  <div class="box">
    <article class="media">
      <button class="button is-white">{{experience.date}}</button>
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="{{experience.image}}"/>

        </p>
      </figure>
      <div class="media-content">
        <div class="content has-text-left">
          <p>
            <strong>{{experience.position}}</strong> <a>{{experience.affiliation}}</a>, Dept. of Design and Communication
          </p>
          {{experience.description}}
        </div>
      </div>
    </article>
  </div>
</div>
</template>

<script>
  export default {
    name: "ProExperienceCard",
    props: {
      experience: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>
