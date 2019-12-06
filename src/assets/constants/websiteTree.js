import calculator from './../img/ergonomie/calculator.jpg';
import traitement from './../img/ergonomie/traitement.jpg';
import working from './../img/ergonomie/working.jpg';
import hands from './../img/ergonomie/hands.jpg';
import family from './../img/ergonomie/family.jpg';
import savings from './../img/ergonomie/savings.jpg';
import food from './../img/ergonomie/food.jpg';
import house from './../img/ergonomie/house.jpg';
import team from './../img/ergonomie/team.jpg';
import wallet from './../img/ergonomie/wallet.jpg';
import workplace from './../img/ergonomie/workplace.jpg';


export const websiteTree = {
    id: '0',
    links: [
        {
            id: '0.1',
            name: 'Administratif',
            img: calculator,
            links: [
                {
                    id: '0.1.1',
                    name: 'CAF',
                    url: '/caf',
                    img: family
                },
                {
                    id: '0.1.2',
                    name: 'Impots',
                    url: '/impots',
                    img: savings
                }
            ]
        },
        {
            id: '0.2',
            name: 'VieSante',
            img: traitement,
            links: [
                {
                    id: '0.2.1',
                    name: 'Nutrition',
                    url: '/nutrition',
                    img: food
                },
                {
                    id: '0.2.2',
                    name: 'Logement',
                    url: '/logement',
                    img: house
                },
                {
                    id: '0.2.3',
                    name: 'MutuelleEtSecu',
                    url: '/mutuelle-secu',
                    img: team
                }
            ]
        },
        {
            id: '0.3',
            name: 'Travail',
            img: working,
            links: [
                {
                    id: '0.3.1',
                    name: 'Bourses',
                    url: '/bourses',
                    img: wallet
                },
                {
                    id: '0.3.2',
                    name: 'JobEtudiant',
                    url: '/jobs',
                    img: workplace
                }
            ]
        },
        {
            id: '0.4',
            name: 'AideSociale',
            img: hands,
            links: [
                {
                    id: '0.4.1',
                    name: 'Bourses',
                    url: '/bourses',
                    img: wallet
                },
                {
                    id: '0.4.2',
                    name: 'CAF',
                    url: '/caf',
                    img: family
                },
                {
                    id: '0.4.3',
                    name: 'Logement',
                    url: '/logement',
                    img: house
                }
            ]
        }
    ]
};