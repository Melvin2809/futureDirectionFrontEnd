<template>
  <div v-for="(u, index) in universite" :key="index">
    <a :ref="u.salaire" target="_blank">
      <div>
        <img :src="u.image" class="tailleLogo"><br>
      </div>
    </a>
  </div>
  <br><br>
</template>
  
<script lang="ts">

import Hero from "../components/Hero.vue";
import axios from 'axios';
import universites from "@/db.json";


export default {
  name: "Salaires-view",
  components: {
    Hero
  },
  data() {
    return {
      universite: universites
    }
  },
  /*mounted() {
    // Effectuer la requête HTTP pour récupérer les données depuis le serveur
    axios.get('https://my-json-server.typicode.com/Melvin2809/futureDirectionBackEnd/ecoles')
      .then(response => {
        this.universite = response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }*/
}
</script>
  
<style>
.tailleLogo{
  width: 60px; /* Ajustez la taille du logo selon vos besoins */
  height: 60px;
  margin-left: 15px;
  margin-top: 15px;
  margin-right: 10px; /* Espace entre le logo et le titre */
  border-radius: 3px;
  border: 1px solid #bfbbbb;
}


</style>