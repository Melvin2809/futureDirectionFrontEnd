<template>
  <div >
    <h1>Voici les Formations</h1>
  </div>

  <div>
    <hero />
    
  </div>
</template>

<script lang="ts">

import Hero from "../components/Hero.vue";

export default {
  name: "Formations-view",
  components:{
    Hero
  }
}
</script>