const reponse = await fetch("futureDirection/src/ecolesUniversites.json");
EcolesUniversites = await reponse.json();

export function genererEcolesUniversites(EcolesUniversites){
	for(let i = 0; i < EcolesUniversites.length; i++){

		const sectionFiches = document.querySelector(".fiches");
		const ES = EcolesUniversites[i];
		const EsElement = document.createElement("ES");
        
		/*const imageElement = document.createElement("img");
		imageElement.src = article.image;*/

		const nomElement = document.createElement("h2");
		nomElement.innerText = ES.nom;
        const adresseElement = document.createElement("p");
		adresseElement.innerText = ES.adresse;
        const telephoneElement = document.createElement("p");
		telephoneElement.innerText = ES.telephone;
		
        
		//Code ajouté
		/*const avisBouton = document.createElement("button");
		avisBouton.dataset.id = article.id;
		avisBouton.textContent = "Afficher les avis";*/


		// Rattachement de nos balises au DOM (ajout réel à la page web) "const sectionFiches = document.querySelector(".fiches");"
        
		sectionFiches.appendChild(EsElement);
		//EsElement.appendChild(imageElement);
		EsElement.appendChild(nomElement);
		EsElement.appendChild(adresseElement);
		EsElement.appendChild(telephoneElement);
	
    
	}
}
// Premier affichage de la page
genererEcolesUniversites(EcolesUniversites);