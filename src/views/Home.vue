<template>
  <div class="home">
    <BusinessCard></BusinessCard>
    <WorkTimeline></WorkTimeline>
  </div>
</template>

<script>
// @ is an alias to /src
import BusinessCard from '../components/BusinessCard'
export default {
  name: 'Home',
  components: {
    BusinessCard,
  }
}
</script>

