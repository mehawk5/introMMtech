<template>
  <v-app>
    <v-app-bar
        clipped-left
        elevate-on-scroll
        class="dark-grey darken-4 appClass"
        dense
        dark
        app
    >
      <v-row>
        <v-col cols="1">
          <router-link class="linkCss" to="/">
            <v-icon color="white">mdi-home</v-icon>
          </router-link>
        </v-col>
        <v-col>
          <router-link class="linkCss mx-1" to="/password">
            <v-btn color="grey" depressed><v-icon color="white" class="mx-1">mdi-lock</v-icon> Password generator</v-btn>
          </router-link>
          <router-link class="linkCss mx-1" to="/qrcode">
            <v-btn color="grey" depressed><v-icon color="white" class="mx-1">mdi-qrcode</v-icon> QR-code generator</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer fixed width="300" align="center" dark permanent clipped app class="dark-grey darken-4" >
      <v-avatar
          class="profile"
          color="grey"
          size="164"
          rounded
      >
        <v-img src="@/assets/myphoto.jpg"></v-img>
      </v-avatar>
      <v-list-item dark>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <v-icon>mdi-card-account-details</v-icon>
            Athmane Hassouna
          </v-list-item-title>
          <v-list-item-subtitle>Software developer<br/> 09.06.1995</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item dark>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <v-icon>mdi-map-marker</v-icon>
            Klagenfurt, Austria
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item><v-list-item dark>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <v-icon>mdi-cellphone</v-icon>
            +4367764351753
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item><v-list-item dark>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <v-icon>mdi-email</v-icon>
            mehawk555@gmail.com
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.linkCss {
  text-decoration: none;
  color: inherit;
}
.appClass{
  font-family: "Kanit-Black";
}
</style>