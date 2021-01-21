<template>
  <div id="home" class="uk-container uk-width-1-1@s uk-flex-center">
    <AboutMe></AboutMe>
    <LandingPage></LandingPage>
  </div>
</template>

<script>
import AboutMe from "@/components/mainPage/AboutMe";
import LandingPage from "@/components/mainPage/LandingPage";
export default {
  name: 'Home',
  components: {
    LandingPage, AboutMe
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
