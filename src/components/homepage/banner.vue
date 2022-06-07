<template>
  <!-- Mobile Banner -->
  <div v-if="weather" class="mob_banner_con">
    <div class="container">
      <div class="mob_banner_cont">
        <div class="d-flex justify-content-between align-items-start">
          <img
            :src="weather.current.condition.icon"
            alt=""
            class="mob_banner_img"
          />
          <p class="mob_banner_time">
            {{ getCurrentTime(weather.location.localtime)
            }}<small>{{ getTimeType(weather.location.localtime) ? 'PM' : 'AM' }}</small>
          </p>
        </div>
        <div class="d-flex justify-content-between align-items-end">
          <div>
            <p class="mob_banner_loc_small">{{ weather.location.name }}</p>
            <p class="mob_banner_loc">
              {{ weather.location.country }}
              <img
                :src="getCountryFlag(weather.location.country)"
                width="25"
                height="25"
              />
            </p>
          </div>
          <div>
            <p class="mob_banner_temp_small" :title="weather.current.condition.text" style="width: 150px;">
              {{ weather.current.condition.text }}
            </p>
            <p class="mob_banner_temp">
              {{ weather.current.temp_c }}<small>°</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile Banner Ends -->
</template>

<script>
import axios from "axios";

export default {
  name: "Banner",
  data() {
    return {
      weather: null,
      apiKey: "bc72e1d7e4dd42e4b15193040222905",

    };
  },
  methods: {
    async getWeather() {
      axios
        .get("current.json?key=" + this.apiKey + "&q=Lagos&aqi=no")
        .then((res) => {
          this.weather = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    

    getCountryFlag(name) {
      return "https://countryflagsapi.com/svg/" + name;
    },

    getCurrentTime(datetime) {
      var date = new Date(datetime);
      return date.getHours() + ":" + date.getMinutes();
    },

    getTimeType(datetime) {
      var date = new Date(datetime);
      return date.getHours() > 12;
    },



  },
  mounted() {
    this.getWeather();
  },
};
</script>

<style>
</style>