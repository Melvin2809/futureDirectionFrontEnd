<template>
  <div class="start">
    <img :src="'src/assets/img/education-blanc.avif'">
    <h1>Explorez les universités qui font partie des meilleurs classements</h1>
  </div>
  <div class="search-bar">
    À la recherche d'entreprises passionnantes pour développer votre carrière ? 
    <input type="text" placeholder="Rechercher une entreprise">
    <button class="rounded-button">Rechercher</button>
    <hr />
  </div>
  <h1>Découvrir les entreprises</h1>
  <div class="content-container">
    <div class="filter-container">
      <div class="filter">
        <h2>Filtrer les entreprises</h2>
        Affichage de 1-10 entreprises sur 10
        <hr>
        <p>Lieu</p>
        <input type="text" placeholder="Sélectionnez un lieu">
        <br><br>
        <hr>
        <p>Secteur</p>
        <input type="text" placeholder="Ex. Université, École">
      </div>
    </div>


    <div class="universites-container">
      <!--<pre>{{ JSON.stringify(universite, null, 2) }}</pre>-->
      <div v-for="(u, index) in donnees" :key="index" class="universite-item">
        <div class="image-container">
          <div class="infos-card">
            <div class="header">
              <img :src="u.image" class="logo">
              <h2>{{ u.nom}}</h2><br>
              <!--<p>{{ u.telephone }}</p>
                <a :href="u.description" target="_blank">description</a><br>
                <span class="spacer"></span> -->
            </div>
            <div class="corner-container">
              <div class="left-corner">
                <b>Lieu</b>
                <p>{{ u.adresse }}</p>
              </div>
              
              <div class="mid-corner">
                <b>Nombre d'étudiants</b>
                <p>en moyenne {{ u["Nombre d'etudiants en moyenne"] }}</p>
              </div>
              
              <div class="right-corner">
                <b>Secteur</b>
                <p>{{ u.secteur }}</p>
              </div>

              <div class="top-right-corner">
                <p><b>Classement en France</b><br>{{ u.reputation }}</p>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <!--<pagination-bar/>-->
    </div>
    
  </div>
  
  
    <br><br>

    
</template>


<script lang="ts">
import Hero from "../components/Hero.vue";
import VueJsonPretty from 'vue-json-pretty';
import axios from 'axios'; //import pour le back end
import PaginationBar from "@/components/PaginationBar.vue";
import ApiService from '@/api.js';



export default {
  name: "ecolesUniversites-view",
  props: {
    currentPage: Number,
    totalPages: Number
  },
  components: {
    Hero,
    VueJsonPretty,
    PaginationBar,
  },
  data(){
    return{
      //Pour rattaché le back end on front end* universite: []
      donnees: [], // Utilisation du type Universite
    }
  },
  /*Pour rattaché le back end on front end

  mounted() {
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
    changePage(pageNumber) {
      this.$emit('page-change', pageNumber);
    }
  },
  created() {
    this.recupererDonneesServeur();
    this.mettreAJourDonneesServeur();
  },


  
}
</script> 

<style scoped>
.content-container{
  
  display: grid;
  grid-template-columns: 300px auto; /* Deux colonnes, 300px pour filter-container, le reste pour universites-container */
  gap: 15px; /* Espacement entre les deux colonnes */

  width: 100%;
  display: flex;
  margin-top: 50px;
}

h1{
  font-size: 28px;
}

h2{
  font-size: 20px;
}

.filter-container {
  width: 400px; /* Ajustez la largeur de la div filtre */
  padding: 20px; /* Ajoutez un espacement intérieur */
  background-color: rgb(247, 247, 247); /* Couleur de fond de la div filtre */
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1); /* Ombre latérale */
  border-radius: 30px;
}

.filter p{
  margin-left: 6px;
  margin-bottom: 10px;  
}

.filter input[type="text"] {
  border: 1px solid #d9d4d4; /* Remplacez #3498db par la couleur de bordure souhaitée */
  border-radius: 30px;
  margin-left: 5px;
  width: 300px;
  height: 40px;
  padding-left: 10px;
}

