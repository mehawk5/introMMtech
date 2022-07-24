<template>
  <div align="center" class="MyBackground">
    <v-card class="mx-auto" max-width="80%" align="center">
      <v-img class="white--text align-end"
             height="250px"
             src="@/assets/coding.jpg" ></v-img>
      <v-card-title class="justify-center"><v-icon>mdi-desk</v-icon>
        Professional experience</v-card-title>
      <v-card-subtitle>Full stack software developer @ Soft-lines</v-card-subtitle>
      <v-card-text>
        <v-icon>mdi-map-marker</v-icon> El Oued, Algeria <br/>
        <v-icon>mdi-timer-sand</v-icon> 10.2020 - 02.2022 <br/>
        <v-icon>mdi-calendar-check-outline</v-icon>
        Frontend: Vue.js (Vuetify + typescript).<br/>
        Backend: Spring-boot. <br/>
      </v-card-text>
    </v-card>
    <div class="my-1"></div>
    <v-card class="mx-auto" max-width="80%" align="center">
      <v-img class="white--text align-end"
             height="250px"
             src="@/assets/education.jpg" ></v-img>
      <v-card-title class="justify-center"><v-icon>mdi-book</v-icon>
        Education</v-card-title>
      <v-card-subtitle>Master's in game studies and engineering @ University of Klagenfurt</v-card-subtitle>
      <v-card-text>
        <v-icon>mdi-map-marker</v-icon> Klagenfurt, Austria <br/>
        <v-icon>mdi-timer-sand</v-icon> 03.2022 - ?? <br/>
      </v-card-text>
      <v-card-subtitle>BSc in computer science @ University of El Oued</v-card-subtitle>
      <v-card-text>
        <v-icon>mdi-map-marker</v-icon> El Oued, Algeria <br/>
        <v-icon>mdi-timer-sand</v-icon> 09.2014 - 06.2017 <br/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component({components:{}})
export default class Home extends Vue{}
</script>

<style scoped>
.MyBackground{
  background: lightgray;
  height: 100%;
}
</style>