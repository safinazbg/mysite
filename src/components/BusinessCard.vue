<template>
  <div class="businessCard">

    <div class="container">
      <div class="card">
        <figure class="image is-3by4">
          <img src="../assets/safinaz.jpeg" alt="Placeholder image">
        </figure>
        <div class="card-content has-text-left p-5">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Dr. Dr. Safinaz Buyukguzel</p>
              <p class="subtitle is-6">UX Research and Design, Web Development</p>
            </div>
          </div>
          <div class="content">
            <p class="is-size-6 has-text-justified">I am researching the interactional organization of agile software development meetings, more specifically scrum meetings. I work towards an understanding of the ways in which social interaction, organizational structures and professional practices turn into applied technologies.
              <br class="mb-5">My research interest lies at the intersection of EMCA, Workplace Studies, Human-Computer Interaction, and Computer-Supported Cooperative Work. </p>
            <hr>
            <span>
              View on <a href="https://twitter.com/sbuyukguzel">Twitter</a>, <a href="https://www.linkedin.com">Linkedin</a>...
            </span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BusinessCard",
  }
</script>

<style scoped>
  .card {
    height: 400px;
    max-width: 900px;
    display: grid;
    grid-template-columns: 300px auto;
  }
</style>
