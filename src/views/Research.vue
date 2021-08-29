<template>
  <div>
    <Activities></Activities>
  </div>
</template>

<script>
import Activities from "@/components/Activities";
export default {
    name: "Research",
  components: {
      Activities
  },
    data () {
      return {
        event: null
      }
    },
    created() {
    //  fetch event by id and set my local data
    }
}
</script>

<style scoped>

</style>
