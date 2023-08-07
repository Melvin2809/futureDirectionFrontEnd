<template>
  <div v-for="(universite, index) in universites" :key="index">
    <a :ref="universite.salaire" target="_blank">
      <div class="image-container">
        <img :src="universite.image" alt="Clickable Image" @click="handleClick(universite)"><br>
        <div class="hover-message">Cliquer pour afficher les Salaires</div>
      </div>
    </a>
  </div>
  <br><br>
</template>
  
<script lang="ts">

import Hero from "../components/Hero.vue";
import jsonData from "@/ecolesUniversites.json"

interface Universite {
  nom: string;
  adresse: string;
  telephone: string;
  image: string;
  description: string;
  reputation: string;
  salaire: string;
}


export default {
  name: "Salaires-view",
  components: {
    Hero
  },
  data() {
    return {
      universites: jsonData,
    }
  },
  methods: {
    handleClick(universite: Universite) {
      window.open(universite.salaire, "_blank");
    }
  }
}
</script>
  
<style>
.image-container {
  position: relative;
}

.image-message-container {
  display: flex;
  align-items: center;
} 

.hover-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: none;
}

.image-container:hover {
  display: block;
  margin-left: 1px;
  /*background-color: rgb(255, 255, 255);*/
  box-shadow:0 0 10px #a7b4b1, 0 0 20px #c6d8d5, 0 0 30px #cadbd8;;
  
}




</style>