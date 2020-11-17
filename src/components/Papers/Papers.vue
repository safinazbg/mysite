<template>
  <div class="research">research</div>
  <PaperCard
      v-for="(paper, index) in papers"
      :key="index"
      :paper="paper"
  ></PaperCard>
</template>

<script>
  import PaperCard from "./PaperCard";
  export default {
    name: "Papers",
    components:{
      PaperCard,
    },
    data(){
      return {
        papers:[
          {
            title: "paper1",
            autor: "Safinaz Buyukguzel",
            content: "lorem ipsum dolor sit amet",
            keywords: ["scrum meetings", "ethnomethodology", "conversation analysis","calculations"]
          },
          {
            title: "paper2",
            author: "Safinaz Buyukguzel",
            content: "lorem ipsum...",
            keywords: ["hybrid meetings", "daily scrum", "video-mediated collaboration"]
          },
          {
            title: "paper3",
            author: "Safinaz Buyukguzel",
            content: "lorem ipsum....",
            keywords:["scrum meetings", "reporting", "round-robin"]
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
