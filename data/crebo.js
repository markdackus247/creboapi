const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database/database');

const Crebo = require('../models/crebo');

const createCrebo = () => {

    Crebo.create({
        code: '25606',
        level: 4,
        name: 'Expert IT systems and devices',
        description: 'De Expert IT systems and devices werkt zelfstandig op de ICT afdeling van een organisatie of in een servicedeskomgeving. Hij/zij heeft oog voor de organisatie en bezit een helikopterview. Hij/zij communiceert met alle betrokkenen. Naast het beheren van de IT infrastructuur, applicaties en devices houdt de Expert IT systems and devices zich bezig met het beveiligen van informatiesystemen. Hij/zij geeft security advies, verbetert de security van systemen en reageert op cybersecurity aanvallen. Ook heeft de Expert IT systems and devices een rol bij het communiceren over wensen van opdrachtgevers en het vertalen van deze wensen naar aanpassingen of vernieuwingen in de IT infrastructuur of applicaties. Het kunnen werken met databases en programmeerervaring speelt hierin een rol.',
        sbblink: 'https://kwalificatie-mijn.s-bb.nl/kwalificatie/expert-it-systems-and-devices/cmVzdWx0YWF0VHlwZT01O2Rvc3NpZXJJZD01MTMwO2t3YWxpZmljYXRpZUlkPTEzMjE0NzY=',
        kdpdflink: 'https://kwalificatie-mijn.s-bb.nl/Details/DownloadDocument/1402198'
    });

    Crebo.create({
        code: '25605',
        level: 3,
        name: 'Allround medewerker IT systems and devices',
        description: 'De Allround medewerker IT systems and devices werkt zelfstandig op een ICT afdeling of in een servicedeskomgeving. Hij/zij werkt volgens standaard procedures en methodes en toont binnen vastgestelde kaders, eigen inzicht en initiatief. Hij/zij heeft goede communicatieve vaardigheden en werkt klantgericht.',
        sbblink: 'https://kwalificatie-mijn.s-bb.nl/kwalificatie/allround-medewerker-it-systems-and-devices/cz01Njc2O21zPTU3MDk7ZG9zc2llcklkPTUxMzA7a3dhbGlmaWNhdGllSWQ9MTMyMTQ4NTtrZXV6ZWRlZWxJZD07cmVzdWx0YWF0VHlwZT01O3R5cGU9S3dhbGlmaWNhdGll',
        kdpdflink: 'https://kwalificatie-mijn.s-bb.nl/Details/DownloadDocument/1402196'
    });

}

module.exports = { createCrebo };
