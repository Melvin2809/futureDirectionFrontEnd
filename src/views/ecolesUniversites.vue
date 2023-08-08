<template>
  <div class="content-container">
    <div class="universites-container">
      <!--<pre>{{ JSON.stringify(jsonData, null, 2) }}</pre>-->
      <div v-for=" u in universite" :key="u.id">
        <div class="image-container">
          <img :src="u.image" class="myImage">
          <div class="infos-card">
            <h2>{{ u.nom}}</h2><br>
            <p>{{ u.adresse }}</p>
            <p>{{ u.telephone }}</p>
            <a :href="u.description" target="_blank">description</a><br>
            <span class="spacer"></span> 
            <a :href="u.reputation" target="_blank" class="spacing">Réputation académique</a>
          </div>
        </div>
        <br><br>  
      </div>
    </div>

    <!--<div v-if="infosVisibles" class="infos-container">
    </div>-->
  </div>
  
    <br><br>

    
</template>



<script lang="ts">
import Hero from "../components/Hero.vue";
import VueJsonPretty from 'vue-json-pretty';
import axios from 'axios';


export default {
  name: "ecolesUniversites-view",
  components: {
    Hero,
    VueJsonPretty
  },
  data(){
    return{
      universite: []
    }
  },
  mounted() {
    // Effectuer la requête HTTP pour récupérer les données depuis le serveur
    axios.get('https://my-json-server.typicode.com/Melvin2809/futureDirectionBackEnd/ecoles')
      .then(response => {
        this.universite = response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }
  

  
  
}
</script> 

<style>
.content-container{
  
  /*grid-template-columns: 1fr;  Deux colonnes égales */

  width: 100%;
  
}

.spacer {
  display: inline-block;
  margin: 1.5%;
  
} 

.universite-container {
  height: 10%;
}

.universite-card {
  background-color: #f0f0f0;
  border: 1px solid #91f2ea;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
;
}

.spacing{
  margin-right: 5%;
}

.infos-card {
  
  background-color: #ffffff;
  /*border: 1px solid #ccc;*/
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-color: aliceblue;
}

.image-container{
  height: 400px;
  border: 1px solid #d9d4d4;
}

.myImage{
  width: 100px;
  margin-top: 30px;
  margin-left: 30px;
}



</style>