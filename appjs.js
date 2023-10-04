// Sélectionne tous les éléments d'entrée dans le formulaire
const inputs = document.querySelectorAll("input");

// Fonction qui sera appelée lors de la soumission du formulaire
function sendNumber() {
    // Récupère la valeur du numéro de téléphone et du code d'entrée
    const mobile = inputs[0].value;
    let code = inputs[1].value;

    // Affiche les valeurs dans la console (à des fins de débogage)
    console.log("Numéro de téléphone: " + mobile);
    console.log("Code: " + code);

    // Définit la propriété CSS '--visible' pour rendre un élément visible (à personnaliser selon vos besoins)
    root.style.setProperty('--visible', 'visible');

    // Envoie une requête POST vers l'API avec les données d'entrée
    fetch("https://app.mtn.ci/v1/leap/purchase?", {
        method: "POST",
        body: JSON.stringify({
            plan_code: code,
            mobile_number: mobile,
            payment_type: "AIRTIME",
            auto_renewal: false,
            renewal_mode: "manual"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json()) // Traite la réponse JSON de l'API
    .then(function (json) {
        console.log(json); // Affiche la réponse JSON dans la console (à des fins de débogage)
        let message = document.getElementById('message');
        message.innerHTML = <p>Envoi effectué avec Succès</p>;
    })
    .catch(function (error) {
        console.error("Erreur lors de l'envoi de la requête : ", error); // Affiche les erreurs dans la console
        alert("Une erreur s'est produite. Veuillez réessayer plus tard."); // Affiche une alerte en cas d'erreur
    });

    alert("Patientez quelques instants après l'envoi des données svp!"); // Affiche une alerte de patience
}