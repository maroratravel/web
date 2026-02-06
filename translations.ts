
export type Language = 'ca' | 'es' | 'en';

export const TRANSLATIONS: Record<Language, any> = {
  ca: {
    nav: { home: 'Inici', philosophy: 'Qui Som', club: 'El Club', blog: 'Blog', contact: 'Contacte', join: 'Uneix-te' },
    home: {
      hero_pre: "Viatja millor, viu millor",
      hero_title: "Despertem emocions que es converteixen en records.",
      hero_subtitle: "Acompanyem persones a viatjar de manera intel·ligent, compartida i responsable.",
      essence_title: "La nostra essència",
      essence_main: "De la tensió a la calma",
      essence_desc: "A Marora creiem profundament que viatjar no és només anar d’un lloc a un altre. No és només reservar un trajecte o arribar a una destinació. Per a nosaltres, viatjar és crear records, compartir moments, trencar rutines, regalar-te temps i reconnectar amb tu mateix.",
      values_list: {
        title: "En què creiem",
        items: ["No creiem en presses.", "No creiem en promeses buides.", "Creiem en processos reals.", "Creiem en persones reals.", "Creiem en relacions duradores."]
      },
      slogans: [
        { t: "Viatja millor.", desc: "Qualitat sobre quantitat." },
        { t: "Comparteix més.", desc: "L'emoció es multiplica." },
        { t: "Creix al teu ritme.", desc: "Sense pressions." },
        { t: "Viu amb sentit.", desc: "Records amb ànima." }
      ],
      features: [
        { title: "Estalvi Intel·ligent", desc: "Accedeix a preus exclusius en creuers, hotels i resorts gràcies a la potència del nostre club global inCruises." },
        { title: "Comunitat i Suport", desc: "No viatges sol. Formes part d'una xarxa basada en l'ajuda mútua, l'honestedat i la transparència." },
        { title: "Lideratge Humà", desc: "Som els teus guies i mentors. El nostre objectiu és el teu creixement personal i experiències inoblidables." }
      ],
      carme_title: "L'experiència de la Carme",
      carme_role: "Fundadora de MARORA i Sòcia Independent d'inCruises",
      carme_quote: "Marora neix amb una idea molt clara, honesta i transparent: acompanyar, escoltar, orientar i ajudar. Neix de l'experiència real, de persones que han passat per dubtes, per pors i per il·lusions.",
      business_title: "Lideratge i Creixement Mutu",
      business_desc: "Si decideixes construir un projecte personal, flexible i adaptat a la teva vida, a Marora t'ajudem a créixer de manera sana, sense pressions ni obligacions.",
      testimonials_title: "Experiències Reals",
      testimonials_subtitle: "Membres de la comunitat MARORA & inCruises",
      testimonials: [
        { name: "Marta Vila", role: "Membre Marora des de 2022", quote: "Gràcies a la Carme i al sistema d'inCruises, he pogut fer 3 creuers en un any estalviant més del 50%. Una bogeria!", location: "Barcelona" },
        { name: "Joan Plans", role: "Soci Partner inCruises", quote: "Marora m'ha donat el suport que necessitava per convertir la meva passió en el meu negoci. La comunitat és increïble.", location: "Girona" },
        { name: "Sònia Garcia", role: "Membre Global", quote: "Viatjar en família ara és possible. El sistema de punts 2x1 realment marca la diferència en el pressupost familiar.", location: "Lleida" }
      ],
      cta_title: "Estàs preparat per crear records que durin per sempre?",
      cta_desc: "Uneix-te a la comunitat MARORA avui mateix i comença a planificar el teu proper destí somiat.",
      cta_button: "Parlem"
    },
    about: {
      mission_pre: "Humanitzant els viatges",
      mission_title: "Som persones ajudant persones",
      mission_desc: "Marora neix de l'experiència real. Sabem què se sent quan comences, quan tens dubtes o quan no ho tens tot clar. Precisament per això existim. No som una agència de viatges, no venem somnis buits; el que fem és molt més humà: estar al teu costat.",
      founder_title: "L'ànima darrere de MARORA",
      founder_role: "Carme López • Fundadora i Mentora",
      founder_bio: "Darrere de cada gran viatge hi ha una història personal. La Carme no és només una emprenedora, és una apassionada de les persones i dels detalls que fan que un viatge passi de ser un trajecte a ser una experiència de vida. Com a Sòcia Independent d'inCruises, ha creat MARORA com un espai de confiança on l'acompanyament és la prioritat absoluta. La seva missió és clara: que ningú se senti sol en el camí cap a les seves vacances somiades.",
      mentorship_title: "Més que una web, una comunitat",
      mentorship_desc: "Estem aquí per escutar-te, orientar-te i ajudar-te a fer-te sentir segur. Quan una persona se sent acompanyada, tot és més fàcil, tot flueix millor i tot té més sentit.",
      values: {
        t_title: "Honestedat", t_desc: "Sabem què se sent en cada pas del camí i t'ho expliquem amb claredat absoluta.",
        p_title: "Persona, no número", p_desc: "Aquí no ets un codi ni una estadística. Et coneixem, t'escoltem i t'entenem.",
        c_title: "Comunitat Viva", c_desc: "Compartim experiències, dubtes, aprenentatges i èxits. Perquè junts som més forts."
      },
      growth_title: "Un camí basat en la confiança",
      growth_desc: "Busquem persones que vulguin créixer amb nosaltres. No persones que entrin i marxin. Volem relacions reals i duradores."
    },
    membership: {
      header_pre: "QUÈ FEM",
      header_title: "Els 5 Pilars de Marora",
      header_desc: "Treballem cada dia per ajudar-te a aprofitar inCruises al màxim, de manera responsable, clara i honesta.",
      header_plans_title: "Tria el pla que més s'ajusti a tu:",
      why_join_title: "Per què unir-te a inCruises?",
      why_join_points: [
        { title: "Opcions de pla flexibles", desc: "A partir de 50 dòlars/mes per adaptar-nos a la teva economia." },
        { title: "Estalvis Immediats i Constants", desc: "No tornis a pagar el preu complet per creuers, hotels i ressorts." },
        { title: "Recompenses importants", desc: "Estalvia centenars, fins i tot milers, en una sola reserva gràcies al club." },
        { title: "Opcions de classe Mundial", desc: "Accedeix a una col·lecció inigualable de marques de viatge reconegudes." },
        { title: "Preus Transparents", desc: "Tots els impostos, taxes i propines estan inclosos — sense costos ocults." },
        { title: "Seguretat", desc: "Tots els pagaments de la membresia estan protegits per Trust My Travel." }
      ],
      pilars: [
        { title: "Acompanyament Personal", desc: "T'ajudem pas a pas: crear el compte, activar-lo i entendre totes les funcions." },
        { title: "Formació Clara", desc: "Informació és poder. Guies, vídeos i sessions en directe sense tecnicismes." },
        { title: "Comunitat Viva", desc: "Espai on compartim motivació, suport i experiències reals entre membres." },
        { title: "Suport al Soci", desc: "Si vols créixer com a soci, t'ajudem a entendre el pla sense pressions." },
        { title: "Llarg Termini", desc: "No desapareixem després del registre. Estem aquí per acompanyar-te sempre." }
      ],
      plans: [
        { id: 1, type: 'premium', name: 'PREMIUM', initialCost: 500, monthlyCost: 250, regPoints: 800, insiderReservations: 'Sense límit', footerNote: 'Es pot baixar a una pla anterior' },
        { id: 2, type: 'classic', name: 'CLÀSSIC', initialCost: 200, monthlyCost: 100, regPoints: 350, insiderReservations: '5', footerNote: 'Actualitzable' },
        { id: 3, type: 'starter', name: 'STARTER', initialCost: 50, monthlyCost: 50, regPoints: 100, insiderReservations: '2', footerNote: 'Actualitzable' },
        { id: 4, type: 'convidat', name: 'Convidat / Convidada', initialCost: 0, monthlyCost: 0, regPoints: 50, insiderReservations: '0', footerNote: 'Actualitzable' }
      ],
      labels: {
        initialCost: "Cost Inicial",
        regPoints: "Punts de Recompensa",
        regPointsSub: "Guanyats en Registrar-se",
        monthlyCost: "Cost Mensual Recorrent",
        insiderRes: "Reserva de INsider Pricing",
        perYear: "per any",
        perMonth: "/ mes",
        register: "Demanar Informació"
      },
      incruises_title: "Sobre inCruises International",
      incruises_desc: "Marora actua únicament com a equip d’orientació i suport dins del sistema inCruises. Totes les operacions turístiques són gestionades directament per inCruises.",
      incruises_points: ["Més de 20.000 rutes de creuers", "Estalvi real des del primer dia", "Punts que mai caduquen", "Garantia de la CLIA"]
    },
    blog: {
      header_pre: "DESTINACIONS INSPIRADORES",
      header_title: "Explora el Món amb MARORA",
      header_desc: "Descobreix les rutes més emblemàtiques seleccionades pel nostre equip d'experts.",
      explore_btn: "Explorar ruta real",
      footer_title: "Més de 20.000 rutes t'esperen",
      footer_desc: "Aquesta és només una petita mostra del que pots trobar a la plataforma inCruises. Com a membre de MARORA, t'ajudem a triar la millor opció.",
      footer_btn: "Accedir al cercador global",
      routes: [
        { title: "Mediterrani Clàssic (MSC Cruises)", route: "Barcelona • Marsella • Gènova • Nàpols • Palma de Mallorca", desc: "Una de les rutes més estimades pels nostres membres. Història Viva i la millor gastronomia europea." },
        { title: "Alba a Alaska (Princess Cruises)", route: "Vancouver • Ketchikan • Juneau • Skagway • Glaceres de Hubbard", desc: "Natura salvatge, avistament de balenes i paisatges de gel que et deixaran sense alè." },
        { title: "Carib Occidental (Royal Caribbean)", route: "Miami • Cozumel • George Town • Falmouth • CocoCay", desc: "Relax total en aigües turqueses i l'illa privada més exclusiva del món." },
        { title: "Perla dels Emirats (Costa Cruises)", route: "Dubai • Abu Dhabi • Doha • Muscat • Dubai", desc: "El futurisme de l'Orient Mitjà combinat amb la tradició del desert i el luxe extrem." }
      ]
    },
    contact: {
      title: "Contacta amb nosaltres",
      subtitle: "Et respondrem personalment. Sense robots. Sense missatges automàtics buits.",
      label: "El teu Correu o Telèfon",
      placeholder: "Com et podem ajudar?",
      checkbox: "Vull saber com funciona pas a pas",
      confirm: "Enviar missatge",
      success_title: "Missatge rebut!",
      success_desc: "Gràcies per contactar amb Marora, en breus ens posarem en contacte amb tu.",
      whatsapp_msg: "Hola Marora! M'agradaria rebre més informació sobre el club de viatges.",
      quote: "Si tens preguntes, dubtes o curiositat, parlem tranquil·lament."
    },
    legal: {
      title: "Termes i Condicions Legals",
      update: "Darrera actualització",
      sections: [
        { title: "A. Descàrrec de Responsabilitat d'Afiliació", content: "Aquesta pàgina web és un lloc de màrqueting independent propietat de la sòcia Carme López. Els continguts, opinions i serveis aquí expressats són responsabilitat exclusiva de MARORA i no representen necessàriament les polítiques oficials d'inCruises LLC." },
        { title: "B. Descàrrec d'Ingressos i Estalvi", content: "L'èxit com a Soci de MARORA i inCruises depèn exclusivament de l'esforç, habilitat i dedicació de cada individu. No es garanteixen ingressos ni nivells específics d'èxit." }
      ]
    },
    footer: {
      desc: "MARORA | Club de Viatges & Estil de Vida. Pàgina web de màrqueting independent gestionada per Carme López, Soci Independent d'inCruises. Aquesta pàgina no és propietat d'inCruises."
    }
  },
  es: {
    nav: { home: 'Inicio', philosophy: 'Quiénes Somos', club: 'El Club', blog: 'Blog', contact: 'Contacto', join: 'Únete' },
    home: {
      hero_pre: "Viaja mejor, vive mejor",
      hero_title: "Despertamos emociones que se convierten en recuerdos.",
      hero_subtitle: "Acompañamos a personas a viajar de manera inteligente, compartida y responsable.",
      essence_title: "Nuestra esencia",
      essence_main: "De la tensión a la calma",
      essence_desc: "En Marora creemos profundamente que viajar no es solo ir de un lugar a otro. Es crear recuerdos, compartir momentos y reconectar contigo mismo.",
      values_list: {
        title: "En qué creemos",
        items: ["No creemos en prisas.", "No creemos en promesas vacías.", "Creemos en procesos reales.", "Creemos en personas reales.", "Creemos en relaciones duraderas."]
      },
      slogans: [
        { t: "Viaja mejor.", desc: "Calidad sobre cantidad." },
        { t: "Comparte más.", desc: "La emoción se multiplica." },
        { t: "Crece a tu ritmo.", desc: "Sin presiones." },
        { t: "Vive con sentido.", desc: "Recuerdos con alma." }
      ],
      features: [
        { title: "Ahorro Inteligente", desc: "Accede a precios exclusivos en cruceros, hoteles y resorts gracias a nuestro club global inCruises." },
        { title: "Comunidad y Soporte", desc: "No viajas solo. Formas parte de una red basada en la ayuda mutua y la honestidad." },
        { title: "Liderazgo Humano", desc: "Somos tus guías y mentores. Nuestro objetivo es tu crecimiento personal." }
      ],
      carme_title: "La experiencia de Carme",
      carme_role: "Fundadora de MARORA y Socia Independiente de inCruises",
      carme_quote: "Marora nace con una idea muy clara, honesta y transparente: acompañar, escuchar, orientar y ayudar.",
      business_title: "Liderazgo y Crecimiento Mutuo",
      business_desc: "Si decides construir un proyecto personal, en Marora te ayudamos a crecer de manera sana.",
      testimonials_title: "Experiencias Reales",
      testimonials_subtitle: "Miembros de la comunidad MARORA & inCruises",
      testimonials: [
        { name: "Marta Vila", role: "Miembro Marora desde 2022", quote: "Gracias a Carme y al sistema de inCruises, he podido hacer 3 cruceros en un año ahorrando más del 50%. ¡Una locura!", location: "Barcelona" },
        { name: "Juan Plans", role: "Socio Partner inCruises", quote: "Marora me ha dado el soporte que necesitaba para convertir mi pasión en mi negocio.", location: "Girona" },
        { name: "Sonia García", role: "Miembro Global", quote: "Viajar en familia ahora es posible. El sistema de puntos 2x1 realmente marca la diferencia.", location: "Lleida" }
      ],
      cta_title: "¿Estás preparado para crear recuerdos que duren para siempre?",
      cta_desc: "Únete a la comunidad MARORA hoy mismo y comienza a planificar tu próximo destino soñado.",
      cta_button: "Hablemos"
    },
    about: {
      mission_pre: "Humanizando los viajes",
      mission_title: "Somos personas ayudando a personas",
      mission_desc: "Marora nace de la experiencia real. Sabemos qué se siente cuando empiezas. No somos una agencia de viajes, somos humanos a tu lado.",
      founder_title: "El alma detrás de MARORA",
      founder_role: "Carme López • Fundadora y Mentora",
      founder_bio: "Detrás de cada gran viaje hay una historia personal. Carme no es solo una emprendedora, es una apasionada de las personas y de los detalles que hacen que un viaje pase de ser un trayecto a una experiencia de vida.",
      mentorship_title: "Más que una web, una comunidad",
      mentorship_desc: "Estamos aquí para escucharte y ayudarte a sentirte seguro.",
      values: {
        t_title: "Honestidad", t_desc: "Claridad absoluta en cada paso del camino.",
        p_title: "Persona, no número", p_desc: "Te conocemos, te escuchamos y te entendemos.",
        c_title: "Comunidad Viva", c_desc: "Juntos somos más fuertes."
      },
      growth_title: "Un camino basado en la confianza",
      growth_desc: "Buscamos personas que quieran crecer con nosotros. No personas que entren y salgan."
    },
    membership: {
      header_pre: "QUÉ HACEMOS",
      header_title: "Los 5 Pilares de Marora",
      header_desc: "Trabajamos cada día para ayudarte a aprovechar inCruises al máximo de forma honesta.",
      header_plans_title: "Elige el plan que más se ajuste a ti:",
      why_join_title: "¿Por qué unirte a inCruises?",
      why_join_points: [
        { title: "Opciones de plan flexibles", desc: "A partir de 50 dólares/mes para adaptarnos a tu economía." },
        { title: "Ahorros Inmediatos", desc: "No vuelvas a pagar el precio completo por cruceros u hoteles." },
        { title: "Recompensas importantes", desc: "Ahorra cientos, incluso miles, en una sola reserva gracias al club." },
        { title: "Opciones de Clase Mundial", desc: "Accede a una colección inigualable de marcas reconocidas." },
        { title: "Precios Transparentes", desc: "Todos los impuestos y tasas están incluidos — sin costes ocultos." },
        { title: "Seguridad", desc: "Todos los pagos de la membresía están protegidos por Trust My Travel." }
      ],
      pilars: [
        { title: "Acompañamiento Personal", desc: "Te ayudamos paso a paso a entender todas las funciones." },
        { title: "Formación Clara", desc: "Información es poder. Guías y sesiones en directo sin tecnicismos." },
        { title: "Comunidad Viva", desc: "Espacio donde compartimos motivación y experiencias reales." },
        { title: "Soporte al Socio", desc: "Si quieres crecer como socio, te ayudamos sin presiones." },
        { title: "Largo Plazo", desc: "Estamos aquí para acompañarte siempre." }
      ],
      plans: [
        { id: 1, name: 'PREMIUM', initialCost: 500, monthlyCost: 250, regPoints: 800, insiderReservations: 'Sin límite', footerNote: 'Se puede bajar a un plan anterior' },
        { id: 2, name: 'CLÁSICO', initialCost: 200, monthlyCost: 100, regPoints: 350, insiderReservations: '5', footerNote: 'Actualizable' },
        { id: 3, name: 'STARTER', initialCost: 50, monthlyCost: 50, regPoints: 100, insiderReservations: '2', footerNote: 'Actualizable' },
        { id: 4, name: 'Invitado / Invitada', initialCost: 0, monthlyCost: 0, regPoints: 50, insiderReservations: '0', footerNote: 'Actualizable' }
      ],
      labels: {
        initialCost: "Coste Inicial",
        regPoints: "Puntos de Recompensa",
        regPointsSub: "Ganados al Registrarse",
        monthlyCost: "Coste Mensual Recurrente",
        insiderRes: "Reserva de INsider Pricing",
        perYear: "por año",
        perMonth: "/ mes",
        register: "Pedir Información"
      },
      incruises_title: "Sobre inCruises International",
      incruises_desc: "Marora actúa únicamente como equipo de orientación. Todas las operaciones son gestionadas por inCruises.",
      incruises_points: ["Más de 20.000 rutas", "Ahorro real", "Puntos sin caducidad", "Garantía CLIA"]
    },
    blog: {
      header_pre: "DESTINOS INSPIRADORES",
      header_title: "Explora el Mundo con MARORA",
      header_desc: "Descubre las rutas más emblemáticas seleccionadas por expertos.",
      explore_btn: "Explorar ruta real",
      footer_title: "Más de 20.000 rutas te esperan",
      footer_desc: "Esto es solo una pequeña muestra. Como miembro de MARORA, te ayudamos a elegir.",
      footer_btn: "Acceder al buscador global",
      routes: [
        { title: "Mediterráneo Clásico", route: "Barcelona • Marsella • Génova • Nápoles", desc: "Una de las rutas más queridas. Historia y gastronomía europea." },
        { title: "Amanecer en Alaska", route: "Vancouver • Ketchikan • Juneau • Skagway", desc: "Naturaleza salvaje y paisajes de hielo que te dejarán sin aliento." },
        { title: "Caribe Occidental", route: "Miami • Cozumel • George Town • CocoCay", desc: "Relax total en aguas turquesas y la isla privada más exclusiva." },
        { title: "Perla de los Emiratos", route: "Dubai • Abu Dhabi • Doha • Muscat", desc: "El futurismo de Oriente Medio combinado con el lujo extremo." }
      ]
    },
    contact: {
      title: "Contacta con nosotros",
      subtitle: "Te responderemos personalmente. Sin robots.",
      label: "Tu Correo o Teléfono",
      placeholder: "¿Cómo te podemos ayudar?",
      checkbox: "Quiero saber cómo funciona paso a paso",
      confirm: "Enviar mensaje",
      success_title: "¡Mensaje recibido!",
      success_desc: "Gracias por contactar con Marora, en breve nos pondremos en contacto contigo.",
      whatsapp_msg: "¡Hola Marora! Me gustaría recibir más información.",
      quote: "Si tienes preguntas o curiosidad, hablemos tranquilamente."
    },
    legal: {
      title: "Términos y Condiciones Legales",
      update: "Última actualización",
      sections: [
        { title: "A. Descargo de Afiliación", content: "Esta web es de marketing independiente de Carme López. No representa oficialmente a inCruises LLC." },
        { title: "B. Descargo de Ingresos", content: "El éxito depende del esfuerzo individual. No se garantizan ingresos específicos." }
      ]
    },
    footer: {
      desc: "MARORA | Club de Viajes. Web gestionada por Carme López, Socio Independiente de inCruises."
    }
  },
  en: {
    nav: { home: 'Home', philosophy: 'Who We Are', club: 'The Club', blog: 'Blog', contact: 'Contact', join: 'Join Us' },
    home: {
      hero_pre: "Travel better, live better",
      hero_title: "Awakening emotions that turn into memories.",
      hero_subtitle: "We accompany people to travel intelligently, shared, and responsibly.",
      essence_title: "Our essence",
      essence_main: "From tension to calm",
      essence_desc: "At Marora we deeply believe that traveling is about creating memories and reconnecting with yourself.",
      values_list: {
        title: "What we believe in",
        items: ["No rushes.", "No empty promises.", "Real processes.", "Real people.", "Lasting relationships."]
      },
      slogans: [
        { t: "Travel better.", desc: "Quality over quantity." },
        { t: "Share more.", desc: "Emotions multiply." },
        { t: "Grow at your pace.", desc: "No pressures." },
        { t: "Live with meaning.", desc: "Soulful memories." }
      ],
      features: [
        { title: "Smart Savings", desc: "Access exclusive prices on cruises, hotels, and resorts through our global club inCruises." },
        { title: "Community & Support", desc: "You don't travel alone. You are part of a network based on mutual aid and honesty." },
        { title: "Human Leadership", desc: "We are your guides and mentors. Our goal is your personal growth." }
      ],
      carme_title: "Carme's experience",
      carme_role: "Founder of MARORA and Independent Partner of inCruises",
      carme_quote: "Marora was born with a clear, honest, and transparent idea: to accompany, listen, and help.",
      business_title: "Leadership & Mutual Growth",
      business_desc: "If you decide to build a personal project, at Marora we help you grow healthily.",
      testimonials_title: "Real Experiences",
      testimonials_subtitle: "Members of the MARORA & inCruises community",
      testimonials: [
        { name: "Marta Vila", role: "Marora Member since 2022", quote: "Thanks to Carme and inCruises, I went on 3 cruises in one year saving over 50%!", location: "Barcelona" },
        { name: "John Plans", role: "inCruises Partner", quote: "Marora gave me the support I needed to turn my passion into my business.", location: "Girona" },
        { name: "Sonia Garcia", role: "Global Member", quote: "Family travel is now possible. The 2x1 points system really makes a difference.", location: "Lleida" }
      ],
      cta_title: "Are you ready to create memories that last forever?",
      cta_desc: "Join the MARORA community today and start planning your next dream destination.",
      cta_button: "Let's Talk"
    },
    about: {
      mission_pre: "Humanizing travel",
      mission_title: "We are people helping people",
      mission_desc: "Marora is born from real experience. We know how it feels when you start. We are humans by your side.",
      founder_title: "The soul behind MARORA",
      founder_role: "Carme López • Founder & Mentor",
      founder_bio: "Behind every great trip there is a personal story. Carme is passionate about people and the details that make a journey a life experience.",
      mentorship_title: "More than a website, a community",
      mentorship_desc: "We are here to listen and help you feel secure.",
      values: {
        t_title: "Honesty", t_desc: "Absolute clarity in every step of the way.",
        p_title: "Person, not number", p_desc: "We know you, we listen to you, and we understand you.",
        c_title: "Living Community", c_desc: "Together we are stronger."
      },
      growth_title: "A path based on trust",
      growth_desc: "We look for people who want to grow with us. Not people who come and go."
    },
    membership: {
      header_pre: "WHAT WE DO",
      header_title: "The 5 Pillars of Marora",
      header_desc: "We work every day to help you get the most out of inCruises honestly.",
      header_plans_title: "Choose the plan that best fits you:",
      why_join_title: "Why join inCruises?",
      why_join_points: [
        { title: "Flexible plans", desc: "From $50/month to fit your economy." },
        { title: "Immediate Savings", desc: "Never pay full price for cruises or hotels again." },
        { title: "Significant Rewards", desc: "Save hundreds, even thousands, on a single booking." },
        { title: "World-class Options", desc: "Access an unmatched collection of renowned brands." },
        { title: "Transparent Pricing", desc: "All taxes and fees included — no hidden costs." },
        { title: "Security", desc: "All membership payments protected by Trust My Travel." }
      ],
      pilars: [
        { title: "Personal Support", desc: "We help you step by step to understand all functions." },
        { title: "Clear Training", desc: "Information is power. Guides and live sessions without jargon." },
        { title: "Living Community", desc: "Space where we share motivation and real experiences." },
        { title: "Partner Support", desc: "If you want to grow as a partner, we help you without pressure." },
        { title: "Long Term", desc: "We don't disappear after registration. We are here always." }
      ],
      plans: [
        { id: 1, name: 'PREMIUM', initialCost: 500, monthlyCost: 250, regPoints: 800, insiderReservations: 'Unlimited', footerNote: 'Downgradable to previous plan' },
        { id: 2, name: 'CLASSIC', initialCost: 200, monthlyCost: 100, regPoints: 350, insiderReservations: '5', footerNote: 'Upgradable' },
        { id: 3, name: 'STARTER', initialCost: 50, monthlyCost: 50, regPoints: 100, insiderReservations: '2', footerNote: 'Upgradable' },
        { id: 4, name: 'Guest', initialCost: 0, monthlyCost: 0, regPoints: 50, insiderReservations: '0', footerNote: 'Upgradable' }
      ],
      labels: {
        initialCost: "Initial Cost",
        regPoints: "Reward Points",
        regPointsSub: "Earned on Registration",
        monthlyCost: "Recurring Monthly Cost",
        insiderRes: "INsider Pricing Booking",
        perYear: "per year",
        perMonth: "/ month",
        register: "Request Info"
      },
      incruises_title: "About inCruises International",
      incruises_desc: "Marora acts only as an orientation team. All operations are managed by inCruises.",
      incruises_points: ["Over 20,000 routes", "Real savings", "Points never expire", "CLIA Guarantee"]
    },
    blog: {
      header_pre: "INSPIRING DESTINATIONS",
      header_title: "Explore the World with MARORA",
      header_desc: "Discover the most iconic routes selected by experts.",
      explore_btn: "Explore real route",
      footer_title: "Over 20,000 routes await",
      footer_desc: "This is just a small sample. As a MARORA member, we help you choose.",
      footer_btn: "Access global search",
      routes: [
        { title: "Classic Mediterranean", route: "Barcelona • Marseille • Genoa • Naples", desc: "One of the most loved routes. History and European gastronomy." },
        { title: "Alaska Sunrise", route: "Vancouver • Ketchikan • Juneau • Skagway", desc: "Wild nature and ice landscapes that will take your breath away." },
        { title: "Western Caribbean", route: "Miami • Cozumel • George Town • CocoCay", desc: "Total relaxation in turquoise waters and the most exclusive island." },
        { title: "Pearl of the Emirates", route: "Dubai • Abu Dhabi • Doha • Muscat", desc: "Middle East futurism combined with extreme luxury." }
      ]
    },
    contact: {
      title: "Contact us",
      subtitle: "We will answer you personally. No robots.",
      label: "Your Email or Phone",
      placeholder: "How can we help you?",
      checkbox: "I want to know how it works step by step",
      confirm: "Send message",
      success_title: "Message received!",
      success_desc: "Thank you for contacting Marora, we will get in touch shortly.",
      whatsapp_msg: "Hello Marora! I would like more information.",
      quote: "If you have questions or curiosity, let's talk calmly."
    },
    legal: {
      title: "Legal Terms & Conditions",
      update: "Last update",
      sections: [
        { title: "A. Affiliation Disclaimer", content: "This is an independent marketing site by Carme López. Not an official site of inCruises LLC." },
        { title: "B. Income Disclaimer", content: "Success depends on individual effort. No specific income is guaranteed." }
      ]
    },
    footer: {
      desc: "MARORA | Travel Club. Site managed by Carme López, Independent Partner of inCruises."
    }
  }
};
