<template>
<div class="paperCard">
  <div class="container">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{paper.title}}</p>
            <p class="subtitle is-6">{{paper.author}}</p>
          </div>
        </div>
        <div class="content">
        <p>{{paper.content}}</p> <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <p
              v-for="keyword in paper.keywords"
              :key="keyword"
          >{{keyword}}</p>
        </div>
      </div>
    </div>
  </div>

</div>

</template>

<script>
  export default {
    name: "PaperCard",
    props: {
      paper: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
