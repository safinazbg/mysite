<template>
<div class="proExperiences">
  <ProExperienceCard
      v-for="(experience, index) in experiences"
      :key="index"
      :experience="experience"
  ></ProExperienceCard>

</div>
</template>

<script>
  import ProExperienceCard from "./ProExperienceCard";
  export default {
    name: "ProExperiences",
    components:{
      ProExperienceCard,
    },
    data(){
      return {
        experiences: [
          {
            date: "2017-Present",
            position: "PhD fellow",
            affiliation: "University of Southern Denmark",
            description: "I work at the....",
            image: "./assets/avatars/sdu_logo.png",
      },
          {
            date: "2018-Spring",
            position: "Research Intern",
            affiliation: "Microsoft Research, Cambridge",
            description: "In spring 2018 I had a amazing internship with Sean Rintel et al at Microsoft Research in Cambridge in the Human Experience and Design group. My stay culminated in a video about the Microsoft Teams features presented on",
            image: "src/assets/avatars/microsoft.png",
          },
          {
            date: "2015-2017",
            position: "Co-founder and vice-director",
            affiliation: "HUMAN Research Center",
            description: "I work at the....",
            image: "./src/assets/avatars/human.png",

          },
        ]
      }
    }
  }

</script>

<style scoped>

</style>
