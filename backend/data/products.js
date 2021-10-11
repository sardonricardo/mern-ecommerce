const products = [
  {
    title: "Ghost of Tsushima Director's Cut",
    rating: 4,
    maker: "PlayStation 5",
    productImage: "https://m.media-amazon.com/images/I/81bwE2k8F3S._AC_SL1500_.jpg",
    price: 67.99,
    description: "En este mundo abierto de acción y aventura, recorrerás vastos campos y grandes extensiones de terreno en los que encontrarás personajes complejos, descubrirás antiguos monumentos y disfrutarás de la belleza oculta de Tsushima. El enemigo mongol es impredecible, y formidable en estrategia y armamento. Toma la delantera adaptando las habilidades de Jin y aprendiendo nuevas tácticas para defender la isla y proteger al pueblo de Tsushima. "
  },
  {
    title: "Marvel's Avengers",
    rating: 4.5,
    maker: "PlayStation 5",
    productImage: "https://m.media-amazon.com/images/I/81ibCZ-XugL._AC_SL1500_.jpg",
    price: 29.95,
    description: "Marvel's Avengers es un juego de acción y aventura que combina una narrativa cinematográfica con modos de juego individuales y cooperativos, que empieza en el A-Day, en el que Captain America, Iron Man, Hulk, Black Widow y Thor están inaugurando un cuartel general de los Avengers de alta tecnología en San Francisco, acontecimiento que incluye la revelación de su propio helitransporte que funciona con una nueva fuente de energía experimental."
  },
  {
    title: "Death Stranding: Director's Cut",
    rating: 5,
    maker: "PlayStation 5",
    productImage: "https://m.media-amazon.com/images/I/718mUqMLcfL._AC_SL1500_.jpg",
    price: 43.99,
    description: "Death Stranding Director’s Cut está cargado de contenido y funciones de juego optimizadas. En el futuro, un evento misterioso conocido como el Death Stranding ha abierto una puerta entre los vivos y los muertos y ha permitido que criaturas del otro mundo deambulen por un planeta en ruinas habitado por una sociedad desolada"
  },
  {
    title: "Deathloop",
    rating: 4,
    maker: "PlayStation 5",
    productImage: "https://m.media-amazon.com/images/I/51OX0ke+wnL._AC_.jpg",
    price: 59.99,
    description: "Deathloop es un videojuego de acción y aventura en primera persona con énfasis en la ciencia ficción desarrollado por Arkane. En esta aventura, diseñada para PlayStation 5 y PC, se nos llevará a la isla sin ley de Blackreef para participar en una lucha eterna entre dos asesinos extraordinarios basada en bucles temporales."
  },
  {
    title: "Marvel's Spider-Man - Miles Morales",
    rating: 4.5,
    maker: "PlayStation 5",
    productImage: "https://m.media-amazon.com/images/I/81jpUM9xiWL._AC_SL1500_.jpg",
    price: 40.97,
    description: "En esta nueva aventura del universo de Marvel’s Spider-Man, el adolescente Miles Morales se va haciendo a su nuevo hogar mientras sigue los pasos de su mentor Peter Parker como el nuevo Spider-Man. Sin embargo, una encarnizada lucha destruye su nuevo hogar, tras lo que el héroe en ciernes descubre que un gran poder conlleva una gran responsabilidad."
  },
  {
    title: "Demon's Souls",
    rating: 5,
    maker: "PlayStation 5",
    productImage: "https://m.media-amazon.com/images/I/910ijUh7rHL._AC_SL1500_.jpg",
    price: 59.99,
    description: "El lanzamiento de PlayStation 5 es un acontecimiento especial al igual que poder disfrutar de este título clásico que invento su propio género y que tiene legiones de fans por todo el mundo. Demon Souls regresa en una espectacular remasterización que te hará disfrutar de toda la potencia de tu nueva PlayStation 5."
  },
  {
    title: "Assassin's Creed Valhalla",
    rating: 4.5,
    maker: "PlayStation 5",
    productImage: "https://m.media-amazon.com/images/I/81UDcIIwfkL._AC_SL1500_.jpg",
    price: 33.40,
    description: "En Assassin's Creed Valhalla encarnarás a Eivor, una feroz leyenda vikinga criada entre historias de batallas y gloria. Explora un hermoso mundo abierto y cambiante ambientado en la despiadada Inglaterra de los años oscuros. Saquea a tus enemigos, haz prosperar tu asentamiento y consolida tu poder político mientras luchas por ganarte un sitio entre los dioses en el Valhalla."
  },
  {
    title: "Kena: Bridge of Spirits",
    rating: 4,
    maker: "PlayStation 5",
    productImage: "https://m.media-amazon.com/images/I/81nPAiuZNpL._AC_SL1500_.jpg",
    price: 52.99,
    description: "Encuentra a los Rot: los tímidos e ilusorios espíritus están dispersos por todo el bosque. Para mantener el equilibrio, descomponen elementos muertos y putrefactos. Crea tu equipo: encuentra y recoge Rot para obtener poderosas habilidades, realizar descubrimientos y transformar el entorno. Explora: una aldea olvidada y una extraña maldición. Haz uso del poder del reino espiritual para restablecer un mundo otrora majestuoso. Combates frenéticos: enfréntate con Kena a espíritus corruptos que han sido atrapados y son incapaces de escapar."
  },
  {
    title: "Far Cry 6",
    rating: 3,
    maker: "PlayStation 5",
    productImage: "https://m.media-amazon.com/images/I/81c1RbBDRNS._AC_SL1500_.jpg",
    price: 64.90,
    description: "LUCHA POR LA LIBERTAD Encarna a Dani Rojas, habitante de Yara que se convertirá en guerrillero para liberar su nación. UNA YARA DESGARRADA Lucha contra las tropas de Antón en el Far Cry más grande hasta la fecha a lo largo de junglas, playas y Esperanza, la capital de Yara. POTENCIA DE FUEGO GUERRILLERA Sírvete de armas improvisadas, vehículos y amigos, los nuevos colmillos de alquiler, para reducir el tiránico régimen a cenizas."
  },
  {
    title: "FIFA 22",
    rating: 4,
    maker: "PlayStation 5",
    productImage: "https://m.media-amazon.com/images/I/81lphlOBiIL._AC_SL1500_.jpg",
    price: 69.90,
    description: "FIFA 22 es un videojuego de simulación de fútbol aún por presentar de EA Sports que llegará a las tiendas a finales del 2021 para PC y consolas. Aunque las ediciones de las consolas de la octava generación y PC son bastante continuistas, esta nueva entrega tiene como abanderada la tecnología Hypermotion, que permite lograr un comportamiento más realista de los jugadores dentro del campo y que es exclusiva de las versiones de nueva generación."
  },
  {
    title: "Metroid Dread",
    rating: 3.5,
    maker: "Nintendo Switch",
    productImage: "https://m.media-amazon.com/images/I/813OR7P6OTS._AC_SL1500_.jpg",
    price: 59.95,
    description: "Nueva entrega de la serie Metroid que se ha presentado en el E3 2021, y que responde al nombre de Metroid Dread. Con nueva ambientación que llevará a Samus Aran a enfrentarse a todo tipo de amenazas a partir del 8 de octubre de 2021 en Nintendo Switch y a través de una cuidada propuesta de acción y aventuras en 2D con un fuerte componente de plataformas."
  },
  {
    title: "The Legend of Zelda: Skyward Sword",
    rating: 4.5,
    maker: "Nintendo Switch",
    productImage: "https://m.media-amazon.com/images/I/71JLhcez40L._AC_SL1377_.jpg",
    price: 46.90,
    description: "Descubre los orígenes de la Espada Maestra en The Legend of Zelda: Skyward Sword HD para Nintendo Switch. Esta aventura clásica salió originalmente para Wii en 2011 y se ha optimizado para Nintendo Switch: además de contar con controles de movimiento más suaves, también es posible jugar usando los botones."
  },
  {
    title: "Crash Bandicoot 4",
    rating: 4.5,
    maker: "Nintendo Switch",
    productImage: "https://m.media-amazon.com/images/I/81GjyNuubCL._AC_SL1500_.jpg",
    price: 59.80,
    description: "¡Ya era hora de que llegara un juego nuevo de Crash Bandicoot! Crash se lanza de lleno con tus a una aventura temporal que se cae a pedazos que ahora podrás disfrutar en 4K sin coste adicional."
  },
  {
    title: "Miitopia",
    rating: 4.5,
    maker: "Nintendo Switch",
    productImage: "https://m.media-amazon.com/images/I/718GSpRQhzL._AC_SL1377_.jpg",
    price: 42.99,
    description: "¡El mundo de Miitopia está habitado por personajes Mii! Ya se trate de un valiente héroe, una bella princesa o incluso el malvado Archimago, ¡tú decides qué papel desempeña cada personaje en la historia!"
  },
  {
    title: "Super Mario 3D World + Bowser's Fury",
    rating: 5,
    maker: "Nintendo Switch",
    productImage: "https://m.media-amazon.com/images/I/81CbYA2Gt3L._AC_SL1500_.jpg",
    price: 46.90,
    description: "¡Únete a Mario, Luigi, la princesa Peach y Toad en una aventura para salvar el Reino de las hadas en Super Mario 3D World + Bowser's Fury para Nintendo Switch! Bowser ha secuestrado a la princesa hada… ¡y solo nuestros héroes podrán rescatarla!"
  },
  {
    title: "Animal Crossing: New Horizons",
    rating: 5,
    maker: "Nintendo Switch",
    productImage: "https://m.media-amazon.com/images/I/71sT6IkxThL._AC_SL1000_.jpg",
    price: 46.90,
    description: "Si ya no puedes más con el ajetreo de la ciudad, Tom Nook se ha sacado un negocio redondo de debajo de la manga y te tiene preparada una sorpresa que te encantará: ¡el Plan de Asentamiento en Islas Desiertas de Nook Inc.!"
  },
  {
    title: "Mario Kart 8 Deluxe",
    rating: 5,
    maker: "Nintendo Switch",
    productImage: "https://m.media-amazon.com/images/I/91BphPXVYVL._AC_SL1500_.jpg",
    price: 49.90,
    description: "¡Corre donde quieras, cuando quieras! Calienta motores y prepárate para la versión definitiva de Mario Kart 8. El juego de Mario Kart con más personajes. El juego Mario Kart 8 Deluxe tiene 42 personajes para escoger, ¡La lista de personajes más grande en la historia de la serie!"
  },
  {
    title: "Lego Harry Potter Collection",
    rating: 4.5,
    maker: "Nintendo Switch",
    productImage: "https://m.media-amazon.com/images/I/91SyqKpWrSL._AC_SL1500_.jpg",
    price: 14.90,
    description: "Aprende hechizos clásicos mientras asistes a clases y exploras todo el Colegio Hogwarts de Magia y Hechicería, así como sus alrededores, y visita los escenarios más emblemáticos de Harry Potter como el Callejón Diagon, el Ministerio de Magia o el Valle de Godric mientras consigues montones de ladrillos dorados en niveles que mezclan plataformas clásicas con puzles y construcciones de LEGO."
  },
  {
    title: "The Legend Of Zelda: Breath Of The Wild",
    rating: 5,
    maker: "Nintendo Switch",
    productImage: "https://m.media-amazon.com/images/I/91jvZUxquKL._AC_SL1500_.jpg",
    price: 53.99,
    description: "Despierta tras un siglo de letargo, adéntrate en el Hyrule más amplio y abierto jamás creado por las tres grandes Diosas y forja tu propio camino con el orden y aventuras que quieras. La historia de la familia real de Hyrule es también la historia del cataclismo. Y la historia del cataclismo siempre ha sido la de Ganon."
  },
  {
    title: "Pokemon Diamante",
    rating: 3,
    maker: "Nintendo Switch",
    productImage: "https://m.media-amazon.com/images/I/81acgRnC72L._AC_SL1500_.jpg",
    price: 54.99,
    description: "Quienes disfrutaron de Pokémon Diamante y Pokémon Perla podrán volver a los lugares que ya conocen para revivir momentos muy especiales. Los jugadores que se adentren en la región de Sinnoh por primera vez tendrán un montón de combates y sorpresas esperándoles."
  },
  {
    title: "Aliens Fireteam Elite",
    rating: 4.5,
    maker: "Xbox One",
    productImage: "https://m.media-amazon.com/images/I/81hAyzNaZAS._AC_SL1500_.jpg",
    price: 29.99,
    description: "La cacería definitiva: Juega un papel fundamental en los eventos épicos que ocurren 23 años después de la trilogía de Alien como un como un marine colonial destinado a bordo del USS Endeavor, luchando contra las terroríficas amenazas xenomorfas. Sobrevive a la colmena: Enfréntate a más de 20 tipos de enemigos."
  },
  {
    title: "Lost Judgment",
    rating: 4,
    maker: "Xbox One",
    productImage: "https://m.media-amazon.com/images/I/81dTWgA6R4S._AC_SL1500_.jpg",
    price: 59.99,
    description: "Lost Judgment vuelve a poner a los jugadores en la piel del abogado que se convirtió en detective callejero, Takayuki Yagami; a él y a su compañero, el ex-Yakuza Masaharu Kaito, les piden investigar lo que parece el crimen perfecto, ya que el principal sospechoso cuenta con una coartada irrefutable."
  },
  {
    title: "Metro Exodus",
    rating: 4.5,
    maker: "Xbox One",
    productImage: "https://m.media-amazon.com/images/I/91UeyXLDOSS._AC_SL1500_.jpg",
    price: 39.90,
    description: "Adéntrate en la historia de Metro Exodus, un shooter en primera persona desarrollado por 4A Games que combina combate letal y sigilo con exploración, supervivencia y terror en uno de los mundos más inmersivos de la historia de los videojuegos."
  },
  {
    title: "GreedFall",
    rating: 4.5,
    maker: "Xbox One",
    productImage: "https://m.media-amazon.com/images/I/71UQ9uZ2onL._AC_SL1500_.jpg",
    price: 34.49,
    description: "Disfruta en una experiencia de rol: completa misiones y objetivos de distintas formas, mediante combate, diplomacia, engaño o sigilo. Libertad total en la evolución del personaje: juega como hombre o mujer, personaliza tu apariencia y elige los hechizos, talentos y habilidades que quieras"
  },
  {
    title: "Mortal Kombat 11 Ultimate",
    rating: 4.5,
    maker: "Xbox One",
    productImage: "https://m.media-amazon.com/images/I/81YFmHhgPKL._AC_SL1500_.jpg",
    price: 28.78,
    description: "Mortal Kombat vuelve mejor que nunca, las variantes de personajes personalizables, novedad de este juego, te dan un control sin precedentes a la hora de personalizar a los luchadores y adaptarlos a tus preferencias. El nuevo motor gráfico muestra a la perfección cada fractura de cráneo y cada desprendimiento ocular, lo que te acerca tanto al combate que puedes sentirlo."
  },
  {
    title: "Flight Simulator",
    rating: 5,
    maker: "Xbox One",
    productImage: "https://m.media-amazon.com/images/I/81k9chsRwML._AC_SL1500_.jpg",
    price: 54.99,
    description: "Viaja por un mundo repleto de asombrosos detalles con más de 37 000 aeropuertos, 2 millones de ciudades, 1500 millones de edificios, montañas reales, carreteras, árboles, ríos, animales, tráfico y mucho más."
  },
  {
    title: "Immortals Fenyx Rising",
    rating: 5,
    maker: "Xbox One",
    productImage: "https://m.media-amazon.com/images/I/81EcQKwKIXL._AC_SL1500_.jpg",
    price: 28.90,
    description: "Immortals Fenyx Rising™ nos ofrece una magnífica aventura mitológica. Encarna a Fenyx, un nuevo semidiós alado cuya misión es salvar a los dioses griegos y su hogar de una oscura maldición. Enfréntate a bestias mitológicas, domina los poderes legendarios de los dioses y derrota a Tifón, el Titán más peligroso de la mitología griega, en una épica y atemporal lucha."
  },
  {
    title: "Back 4 Blood",
    rating: 2,
    maker: "Xbox One",
    productImage: "https://m.media-amazon.com/images/I/81pcQdg7PLL._AC_SL1500_.jpg",
    price: 89.00,
    description: "Un grupo de veteranos del apocalipsis llamados Exterminadores, curtidos por inenarrables sucesos y cuya ambición es luchar por lo que queda de la humanidad, se han aliado para erradicar a los monstruos infectados conocidos como Infectados y recuperar así nuestro planeta."
  },
  {
    title: "The Medium - Two Worlds",
    rating: 5,
    maker: "Xbox One",
    productImage: "https://m.media-amazon.com/images/I/81u5kJ0MX6S._AC_SL1500_.jpg",
    price: 53.62,
    description: "Conviértete en una médium: ejerce tus habilidades psíquicas únicas reservadas para aquellos con el don; viaja entre realidades o explora entre ellas al mismo tiempo; usa la experiencia fuera del cuerpo para investigar lugares a los que no puedes ir en el mundo real; crea escudos de energía y libera potentes estallidos espirituales para sobrevivir en el mundo espiritual y a sus peligros místicos."
  },
  {
    title: "Observer System Redux",
    rating: 4.5,
    maker: "Xbox One",
    productImage: "https://m.media-amazon.com/images/I/81AcCzKsNXS._AC_SL1500_.jpg",
    price: 23.99,
    description: "Año 2084. El futuro es mucho más oscuro de lo que nadie había imaginado. Primero, llegó la nanofagia: una plaga digital que mató a miles y miles de personas que decidieron aumentar sus mentes y cuerpos. Después vino la guerra, que diezmó y destrozó tanto a la zona este como a la oeste."
  },
  {
    title: "Kingdom Hearts III",
    rating: 4.5,
    maker: "Playstation 4",
    productImage: "https://m.media-amazon.com/images/I/71MizS69n9L._AC_SL1000_.jpg",
    price: 9.90,
    description: "Con la ayuda de Donald y Goofy, Sora lucha para evitar que una fuerza maligna conocida como los sincorazón invada todo el universo. Sora, Donald y Goofy unen fuerzas con personajes de Disney-Pixar nuevos y ya conocidos para superar enormes desafíos y plantarle cara a la oscuridad que se cierne sobre sus mundos."
  },
  {
    title: "Little Nightmares",
    rating: 4.5,
    maker: "Playstation 4",
    productImage: "https://m.media-amazon.com/images/I/81AwKFHDXEL._AC_SL1500_.jpg",
    price: 13.99,
    description: "Los jugadores podrán acompañar a Six en su misterioso viaje a través de Las Fauces. En esta edición definitiva del juego de plataformas con enigmas 3D de Tarsier Studios aclamado por la crítica se incluirá Secrets Of The Maw, que presenta los tres episodios de la historia, The Depths, The Hideaway y The Residence, además de al Chico como nuevo protagonista."
  },
  {
    title: "NieR Automata",
    rating: 5,
    maker: "Playstation 4",
    productImage: "https://m.media-amazon.com/images/I/91LsYyK4fyL._AC_SL1500_.jpg",
    price: 15.99,
    description: "Unos invasores de otro mundo han atacado inesperadamente desplegando su arma secreta: unas formas de vida mecánicas. Para obtener ventaja, se despliega una nueva unidad de infantería androide denominada YoRHa. NieR:Automata, que ha recibido numerosos premios y críticas positivas, es un novedoso juego de rol que combina una acción y una historia fascinantes."
  },
  {
    title: "Resident Evil 2",
    rating: 5,
    maker: "Playstation 4",
    productImage: "https://m.media-amazon.com/images/I/81ptux9ho2L._AC_SL1500_.jpg",
    price: 16.90,
    description: "En Resident Evil 2 regresa la acción clásica, la exploración llena de tensión y el estilo de resolución de puzles que definieron la saga Resident Evil. Los usuarios se unen al oficial de policía novato Leon S. Kennedy y a la estudiante universitaria Claire Redfield, que se ven empujados hacia un nefasto estallido en Raccoon City que transformó a su población en zombis mortales."
  },
  {
    title: "Minecraft",
    rating: 4.5,
    maker: "Playstation 4",
    productImage: "https://m.media-amazon.com/images/I/81FupGN4ZiL._AC_SL1500_.jpg",
    price: 29.99,
    description: "Crea tu mundo y construye todo lo que puedas imaginar. Explora montañas, océanos llenos de vida y creaciones increíbles en la tienda del juego, minijuegos ¡y más. Sobrevive con tus amigos online o comparte tu aventura en casa en el modo multijugador de pantalla dividida. El pack de inicio incluye: 700 fichas PS4, mitología griega, popurrí de LittleBigPlanet."
  },
  {
    title: "Marvel's Spider-Man",
    rating: 2.5,
    maker: "Playstation 4",
    productImage: "https://m.media-amazon.com/images/I/91qZT-uoiGL._AC_SL1500_.jpg",
    price: 28.90,
    description: "Ponte en la piel de un curtido experimentado y maduro Peter Parker y consigue salvar Manhattan de criminales y villanos todo esto compaginándolo con su vida personal. En este nuevo capitulo totalmente original encontraremos grandes habilidades acrobáticas, situaciones en las que tendrás que improvisar, acción con telarañas para trepar muros y mecánicas jamás vistas en un Spiderman."
  },
  {
    title: "Mafia Trilogy",
    rating: 3,
    maker: "Playstation 4",
    productImage: "https://m.media-amazon.com/images/I/81ck9qIfbGL._AC_SL1500_.jpg",
    price: 24.99,
    description: "Sumérgete en el brutal mundo del crimen organizado durante tres épocas delictivas en Estados Unidos. Por primera vez, juega a los tres dramas criminales de la franquicia Mafia en una increíble resolución 4K y detalles en Ultra HD, incluida una fiel reinvención del aclamado Mafia original, creada desde cero."
  },
  {
    title: "Far Cry 5",
    rating: 4,
    maker: "Playstation 4",
    productImage: "https://m.media-amazon.com/images/I/61O3CUxf4eS._AC_SL1000_.jpg",
    price: 19.99,
    description: "Bienvenido a Hope County, en Montana, un lugar idílico en el que vive una comunidad de gente amante de la libertad. además de una secta de ideología apocalíptica conocida como “Las Puertas del Edén”. Liderada por el carismático profeta Joseph Seed y sus devotos hermanos, los Heralds, la secta se ha ido infiltrando inadvertidamente en todos los aspectos de la vida cotidiana de esta ciudad, antes tranquila."
  },
  {
    title: "F1 2021",
    rating: 1,
    maker: "Playstation 4",
    productImage: "https://m.media-amazon.com/images/I/81cIgMh9czS._AC_SL1500_.jpg",
    price: 19.99,
    description: "Modo Mi equipo: crea un piloto, elige un patrocinador y un proveedor de motores, contrata a un compañero de equipo y competid como la 11.ª escudería de la parrilla. Las estadísticas ampliadas de los pilotos ahora incluyen Enfoque y nuevos eventos de departamento críticos para el equipo que hay que abordar. Carreras en pantalla dividida para dos jugadores."
  },
  {
    title: "Grand Theft Auto V",
    rating: 5,
    maker: "Playstation 4",
    productImage: "https://m.media-amazon.com/images/I/81HjSSj8KpL._AC_SL1500_.jpg",
    price: 15.97,
    description: "Explora el asombroso mundo de Los Santos y el Condado de Blaine en la experiencia definitiva de Grand Theft Auto V, que incluye una serie de mejoras técnicas tanto para jugadores veteranos como para recién llegados. Además de una mayor distancia de gráficos y una mejor resolución, los jugadores también disfrutarán de nuevas incorporaciones y mejoras."
  },
];

module.exports = products;