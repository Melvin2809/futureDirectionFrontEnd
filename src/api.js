import axios from 'axios';

const API_URL = "https://my-json-server.typicode.com/Melvin2809/futureDirectionBackEnd"; // Remplacez par l'URL de votre serveur

export default {
  getDonnees() {
    return axios.get(`${API_URL}/ecoles`);
  },
  mettreAJourDonnees(donnees) {
    return axios.put(`${API_URL}/ecoles`, donnees);
  },
};