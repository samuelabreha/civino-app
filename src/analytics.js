// Module d'analyse des données des utilisateurs

class Analytics {
    constructor() {
        this.data = [];
    }

    // Méthode pour enregistrer un événement
    logEvent(event) {
        this.data.push(event);
        console.log(`Événement enregistré: ${event}`);
    }

    // Méthode pour générer un rapport
    generateReport() {
        // Exemple de rapport simple
        return {
            totalEvents: this.data.length,
            events: this.data
        };
    }
}

// Exporter le module
export default new Analytics();
