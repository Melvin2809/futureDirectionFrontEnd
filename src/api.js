import axios from 'axios';

const API_URL = "https://my-json-server.typicode.com/Melvin2809/futureDirectionBackEnd"; // Remplacez par l'URL de votre serveur

export default {
  getDonnees() {
    return axios.get(`${API_URL}/ecoles`);
  },
  mettreAJourDonnees(donnees) {
    const id = 1; // Remplacez par l'ID de la ressource que vous voulez mettre à jour
    return axios.put(`${API_URL}/ecoles/${id}`, donnees);
  },
};