<template>
    <div>
    <!--<pre>{{ JSON.stringify(jsonData, null, 2) }}</pre>-->
    <div v-for="(item, index) in jsonData" :key="index" class="fiche">
      <h2>{{ item.nom }}</h2>
      <p>{{ item.adresse }}</p>
      <p>{{ item.telephone }}</p>
    </div>
    </div>
    <br><br>

    
</template>



<script lang="ts">
import Hero from "../components/Hero.vue";
import jsonData  from "@/ecolesUniversites.json"
import VueJsonPretty from 'vue-json-pretty';


export default {
  name: "ecolesUniversites-view",
  components: {
    Hero,
    VueJsonPretty
  },
  data(){
    return{
      jsonData,
    }
  }
  
  
  
}
</script>