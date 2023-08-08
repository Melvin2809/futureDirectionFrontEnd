<template>
  <div class="background-overlay"> <h1>Recherchez des informations sur les salaires</h1></div>
  <img :src="'src/assets/img/bureau.jpg'" alt="Image de fond" class="imageBackGround">
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
import universites from "../api";


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

  methods: {
    async ajouterDonnee() {
      this.donnees.push("Nouvelle donnée");
      await this.mettreAJourDonneesServeur();
    },
    async mettreAJourDonneesServeur() {
      try {
        await ApiService.mettreAJourDonnees(this.donnees);
      } catch (error) {
        console.error("Erreur lors de la mise à jour des données sur le serveur", error);
      }
    },
    async recupererDonneesServeur() {
      try {
        const response = await ApiService.getDonnees();
        this.donnees = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des données depuis le serveur", error);
      }
    },
  },
  created() {
    this.recupererDonneesServeur();
  },
  
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

.imageBackGround{
  max-width: 100%; /* Limite la largeur maximale de l'image à 100% de son conteneur */
  height: auto;
  transform: scaleX(1); /* Vous pouvez ajuster la valeur pour agrandir l'image */
  transform-origin:left; /* Ajustez l'origine de la transformation si nécessaire */
  position: fixed; /* Position fixe pour maintenir l'image en haut de la page */
  top: 0; /* La position verticale en haut de la page */
  left: 1000; /* La position horizontale à gauche de la page */
  width: 73%; /* Remplit la largeur de la page */
  z-index: -1; /* Place l'image derrière le contenu */
}

.background-overlay{
  position: fixed;
  top: 60;
  left: 30%;
  width: 40%;
  height: 40%;
  background-color: rgba(183, 192, 192, 0.5); /* Couleur de fond semi-transparente (noir avec 50% d'opacité) */
  
}


</style>