//* array con informazioni del team

const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        immagine: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        immagine: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        immagine: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        immagine: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        immagine: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        immagine: 'barbara-ramos-graphic-designer.jpg',
    },
];

//* stampa informazioni su console
team.forEach((socio) => {
    console.log(`Nome: ${socio.nome}, Ruolo: ${socio.ruolo}, Immagine: ${socio.immagine}`);
});



//* stampa su  stringa dom
const container = document.getElementById('team-container');

for (let index = 0; index < team.length; index++) {
    const socio = team[index];
    const socioDiv = document.createElement('div'); // 

    socioDiv.textContent = `Nome: ${socio.nome}, Ruolo: ${socio.ruolo}, Immagine: ${socio.immagine}`;

    container.appendChild(socioDiv); 
}
