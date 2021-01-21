<template>
  <div id="home" class="uk-container uk-width-1-1@s uk-flex-center">
    <AboutMe></AboutMe>
    <hr>
    <HomePageBox></HomePageBox>
  </div>
</template>

<script>
import AboutMe from "@/components/mainPage/AboutMe";
import HomePageBox from "@/components/mainPage/HomePageBox";
export default {
  name: 'Home',
  components: {
   AboutMe, HomePageBox
  }
}
</script>

<style>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
