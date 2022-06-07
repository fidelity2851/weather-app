<template>
  <div class="weather_cont">
    <!-- Banner Components -->
    <Banner />

    <!-- Location List Components -->
    <Location_List />
  </div>
</template>

<script>
import Banner from "../components/homepage/banner.vue";
import Location_List from "../components/homepage/location_list.vue";

export default {
  name: "HomeView",
  components: {
    Banner,
    Location_List,
  },
};
</script>

<style>
</style>