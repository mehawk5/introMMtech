<template>
  <div class="MyBackground">
    <v-img contain height="400" src="@/assets/coding.jpg" ></v-img>
    <div align="center">
      <v-list-item><v-list-item-content>
        <v-list-item-title class="text-h4">
          <v-icon>mdi-desk</v-icon>
          Professional experience
        </v-list-item-title>
      </v-list-item-content></v-list-item>
      <v-list-item><v-list-item-content>
        <v-list-item-title class="text-h5">
          Full stack software developer @ Soft-lines
        </v-list-item-title>
        <v-list-item-subtitle class="text-h6">
          <v-icon>mdi-map-marker</v-icon> El Oued, Algeria <br/>
          <v-icon>mdi-timer-sand</v-icon> 10.2020 - 02.2022 <br/>
          <v-icon>mdi-calendar-check-outline</v-icon>
            Frontend: Vue.js (Vuetify + typescript).<br/>
            Backend: Spring-boot. <br/>
        </v-list-item-subtitle>
      </v-list-item-content></v-list-item>
    </div>
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