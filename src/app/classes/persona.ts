export class Persona{
    
    constructor(private nome : string, private cognome : string, private dataNascita: Date){

    }

    stampaPersona(persona : Persona){
        console.log(persona);
    }

    calcolataEta(persona: Persona){
        const dataNascita = new Date(persona.dataNascita);
        const today = new Date();
        const diff = today.getTime() - dataNascita.getTime();;
        const anniVissuti = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor(diff / (1000 * 60));

        console.log('anni vissuti: ' + anniVissuti);
        console.log('ore vissute: ' + hours);
        console.log('minuti vissuti: ' + minutes);
        
    }
}