.spacer {
  display: inline-block;
  margin: 1.5%;
  
} 

.universite-container {
  flex: 1; /* Occupe l'espace restant */
  height: 10%;
  
}


.spacing{
  margin-left: 40%;
}

.infos-card {
  background-color: rgb(253, 253, 253);
  text-align: center;
  border-radius: 30px; /* Arrondir les coins */
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);

  /* Vous pouvez également ajouter une transition en douceur pour l'ombre */
  transition: box-shadow 0.6s ease-in-out;
}

/* Lorsque la souris survole la carte, augmentez légèrement l'ombre 
.infos-card:hover {
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.15);
  
}*/

.image-container{
  height: 170px;
  width: 800px;
  background-color: rgb(253, 253, 253);
  border: 1px solid #d9d4d4;
  border-radius: 30px; /* Arrondir les coins */
  position: relative;
}

.image-container:hover {
  display: block;
  margin-left: 1px;
  /*background-color: rgb(255, 255, 255);*/
  
  box-shadow:0px 3px 10px #a7b4b1, 0 0 20px #c6d8d5, 0 0 30px #cadbd8;;
  
}



.universite-item {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.header {
  display: flex;
  align-items: center;
  /*border: 1px solid #bfbbbb;*/
  width: 50%;

  
}

.header .logo {
  width: 60px; /* Ajustez la taille du logo selon vos besoins */
  height: 60px;
  margin-left: 15px;
  margin-top: 15px;
  margin-right: 10px; /* Espace entre le logo et le titre */
  border-radius: 30px;
  border: 1px solid #bfbbbb;
}

.search-bar{
  text-align: center;
  margin-left: 0px;
  margin-top: 30px;
  
}

.rounded-button {
  border-radius: 30px; /* Ajustez la valeur selon le degré d'arrondi souhaité */
  padding: 4px 20px; /* Ajoutez du rembourrage pour améliorer l'apparence */
  background-color: #3437db;
  color: white;
  border: none;
  margin-left: 10px;
  margin-bottom: 30px;
}

input[type="text"] {
  border: 1px solid #d9d4d4; /* Remplacez #3498db par la couleur de bordure souhaitée */
  border-radius: 30px;
  margin-left: 5px;
  width: 300px;
  padding-left: 10px;
}

.start{
  margin-left: 100px;
  position: relative;
}

.start img{
  margin-left: 430px;
  padding-bottom: 0px;
  height: 450px;
   /* position: absolute; Position absolue pour placer l'image à l'intérieur de la div */
  top: 50%; /* Déplacer l'image verticalement au milieu */
  left: 50%; /* Déplacer l'image horizontalement au milieu */
  transform: translate(-50%, -10%); /* Ajuster la position pour centrer l'image */
  width: 30%; /* Ajuster la largeur de l'image pour qu'elle remplisse la div */
  height: auto; /* Ajuster automatiquement la hauteur en fonction de la largeur */
}

.left-corner{
  margin-left: 15px;
  text-align: start;
  margin-top: 30px;
  height: 50px;
  width: 20%;
}

.mid-corner{
  margin-top: 28px;
  margin-left: 160px;
  height: 60px;
  
}

.right-corner{
  /*border: 1px solid #ccc;*/
  margin-left: 220px;
  margin-top: 28px;
}

.top-right-corner{
  /*border: 1px solid #bfbbbb;*/
  width: 300px;
  height: 50px;
  position: absolute;
  bottom: 120%;
  right: 1%;
}

.top-right-corner p{
  color: #000000;
  margin-left: 110px;
  /*border: 1px solid #bfbbbb;*/
  
}


.corner-container{
  display: grid;
  grid-template-columns: 300px auto; /* Deux colonnes, 300px pour filter-container, le reste pour universites-container */
  gap: 1px; /* Espacement entre les deux colonnes */
  display: flex;
  position: relative; /* Nécessaire pour positionner la div intérieure */
}


p{
  color:#4e4d4d
}



</style>