<template>
    <div>
        <p>{{ message }}</p> <br>
        <section class="fiches">
        </section>
    </div>
    <br><br>

    
</template>

<script lang="ts">
import Hero from "../components/Hero.vue";
import { genererEcolesUniversites } from '../../src';
//genererEcolesUniversites(EcolesUniversites);

export default {
  name: "ecolesUniversites-view",
  components: {
    Hero
  },
  data(){
    return{
      message:""
    }
  },
  mounted(){
    this.message=genererEcolesUniversites()
  }
  
}
</script>