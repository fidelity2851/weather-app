<template>
  <!-- Location Container -->
  <div class="loc_con">
    <div class="container">
      <p class="loc_header">Locations</p>
      
      
      <div v-for="(item, index) in Locations" :key="index"
        class="loc_cont d-flex justify-content-between align-items-center mb-3"
      >
        <div class="">
          <p class="loc_small">{{ item.location.name }}</p>
          <p class="loc_head" style="width: 100px;">
            {{ item.location.country }} <img :src="getCountryFlag(item.location.country)" width="20" height="20" />
          </p>
        </div>
        <div class="">
          <p class="loc_temp">{{ item.current.temp_c }}<small>°</small></p>
          <p class="loc_time">{{ getCurrentTime(item.location.localtime) }}<small>{{ getTimeType(item.location.localtime) ? 'PM' :'AM' }}</small></p>
        </div>
        <div class="">
          <img :src="item.current.condition.icon" width="50" height="50" />
        </div>
      </div>

      </div>
  </div>
  <!-- Location Container Ends -->
</template>

<script>
import axios from "axios";

export default {
  name: "Location_List",
  data() {
    return {
      apiKey: "bc72e1d7e4dd42e4b15193040222905",
      Country: [
        "United States",
        "Italy",
        "Germany",
        "Paris",
        "Canada",
        "England",
        "Chain",
        "Spain",
        "United Arab Emirates",
      ],
      Locations: [],
    };
  },

  methods: {
    async getLocations() {
      for (let index = 0; index < this.Country.length; index++) {
        axios
          .get(
            "current.json?key=" +
              this.apiKey +
              "&q=" +
              this.Country[index] +
              "&aqi=no"
          )
          .then((res) => {
            this.Locations.push(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
    this.getLocations();
  },
};
</script>

<style>
</style>