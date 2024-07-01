// search.js
const predefinedResults = {
  // Films d'Action
  "Action": "https://flcorp.github.io/flcflix/films/action.html",
  "Black Adam": "https://flcorp.github.io/flcflix/films/pages/blackadam.html",
  "Bullet Train": "https://flcorp.github.io/flcflix/films/pages/bullettrain.html",
  "En Eaux Troubles": "https://flcorp.github.io/flcflix/films/pages/meg.html",
  "En Eaux Très Troubles": "https://flcorp.github.io/flcflix/films/pages/megtwo.html",
  "Furiosa: Une Saga Mad Max": "https://flcorp.github.io/flcflix/films/pages/furiosa.html",
  "Gran Turismo": "https://flcorp.github.io/flcflix/films/pages/granturismo.html",
  "Hunger Games": "https://flcorp.github.io/flcflix/films/pages/hungergames.html",
  "Hunger Games 2": "https://flcorp.github.io/flcflix/films/pages/hungergamestwo.html",
  "Hunger Games 3": "https://flcorp.github.io/flcflix/films/pages/hungergamesthree.html",
  "Hunger Games 4": "https://flcorp.github.io/flcflix/films/pages/hungergamesfour.html",
  "Hunger Games 5": "https://flcorp.github.io/flcflix/films/pages/hungergamesfive.html",
  "John Wick": "https://flcorp.github.io/flcflix/films/pages/johnwick.html",
  "John Wick 2": "https://flcorp.github.io/flcflix/films/pages/johnwicktwo.html",
  "John Wick 3": "https://flcorp.github.io/flcflix/films/pages/johnwickthree.html",
  "John Wick 4": "https://flcorp.github.io/flcflix/films/pages/johnwickfour.html",
  "Les Trois Mousquetaires": "https://flcorp.github.io/flcflix/films/pages/troismousquetaires.html",
  "Mad Max": "https://flcorp.github.io/flcflix/films/pages/madmax.html",
  "Mad Max 2": "https://flcorp.github.io/flcflix/films/pages/madmaxtwo.html",
  "Mad Max: Fury Road": "https://flcorp.github.io/flcflix/films/pages/madmaxfuryroad.html",
  "Men In Black": "https://flcorp.github.io/flcflix/films/pages/mib.html",
  "Men In Black 2": "https://flcorp.github.io/flcflix/films/pages/mibtwo.html",
  "Men In Black 3": "https://flcorp.github.io/flcflix/films/pages/mibthree.html",
  "Men In Black Internationnal (4)": "https://flcorp.github.io/flcflix/films/pages/mibfour.html",
  "Tenet": "https://flcorp.github.io/flcflix/films/pages/tenet.html",
  "Tetris": "https://flcorp.github.io/flcflix/films/pages/tetris.html",
  "Top Gun": "https://flcorp.github.io/flcflix/films/pages/topgun.html",
  "Top Gun Maverick": "https://flcorp.github.io/flcflix/films/pages/topguntwo.html",
  // Films d'Animation
  "Animation": "https://flcorp.github.io/flcflix/films/animation.html",
  "Alerte Rouge": "https://flcorp.github.io/flcflix/films/animations.html#turningRed",
  "Angry Birds": "https://flcorp.github.io/flcflix/films/animations.html#angryBirds",
  "Angry Birds 2": "https://flcorp.github.io/flcflix/films/animations.html#angryBirdsTwo",
  "Astérix: Le Domaine des Dieux": "https://flcorp.github.io/flcflix/films/animations.html#asterixDieux",
  "Astérix!: Le Secret de la Potion Magique": "https://flcorp.github.io/flcflix/films/animations.html#asterixPotionMagique",
  "Bienvenue chez les Louds": "https://flcorp.github.io/flcflix/films/animation.html#loud",
  "Bob l'Éponge le Film": "https://flcorp.github.io/flcflix/films/animation.html#spongebob",
  "Bob l'Éponge le Film: un Héros sort de l'Eau": "https://flcorp.github.io/flcflix/films/animation.html#spongebobTwo",
  "Bob l'Éponge le Film: Éponge en Eaux Troubles": "https://flcorp.github.io/flcflix/films/animation.html#spongebobThree",
  "Bob l'Éponge: la Quatrième Immersion": "https://flcorp.github.io/flcflix/films/animation.html#spongebobFour",
  "Buzz l'Éclair": "https://flcorp.github.io/flcflix/films/animation.html#buzzLightyear",
  "Cars": "https://flcorp.github.io/flcflix/films/animation.html#cars",
  "Cars 2": "https://flcorp.github.io/flcflix/films/animation.html#carsTwo",
  "Cars 3": "https://flcorp.github.io/flcflix/films/animation.html#carsThree",
  "Coco": "https://flcorp.github.io/flcflix/films/animation.html#coco",
  "Dragons": "https://flcorp.github.io/flcflix/films/animation.html#dragons",
  "Dragons 2": "https://flcorp.github.io/flcflix/films/animation.html#dragonsTwo",
  "Dragons 3: Le Monde Caché": "https://flcorp.github.io/flcflix/films/animation.html#dragonsThree",
  "Élémentaire": "https://flcorp.github.io/flcflix/films/animation.html#elemental",
  "Encanto": "https://flcorp.github.io/flcflix/films/animation.html#encanto",
  "Hilda et le Roi de la Montagne": "https://flcorp.github.io/flcflix/films/animation.html#hilda",
  "Hôtel Transylvanie": "https://flcorp.github.io/flcflix/films/animation.html#hotelTransylvania",
  "Hôtel Transylvanie 2": "https://flcorp.github.io/flcflix/films/animation.html#hotelTransylvaniaTwo",
  "Hôtel Transylvanie 3": "https://flcorp.github.io/flcflix/films/animation.html#hotelTransylvaniaThree",
  "Hôtel Transylvanie Transformania": "https://flcorp.github.io/flcflix/films/animation.html#hotelTransylvaniaFour",
  "Kung Fu Panda": "https://flcorp.github.io/flcflix/films/animation.html#kungFuPanda",
  "Kung Fu Panda 2": "https://flcorp.github.io/flcflix/films/animation.html#kungFuPandaTwo",
  "Kung Fu Panda 3": "https://flcorp.github.io/flcflix/films/animation.html#kungFuPandaThree",
  "Kung Fu Panda 4": "https://flcorp.github.io/flcflix/films/animation.html#kungFuPandaFour",
  "l'Âge de Glace": "https://flcorp.github.io/flcflix/films/animation.html#iceAge",
  "l'Âge de Glace 2": "https://flcorp.github.io/flcflix/films/animation.html#iceAgeTwo",
  "l'Âge de Glace 3: le Temps des Dinosaures": "https://flcorp.github.io/flcflix/films/animation.html#iceAgeThree",
  "l'Âge de Glace 4: la Dérive des Continents": "https://flcorp.github.io/flcflix/films/animation.html#iceAgeFour",
  "l'Âge de Glace 5: les Lois de l'Univers": "https://flcorp.github.io/flcflix/films/animation.html#iceAgeFive",
  "l'Âge de Glace: les Aventures de Buck Wild": "https://flcorp.github.io/flcflix/films/animation.html#buckWild",
  "Le Chat Potté": "https://flcorp.github.io/flcflix/films/animation.html#pussInBoots",
  "Le Chat Potté: les Trois Petits Diables": "https://flcorp.github.io/flcflix/films/animation.html#pussInBootsSpinoff",
  "Le Chat Potté 2: la Dernière Quête": "https://flcorp.github.io/flcflix/films/animation.html#pussInBootsTwo",
  "Le Château Solitaire dans le Miroir": "https://flcorp.github.io/flcflix/films/animation.html#lonelyCastle",
  "Les Indestructibles": "https://flcorp.github.io/flcflix/films/animation.html#indestructibles",
  "Les Indestructibles 2": "https://flcorp.github.io/flcflix/films/animation.html#indestructiblesTwo",
  "Les Minions": "https://flcorp.github.io/flcflix/films/animation.html#minions",
  "Les Minions 2: Il était une fois Gru": "https://flcorp.github.io/flcflix/films/animation.html#minionsTwo",
  "Les Rebelles de la Forêt": "https://flcorp.github.io/flcflix/films/animation.html#openSeason",
  "Les Rebelles de la Forêt 2": "https://flcorp.github.io/flcflix/films/animation.html#openSeasonTwo",
  "Les Rebelles de la Forêt 3": "https://flcorp.github.io/flcflix/films/animation.html#openSeasonThree",
  "Les Rebelles de la Forêt 4": "https://flcorp.github.io/flcflix/films/animation.html#openSeasonFour",
  "La Ferme en Folie": "film/animation.html#barnyard",
  "Le Grand Méchant Renard": "https://flcorp.github.io/flcflix/films/animation.html#badFox",
  "Luca": "https://flcorp.github.io/flcflix/films/animation.html#luca",
  "Madagascar": "https://flcorp.github.io/flcflix/films/animation.html#madagascar",
  "Madagascar 2": "https://flcorp.github.io/flcflix/films/animation.html#madagascarTwo",
  "Madagascar 3": "https://flcorp.github.io/flcflix/films/animation.html#madagascarThree",
  "Monstres vs Aliens": "https://flcorp.github.io/flcflix/films/animation.html#monstrerVsAliens",
  "Moi, Moche et Méchant": "https://flcorp.github.io/flcflix/films/animation.html#despicableMe",
  "Moi, Moche et Méchant 2": "https://flcorp.github.io/flcflix/films/animation.html#despicableMeTwo",
  "Moi, Moche et Méchant 3": "https://flcorp.github.io/flcflix/films/animation.html#despicableMeThree",
  "Mune": "https://flcorp.github.io/flcflix/films/animation.html#mune",
  "Nimona": "https://flcorp.github.io/flcflix/films/animation.html#nimona",
  "Pokémon: Je te Choisis!": "https://flcorp.github.io/flcflix/films/animation.html#pokemonChooseYou",
  "Ratatouille": "https://flcorp.github.io/flcflix/films/animation.html#ratatouille",
  "Royal Corgi": "https://flcorp.github.io/flcflix/films/animation.html#royalCorgi",
  "Sausage Party": "https://flcorp.github.io/flcflix/films/animation.html#sausageParty",
  "Sonic le Film": "https://flcorp.github.io/flcflix/films/animation.html#sonic",
  "Sonic 2 le Film": "https://flcorp.github.io/flcflix/films/animation.html#sonicTwo",
  "Sonic 2 le Film VOSTFR": "https://flcorp.github.io/flcflix/films/animation.html#sonicTwoVOSTFR",
  "Spider-Man: New Generation": "https://flcorp.github.io/flcflix/films/animation.html#spidermanIntoSpiderverse",
  "Spider-Man Across the Spider-Verse": "https://flcorp.github.io/flcflix/films/animation.html#spidermanAcrossSpiderverse",
  "Spider-Man Across the Spider-Verse VOSTFR": "https://flcorp.github.io/flcflix/films/animation.html#spidermanAcrossSpiderverseVOSTFR",
  "Super Mario Bros. le Film": "https://flcorp.github.io/flcflix/films/animation.html#superMarioBros",
  "Super Mario Bros. le Film VOSTFR": "https://flcorp.github.io/flcflix/films/animation.html#superMarioBrosVOSTFR",
  "Les Bad Guys": "https://flcorp.github.io/flcflix/films/animation.html#badGuys",
  "Les Bad Guys VOSTFR": "https://flcorp.github.io/flcflix/films/animation.html#badGuysVOSTFR",
  "Tic et Tac: les Rangers du Risque": "https://flcorp.github.io/flcflix/films/animation.html#chipDale",
  "Tic et Tac: les Rangers du Risque VOSTFR": "https://flcorp.github.io/flcflix/films/animation.html#chipDaleVOSTFR",
  "Les Tortues Ninja": "https://flcorp.github.io/flcflix/films/animation.html#ninjaTurtles",
  "Les Tortues Ninja VOSTFR": "https://flcorp.github.io/flcflix/films/animation.html#ninjaTurtlesVOSTFR",
  "Totally Spies le Film": "https://flcorp.github.io/flcflix/films/animation.html#totallySpies",
  "Toy Story": "https://flcorp.github.io/flcflix/films/animation.html#toyStory",
  "Toy Story 2": "https://flcorp.github.io/flcflix/films/animation.html#toyStoryTwo",
  "Toy Story 3": "https://flcorp.github.io/flcflix/films/animation.html#toyStoryThree",
  "Toy Story 4": "https://flcorp.github.io/flcflix/films/animation.html#toyStoryFour",
  "Wall-E": "https://flcorp.github.io/flcflix/films/animation.html#wallE",
  "Wish": "https://flcorp.github.io/flcflix/films/animation.html#wish",
  "Zootopie": "https://flcorp.github.io/flcflix/films/animation.html#zootopia",
  // Films d'Aventure
  "Aventure": "https://flcorp.github.io/flcflix/films/aventure.html",
  "Aventure VOSTFR": "https://flcorp.github.io/flcflix/films/aventure.html#vostfr",
  "Avatar": "https://flcorp.github.io/flcflix/films/action.html#avatar",
  "Avatar 2": "https://flcorp.github.io/flcflix/films/action.html#avatarTwo",
  "Donjons & Dragons": "https://flcorp.github.io/flcflix/films/action.html#dungeonsDragons",
  "Harry Potter à l'École des Sorcier": "https://flcorp.github.io/flcflix/films/action.html#harryPotter",
  "Harry Potter et la Chambre des Secrets": "https://flcorp.github.io/flcflix/films/action.html#harryPotterTwo",
  "Harry Potter et le Prisonnier d'Azkaban": "https://flcorp.github.io/flcflix/films/action.html#harryPotterThree",
  "Harry Potter et la Coupe de Feu": "https://flcorp.github.io/flcflix/films/action.html#harryPotterFour",
  "Harry Potter et l'Ordre du Phoenix'": "https://flcorp.github.io/flcflix/films/action.html#harryPotterFive",
  "Harry Potter et les Reliques de la Mort Partie 1'": "https://flcorp.github.io/flcflix/films/action.html#harryPotterSeven",
  "Harry Potter et les Reliques de la Mort Partie 2'": "https://flcorp.github.io/flcflix/films/action.html#harryPotterEight",
  "Indiana Jones: les Aventuriers de l'Arche Perdue": "https://flcorp.github.io/flcflix/films/action.html#indianaJones",
  "Indiana Jones et le Temple Maudit": "https://flcorp.github.io/flcflix/films/action.html#indianaJonesTwo",
  "Indiana Jones et le Crâne de Cristal": "https://flcorp.github.io/flcflix/films/action.html#indianaJonesFour",
  "Indiana Jones et le Cadran de la Destinée": "https://flcorp.github.io/flcflix/films/action.html#indianaJonesFive",
  "La Petite Sirène": "https://flcorp.github.io/flcflix/films/action.html#littleMermaid",
  "Le Seigneur des Anneaux: La Communauté de l'Anneaux": "https://flcorp.github.io/flcflix/films/action.html#powerRing",
  "Le Seigneur des Anneaux: Les Deux Tours": "https://flcorp.github.io/flcflix/films/action.html#powerRingTwo",
  "Le Seigneur des Anneaux: Le Retour du Roi": "https://flcorp.github.io/flcflix/films/action.html#powerRingThree",
  "Les Animaux Fantastiques": "https://flcorp.github.io/flcflix/films/action.html#fantasticBeasts",
  "Les Animaux Fantastiques: Les Crimes de Grinderwald": "https://flcorp.github.io/flcflix/films/action.html#fantasticBeastsTwo",
  "Les Animaux Fantastiques: Les Secrets de Dumbledore": "https://flcorp.github.io/flcflix/films/action.html#fantasticBeastsThree",
  "Pirates des Caraïbes: La Malédiction du Black Pearl": "https://flcorp.github.io/flcflix/films/action.html#piratesCaribbean",
  "Pirates des Caraïbes: Le Secret du Coffre Maudit": "https://flcorp.github.io/flcflix/films/action.html#piratesCaribbeanTwo",
  "Pirates des Caraïbes: Jusqu'au Bout du Monde": "https://flcorp.github.io/flcflix/films/action.html#piratesCaribbeanThree",
  "Pirates des Caraïbes: La Fontaine de Jouvence": "https://flcorp.github.io/flcflix/films/action.html#piratesCaribbeanFour",
  "Pirates des Caraïbes: La Vengeance de Salazar": "https://flcorp.github.io/flcflix/films/action.html#piratesCaribbeanFive",
  //Biopic
  "Biopic": "https://flcorp.github.io/flcflix/films/biopic.html",
  "Bob Marley: One Love": "https://flcorp.github.io/flcflix/films/biopic.html#bobMarley",
  "Churchill": "https://flcorp.github.io/flcflix/films/biopic.html#churchill",
  "De Gaulle": "https://flcorp.github.io/flcflix/films/biopic.html#deGaulle",
  "Lamborghini: l'Homme derrière la Légende": "https://flcorp.github.io/flcflix/films/biopic.html#lamborghini",
  "Le Fondateur": "https://flcorp.github.io/flcflix/films/biopic.html#fondator",
  "Le Mans 66": "https://flcorp.github.io/flcflix/films/biopic.html#mans66",
  "Les Figures de l'Ombre": "https://flcorp.github.io/flcflix/films/biopic.html#figuresOmbre",
  "Lincoln": "https://flcorp.github.io/flcflix/films/biopic.html#lincoln",
  "Oppenheimer": "https://flcorp.github.io/flcflix/films/biopic.html#oppenheimer",
  //Comédie
  "Comédie": "https://flcorp.github.io/flcflix/films/comedie.html",
  "10 Jours sans Maman": "https://flcorp.github.io/flcflix/films/comedie.html#10Jours",
  "10 Jours Encore sans Maman": "https://flcorp.github.io/flcflix/films/comedie.html#10JoursTwo",
  "Les 11 Commandements": "https://flcorp.github.io/flcflix/films/comedie.html#11Commandements",
  "30 Jours Max": "https://flcorp.github.io/flcflix/films/comedie.html#30JoursMax",
  "3 Jours Max": "https://flcorp.github.io/flcflix/films/comedie.html#3JoursMax",
  "Ace Ventura": "https://flcorp.github.io/flcflix/films/comedie.html#aceVentura",
  "Ace Ventura en Afrique": "https://flcorp.github.io/flcflix/films/comedie.html#aceVenturaTwo",
  "Alibi.com": "https://flcorp.github.io/flcflix/films/comedie.html#alibiCom",
  "Alibi.com 2": "https://flcorp.github.io/flcflix/films/comedie.html#alibiComTwo",
  "Asteroid City": "https://flcorp.github.io/flcflix/films/comedie.html#asteroidCity",
  "Babylon": "https://flcorp.github.io/flcflix/films/comedie.html#babylon",
  "Barbie": "https://flcorp.github.io/flcflix/films/comedie.html#barbie",
  "BDE": "https://flcorp.github.io/flcflix/films/comedie.html#bde",
  "Blue & Compagnie": "https://flcorp.github.io/flcflix/films/comedie.html#blueCompagnie",
  "Bruce Tout Puissant": "https://flcorp.github.io/flcflix/films/comedie.html#brucePuissant",
  "Charlie et la Chocolaterie": "https://flcorp.github.io/flcflix/films/comedie.html#charlieChocolaterie",
  "Chasse Gardée": "https://flcorp.github.io/flcflix/films/comedie.html#chasseGardee",
  "Chien & Chat": "https://flcorp.github.io/flcflix/films/comedie.html#chienChat",
  "Cocorico": "https://flcorp.github.io/flcflix/films/comedie.html#cocorico",
  "Daaaaaali!": "https://flcorp.github.io/flcflix/films/comedie.html#dali",
  "Ducobu": "https://flcorp.github.io/flcflix/films/comedie.html#ducobu",
  "Les Vacances de Ducobu": "https://flcorp.github.io/flcflix/films/comedie.html#ducobuTwo",
  "Ducobu 3": "https://flcorp.github.io/flcflix/films/comedie.html#ducobuThree",
  "Ducobu Président!": "https://flcorp.github.io/flcflix/films/comedie.html#ducobuFour",
  "Dumb and Dumber": "https://flcorp.github.io/flcflix/films/comedie.html#dumbDumber",
  "Dumb and Dumber De": "https://flcorp.github.io/flcflix/films/comedie.html#dumbDumberTwo",
  "Fatal": "https://flcorp.github.io/flcflix/films/comedie.html#fatal",
  "Glass Onion": "https://flcorp.github.io/flcflix/films/comedie.html#glassOnion",
  "Ibiza": "https://flcorp.github.io/flcflix/films/comedie.html#ibiza",
  "La 6ème: La Pire Année de ma Vie!": "https://flcorp.github.io/flcflix/films/comedie.html#worstYear",
  "La Cité de la Peur": "https://flcorp.github.io/flcflix/films/comedie.html#citePeur",
  "La Très Très Grande Classe": "https://flcorp.github.io/flcflix/films/comedie.html#grandeClasse",
  "Le Grinch": "https://flcorp.github.io/flcflix/films/comedie.html#grinch",
  "Le Sens de la Famille": "https://flcorp.github.io/flcflix/films/comedie.html#sensFamille",
  "Les Profs": "https://flcorp.github.io/flcflix/films/comedie.html#profs",
  "Les Profs 2": "https://flcorp.github.io/flcflix/films/comedie.html#profsTwo",
  "Les Segpa": "https://flcorp.github.io/flcflix/films/comedie.html#segpa",
  "Les Segpa font du Ski": "https://flcorp.github.io/flcflix/films/comedie.html#segpaTwo",
  "Les Têtes Givrées": "https://flcorp.github.io/flcflix/films/comedie.html#tetesGivrees",
  "Maman, j'ai raté l'Avion": "https://flcorp.github.io/flcflix/films/comedie.html#homeAlone",
  "Maman, j'ai encore raté l'Avion": "https://flcorp.github.io/flcflix/films/comedie.html#homeAloneTwo",
  "Pétaouchnok": "https://flcorp.github.io/flcflix/films/comedie.html#Pétaouchnok",
  "Rasta Rockett": "https://flcorp.github.io/flcflix/films/comedie.html#rastaRockett",
  "Retour vers le Futur": "https://flcorp.github.io/flcflix/films/comedie.html#backFuture",
  "Retour vers le Futur 2": "https://flcorp.github.io/flcflix/films/comedie.html#backFutureTwo",
  "Retour vers le Futur 3": "https://flcorp.github.io/flcflix/films/comedie.html#backFutureThree",
  "Sentinelle": "https://flcorp.github.io/flcflix/films/comedie.html#sentinelle",
  "Ted": "https://flcorp.github.io/flcflix/films/comedie.html#ted",
  "Ted 2": "https://flcorp.github.io/flcflix/films/comedie.html#tedTwo",
  "The Truman Show": "https://flcorp.github.io/flcflix/films/comedie.html#trumanShow",
  "Umami": "https://flcorp.github.io/flcflix/films/comedie.html#umami",
  "Un Stupéfiant Noël": "https://flcorp.github.io/flcflix/films/comedie.html#stupefiantNoel",
  "Un Homme Heureux": "https://flcorp.github.io/flcflix/films/comedie.html#hommeHeureux",
  "Violent Night": "https://flcorp.github.io/flcflix/films/comedie.html#violentNight",
  "Wonka": "https://flcorp.github.io/flcflix/films/comedie.html#wonka",
  //Walt Disney
  "Disney": "https://flcorp.github.io/flcflix/films/disney.html",
  "Bambi": "https://flcorp.github.io/flcflix/films/disney.html#bambi",
  "Bambi 2": "https://flcorp.github.io/flcflix/films/disney.html#bambiTwo",
  "Le Roi Lion": "https://flcorp.github.io/flcflix/films/disney.html#lionKing",
  "Le Roi Lion 2": "https://flcorp.github.io/flcflix/films/disney.html#lionKingTwo",
  "Le Roi Lion 3": "https://flcorp.github.io/flcflix/films/disney.html#lionKingThree",
  "Les 101 Dalmatiens": "https://flcorp.github.io/flcflix/films/disney.html#dalmatians",
  //Drame
  "Drame": "https://flcorp.github.io/flcflix/films/tragedie.html",
  "Chernobyl 1986": "https://flcorp.github.io/flcflix/films/tragedie.html#chernobyl",
  "Killers of the Flower Moon": "https://flcorp.github.io/flcflix/films/tragedie.html#flowerMoon",
  "Moonfall": "https://flcorp.github.io/flcflix/films/tragedie.html#moonfall",
  "Notre-Dame Brûle": "https://flcorp.github.io/flcflix/films/tragedie.html#notreDame",
  "Titanic": "https://flcorp.github.io/flcflix/films/tragedie.html#titanic",
  //Français
  "Français Culte": "https://flcorp.github.io/flcflix/films/francais.html",
  "Astérix & Obélix: Contre César": "https://flcorp.github.io/flcflix/films/francais.html#asterixCesar",
  "Astérix & Obélix: Mission Cléopâtre": "https://flcorp.github.io/flcflix/films/francais.html#asterixCleopatre",
  "Astérix & Obélix: lL'Empire du Milieu": "https://flcorp.github.io/flcflix/films/francais.html#asterixChine",
  "Camping": "https://flcorp.github.io/flcflix/films/francais.html#camping",
  "Camping 2": "https://flcorp.github.io/flcflix/films/francais.html#campingTwo",
  "Camping 3": "https://flcorp.github.io/flcflix/films/francais.html#campingThree",
  "Fantomas": "https://flcorp.github.io/flcflix/films/francais.html#fantomas",
  "Fantomas se déchaîne": "https://flcorp.github.io/flcflix/films/francais.html#fantomasTwo",
  "L'Aile ou la Cuisse": "https://flcorp.github.io/flcflix/films/francais.html#aileCuisse",
  "La Grande Vadrouille": "https://flcorp.github.io/flcflix/films/francais.html#grandeVadrouille",
  "La Soupe aux Choux": "https://flcorp.github.io/flcflix/films/francais.html#soupeChoux",
  "Le Dîner de Cons": "https://flcorp.github.io/flcflix/films/francais.html#dinerCons",
  "Le Grand Restaurant": "https://flcorp.github.io/flcflix/films/francais.html#grandRestaurant",
  "Les Bodin's": "https://flcorp.github.io/flcflix/films/francais.html#bodins",
  "Mariage chez les Bodin's": "https://flcorp.github.io/flcflix/films/francais.html#bodinsTwo",
  "Amélie au pays des Bodin's": "https://flcorp.github.io/flcflix/films/francais.html#bodinsThree",
  "Les Bodin's en Thaïlande": "https://flcorp.github.io/flcflix/films/francais.html#bodinsFour",
  "Les Tuche": "https://flcorp.github.io/flcflix/films/francais.html#tuche",
  "Les Tuche 2": "https://flcorp.github.io/flcflix/films/francais.html#tucheTwo",
  "Les Tuche 3": "https://flcorp.github.io/flcflix/films/francais.html#tucheThree",
  "Les Tuche 4": "https://flcorp.github.io/flcflix/films/francais.html#tucheFour",
  "Les Visiteurs": "https://flcorp.github.io/flcflix/films/francais.html#visiteurs",
  "Les Visiteurs: Les Couloirs du Temps": "https://flcorp.github.io/flcflix/films/francais.html#visiteursTwo",
  "Les Visiteurs en Amérique": "https://flcorp.github.io/flcflix/films/francais.html#visiteursThree",
  "Les Visiteurs: La Révolution": "https://flcorp.github.io/flcflix/films/francais.html#visiteursFour",
  "Taxi": "https://flcorp.github.io/flcflix/films/francais.html#taxi",
  "Taxi 2": "https://flcorp.github.io/flcflix/films/francais.html#taxiTwo",
  "Taxi 3": "https://flcorp.github.io/flcflix/films/francais.html#taxiThree",
  "Taxi 4": "https://flcorp.github.io/flcflix/films/francais.html#taxiFour",
  "Taxi 5": "https://flcorp.github.io/flcflix/films/francais.html#taxiFive",
  //Guerre
  "Guerre": "https://flcorp.github.io/flcflix/films/guerre.html",
  "À l'Ouest, Rien de Nouveau": "https://flcorp.github.io/flcflix/films/guerre.html#ouestRien",
  "Auschwitz": "https://flcorp.github.io/flcflix/films/guerre.html#auschwitz",
  "Dunkerque": "https://flcorp.github.io/flcflix/films/guerre.html#dunkerque",
  "La Chute": "https://flcorp.github.io/flcflix/films/guerre.html#laChute",
  "La Liste de Schindler": "https://flcorp.github.io/flcflix/films/guerre.html#schindlerList",
  "Le Jour le plus Long": "https://flcorp.github.io/flcflix/films/guerre.html#longestDay",
  "Le Pianiste": "https://flcorp.github.io/flcflix/films/guerre.html#pianist",
  "Napoléon": "https://flcorp.github.io/flcflix/films/guerre.html#napoleon",
  "Stalingrad": "https://flcorp.github.io/flcflix/films/guerre.html#stalingrad",
  "Stalingrad": "https://flcorp.github.io/flcflix/films/guerre.html#stalingrad2000",
  "Tu ne tueras point": "https://flcorp.github.io/flcflix/films/guerre.html#hacksawRidge",
  "Un long Dimanche de Fiancailles": "https://flcorp.github.io/flcflix/films/guerre.htmldimancheFiancailles",
  //Horreur
  "Horreur": "https://flcorp.github.io/flcflix/films/horreur.html",
  "Annabelle": "https://flcorp.github.io/flcflix/films/horreur.html#annabelle",
  "Annabelle 2: La Création du Mal": "https://flcorp.github.io/flcflix/films/horreur.html#annabelleTwo",
  "Annabelle 3: La Maison du Mal": "https://flcorp.github.io/flcflix/films/horreur.html#annabelleThree",
  "Conjuring": "https://flcorp.github.io/flcflix/films/horreur.html#conjuring",
  "Conjuring 2: Le Cas Ensheld": "https://flcorp.github.io/flcflix/films/horreur.html#conjuringTwo",
  "Conjuring 3": "https://flcorp.github.io/flcflix/films/horreur.html#conjuringThree",
  "Don't Breathe": "https://flcorp.github.io/flcflix/films/horreur.html#dontBreathe",
  "Don't Breathe 2": "https://flcorp.github.io/flcflix/films/horreur.html#dontBreatheTwo",
  "Five Nights at Freddy's": "https://flcorp.github.io/flcflix/films/horreur.html#fnaf",
  "Insidious": "https://flcorp.github.io/flcflix/films/horreur.html#insidious",
  "Insidious Chapitre 2": "https://flcorp.github.io/flcflix/films/horreur.html#insidiousTwo",
  "Insidious Chapitre 3": "https://flcorp.github.io/flcflix/films/horreur.html#insidiousThree",
  "Insidious: La Dernière Clé": "https://flcorp.github.io/flcflix/films/horreur.html#insidiousFour",
  "Insidious: La Porte Rouge": "https://flcorp.github.io/flcflix/films/horreur.html#insidiousFive",
  "La Dame en Noir": "https://flcorp.github.io/flcflix/films/horreur.html#blackLady",
  "La Dame en Noir 2": "https://flcorp.github.io/flcflix/films/horreur.html#blackLadyTwo",
  "M3gan": "https://flcorp.github.io/flcflix/films/horreur.html#megan",
  "Scream": "https://flcorp.github.io/flcflix/films/horreur.html#scream",
  "Scream 2": "https://flcorp.github.io/flcflix/films/horreur.html#screamTwo",
  "Scream 3": "https://flcorp.github.io/flcflix/films/horreur.html#screamThree",
  "Scream 4": "https://flcorp.github.io/flcflix/films/horreur.html#screamFour",
  "Scream 6": "https://flcorp.github.io/flcflix/films/horreur.html#screamSix",
  "Vendredi 13": "https://flcorp.github.io/flcflix/films/horreur.html#fridayThirteen",
  //Marvel
  "Marvel": "https://flcorp.github.io/flcflix/films/marvel.html",
  "Avengers": "https://flcorp.github.io/flcflix/films/horreur.html#avengers",
  "Avengers: l'Ère d'Ultron": "https://flcorp.github.io/flcflix/films/horreur.html#avengersTwo",
  "Avengers: Infinity War": "https://flcorp.github.io/flcflix/films/horreur.html#avengersThree",
  "Avengers: Endgame": "https://flcorp.github.io/flcflix/films/horreur.html#avengersFour",
  "Black Panther": "https://flcorp.github.io/flcflix/films/horreur.html#blackPanther",
  "Captain American: First Avenger": "https://flcorp.github.io/flcflix/films/horreur.html#captainAmerica",
  "Captain American: le Soldat de l'Hiver": "https://flcorp.github.io/flcflix/films/horreur.html#captainAmericaTwo",
  "Captain American: Civil War": "https://flcorp.github.io/flcflix/films/horreur.html#captainAmericaThree",
  "Doctor Strange": "https://flcorp.github.io/flcflix/films/horreur.html#doctorStrange",
  "Doctor Strange: Multivers of Madness": "https://flcorp.github.io/flcflix/films/horreur.html#doctorStrangeTwo",
  "Deadpool": "https://flcorp.github.io/flcflix/films/horreur.html#deadpool",
  "Deadpool 2": "https://flcorp.github.io/flcflix/films/horreur.html#deadpoolTwo",
  "Les Gardiens de la Galaxie": "https://flcorp.github.io/flcflix/films/horreur.html#gardiensGalaxie",
  "Les Gardiens de la Galaxie Volume 2": "https://flcorp.github.io/flcflix/films/horreur.html#gardiensGalaxieTwo",
  "Les Gardiens de la Galaxie Volume 3": "https://flcorp.github.io/flcflix/films/horreur.html#gardiensGalaxieThree",
  "Iron Man": "https://flcorp.github.io/flcflix/films/horreur.html#ironMan",
  "Iron Man 2": "https://flcorp.github.io/flcflix/films/horreur.html#ironManTwo",
  "Iron Man 3": "https://flcorp.github.io/flcflix/films/horreur.html#ironManThree",
  "Spider-Man": "https://flcorp.github.io/flcflix/films/horreur.html#spiderman",
  "Spider-Man 2": "https://flcorp.github.io/flcflix/films/horreur.html#spidermanTwo",
  "Spider-Man 3": "https://flcorp.github.io/flcflix/films/horreur.html#spidermanThree",
  "The Amazing Spider-Man": "https://flcorp.github.io/flcflix/films/horreur.html#amazingSpiderman",
  "The Amazing Spider-Man 2: Le Destin d'un Héros": "https://flcorp.github.io/flcflix/films/horreur.html#amazingSpidermanTwo",
  "Spider-Man Homecoming": "https://flcorp.github.io/flcflix/films/horreur.html#spidermanHomecoming",
  "Spider-Man Far From Home": "https://flcorp.github.io/flcflix/films/horreur.html#spidermanFarFromHome",
  "Spider-Man No Way Home": "https://flcorp.github.io/flcflix/films/horreur.html#spidermanNoWayHome",
  "Thor": "https://flcorp.github.io/flcflix/films/horreur.html#thor",
  "Thor 2: Le Monde des Ténèbres": "https://flcorp.github.io/flcflix/films/horreur.html#thorTwo",
  "Thor 3: Ragnarok": "https://flcorp.github.io/flcflix/films/horreur.html#thorThree",
  "Thor 4: Love & Thunder": "https://flcorp.github.io/flcflix/films/horreur.html#thorFour",
  "Venom": "https://flcorp.github.io/flcflix/films/horreur.html#venom",
  "Venom 2: Let There be Carnage": "https://flcorp.github.io/flcflix/films/horreur.html#venomTwo",
  //Mystère
  "Mystère": "https://flcorp.github.io/flcflix/films/mystere.html",
  "Hypnotic": "https://flcorp.github.io/flcflix/films/mystere.html#hypnotic",
  "Meurtre au Soleil": "https://flcorp.github.io/flcflix/films/mystere.html#evilSun",
  "Mort sur le Nil": "https://flcorp.github.io/flcflix/films/mystere.html#mortNil",
  "Mystère à Venise": "https://flcorp.github.io/flcflix/films/mystere.html#mystereVenise",
  //Romance
  "Romance": "https://flcorp.github.io/flcflix/films/romance.html",
  "365 Jours": "https://flcorp.github.io/flcflix/films/romance.html#oneYear",
  "365 Jours: Au Lendemain": "https://flcorp.github.io/flcflix/films/romance.html#oneYearTwo",
  "365 Jours: L'Année d'Après": "https://flcorp.github.io/flcflix/films/romance.html#oneYearThree",
  "American Pie": "https://flcorp.github.io/flcflix/films/romance.html#americanPie",
  "American Pie 2": "https://flcorp.github.io/flcflix/films/romance.html#americanPieTwo",
  "American Pie: Marions-les!": "https://flcorp.github.io/flcflix/films/romance.html#americanPieThree",
  "American Pie: No Limit!": "https://flcorp.github.io/flcflix/films/romance.html#americanPieFour",
  "American Pie: String Acacemy": "https://flcorp.github.io/flcflix/films/romance.html#americanPieFive",
  "American Pie: Campus en Folie": "https://flcorp.github.io/flcflix/films/romance.html#americanPieSix",
  "American Pie 4": "https://flcorp.github.io/flcflix/films/romance.html#americanPieSeven",
  "American Pie: Girls' Rules": "https://flcorp.github.io/flcflix/films/romance.html#americanPieEight",
  //Science-Fiction
  "Science-Fiction": "https://flcorp.github.io/flcflix/films/scifi.html",
  "Dune": "https://flcorp.github.io/flcflix/films/scifi.html#dune",
  "Dune: Partie 2": "https://flcorp.github.io/flcflix/films/scifi.html#duneTwo",
  "Inception": "https://flcorp.github.io/flcflix/films/scifi.html#inception",
  "Matrix": "https://flcorp.github.io/flcflix/films/scifi.html#matrix",
  "Matrix Reloaded": "https://flcorp.github.io/flcflix/films/scifi.html#matrixTwo",
  "Matrix Revolutions": "https://flcorp.github.io/flcflix/films/scifi.html#matrixThree",
  "Matrix Resurrections": "https://flcorp.github.io/flcflix/films/scifi.html#matrixFour",
  "Terminator": "https://flcorp.github.io/flcflix/films/scifi.html#terminator",
  "Terminator 2: Le Jugement Dernier": "https://flcorp.github.io/flcflix/films/scifi.html#terminatorTwo",
  "The Creator": "https://flcorp.github.io/flcflix/films/scifi.html#creator",
  //Warner
  "Warner Bros": "https://flcorp.github.io/flcflix/films/warner.html",
  "Aquaman": "https://flcorp.github.io/flcflix/films/warner.html#aquaman",
  "Aquaman et le Royaume Perdu": "https://flcorp.github.io/flcflix/films/warner.html#aquamanTwo",
  "Blue-Beetle": "https://flcorp.github.io/flcflix/films/warner.html#blueBeetle",
  "Suicide Squad": "https://flcorp.github.io/flcflix/films/warner.html#suicideSquad",
  "Birds of Prey": "https://flcorp.github.io/flcflix/films/warner.html#birdsPrey",
  "The Suicide Squad": "https://flcorp.github.io/flcflix/films/warner.html#suicideSquadTwo",
  "The Flash": "https://flcorp.github.io/flcflix/films/warner.html#flash",
  "Wonder Woman": "https://flcorp.github.io/flcflix/films/warner.html#wonderWoman",
  // Séries
  "1899": "https://flcorp.github.io/flcflix/series/1899.html",
  "American Horror Story": "https://flcorp.github.io/flcflix/series/ahs.html",
  "Amphibia": "https://flcorp.github.io/flcflix/series/amphibia.html",
  "Arcane": "https://flcorp.github.io/flcflix/series/arcane.html",
  "Becoming Karl Lagerfeld": "https://flcorp.github.io/flcflix/series/karlagerfeld.html",
  "Better Call Saul": "https://flcorp.github.io/flcflix/series/bettercallsaul.html",
  "Breaking Bad": "https://flcorp.github.io/flcflix/series/breakingbad.html",
  "Celebrity Hunted": "https://flcorp.github.io/flcflix/series/celebrityhunted.html",
  "Dahmer: Monstre": "https://flcorp.github.io/flcflix/series/dahmer.html",
  "Dead End": "https://flcorp.github.io/flcflix/series/deadend.html",
  "Doctor Who": "https://flcorp.github.io/flcflix/series/drwho.html",
  "En Place": "https://flcorp.github.io/flcflix/series/enplace.html",
  "Gravity Falls": "https://flcorp.github.io/flcflix/series/gravityfalls.html",
  "Halo": "https://flcorp.github.io/flcflix/series/halo.html",
  "Helluva Boss": "https://flcorp.github.io/flcflix/series/helluvaboss.html",
  "Inside Job": "https://flcorp.github.io/flcflix/series/insidejob.html",
  "Kaleidoscope": "https://flcorp.github.io/flcflix/series/kaleidoscope.html",
  "La Casa de Papel": "https://flcorp.github.io/flcflix/series/casadepapel.html",
  "Le Flambeau": "https://flcorp.github.io/flcflix/series/flambeau.html",
  "Le Livre de Boba Fett": "https://flcorp.github.io/flcflix/series/bobafett.html",
  "Les Simpson": "https://flcorp.github.io/flcflix/series/simpsons.html",
  "Loki": "https://flcorp.github.io/flcflix/series/loki.html",
  "LOL: Qui Rit, Sort!": "https://flcorp.github.io/flcflix/series/lol.html",
  "Malcolm": "https://flcorp.github.io/flcflix/series/malcolm.html",
  "Murder Drones": "https://flcorp.github.io/flcflix/series/murderdrones.html",
  "One Piece": "https://flcorp.github.io/flcflix/series/onepiece.html",
  "Peaky Blinders": "https://flcorp.github.io/flcflix/series/peakyblinders.html",
  "Rick et Morty": "https://flcorp.github.io/flcflix/series/rick&morty.html",
  "Secret Invasion": "https://flcorp.github.io/flcflix/series/secretinvasion.html",
  "Seul Face à l'Abeille": "https://flcorp.github.io/flcflix/series/manvsbee.html",
  "Sherlock": "https://flcorp.github.io/flcflix/series/sherlock.html",
  "Sonic Prime": "https://flcorp.github.io/flcflix/series/sonic.html",
  "Squid Game": "https://flcorp.github.io/flcflix/series/squidgame.html",
  "Stranger Things": "https://flcorp.github.io/flcflix/series/strangerthings.html",
  "The Boys": "https://flcorp.github.io/flcflix/series/theboys.html",
  "The Flash": "https://flcorp.github.io/flcflix/series/flash.html",
  "The Last of Us": "https://flcorp.github.io/flcflix/series/lastofus.html",
  "The Mandalorian": "https://flcorp.github.io/flcflix/series/mandaloian.html",
  "The Punisher": "https://flcorp.github.io/flcflix/series/punisher.html",
  "The Walking Dead": "https://flcorp.github.io/flcflix/series/walkingdead.html",
  "The Owl House": "https://flcorp.github.io/flcflix/series/toh.html",
  "Tulsa King": "https://flcorp.github.io/flcflix/series/tulsaking.html",
  "Umbrella Academy": "https://flcorp.github.io/flcflix/series/umbrellaacademy.html",
  "You": "https://flcorp.github.io/flcflix/series/you.html",
  "Young Rock": "https://flcorp.github.io/flcflix/series/youngrock.html",
  "Zootopie+": "https://flcorp.github.io/flcflix/series/zootopia.html",
};

  const searchInput = document.getElementById("search-input");
  const resultList = document.getElementById("result-list");
  
  // Fonction de recherche
  function search() {
    const searchTerm = searchInput.value;
    resultList.innerHTML = ""; // Efface les résultats actuels
  
    if (searchTerm.trim() === "") {
      return; // Ne rien afficher si la recherche est vide
    }
  
    for (const key in predefinedResults) {
      if (key.includes(searchTerm)) {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = key;
        link.href = predefinedResults[key];
        li.appendChild(link);
        resultList.appendChild(li);
      }
    }
  }
  
  // Écouteur d'événement pour la recherche à chaque modification de l'entrée
  searchInput.addEventListener("input", search);