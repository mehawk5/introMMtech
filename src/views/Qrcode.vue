<template>
  <v-form>
    <v-card elevation="2" class="py-12">
      <v-img class="white--text align-end"
             height="250px"
             contain
             src="@/assets/qrcode.jpeg" ></v-img>
      <v-card-title class="justify-center">
        QR code generator
      </v-card-title>
      <v-card-text>
        <v-text-field
            label="Text"
            placeholder="Input a text"
            v-model="inputText0"
            outlined
            clearable
        ></v-text-field>
        <qrcode-vue align="center" v-show="inputText0 && inputText0 !== ''" :value="inputText0"></qrcode-vue>
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import QrcodeVue from "qrcode.vue";

@Component({components:{QrcodeVue}})
export default class Qrcode extends Vue{
  inputText0 = "https://www.youtube.com/";
}
</script>

<style scoped>

</style>