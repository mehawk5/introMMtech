<template>
  <v-form>
    <v-card elevation="2" class="py-12">
      <v-img class="white--text align-end"
             height="250px"
             contain
             src="@/assets/password.jpg" ></v-img>
      <v-card-title class="justify-center">
        Password generator
      </v-card-title>
      <v-card-text>
          <v-text-field
              ref="pass"
              v-on:focus="$event.target.select()"
              label="Generated password"
              placeholder="Generated password"
              v-model="generatedPass"
              prepend-inner-icon="mdi-lock"
              outlined
              readonly
              append-icon="mdi-content-copy"
              @click:append="copyPassword()"
          ></v-text-field>
          <v-text-field
              label="Length"
              placeholder="Length"
              type="number"
              v-model="passLength"
              outlined
          ></v-text-field>
        <v-checkbox label="Uppercase" v-model="uppercase"></v-checkbox>
        <v-checkbox label="Lowercase" v-model="lowercase"></v-checkbox>
        <v-checkbox label="Numbers" v-model="numbers"></v-checkbox>
        <v-checkbox label="Special characters" v-model="specials"></v-checkbox>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-row>
          <v-col cols="8"><v-btn
              height="50"
              block
              style="font-size: 20px"
              @click="generatePass()"
              color="primary"
          >
            Generate
          </v-btn></v-col>
          <v-col cols="4"><v-btn
              height="50"
              block
              style="font-size: 20px"
              @click="clearPass()"
              color="secondary"
          >
            Clear
          </v-btn></v-col>

        </v-row>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import {Vue, Component, Ref} from "vue-property-decorator";

@Component({components:{}})
export default class Password extends Vue{
  @Ref() pass: any;
  generatedPass = "";
  passLength = 1;
  uppercase = false;
  lowercase = false;
  numbers = false;
  specials = false;


  randomUppercase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  randomLowercase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  randomSpecial() {
    const specials = '!@#$%^&*(){}[]=<>/,.'
    return specials[Math.floor(Math.random() * specials.length)];
  }
  generatePass(){

    let randoms = [] as any;
    this.generatedPass = "";
    for(let i = 1; i <= this.passLength; i++) {
      randoms.length = 0;
      if(this.uppercase) randoms.push(this.randomUppercase());
      if(this.lowercase) randoms.push(this.randomLowercase());
      if(this.numbers) randoms.push(this.randomNumber());
      if(this.specials) randoms.push(this.randomSpecial());
      this.generatedPass += randoms[Math.floor(Math.random() * randoms.length)];
    }
    if(!this.uppercase && !this.lowercase && !this.numbers && !this.specials) this.generatedPass = "";
  }
  clearPass(){
    this.generatedPass = "";
    this.passLength = 1;
    this.uppercase = false;
    this.lowercase = false;
    this.numbers = false;
    this.specials = false;
  }
  copyPassword(){
    this.pass.focus();
    document.execCommand('copy');
  }
}
</script>

<style scoped>

</style>