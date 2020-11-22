<template>
  <div class="proExperiences">
    <ProExperienceCard
        v-for="(item, index) in experiences"
        :key="index"
        :experience="item"
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
            start: " September 2017",
            position: "PhD fellow",
            location1: "University of Southern Denmark",
            location2: "Department of Design and Communication",
            link: "http://www.sdu.dk/en/Om_SDU/Institutter_centre/Idk",
            description: "I work at the....",
            image: require("../../../public/avatars/sdu_logo.png"),
         },
          {
            start: "April 2018",
            end: "July 2018",
            position: "Research Intern",
            location1: "Microsoft Research, Cambridge",
            location2: "Human Experience and Design",
            link: "https://www.microsoft.com/en-us/research/lab/microsoft-research-cambridge/",
            description: "In spring 2018 I had a amazing internship with Sean Rintel et al at Microsoft Research in Cambridge in the Human Experience and Design group. My stay culminated in a video about the Microsoft Teams features presented on",
            image: require("../../../public/avatars/microsoft.png"),
          },
          {
            start: 'March 2017',
            end: 'March 2017',
            position: 'Visiting Researcher',
            location1: 'Naver Labs Europe',
            location2: 'in Grenoble, France',
            link: 'http://www.europe.naverlabs.com/',
            description:"I visited...",
            image: require(" ../../../public/avatars/naverLabs.svg"),
          },
          {
            date: "2015-2017",
            position: "Co-founder and vice-director",
            location1: "Hacettepe University",
            location2: "HUMAN Research Center",
            link:"http://www.human.hacettepe.edu.tr/",
            description: "I work at the....",
            image: require("../../../public/avatars/human.png"),
          },
          {
            start: 2013,
            end: 2015,
            position: 'Joint PhD and Visiting Researcher',
            location1: 'University of Lausanne',
            location2: 'Centre de linguistique et des sciences du langage, Switzerland',
            link: 'https://www.unil.ch/clsl/fr/home.html',
            description: "During my first PhD....",
            image: require("../../../public/avatars/unil-logo.svg"),
          },
          {
            start: 2009,
            end: 2017,
            position: 'Research Assistant in the',
            location1: 'French Language Teaching Department',
            location2: '@ Hacettepe University, Turkey',
            description:"I worked....",
            image: require("../../../public/avatars/hacettepe^2.png"),
          },
        ]
      }
    }
  }

</script>

<style scoped>

</style>
