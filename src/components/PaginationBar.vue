<template>
    <div class="pagination-bar">
        <button v-for="pageNumber in totalPages"
          :key="pageNumber"
          :class="{ active: pageNumber === currentPage }"
          @click="changePage(pageNumber)"
          >
          <span :class="{ active: pageNumber === currentPage }">{{ pageNumber }}</span>
          </button>
        </div>
        
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number
  },
  data(){
    return {
        currentPage: 1, // Remplacez par la valeur actuelle de la page
        totalPages: 2, // Remplacez par le nombre total de pages
    }
  },
  methods: {
    changePage(pageNumber) {
      this.$emit('page-change', pageNumber);
    }
  }
};
</script>

<style>
.pagination-bar {
    display: flex;
    border: 1px solid;
    height: 50px;
}

.pagination-bar button {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #fa0000;
    border-radius: 5px;
    cursor: pointer;
}

.pagination-bar button span.active {
    background-color: #3498db;
    color: white;
    border-radius: 50%; /* Rend le numéro de page actuelle rond */
    padding: 5px 10px; /* Ajustez le rembourrage pour centrer le numéro */   
}
</style>