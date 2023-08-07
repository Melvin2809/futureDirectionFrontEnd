<template>
  <div class="content-container">
    <div class="universites-container">
      <!--<pre>{{ JSON.stringify(jsonData, null, 2) }}</pre>-->
      <div v-for="(universite, index) in universites" :key="index">
        <img :src="universite.image" @click="afficherInfos(universite)">
      </div>
    </div>

    <div v-if="infosVisibles" class="infos-conainer">
      <div class="infos-card">
        <h2>{{ universiteSelectionnee.nom}}</h2><br>
        <p>{{ universiteSelectionnee.adresse }}</p>
        <p>{{ universiteSelectionnee.telephone }}</p>
        <a :href="universiteSelectionnee.description" target="_blank">description</a><br>
        <span class="spacer"></span> 
        <a :href="universiteSelectionnee.reputation" target="_blank" class="spacing">Réputation académique</a>
      </div>
    </div>
  </div>
  
    <br><br>

    
</template>



<script lang="ts">
import Hero from "../components/Hero.vue";
import jsonData  from "@/ecolesUniversites.json"
import VueJsonPretty from 'vue-json-pretty';

interface Universite {
  nom: string;
  adresse: string;
  telephone: string;
  image: string;
  description: string;
  reputation: string;
}

export default {
  name: "ecolesUniversites-view",
  components: {
    Hero,
    VueJsonPretty
  },
  data(){
    return{
      universites: jsonData,
      universiteSelectionnee:{},
      infosVisibles: false
    }
  },
  methods:{
    afficherInfos(universite : Universite) {
      this.universiteSelectionnee = universite;
      this.infosVisibles = true;
    }
  }
  
}
</script>

<style>
.content-container{
  display: grid;
  grid-template-columns: 1fr 1fr; /* Deux colonnes égales */
  gap: 20px; /* Espacement entre les colonnes */
}

.spacer {
  display: inline-block;
  margin: 3%;
  
} 

.universite {
  display: block;     
}

.universite-card {
  background-color: #f0f0f0;
  border: 1px solid #91f2ea;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.spacing{
  margin-right: 5%;
}

.infos-card {
  background-color: #f8ffff;
  /*border: 1px solid #ccc;*/
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>