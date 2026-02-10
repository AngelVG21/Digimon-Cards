const digimons = {
    agumon: {
        id: "agumon",
        name: "Agumon",
        level: 1, exp: 0, stars: 0, starPhase: 0, fragments: 0,activePower: null,
        stageIndex: 0,
        mastery: { tier: 0, level: 1 },
        classSystem: { tier: 0, level: 0, runes: 0 },
        uniqueTitle: "🔥 Heredero del Dragón del Valor 🔥",
        title: null,
        family: "valiente",
        faction: "hero",
        activeFactionPower: false,
        attributes:["rabia","ardiente","orgulloso","invencible","perfecto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions: [
            { name: "Agumon", img: "img/agumon.png", base: { power: 100, hp: 750, speed: 10 } },
            { name: "Greymon", img: "img/greymon.png", base: { power: 210, hp: 840, speed: 15 } },
            { name: "MetalGreymon", img: "img/metalgreymon.png", base: { power: 320, hp: 2000, speed: 20 } },
            { name: "WarGreymon", img: "img/wargreymon.png", base: { power: 700, hp: 5500, speed: 30 } }
        ],
        stellarSkills: [
            { name:"Coraje Ardiente", desc:"Aumenta el daño de fuego y desbloquea ataques ígneos.", unlock:10 },
            { name:"Llama Evolutiva", desc:"Permite evolucionar sin costo de energía.", unlock:20 },
            { name:"Espíritu Dracónico", desc:"Refuerza habilidades físicas y ataques directos.", unlock:30 },
            { name:"Voluntad Inquebrantable", desc:"Resiste efectos negativos y debuffs.", unlock:40 },
            { name:"Furia del Dragón Supremo", desc:"Desbloquea la forma máxima del linaje Greymon.", unlock:50 }
        ],
        activeSkill: null,
        powerDescriptions: {
            cristal: "El Cristal del Valor despierta el espíritu heroico de Agumon, aumentando considerablemente su poder y velocidad.",
            corrupcion: "La Corrupción desata una furia salvaje que sacrifica defensa a cambio de un daño brutal.",
            supreme: "El Dragón Supremo del Valor libera todo su poder legendario, aumentando masivamente todos los atributos."
        }
    },
    gabumon: {
        id: "gabumon",
        name: "Gabumon",
        level: 1, exp: 0, stars: 0, starPhase: 0, fragments: 0,activePower: null,
        stageIndex: 0,
        mastery: { tier: 0, level: 1 },
        classSystem: { tier: 0, level: 0, runes: 0 },
        title: null,
        uniqueTitle: "❄️ Portador del Lobo de Hielo ❄️",
        family: "robusto",
        faction: "hero",
        activeFactionPower: false,
        attributes:["ritmo","frio","gigante","maquina","conflictivo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions: [
            { name: "Gabumon", img: "img/gabumon.png", base: { power: 95, hp: 720, speed: 12 } },
            { name: "Garurumon", img: "img/garurumon.png", base: { power: 180, hp: 980, speed: 20 } },
            { name: "WereGarurumon", img: "img/weregarurumon.png", base: { power: 400, hp: 1970, speed: 28 } },
            { name: "MetalGarurumon", img: "img/metalgarurumon.png", base: { power: 770, hp: 5400, speed: 35 } }
        ],
        stellarSkills: [
            { name:"Instinto Salvaje", desc:"Potencia la evasión y reflejos naturales.", unlock:10 },
            { name:"Vínculo Fraternal", desc:"Fortalece sinergias con aliados.", unlock:20 },
            { name:"Alma del Lobo", desc:"Desbloquea ataques veloces.", unlock:30 },
            { name:"Espíritu Ártico", desc:"Permite resistir congelación.", unlock:40 },
            { name:"Depredador Supremo", desc:"Incrementa daño crítico en batalla.", unlock:50 }
        ],
        activeSkill: null,
        powerDescriptions: {
            cristal: "El Cristal del Valor despierta el espíritu heroico de Agumon, aumentando considerablemente su poder y velocidad.",
            corrupcion: "La Corrupción desata una furia salvaje que sacrifica defensa a cambio de un daño brutal.",
            supreme: "El Dragón Supremo del Valor libera todo su poder legendario, aumentando masivamente todos los atributos."
        }       
    },
    guilmon: {
        id: "guilmon",
        name: "Guilmon",
        level: 1, exp: 0, stars: 0, starPhase: 0, fragments: 0, activePower: null,
        stageIndex: 0,
        mastery: { tier: 0, level: 1 },
        classSystem: { tier: 0, level: 0, runes: 0 },
        title: null,
        uniqueTitle: "🩸 El Dragón del Caos Primordial 🩸",
        family: "valiente",
        faction: "hero",
        activeFactionPower: false,
        attributes:["dormilon","ardiente","simpatico","gigante","infectado"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions: [
            { name: "Guilmon", img: "img/guilmon.png", base: { power: 125, hp: 780, speed: 14 } },
            { name: "Growlmon", img: "img/growmon.png", base: { power: 285, hp: 1240, speed: 18 } },
            { name: "WarGrowlmon", img: "img/wargrowlmon.png", base: { power: 420, hp: 3070, speed: 25 } },
            { name: "Gallantmon", img: "img/gallantmon.png", base: { power: 850, hp: 5700, speed: 32 } }
        ],
        stellarSkills: [
            { name:"Coraje Ardiente", desc:"Aumenta el daño de fuego y desbloquea ataques ígneos.", unlock:10 },
            { name:"Llama Evolutiva", desc:"Permite evolucionar sin costo de energía.", unlock:20 },
            { name:"Espíritu Dracónico", desc:"Refuerza habilidades físicas y ataques directos.", unlock:30 },
            { name:"Voluntad Inquebrantable", desc:"Resiste efectos negativos y debuffs.", unlock:40 },
            { name:"Furia del Dragón Supremo", desc:"Desbloquea la forma máxima del linaje Greymon.", unlock:50 }
        ],
        activeSkill: null,
        powerDescriptions: {
            cristal: "Cristal de Caos: incrementa la energía oscura interior de Guilmon.",
            corrupcion: "Corrupción Abismal: convierte su fuerza en una sed insaciable de destrucción.",
            supreme: "Encarnación del Dragón Demoníaco Primordial."
        }
    },
    gomamon: {
        id: "gomamon",
        name: "Gomamon",
        level: 1, exp: 0, stars: 0, starPhase: 0, fragments: 0, activePower: null,
        stageIndex: 0,
        mastery: { tier: 0, level: 1 },
        classSystem: { tier: 0, level: 0, runes: 0 },
        title: null,
        uniqueTitle: "🌊 Señor de las Mareas Eternas 🌊",
        family: "amable",
        faction: "hero",
        activeFactionPower: false,
        attributes:["frio","tramposo","conflictivo","codicioso","invencible"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions: [
            { name: "Gomamon", img: "img/gomamon.png", base:{ power:145, hp:740, speed:12 }},
            { name: "Ikkakumon", img: "img/ikkakumon.png", base:{ power:270, hp:1200, speed:16 }},
            { name: "Zudomon", img: "img/zudomon.png", base:{ power:410, hp:3100, speed:22 }},
            { name: "Vikemon", img: "img/vikemon.png", base:{ power:850, hp:5600, speed:28 }}
        ],
        stellarSkills: [
            { name:"Marea Viva", desc:"Fortalece habilidades acuáticas.", unlock:10 },
            { name:"Coraza Marina", desc:"Refuerza defensa natural.", unlock:20 },
            { name:"Rugido del Océano", desc:"Potencia ataques de área.", unlock:30 },
            { name:"Bendición Marina", desc:"Reduce daño recibido.", unlock:40 },
            { name:"Avatar del Mar", desc:"Despierta el poder oceánico supremo.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Marino: aumenta defensa y control del agua.",
            corrupcion:"Corrupción Abisal: desata furia marina incontrolable.",
            supreme:"El Avatar del Océano despierta su forma divina."
        }
    },
    palmon: {
        id:"palmon",
        name:"Palmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌸 Reina del Bosque Eterno 🌸",
        family:"amable",
        faction:"hero",
        activeFactionPower:false,
        attributes:["encanto","nomuerto","orgulloso","naturalista","pureza"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Palmon", img:"img/palmon.png", base:{ power:122, hp:750, speed:11 }},
            { name:"Togemon", img:"img/togemon.png", base:{ power:320, hp:1900, speed:15 }},
            { name:"Lillymon", img:"img/lillymon.png", base:{ power:560, hp:3800, speed:30 }},
            { name:"Rosemon", img:"img/rosemon.png", base:{ power:870, hp:5600, speed:35 }}
        ],
        stellarSkills:[
            { name:"Bendición Floral", desc:"Mejora regeneración.", unlock:10 },
            { name:"Espinas Vivas", desc:"Potencia ataques naturales.", unlock:20 },
            { name:"Danza Natural", desc:"Incrementa evasión.", unlock:30 },
            { name:"Aura Verde", desc:"Reduce daño recibido.", unlock:40 },
            { name:"Diosa del Bosque", desc:"Despierta su forma suprema.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Natural: incrementa curación y velocidad.",
            corrupcion:"Corrupción Espinosa: convierte su dulzura en agresión.",
            supreme:"Encarnación absoluta del poder natural."
        }
    },
    tentomon:{
        id:"tentomon",
        name:"Tentomon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"⚡ Señor del Trueno Digital ⚡",
        family:"misterioso",
        faction:"hero",
        activeFactionPower:false,
        attributes:["estatica","ritmo","dormilon","manada","orgulloso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Tentomon", img:"img/tentomon.png", base:{ power:148, hp:900, speed:14 }},
            { name:"Kabuterimon", img:"img/kabuterimon.png", base:{ power:235, hp:1850, speed:18 }},
            { name:"MegaKabuterimon", img:"img/megakabuterimon.png", base:{ power:390, hp:3100, speed:24 }},
            { name:"HerculesKabuterimon", img:"img/herculeskabuterimon.png", base:{ power:780, hp:5400, speed:28 }}
        ],
        stellarSkills:[
            { name:"Electroshock", desc:"Potencia ataques eléctricos.", unlock:10 },
            { name:"Carga Dinámica", desc:"Mejora velocidad.", unlock:20 },
            { name:"Tormenta Digital", desc:"Desata daño masivo.", unlock:30 },
            { name:"Campo Magnético", desc:"Reduce daño entrante.", unlock:40 },
            { name:"Dios del Trueno", desc:"Despierta su forma divina.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Eléctrico: multiplica velocidad y daño.",
            corrupcion:"Corrupción Voltáica: energía inestable destructiva.",
            supreme:"Forma absoluta del trueno digital."
        }
    },
    flamemon:{
        id:"flamemon",
        name:"Flamemon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🔥 Portador del Espíritu del Fuego Ancestral 🔥",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","ardiente","conflictivo","simpatico","codicioso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Flamemon", img:"img/flamemon.png", base:{ power:152, hp:1080, speed:15 }},
            { name:"Agunimon", img:"img/agunimon.png", base:{ power:360, hp:1950, speed:20 }},
            { name:"BurningGreymon", img:"img/burninggreymon.png", base:{ power:490, hp:3100, speed:25 }},
            { name:"AncientGreymon", img:"img/ancientgreymon.png", base:{ power:880, hp:5500, speed:32 }}
        ],
        stellarSkills:[
            { name:"Espíritu Ígneo", desc:"Aumenta daño de fuego.", unlock:10 },
            { name:"Combustión Total", desc:"Mejora ataques masivos.", unlock:20 },
            { name:"Alma Ardiente", desc:"Incrementa velocidad.", unlock:30 },
            { name:"Voluntad Solar", desc:"Reduce daño recibido.", unlock:40 },
            { name:"Avatar del Fuego", desc:"Forma legendaria definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Ígneo: multiplica fuego y velocidad.",
            corrupcion:"Corrupción Infernal: convierte su llama en caos puro.",
            supreme:"Encarnación del Fuego Primordial."
        }
    },
    veemon:{
        id:"veemon",
        name:"Veemon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0,  activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐉 Emperador Dragón Imperial 🐉",
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["estatica","ardiente","invencible","maquina","simpatico"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Veemon", img:"img/veemon.png", base:{ power:155, hp:1100, speed:16 }},
            { name:"ExVeemon", img:"img/exveemon.png", base:{ power:370, hp:2400, speed:20 }},
            { name:"Flamedramon", img:"img/flamedramon.png", base:{ power:540, hp:3400, speed:25 }},
            { name:"Imperialdramon", img:"img/imperialdramon.png", base:{ power:950, hp:5900, speed:30 }}
        ],
        stellarSkills:[
            { name:"ADN Digital", desc:"Incrementa sinergias.", unlock:10 },
            { name:"Alas Imperiales", desc:"Mejora movilidad.", unlock:20 },
            { name:"Fusión Dracónica", desc:"Potencia ataques combinados.", unlock:30 },
            { name:"Armadura Imperial", desc:"Reduce daño masivo.", unlock:40 },
            { name:"Emperador Absoluto", desc:"Forma suprema legendaria.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Imperial: maximiza poder dracónico.",
            corrupcion:"Corrupción Dragón: libera destrucción total.",
            supreme:"El Dragón Emperador definitivo despierta."
        }
    },
    patamon:{
        id:"patamon",
        name:"Patamon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌟 Mensajero Celestial del Destino 🌟",
        family:"amable",
        faction:"hero",
        activeFactionPower:false,
        attributes:["encanto","perfecto","gigante","divino","pureza"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Patamon", img:"img/patamon.png", base:{ power:140, hp:820, speed:18 }},
            { name:"Angemon", img:"img/angemon.png", base:{ power:360, hp:2300, speed:22 }},
            { name:"MagnaAngemon", img:"img/magnaangemon.png", base:{ power:560, hp:4050, speed:26 }},
            { name:"Seraphimon", img:"img/seraphimon.png", base:{ power:920, hp:6000, speed:32 }}
        ],
        stellarSkills:[
            { name:"Luz Divina", desc:"Aumenta daño sagrado.", unlock:10 },
            { name:"Sanación Celestial", desc:"Regenera vida.", unlock:20 },
            { name:"Escudo Santo", desc:"Reduce daño.", unlock:30 },
            { name:"Aura Sagrada", desc:"Potencia aliados.", unlock:40 },
            { name:"Juicio Celestial", desc:"Forma divina suprema.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Sagrado: aumenta curación y poder.",
            corrupcion:"Corrupción Caída: distorsiona su esencia.",
            supreme:"Avatar máximo de la luz celestial."
        }
    },
    tailmon:{
        id:"tailmon",
        name:"Tailmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"👼 Guardiana Suprema del Orden Celestial 👼",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        attributes:["manada","pureza","divino","dormilon","perfecto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Tailmon", img:"img/tailmon.png", base:{ power:148, hp:1500, speed:20 }},
            { name:"Nefertimon", img:"img/nefertimon.png", base:{ power:270, hp:2900, speed:25 }},
            { name:"Angewomon", img:"img/angewomon.png", base:{ power:460, hp:4300, speed:30 }},
            { name:"Ophanimon", img:"img/ophanimon.png", base:{ power:850, hp:6000, speed:34 }}
        ],
        stellarSkills:[
            { name:"Juicio Luminoso", desc:"Potencia ataques sagrados.", unlock:10 },
            { name:"Escudo Divino", desc:"Reduce daño recibido.", unlock:20 },
            { name:"Luz Sanadora", desc:"Regenera vida.", unlock:30 },
            { name:"Aura Celestial", desc:"Fortalece aliados.", unlock:40 },
            { name:"Guardiana Absoluta", desc:"Forma suprema celestial.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Celestial: maximiza luz sagrada.",
            corrupcion:"Corrupción Caída: altera su esencia angelical.",
            supreme:"Encarnación definitiva del orden celestial."
        }
    },
    blackAgumon:{
        id:"blackAgumon",
        name:"Black Agumon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🩸 Heredero del Dragón de la Destrucción 🩸",
        family:"malvado",
        faction:"villain",
        activeFactionPower:false,
        attributes:["conflictivo","ardiente","orgulloso","infectado","ritmo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Black Agumon", img:"img/blackagumon.png", base:{ power:160, hp:780, speed:14 }},
            { name:"Black Greymon", img:"img/blackgreymon.png", base:{ power:380, hp:2200, speed:18 }},
            { name:"Black MetalGreymon", img:"img/blackmetalgreymon.png", base:{ power:580, hp:3900, speed:22 }},
            { name:"Black WarGreymon", img:"img/blackwargreymon.png", base:{ power:980, hp:5800, speed:28 }}
        ],
        stellarSkills:[
            { name:"Furia Oscura", desc:"Incrementa daño brutal.", unlock:10 },
            { name:"Instinto Despiadado", desc:"Aumenta crítico.", unlock:20 },
            { name:"Aura Maligna", desc:"Debilita enemigos.", unlock:30 },
            { name:"Corazón Negro", desc:"Reduce daño recibido.", unlock:40 },
            { name:"Dragón del Caos", desc:"Forma suprema destructiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Oscuro: incrementa agresión.",
            corrupcion:"Corrupción Total: libera su lado más salvaje.",
            supreme:"El Dragón Oscuro definitivo despierta."
        }
    },  
    blackGabumon:{
        id:"blackGabumon",
        name:"Black Gabumon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌑 Depredador del Hielo Infernal 🌑",
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["rabia","momuerto","codicioso","maquina","invencible"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Black Gabumon", img:"img/blackgabumon.png", base:{ power:158, hp:700, speed:15 }},
            { name:"Black Garurumon", img:"img/blackgarurumon.png", base:{ power:375, hp:2200, speed:22 }},
            { name:"Black WereGarurumon", img:"img/blackweregarurumon.png", base:{ power:660, hp:3100, speed:28 }},
            { name:"Black MetalGarurumon", img:"img/blackmetalgarurumon.png", base:{ power:1050, hp:5800, speed:32 }}
        ],
        stellarSkills:[
            { name:"Instinto Letal", desc:"Aumenta daño crítico.", unlock:10 },
            { name:"Garras Malditas", desc:"Incrementa penetración.", unlock:20 },
            { name:"Alma Depredadora", desc:"Mejora velocidad.", unlock:30 },
            { name:"Coraza Oscura", desc:"Reduce daño recibido.", unlock:40 },
            { name:"Señor del Hielo Negro", desc:"Forma suprema.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Umbrío: velocidad extrema.",
            corrupcion:"Corrupción Salvaje: agresividad absoluta.",
            supreme:"Encarnación del lobo infernal."
        }
    },  
    blackGuilmon:{
        id:"blackGuilmon",
        name:"Black Guilmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"☠ Dragón del Caos Absoluto ☠",
        family:"malvado",
        faction:"villain",
        activeFactionPower:false,
        attributes:["invencible","estatica","orgulloso","parca","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Black Guilmon", img:"img/blackguilmon.png", base:{ power:165, hp:810, speed:16 }},
            { name:"Black Growlmon", img:"img/blackgrowlmon.png", base:{ power:400, hp:2900, speed:20 }},
            { name:"Black WarGrowlmon", img:"img/blackwargrowlmon.png", base:{ power:600, hp:4000, speed:26 }},
            { name:"ChaosGallantmon", img:"img/chaosgallantmon.png", base:{ power:920, hp:5900, speed:30 }}
        ],
        stellarSkills:[
            { name:"Furia Abismal", desc:"Incrementa daño masivo.", unlock:10 },
            { name:"Colmillo Caótico", desc:"Aumenta penetración.", unlock:20 },
            { name:"Instinto Demoníaco", desc:"Mejora evasión.", unlock:30 },
            { name:"Escudo Oscuro", desc:"Reduce daño.", unlock:40 },
            { name:"Dragón Demoníaco", desc:"Forma final absoluta.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Caos: poder devastador.",
            corrupcion:"Corrupción Primordial: desata destrucción total.",
            supreme:"Encarnación del caos absoluto."
        }
    },
    hawkmon:{
        id:"hawkmon",
        name:"Hawkmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🦅 Guardián del Cielo Sagrado 🦅",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        attributes:["simpatico","pureza","ritmo","dormilon","encanto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Hawkmon", img:"img/hawkmon.png", base:{ power:144, hp:800, speed:22 }},
            { name:"Aquilamon", img:"img/aquilamon.png", base:{ power:350, hp:2150, speed:28 }},
            { name:"Silphymon", img:"img/silphymon.png", base:{ power:540, hp:3400, speed:32 }},
            { name:"Valkyrimon", img:"img/valkyrimon.png", base:{ power:890, hp:5200, speed:36 }}
        ],
        stellarSkills:[
            { name:"Vuelo Bendito", desc:"Incrementa velocidad.", unlock:10 },
            { name:"Alas Sagradas", desc:"Reduce daño.", unlock:20 },
            { name:"Tormenta Celestial", desc:"Ataque masivo.", unlock:30 },
            { name:"Protección Divina", desc:"Defensa mejorada.", unlock:40 },
            { name:"Valquiria Suprema", desc:"Forma celestial absoluta.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Celeste: máxima movilidad.",
            corrupcion:"Corrupción Alada: agresión aérea.",
            supreme:"Guardián divino de los cielos."
        }
    },
    armadillomon:{
        id:"armadillomon",
        name:"Armadillomon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🛡 Muralla Viviente del Digimundo 🛡",
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["nomuerto","divino","encanto","maquina","pureza"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Armadillomon", img:"img/armadillomon.png", base:{ power:142, hp:880, speed:10 }},
            { name:"Ankylomon", img:"img/ankylomon.png", base:{ power:350, hp:2100, speed:14 }},
            { name:"Digmon", img:"img/digmon.png", base:{ power:530, hp:4300, speed:18 }},
            { name:"Shakkoumon", img:"img/shakkoumon.png", base:{ power:900, hp:6500, speed:20 }}
        ],
        stellarSkills:[
            { name:"Coraza Viva", desc:"Reduce daño.", unlock:10 },
            { name:"Defensa Absoluta", desc:"Incrementa resistencia.", unlock:20 },
            { name:"Contraataque", desc:"Refleja daño.", unlock:30 },
            { name:"Muralla Sagrada", desc:"Defensa suprema.", unlock:40 },
            { name:"Fortaleza Andante", desc:"Forma máxima.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Terrenal: defensa total.",
            corrupcion:"Corrupción Blindada: agresión defensiva.",
            supreme:"Muralla invencible definitiva."
        }
    },
    wormon:{
        id:"wormon",
        name:"Wormon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐛 Caballero del Destino Imperial 🐛",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","naturalista","orgulloso","dormilon","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Wormon", img:"img/wormmon.png", base:{ power:140, hp:800, speed:14 }},
            { name:"Stingmon", img:"img/stingmon.png", base:{ power:320, hp:2500, speed:24 }},
            { name:"Paildramon", img:"img/paildramon.png", base:{ power:560, hp:4300, speed:28 }},
            { name:"Imperialdramon Paladin Mode", img:"img/imperialdramonPaladinmode.png", base:{ power:920, hp:6800, speed:34 }}
        ],
        stellarSkills:[
            { name:"ADN Dinámico", desc:"Mejora sinergias.", unlock:10 },
            { name:"Lanza Imperial", desc:"Incrementa daño.", unlock:20 },
            { name:"Escudo Dracónico", desc:"Reduce daño.", unlock:30 },
            { name:"Aura Sagrada", desc:"Fortalece aliados.", unlock:40 },
            { name:"Paladín Absoluto", desc:"Forma divina.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Imperial: poder supremo.",
            corrupcion:"Corrupción Imperial: destrucción extrema.",
            supreme:"El Paladín legendario despierta."
        }
    },
    impmon:{
        id:"impmon",
        name:"Impmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"😈 Emperador del Infierno Digital 😈",
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["orgulloso","ardiente","parca","conflictivo","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Impmon", img:"img/impmon.png", base:{ power:150, hp:860, speed:18 }},
            { name:"Wizardmon", img:"img/wizarmon.png", base:{ power:360, hp:2700, speed:22 }},
            { name:"Beelzemon", img:"img/beelzemon.png", base:{ power:520, hp:4400, speed:32 }},
            { name:"Beelzemon Burst Mode", img:"img/beelzemonBurstmode.png", base:{ power:900, hp:6200, speed:38 }}
        ],
        stellarSkills:[
            { name:"Magia Infernal", desc:"Potencia hechizos oscuros.", unlock:10 },
            { name:"Contrato Demoníaco", desc:"Incrementa daño.", unlock:20 },
            { name:"Instinto Letal", desc:"Mejora crítico.", unlock:30 },
            { name:"Aura Maldita", desc:"Reduce daño.", unlock:40 },
            { name:"Señor del Infierno", desc:"Forma suprema.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Infernal: poder mágico máximo.",
            corrupcion:"Corrupción Demoníaca: destrucción total.",
            supreme:"Emperador absoluto del infierno."
        }
    },
    terriermon:{
        id:"terriermon",
        name:"Terriermon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🍀 Mensajero del Viento Sagrado 🍀",
        family:"amable",
        faction:"hero",
        activeFactionPower:false,
        attributes:["maquina","simpatico","gigante","ritmo","encanto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Terriermon", img:"img/terriermon.png", base:{ power:148, hp:820, speed:20 }},
            { name:"Gargomon", img:"img/gargomon.png", base:{ power:380, hp:2000, speed:22 }},
            { name:"Rapidmon", img:"img/rapidmon.png", base:{ power:660, hp:4100, speed:30 }},
            { name:"MegaGargomon", img:"img/megagargomon.png", base:{ power:980, hp:6300, speed:32 }}
        ],
        stellarSkills:[
            { name:"Viento Verde", desc:"Incrementa velocidad.", unlock:10 },
            { name:"Cañones Gemelos", desc:"Aumenta daño.", unlock:20 },
            { name:"Blindaje Áureo", desc:"Reduce daño.", unlock:30 },
            { name:"Escudo Bendito", desc:"Protección sagrada.", unlock:40 },
            { name:"Defensor Supremo", desc:"Forma absoluta.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Esmeralda: equilibrio perfecto.",
            corrupcion:"Corrupción Bélica: artillería total.",
            supreme:"El guardián mecánico definitivo."
        }
    },
    renamon:{
        id:"renamon",
        name:"Renamon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🦊 Guardiana del Misticismo Ancestral 🦊",
        family:"misterioso",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","divino","orgulloso","gigante","manada"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Renamon", img:"img/renamon.png", base:{ power:146, hp:1000, speed:24 }},
            { name:"Kyubimon", img:"img/kyubimon.png", base:{ power:370, hp:2900, speed:28 }},
            { name:"Taomon", img:"img/taomon.png", base:{ power:650, hp:4000, speed:30 }},
            { name:"Sakuyamon", img:"img/sakuyamon.png", base:{ power:950, hp:6800, speed:32 }}
        ],
        stellarSkills:[
            { name:"Talismán Espiritual", desc:"Incrementa poder mágico.", unlock:10 },
            { name:"Barrera Mística", desc:"Reduce daño.", unlock:20 },
            { name:"Hechicería Suprema", desc:"Ataque masivo.", unlock:30 },
            { name:"Iluminación", desc:"Regeneración pasiva.", unlock:40 },
            { name:"Sacerdotisa Divina", desc:"Forma absoluta.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Espiritual: magia perfecta.",
            corrupcion:"Corrupción Arcana: hechicería caótica.",
            supreme:"La divinidad espiritual despierta."
        }   
    },
    lopmon:{
        id:"lopmon",
        name:"Lopmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"☯ Guardián del Equilibrio Universal ☯",
        family:"misterioso",
        faction:"hero",
        activeFactionPower:false,
        attributes:["pureza","encanto","orgulloso","dormilon","divino"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Lopmon", img:"img/lopmon.png", base:{ power:144, hp:830, speed:18 }},
            { name:"Turuiemon", img:"img/turuiemon.png", base:{ power:365, hp:2600, speed:22 }},
            { name:"Antylamon", img:"img/antylamon.png", base:{ power:650, hp:4100, speed:28 }},
            { name:"Cherubimon", img:"img/cherubimon.png", base:{ power:1020, hp:6600, speed:30 }}
        ],
        stellarSkills:[
            { name:"Aura Dual", desc:"Equilibra ataque y defensa.", unlock:10 },
            { name:"Puño Divino", desc:"Incrementa daño.", unlock:20 },
            { name:"Barrera Celestial", desc:"Reduce daño.", unlock:30 },
            { name:"Luz Purificadora", desc:"Regenera vida.", unlock:40 },
            { name:"Querubín Supremo", desc:"Forma divina.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Armónico: balance total.",
            corrupcion:"Corrupción Oscura: forma caída.",
            supreme:"El querubín del juicio final."
        }
    },
    monodramon:{
        id:"monodramon",
        name:"Monodramon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐲 Dragón Carmesí del Valor 🐲",
        family:"oscuro",
        faction:"hero",
        activeFactionPower:false,
        attributes:["nomuerto","ardiente","estatica","invencible","infectado"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Monodramon", img:"img/monodramon.png", base:{ power:152, hp:820, speed:16 }},
            { name:"Strikedramon", img:"img/strikedramon.png", base:{ power:375, hp:2900, speed:22 }},
            { name:"Cyberdramon", img:"img/cyberdramon.png", base:{ power:560, hp:4200, speed:26 }},
            { name:"Justimon", img:"img/justimon.png", base:{ power:900, hp:6400, speed:24 }}
        ],
        stellarSkills:[
            { name:"Furia Dracónica", desc:"Incrementa ataque.", unlock:10 },
            { name:"Garras Carmesí", desc:"Aumenta crítico.", unlock:20 },
            { name:"Armadura Dragón", desc:"Reduce daño.", unlock:30 },
            { name:"Instinto Primario", desc:"Mejora evasión.", unlock:40 },
            { name:"Destructor Mecánico", desc:"Forma suprema.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Carmesí: poder dracónico.",
            corrupcion:"Corrupción Metálica: brutalidad mecánica.",
            supreme:"La máquina dragón definitiva."
        }
    },
    lobomon:{
        id:"lobomon",
        name:"Lobomon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐺 Guerrero Espiritual del Viento 🐺",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["maquina","frio","ritmo","codicioso","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Lobomon", img:"img/lobomon.png", base:{ power:155, hp:860, speed:26 }},
            { name:"KendoGarurumon", img:"img/kendogarurumon.png", base:{ power:390, hp:2700, speed:28 }},
            { name:"MagnaGarurumon", img:"img/magnagarurumon.png", base:{ power:620, hp:4500, speed:32 }},
            { name:"AncientGarurumon", img:"img/ancientgarurumon.png", base:{ power:1080, hp:6800, speed:36 }}
        ],
        stellarSkills:[
            { name:"Danza del Viento", desc:"Incrementa velocidad.", unlock:10 },
            { name:"Espada Espiritual", desc:"Aumenta daño.", unlock:20 },
            { name:"Instinto Alfa", desc:"Mejora crítico.", unlock:30 },
            { name:"Barrera Ancestral", desc:"Reduce daño.", unlock:40 },
            { name:"Lobo Primordial", desc:"Forma legendaria.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Viento: agilidad suprema.",
            corrupcion:"Corrupción Bestial: ferocidad total.",
            supreme:"El lobo ancestral despierta."
        }
    },
    blitzmon:{
        id:"blitzmon",
        name:"Blitzmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"⚡ Avatar del Trueno Celestial ⚡",
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["nomuerto","estatica","orgulloso","tramposo","infectado"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Blitzmon", img:"img/blitzmon.png", base:{ power:154, hp:900, speed:28 }},
            { name:"MetalKabuterimon", img:"img/metalkabuterimon.png", base:{ power:385, hp:2600, speed:26 }},
            { name:"Rhinokabuterimon", img:"img/rhinokabuterimon.png", base:{ power:680, hp:4300, speed:28 }},
            { name:"AncientBeetlemon", img:"img/ancientbeetlemon.png", base:{ power:1060, hp:6700, speed:32 }}
        ],
        stellarSkills:[
            { name:"Rayo Vivo", desc:"Incrementa velocidad.", unlock:10 },
            { name:"Impacto Eléctrico", desc:"Aumenta daño.", unlock:20 },
            { name:"Carga Estática", desc:"Stun ocasional.", unlock:30 },
            { name:"Campo Magnético", desc:"Reduce daño.", unlock:40 },
            { name:"Titán del Trueno", desc:"Forma ancestral.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Trueno: poder eléctrico.",
            corrupcion:"Corrupción Voltaica: caos total.",
            supreme:"El dios del rayo despierta."
        }
    },
    kumamon:{
        id:"kumamon",
        name:"Kumamon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"❄ Señor de las Nieves Eternas ❄",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["frio","manada","orgulloso","dormilon","conflictivo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Kumamon", img:"img/kumamon.png", base:{ power:150, hp:840, speed:17 }},
            { name:"Korikakumon", img:"img/korikakumon.png", base:{ power:570, hp:3900, speed:24 }},
            { name:"AncientMegatheriummon", img:"img/ancientmegatheriummon.png", base:{ power:950, hp:6350, speed:28 }}
        ],
        stellarSkills:[
            { name:"Frío Eterno", desc:"Reduce velocidad enemiga.", unlock:10 },
            { name:"Muralla Glacial", desc:"Reduce daño.", unlock:20 },
            { name:"Avalancha", desc:"Daño masivo.", unlock:30 },
            { name:"Escarcha Absoluta", desc:"Congelación.", unlock:40 },
            { name:"Titán del Hielo", desc:"Forma ancestral.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Glacial: defensa suprema.",
            corrupcion:"Corrupción Invernal: congelación total.",
            supreme:"El dios de las nieves despierta."
        }
    },
    kazemon: {
        id: "kazemon",
        name: "Kazemon",
        level: 1, exp: 0, stars: 0, starPhase: 0, fragments: 0,
        activePower: null, stageIndex: 0,
        mastery: { tier: 0, level: 1 },
        classSystem: { tier: 0, level: 0, runes: 0 },
        uniqueTitle: "🌪️ Espíritu del Viento Celestial 🌪️",
        title: null,
        family: "escurridizo",
        faction: "hero",
        activeFactionPower: false,
        attributes:["ritmo","ardiente","naturalista","simpatico","divino"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions: [
            { name:"Kazemon", img:"img/kazemon.png", base:{ power:160, hp:880, speed:18 } },
            { name:"Zephyrmon", img:"img/zephyrmon.png", base:{ power:340, hp:2900, speed:26 } },
            { name:"Jetsilphymon", img:"img/jetsilphymon.png", base:{ power:620, hp:4600, speed:32 } },
            { name:"AncientKazemon", img:"img/ancientkazemon.png", base:{ power:870, hp:6200, speed:40 } }
        ],
        stellarSkills:[
            {name:"Viento Cortante",desc:"Domina ataques de aire.",unlock:10},
            {name:"Paso Etéreo",desc:"Movilidad extrema.",unlock:20},
            {name:"Tormenta Sagrada",desc:"Control del clima.",unlock:30},
            {name:"Espíritu Celeste",desc:"Resistencia espiritual.",unlock:40},
            {name:"Diosa del Viento",desc:"Forma divina desbloqueada.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Viento: incrementa velocidad y poder aéreo.",
            corrupcion:"Corrupción Huracanada: fuerza inestable destructiva.",
            supreme:"Avatar Supremo del Espíritu del Viento."
        }
    },
    blackleomon:{
        id:"blackleomon",
        name:"BlackLeomon",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"🦁 Emperador de la Bestia Abisal 🦁",
        title:null,
        family:"oscuro",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","ardiente","orgulloso","tramposo","parca"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"BlackLeomon",img:"img/blackleomon.png",base:{power:160,hp:850,speed:14}},
            {name:"Louwemon",img:"img/louwemon.png",base:{power:420,hp:2800,speed:18}},
            {name:"KaiserLeomon",img:"img/kaiserleomon.png",base:{power:620,hp:4400,speed:24}},
            {name:"AncientSphinxmon",img:"img/ancientsphinxmon.png",base:{power:900,hp:6800,speed:28}}
        ],
        stellarSkills:[
            {name:"Garra Oscura",desc:"Daño brutal.",unlock:10},
            {name:"Rugido del Abismo",desc:"Reduce ataque.",unlock:20},
            {name:"Dominio Bestial",desc:"Aumenta poder.",unlock:30},
            {name:"Sello Imperial",desc:"Parálisis.",unlock:40},
            {name:"Trono de Tinieblas",desc:"Aniquilación.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Abisal: dominio total.",
            corrupcion:"Corrupción Salvaje: furia pura.",
            supreme:"Señor absoluto de la oscuridad."
        }
    },
    shoutmon:{
        id:"shoutmon",
        name:"Shoutmon",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"🎤 Rey del Digirrock Legendario 🎤",
        title:null,
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","ardiente","estatica","ritmo","dormilon"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"Shoutmon",img:"img/shoutmon.png",base:{power:165,hp:700,speed:16}},
            {name:"Shoutmon X2",img:"img/shoutmonx2.png",base:{power:450,hp:2800,speed:20}},
            {name:"OmegaShoutmon",img:"img/omegashoutmon.png",base:{power:650,hp:4800,speed:28}},
            {name:"Shoutmon X11",img:"img/shoutmonx11.png",base:{power:900,hp:6900,speed:35}}
        ],
        stellarSkills:[
            {name:"Voz del Valor",desc:"Inspiración heroica.",unlock:10},
            {name:"Ritmo de Batalla",desc:"Sincronía de combate.",unlock:20},
            {name:"Líder Supremo",desc:"Buffs de equipo.",unlock:30},
            {name:"Canto Legendario",desc:"Habilidad épica.",unlock:40},
            {name:"Rey Digimon",desc:"Forma absoluta.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Sonoro: poder musical amplificado.",
            corrupcion:"Corrupción Resonante: energía inestable.",
            supreme:"Rey Supremo del Digirrock."
        }
    },
    agumon_data_squad:{
        id:"agumon_data_squad",
        name:"Agumon Savers",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"🔥 Puño del Dragón del Destino 🔥",
        title:null,
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["dormilon","ardiente","orgulloso","conflictivo","maquina"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"Agumon Savers",img:"img/agumonDatasquad.png",base:{power:155,hp:720,speed:12}},
            {name:"GeoGreymon",img:"img/geogreymon.png",base:{power:340,hp:2780,speed:18}},
            {name:"RizeGreymon",img:"img/rizegreymon.png",base:{power:520,hp:4700,speed:25}},
            {name:"ShineGreymon",img:"img/shinegreymon.png",base:{power:870,hp:6500,speed:32}}
        ],
        stellarSkills:[
            {name:"Puño Ardiente",desc:"Refuerza ataques cuerpo a cuerpo.",unlock:10},
            {name:"Espíritu Rebelde",desc:"Aumenta voluntad y resistencia.",unlock:20},
            {name:"Explosión Solar",desc:"Habilidad de alto impacto.",unlock:30},
            {name:"Justicia Absoluta",desc:"Potencia sagrada.",unlock:40},
            {name:"Rey del Sol",desc:"Desata el máximo poder solar.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Solar: poder explosivo.",
            corrupcion:"Corrupción Rabiosa: furia incontrolable.",
            supreme:"Rey Solar Supremo."
        }
    },
    gaomon:{
        id:"gaomon",
        name:"Gaomon",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"🥊 Campeón del Puño Bestial 🥊",
        title:null,
        family:"guapo",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","frio","codicioso","tramposo","infectado"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"Gaomon",img:"img/gaomon.png",base:{power:150,hp:800,speed:15}},
            {name:"Gaogamon",img:"img/gaogamon.png",base:{power:340,hp:2700,speed:22}},
            {name:"MachGaogamon",img:"img/machgaogamon.png",base:{power:600,hp:4600,speed:30}},
            {name:"MirageGaogamon",img:"img/miragegaogamon.png",base:{power:950,hp:6000,speed:38}}
        ],
        stellarSkills:[
            {name:"Puño Veloz",desc:"Ataques rápidos.",unlock:10},
            {name:"Combate Total",desc:"Mejora combos.",unlock:20},
            {name:"Dominio Marcial",desc:"Maestría de combate.",unlock:30},
            {name:"Espíritu del Guerrero",desc:"Refuerza el alma.",unlock:40},
            {name:"Campeón Supremo",desc:"Forma definitiva.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Marcial: fuerza extrema.",
            corrupcion:"Corrupción Bestial: agresividad pura.",
            supreme:"Campeón Supremo del Combate."
        }
    },
    lalamon:{
        id:"lalamon",
        name:"Lalamon",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"🌸 Guardiana del Jardín Sagrado 🌸",
        title:null,
        family:"amable",
        faction:"hero",
        activeFactionPower:false,
        attributes:["naturalista","pureza","encanto","invencible","orgulloso"],    
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"Lalamon",img:"img/lalamon.png",base:{power:140,hp:740,speed:12}},
            {name:"Sunflowmon",img:"img/sunflowmon.png",base:{power:320,hp:2800,speed:16}},
            {name:"Lilamon",img:"img/lilamon.png",base:{power:580,hp:4800,speed:24}},
            {name:"Rosemon Burst Mode",img:"img/rosemonBurstmode.png",base:{power:920,hp:6600,speed:30}}
        ],
        stellarSkills:[
            {name:"Brote Vital",desc:"Energía curativa.",unlock:10},
            {name:"Fotosíntesis",desc:"Regeneración pasiva.",unlock:20},
            {name:"Látigo Floral",desc:"Control vegetal.",unlock:30},
            {name:"Flor Celestial",desc:"Aura sagrada.",unlock:40},
            {name:"Reina Botánica",desc:"Forma suprema vegetal.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Natural: armonía pura.",
            corrupcion:"Corrupción Espinosa: naturaleza salvaje.",
            supreme:"Reina Suprema del Jardín Sagrado."
        }
    },
    falcomon:{
        id:"falcomon",
        name:"Falcomon",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"🦅 Señor del Cielo Escarlata 🦅",
        title:null,
        family:"escurridizo",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","nomuerto","dormilon","parca","manada"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"Falcomon",img:"img/falcomon.png",base:{power:145,hp:780,speed:18}},
            {name:"Peckmon",img:"img/peckmon.png",base:{power:330,hp:2700,speed:26}},
            {name:"Yatagaramon",img:"img/yatagaramon.png",base:{power:600,hp:4600,speed:32}},
            {name:"Ravemon",img:"img/ravemon.png",base:{power:960,hp:6100,speed:40}}
        ],
        stellarSkills:[
            {name:"Picado Rápido",desc:"Ataques aéreos veloces.",unlock:10},
            {name:"Corte del Viento",desc:"Daño cortante.",unlock:20},
            {name:"Vuelo Supremo",desc:"Dominio aéreo.",unlock:30},
            {name:"Sombra del Cielo",desc:"Sigilo total.",unlock:40},
            {name:"Señor Celestial",desc:"Forma definitiva.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Cielo: velocidad extrema.",
            corrupcion:"Corrupción Alada: furia aérea.",
            supreme:"Señor Supremo del Firmamento."
        }
    },
    tailmon_x:{
        id:"tailmon_x",
        name:"Tailmon X",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"👼 Heredera del Juicio Divino X 👼",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","encanto","orgulloso","infectado","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Tailmon X", img:"img/tailmonx.png", base:{ power:195, hp:850, speed:25 }},
            { name:"Nefertimon X", img:"img/nefertimonx.png", base:{ power:330, hp:2400, speed:35 }},
            { name:"Angewomon X", img:"img/angewomonx.png", base:{ power:520, hp:4800, speed:45 }},
            { name:"Ophanimon X", img:"img/ophanimonx.png", base:{ power:920, hp:6900, speed:55 }}
        ],
        stellarSkills:[
            { name:"Luz Celestial X", desc:"Refuerza la energía sagrada.", unlock:10 },
            { name:"Fe Absoluta", desc:"Mejora la resistencia divina.", unlock:20 },
            { name:"Gracia Suprema", desc:"Potencia habilidades angelicales.", unlock:30 },
            { name:"Juicio Divino", desc:"Desata el poder celestial.", unlock:40 },
            { name:"Trono de la Creación", desc:"Despierta su máximo linaje.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Celestial: incrementa velocidad, curación y evasión.",
            corrupcion:"Corrupción Sacra: convierte la luz en castigo devastador.",
            supreme:"Manifestación total del juicio divino absoluto."
        }
    },
    agumon_x:{
        id:"agumon_x",
        name:"Agumon X",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🔥 Heredero del Dragón Primordial X 🔥",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["maquina","ardiente","infectado","gigante","simpatico"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Agumon X", img:"img/agumonx.png", base:{ power:190, hp:820, speed:18 }},
            { name:"Greymon X", img:"img/greymonx.png", base:{ power:300, hp:2200, speed:22 }},
            { name:"MetalGreymon X", img:"img/metalgreymonx.png", base:{ power:620, hp:4600, speed:28 }},
            { name:"WarGreymon X", img:"img/wargreymonx.png", base:{ power:950, hp:7000, speed:38 }}
        ],
        stellarSkills:[
            { name:"Llama X", desc:"Potencia ataques de fuego.", unlock:10 },
            { name:"Voluntad Dracónica", desc:"Refuerza el espíritu de combate.", unlock:20 },
            { name:"Armadura Ígnea", desc:"Reduce el daño recibido.", unlock:30 },
            { name:"Rugido Supremo", desc:"Libera energía ancestral.", unlock:40 },
            { name:"Dragón del Origen", desc:"Despierta su forma máxima.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Ígneo: incrementa poder y velocidad dracónica.",
            corrupcion:"Corrupción Dracónica: sacrifica control por brutalidad extrema.",
            supreme:"Forma definitiva del linaje dragón primordial."
        }
    },
    gabumon_x:{
        id:"gabumon_x",
        name:"Gabumon X",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"❄️ Lobo del Hielo Ancestral X ❄️",
        family:"misterioso",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","frio","orgulloso","maquina","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },  
        evolutions:[
            { name:"Gabumon X", img:"img/gabumonx.png", base:{ power:185, hp:850, speed:22 }},
            { name:"Garurumon X", img:"img/garurumonx.png", base:{ power:390, hp:2250, speed:30 }},
            { name:"WereGarurumon X", img:"img/weregarurumonx.png", base:{ power:620, hp:4600, speed:36 }},
            { name:"MetalGarurumon X", img:"img/metalGarurumonx.png", base:{ power:940, hp:7100, speed:45 }}
        ],
        stellarSkills:[
            { name:"Colmillos Helados", desc:"Potencia ataques de hielo.", unlock:10 },
            { name:"Instinto Salvaje", desc:"Incrementa la evasión.", unlock:20 },
            { name:"Furia Invernal", desc:"Mejora la velocidad.", unlock:30 },
            { name:"Aullido Glacial", desc:"Debilita enemigos.", unlock:40 },
            { name:"Lobo del Apocalipsis", desc:"Desata su poder supremo.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Glacial: incrementa velocidad, evasión y control.",
            corrupcion:"Corrupción Invernal: congela todo a su paso.",
            supreme:"Encarnación absoluta del frío primigenio."
        }
    },
    guilmon_x:{
        id:"guilmon_x",
        name:"Guilmon X",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🩸 Dragón del Caos Perfecto X 🩸",
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["estatica","ardiente","ritmo","gigante","infectado"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Guilmon X", img:"img/guilmonx.png", base:{ power:200, hp:800, speed:18 }},
            { name:"Growlmon X", img:"img/growmonX.png", base:{ power:440, hp:2350, speed:24 }},
            { name:"WarGrowlmon X", img:"img/wargrowmonX.png", base:{ power:680, hp:4800, speed:30 }},
            { name:"Gallantmon X", img:"img/gallantmonx.png", base:{ power:900, hp:6800, speed:40 }}
        ],
        stellarSkills:[
            { name:"Garras del Caos", desc:"Potencia ataques oscuros.", unlock:10 },
            { name:"Núcleo Corrupto", desc:"Incrementa el daño bruto.", unlock:20 },
            { name:"Armadura Demoníaca", desc:"Refuerza defensa.", unlock:30 },
            { name:"Energía Abismal", desc:"Desata su poder interior.", unlock:40 },
            { name:"Emperador del Caos", desc:"Despierta su linaje máximo.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Carmesí: incrementa poder y absorción.",
            corrupcion:"Corrupción Demoníaca: transforma su energía en destrucción absoluta.",
            supreme:"Forma final del caos digital."
        }
    },
    biyomon_x:{
        id:"biyomon_x",
        name:"Biyomon X",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🔥 Ave del Fénix Carmesí X 🔥",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["nomuerto","ardiente","orgulloso","simpatico","infectado"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Biyomon X", img:"img/biyomonx.png", base:{ power:185, hp:820, speed:20 }},
            { name:"Birdramon X", img:"img/birdramonx.png", base:{ power:300, hp:3200, speed:28 }},
            { name:"Garudamon X", img:"img/garudamonx.png", base:{ power:620, hp:5600, speed:36 }},
            { name:"Phoenixmon X", img:"img/phoenixmonX.png", base:{ power:960, hp:7400, speed:45 }}
        ],
        stellarSkills:[
            { name:"Plumas Ígneas", desc:"Potencia ataques de fuego.", unlock:10 },
            { name:"Vuelo Carmesí", desc:"Aumenta velocidad aérea.", unlock:20 },
            { name:"Resurgir", desc:"Refuerza resistencia vital.", unlock:30 },
            { name:"Llamas Eternas", desc:"Libera fuego ancestral.", unlock:40 },
            { name:"Renacer Divino", desc:"Despierta su poder supremo.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Ígneo: incrementa velocidad y regeneración.",
            corrupcion:"Corrupción Solar: convierte su fuego en destrucción masiva.",
            supreme:"Renacimiento absoluto del fénix digital."
        }
    }, 
    veemon_x:{
        id:"veemon_x",
        name:"Veemon X",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"💎 Dragón Imperial Supremo X 💎",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        attributes:["maquina","ardiente","codicioso","invencible","divino"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Veemon X", img:"img/veemonx.png", base:{ power:195, hp:860, speed:22 }},
            { name:"ExVeemon X", img:"img/exveemonx.png", base:{ power:320, hp:2700, speed:28 }},
            { name:"Flamedramon X", img:"img/flamedramonx.png", base:{ power:520, hp:5600, speed:34 }},
            { name:"Imperialdramon X", img:"img/imperialdramonx.png", base:{ power:920, hp:7600, speed:42 }}
        ],
        stellarSkills:[
            { name:"Núcleo Imperial", desc:"Refuerza poder absoluto.", unlock:10 },
            { name:"Escudo Azul", desc:"Mejora la defensa.", unlock:20 },
            { name:"Ala Dracónica", desc:"Incrementa velocidad aérea.", unlock:30 },
            { name:"Rugido Real", desc:"Potencia aura dominante.", unlock:40 },
            { name:"Emperador Supremo", desc:"Despierta su forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Imperial: incrementa poder, defensa y velocidad.",
            corrupcion:"Corrupción Dracónica: libera energía devastadora.",
            supreme:"Forma absoluta del dragón imperial."
        }
    },
    terriermon_x:{
        id:"terriermon_x",
        name:"Terriermon X",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🍃 Guardián del Viento Sagrado X 🍃",
        family:"amable",
        faction:"hero",
        activeFactionPower:false,
        attributes:["infectado","maquina","gigante","parca","conflictivo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Terriermon X", img:"img/terriermonx.png", base:{ power:175, hp:880, speed:22 }},
            { name:"Gargomon X", img:"img/gargomonx.png", base:{ power:300, hp:3100, speed:28 }},
            { name:"Rapidmon X", img:"img/rapidmonx.png", base:{ power:620, hp:5600, speed:38 }},
            { name:"MegaGargomon X", img:"img/megagargomonX.png", base:{ power:920, hp:7200, speed:40 }}
        ],
        stellarSkills:[
            { name:"Viento Curativo", desc:"Refuerza regeneración.", unlock:10 },
            { name:"Brisa Vital", desc:"Incrementa velocidad.", unlock:20 },
            { name:"Escudo Natural", desc:"Reduce daño recibido.", unlock:30 },
            { name:"Ráfaga Divina", desc:"Potencia ataques aéreos.", unlock:40 },
            { name:"Protector Supremo", desc:"Despierta su poder máximo.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Natural: incrementa regeneración y evasión.",
            corrupcion:"Corrupción Salvaje: desata su instinto bestial.",
            supreme:"Manifestación total del guardián sagrado."
        }
    },
    renamon_x:{
        id:"renamon_x",
        name:"Renamon X",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌙 Guardiana Lunar Suprema X 🌙",
        family:"misterioso",
        faction:"hero",
        activeFactionPower:false,
        attributes:["pureza","gigante","orgulloso","invencible","encanto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Renamon X", img:"img/renamonx.png", base:{ power:185, hp:820, speed:28 }},
            { name:"Kyubimon X", img:"img/kyubimonx.png", base:{ power:310, hp:2950, speed:34 }},
            { name:"Taomon X", img:"img/taomonx.png", base:{ power:620, hp:4600, speed:40 }},
            { name:"Sakuyamon X", img:"img/sakuyamonX.png", base:{ power:960, hp:6200, speed:48 }}
        ],
        stellarSkills:[
            { name:"Sello Lunar", desc:"Refuerza magia espiritual.", unlock:10 },
            { name:"Ilusión Mística", desc:"Mejora evasión.", unlock:20 },
            { name:"Barrera Sagrada", desc:"Reduce daño.", unlock:30 },
            { name:"Ritual Supremo", desc:"Potencia habilidades arcanas.", unlock:40 },
            { name:"Reina Celestial", desc:"Despierta su máximo poder.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Lunar: incrementa magia, evasión y velocidad.",
            corrupcion:"Corrupción Oscura: invoca poder espiritual prohibido.",
            supreme:"Encarnación suprema del equilibrio místico."
        }
    },
    gomamon_x:{
        id:"gomamon_x",
        name:"Gomamon X",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌊 Emperador del Océano Glacial X 🌊",
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","conflictivo","ritmo","dormilon","infectado"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Gomamon X", img:"img/gomamonx.png", base:{ power:180, hp:880, speed:18 }},
            { name:"Ikkakumon X", img:"img/ikkakumonx.png", base:{ power:310, hp:3400, speed:22 }},
            { name:"Zudomon X", img:"img/zudomonx.png", base:{ power:620, hp:5800, speed:26 }},
            { name:"Vikemon X", img:"img/vikemonx.png", base:{ power:960, hp:7600, speed:30 }}
        ],
        stellarSkills:[
            { name:"Marea Helada", desc:"Potencia ataques de hielo.", unlock:10 },
            { name:"Coraza Marina", desc:"Refuerza defensa.", unlock:20 },
            { name:"Oleaje Salvaje", desc:"Incrementa daño acuático.", unlock:30 },
            { name:"Tempestad Polar", desc:"Libera tormentas glaciales.", unlock:40 },
            { name:"Rey del Ártico", desc:"Despierta su poder supremo.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Glacial: incrementa defensa y regeneración.",
            corrupcion:"Corrupción Abisal: desata la furia oceánica.",
            supreme:"Dominio absoluto del océano eterno."
        }
    },
    biyomon:{
        id:"biyomon",
        name:"Biyomon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🔥 Ave Sagrada del Renacer 🔥",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["gigante","ardiente","orgulloso","simpatico","manada"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Biyomon", img:"img/biyomon.png", base:{ power:145, hp:760, speed:14 }},
            { name:"Birdramon", img:"img/birdramon.png", base:{ power:390, hp:2950, speed:20 }},
            { name:"Garudamon", img:"img/garudamon.png", base:{ power:620, hp:4500, speed:30 }},
            { name:"Phoenixmon", img:"img/phoenixmon.png", base:{ power:960, hp:6200, speed:38 }}
        ],
        stellarSkills:[
            { name:"Plumas Ardientes", desc:"Potencia ataques de fuego.", unlock:10 },
            { name:"Vuelo Ígneo", desc:"Aumenta velocidad.", unlock:20 },
            { name:"Renacer", desc:"Refuerza vitalidad.", unlock:30 },
            { name:"Tormenta Solar", desc:"Libera fuego masivo.", unlock:40 },
            { name:"Fénix Eterno", desc:"Despierta su forma máxima.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Ígneo: incrementa velocidad y regeneración.",
            corrupcion:"Corrupción Solar: fuego devastador.",
            supreme:"Renacer absoluto del fénix sagrado."
        }
    },
    seadramon:{
        id:"seadramon",
        name:"Seadramon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌊 Serpiente Abisal del Océano 🌊",
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["frio","maquina","gigante","estatica","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Betamon", img:"img/betamon.png", base:{ power:145, hp:780, speed:10 }},
            { name:"Seadramon", img:"img/seadramon.png", base:{ power:380, hp:3000, speed:16 }},
            { name:"MegaSeadramon", img:"img/megaseadramon.png", base:{ power:520, hp:5400, speed:22 }},
            { name:"MetalSeadramon", img:"img/metalseadramon.png", base:{ power:920, hp:6600, speed:28 }}
        ],
        stellarSkills:[
            { name:"Oleaje", desc:"Potencia ataques acuáticos.", unlock:10 },
            { name:"Coraza Marina", desc:"Incrementa defensa.", unlock:20 },
            { name:"Corriente Rápida", desc:"Aumenta velocidad.", unlock:30 },
            { name:"Maremoto", desc:"Ataque masivo de agua.", unlock:40 },
            { name:"Rey Abisal", desc:"Despierta su máximo poder.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Marino: incrementa defensa y regeneración.",
            corrupcion:"Corrupción Abisal: libera la furia oceánica.",
            supreme:"Dominio total del océano eterno."
        }
    },
    candmon:{
        id:"candmon",
        name:"Candmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🎭 Bufón del Terror Absoluto 🎭",
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["rabia","conflictivo","orgulloso","codicioso","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Candmon", img:"img/candmon.png", base:{ power:148, hp:790, speed:14 }},
            { name:"Jokermon", img:"img/jokermon.png", base:{ power:450, hp:4900, speed:22 }},
            { name:"Piemon", img:"img/piemon.png", base:{ power:950, hp:6500, speed:35 }}
        ],
        stellarSkills:[
            { name:"Risa Macabra", desc:"Debilita al enemigo.", unlock:10 },
            { name:"Ilusión Mortal", desc:"Aumenta evasión.", unlock:20 },
            { name:"Corte Oscuro", desc:"Potencia ataques letales.", unlock:30 },
            { name:"Pesadilla", desc:"Reduce stats enemigos.", unlock:40 },
            { name:"Señor del Terror", desc:"Despierta su forma final.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Caótico: incrementa evasión y daño.",
            corrupcion:"Corrupción Demoníaca: libera locura destructiva.",
            supreme:"Manifestación absoluta del terror digital."
        }
    },
    tyranomon:{
        id:"tyranomon",
        name:"Tyranomon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🦖 Rey Tirano de la Era Digital 🦖",
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["maquina","ardiente","gigante","nomuerto","parca"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Tyranomon", img:"img/tyranomon.png", base:{ power:130, hp:1000, speed:14 }},
            { name:"MetalTyranomon", img:"img/metaltyrannomon.png", base:{ power:380, hp:3600, speed:18 }},
            { name:"Mugendramon", img:"img/mugendramon.png", base:{ power:720, hp:6800, speed:24 }}
        ],
        stellarSkills:[
            { name:"Pisotón Salvaje", desc:"Potencia daño físico.", unlock:10 },
            { name:"Rugido Intimidante", desc:"Reduce defensa enemiga.", unlock:20 },
            { name:"Coraza Metálica", desc:"Incrementa defensa.", unlock:30 },
            { name:"Furia Ancestral", desc:"Incrementa poder brutal.", unlock:40 },
            { name:"Tirano Supremo", desc:"Despierta su forma máxima.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Primal: incrementa fuerza y resistencia.",
            corrupcion:"Corrupción Salvaje: convierte su rabia en destrucción.",
            supreme:"Dominio absoluto de la era digital."
        }
    },
    mushmon:{
        id:"mushmon",
        name:"Mushmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🍄 Profeta del Veneno Eterno 🍄",
        family:"oscuro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["invencible","estatica","orgulloso","conflictivo","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Mushmon", img:"img/mushmon.png", base:{ power:140, hp:1000, speed:12 }},
            { name:"Woodmon", img:"img/woodmon.png", base:{ power:380, hp:3100, speed:16 }},
            { name:"Jyureimon", img:"img/jyureimon.png", base:{ power:560, hp:4400, speed:20 }},
            { name:"Pinochimon", img:"img/pinochimon.png", base:{ power:950, hp:6400, speed:28 }}
        ],
        stellarSkills:[
            { name:"Esporas Tóxicas", desc:"Daño venenoso.", unlock:10 },
            { name:"Raíces Enredantes", desc:"Reduce movilidad enemiga.", unlock:20 },
            { name:"Bosque Maldito", desc:"Incrementa control.", unlock:30 },
            { name:"Putrefacción", desc:"Debilita progresivamente.", unlock:40 },
            { name:"Señor Fúngico", desc:"Desata su máximo poder.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Tóxico: incrementa daño por veneno.",
            corrupcion:"Corrupción Putrefacta: transforma su cuerpo en plaga.",
            supreme:"Encarnación absoluta del veneno."
        }
    },
    lucemon:{
        id:"lucemon",
        name:"Lucemon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"😇 Ángel Caído del Apocalipsis 😇",
        family:"legendario",
        faction:"villain",
        activeFactionPower:false,
        attributes:["rabia","frio","orgulloso","codicioso","parca"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Lucemon", img:"img/lucemon.png", base:{ power:180, hp:1000, speed:25 }},
            { name:"Lucemon FM", img:"img/lucemonFm.png", base:{ power:580, hp:4600, speed:32 }},
            { name:"Lucemon SM", img:"img/lucemonSm.png", base:{ power:1100, hp:8000, speed:40 }}
        ],
        stellarSkills:[
            { name:"Luz Profana", desc:"Ataques sagrados oscuros.", unlock:10 },
            { name:"Juicio Final", desc:"Daño masivo.", unlock:20 },
            { name:"Aura Apocalíptica", desc:"Debilita enemigos.", unlock:30 },
            { name:"Dominio Divino", desc:"Control total.", unlock:40 },
            { name:"Dios del Caos", desc:"Desata su forma absoluta.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Celestial: incrementa magia y regeneración.",
            corrupcion:"Corrupción Divina: libera caos absoluto.",
            supreme:"Manifestación total del apocalipsis."
        }
    },
    black_tailmon:{
        id:"black_tailmon",
        name:"Black Tailmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🖤 Reina Demoníaca de la Tentación 🖤",
        family:"malvado",
        faction:"villain",
        activeFactionPower:false,
        attributes:["tramposo","encanto","orgulloso","parca","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Black Tailmon", img:"img/blacktailmon.png", base:{ power:170, hp:980, speed:22 }},
            { name:"LadyDevimon", img:"img/ladydevimon.png", base:{ power:560, hp:4600, speed:30 }},
            { name:"Lilithmon", img:"img/lilithmon.png", base:{ power:1000, hp:7900, speed:38 }}
        ],
        stellarSkills:[
            { name:"Sed de Sangre", desc:"Potencia daño oscuro.", unlock:10 },
            { name:"Encanto Mortal", desc:"Reduce defensa enemiga.", unlock:20 },
            { name:"Placer Maldito", desc:"Roba vida.", unlock:30 },
            { name:"Dominio Infernal", desc:"Incrementa poder.", unlock:40 },
            { name:"Reina del Inframundo", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Demoníaco: incrementa robo de vida.",
            corrupcion:"Corrupción Infernal: libera energía oscura.",
            supreme:"Soberanía absoluta del inframundo."
        }
    },
    phascomon:{
        id:"phascomon",
        name:"Phascomon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐐 Pastor del Abismo Oscuro 🐐",
        family:"oscuro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["rabia","parca","orgulloso","invencible","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Phascomon", img:"img/phascomon.png", base:{ power:160, hp:1020, speed:16 }},
            { name:"Porcupamon", img:"img/porcupamon.png", base:{ power:420, hp:3400, speed:22 }},
            { name:"Astamon", img:"img/astamon.png", base:{ power:660, hp:5100, speed:24 }},
            { name:"Belphemon", img:"img/belphemon.png", base:{ power:990, hp:7000, speed:25 }}
        ],
        stellarSkills:[
            { name:"Somnolencia", desc:"Reduce velocidad enemiga.", unlock:10 },
            { name:"Pereza Mortal", desc:"Debilita ataques.", unlock:20 },
            { name:"Aura Letárgica", desc:"Control de combate.", unlock:30 },
            { name:"Castigo Demoníaco", desc:"Daño masivo.", unlock:40 },
            { name:"Señor del Pecado", desc:"Despierta su máximo poder.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Abisal: incrementa resistencia.",
            corrupcion:"Corrupción Infernal: libera pecado absoluto.",
            supreme:"Encarnación total del demonio."
        }
    },
    solarmon:{
        id:"solarmon",
        name:"Solarmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"☀ Puño Solar del Dragón Sagrado ☀",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["invencible","ardiente","ritmo","gigante","maquina"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Solarmon", img:"img/solarmon.png", base:{ power:155, hp:980, speed:14 }},
            { name:"Meramon", img:"img/meramon.png", base:{ power:390, hp:3000, speed:20 }},
            { name:"DeathMeramon", img:"img/deathmeramon.png", base:{ power:680, hp:5400, speed:26 }},
            { name:"Gankoomon", img:"img/gankoomon.png", base:{ power:920, hp:7600, speed:32 }}
        ],
        stellarSkills:[
            { name:"Llama Solar", desc:"Incrementa daño ígneo.", unlock:10 },
            { name:"Coraje Ardiente", desc:"Refuerza resistencia.", unlock:20 },
            { name:"Puño Dracónico", desc:"Potencia ataques físicos.", unlock:30 },
            { name:"Justicia Ígnea", desc:"Golpe masivo.", unlock:40 },
            { name:"Dragón Solar", desc:"Despierta su poder supremo.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Solar: incrementa poder y velocidad.",
            corrupcion:"Corrupción Ígnea: fuego caótico.",
            supreme:"Encarnación total del dragón solar."
        }
    },
    huckmon:{
        id:"huckmon",
        name:"Huckmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"⚔️ Caballero del Dragón Sagrado ⚔️",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["invencible","gigante","orgulloso","naturalista","pureza"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Huckmon", img:"img/huckmon.png", base:{ power:155, hp:1080, speed:14 }},
            { name:"BaoHuckmon", img:"img/baohuckmon.png", base:{ power:350, hp:3900, xspeed:18 }},
            { name:"SaviorHuckmon", img:"img/saviorhuckmon.png", base:{ power:620, hp:6400, speed:24 }},
            { name:"Jesmon", img:"img/jesmon.png", base:{ power:1050, hp:8000, speed:32 }}
        ],
        stellarSkills:[
            { name:"Espada Justa", desc:"Potencia ataques sagrados.", unlock:10 },
            { name:"Escudo Real", desc:"Reduce daño recibido.", unlock:20 },
            { name:"Valor Absoluto", desc:"Incrementa poder.", unlock:30 },
            { name:"Lanza Divina", desc:"Golpe penetrante.",    unlock:40 },
            { name:"Caballero Supremo", desc:"Despierta su forma máxima.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Sagrado: incrementa poder y defensa.",
            corrupcion:"Corrupción Carmesí: transforma su justicia en furia.",
            supreme:"Dominio total del dragón real."
        }
    },
    dorumon:{
        id:"dorumon",
        name:"Dorumon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"👑 Emperador del Código Digital 👑",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        attributes:["infectado","maquina","divino","gigante","orgulloso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Dorumon", img:"img/dorumon.png", base:{ power:150, hp:850, speed:15 }},
            { name:"Dorugamon", img:"img/dorugamon.png", base:{ power:360, hp:3100, speed:22 }},
            { name:"Doruguremon", img:"img/doruguremon.png", base:{ power:650, hp:5600, speed:26 }},
            { name:"Alphamon", img:"img/alphamon.png", base:{ power:1050, hp:8000, speed:35 }}
        ],
        stellarSkills:[
            { name:"Código Alfa", desc:"Potencia ataques sagrados.", unlock:10 },
            { name:"Orden Digital", desc:"Incrementa control.", unlock:20 },
            { name:"Espada Omega", desc:"Daño masivo.", unlock:30 },
            { name:"Juicio Real", desc:"Reduce stats enemigos.", unlock:40 },
            { name:"Rey Supremo", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Real: incrementa todos los atributos.",
            corrupcion:"Corrupción Omega: libera poder prohibido.",
            supreme:"Dominio absoluto del Digimundo."
        }
    },
    elecmon:{
        id:"elecmon",
        name:"Elecmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🦁 Caballero del Viento Dorado 🦁",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["gigante","ardiente","invencible","codicioso","divino"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Elecmon", img:"img/elecmon.png", base:{ power:148, hp:740, speed:14 }},
            { name:"Leomon", img:"img/leomon.png", base:{ power:470, hp:3200, speed:20 }},
            { name:"Panjyamon", img:"img/panjyamon.png", base:{ power:750, hp:5100, speed:26 }},
            { name:"Duftmon", img:"img/duftmon.png", base:{ power:1060, hp:7600, speed:34 }}
        ],
        stellarSkills:[
            { name:"Rugido Noble", desc:"Incrementa ataque aliado.", unlock:10 },
            { name:"Garra Dorada", desc:"Potencia ataques físicos.", unlock:20 },
            { name:"Coraje Real", desc:"Reduce daño recibido.", unlock:30 },
            { name:"Corte Celestial", desc:"Golpe devastador.", unlock:40 },
            { name:"Caballero Sagrado", desc:"Despierta su máximo poder.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Noble: incrementa poder y defensa.",
            corrupcion:"Corrupción Salvaje: libera ferocidad.",
            supreme:"Encarnación del honor absoluto."
        }
    },
    kudamon:{
        id:"kudamon",
        name:"Kudamon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐎 Guardián del Cielo Celestial 🐎",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        attributes:["manada","tramposo","orgulloso","ritmo","naturalista"],    
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Kudamon", img:"img/kudamon.png", base:{ power:152, hp:760, speed:15 }},
            { name:"Reppamon", img:"img/reppamon.png", base:{ power:360, hp:2950, speed:22 }},
            { name:"Chirinmon", img:"img/chirinmon.png", base:{ power:640, hp:5500, speed:28 }},
            { name:"Sleipmon", img:"img/sleipmon.png", base:{ power:1020, hp:7600, speed:36 }}
        ],
        stellarSkills:[
            { name:"Bendición Celeste", desc:"Incrementa regeneración.", unlock:10 },
            { name:"Carga Sagrada", desc:"Ataque devastador.", unlock:20 },
            { name:"Protección Divina", desc:"Reduce daño.", unlock:30 },
            { name:"Justicia Celestial", desc:"Daño masivo.", unlock:40 },
            { name:"Guardián Supremo", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Celestial: incrementa defensa y curación.",
            corrupcion:"Corrupción Sagrada: justicia extrema.",
            supreme:"Manifestación del juicio divino."
        }
    },
    veedramon:{
        id:"veedramon",
        name:"Veedramon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"💨 Dragón del Viento Absoluto 💨",
        family:"escurridizo",
        faction:"hero",
        activeFactionPower:false,
        attributes:["invencible","pureza","gigante","dormilon","nomuerto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Veedramon", img:"img/veedramon.png", base:{ power:265, hp:1180, speed:22 }},
            { name:"AeroVeedramon", img:"img/aeroveedramon.png", base:{ power:620, hp:4700, speed:30 }},
            { name:"UlforceVeedramon", img:"img/ulforceveedramon.png", base:{ power:1080, hp:7900, speed:45 }}
        ],
        stellarSkills:[
            { name:"Velocidad Extrema", desc:"Incrementa evasión.", unlock:10 },
            { name:"Ataque Relámpago", desc:"Golpes rápidos.", unlock:20 },
            { name:"Viento Cortante", desc:"Daño en área.", unlock:30 },
            { name:"Ráfaga Final", desc:"Ataque masivo.", unlock:40 },
            { name:"Dragón Supersónico", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Aéreo: incrementa velocidad y crítico.",
            corrupcion:"Corrupción Huracanada: desata caos aéreo.",
            supreme:"Dominio absoluto del viento."
        }
    },
    hagurumon:{
        id:"hagurumon",
        name:"Hagurumon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🛡️ Bastión del Acero Eterno 🛡️",
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["maquina","ardiente","nomuerto","tramposo","estatica"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Hagurumon", img:"img/hagurumon.png", base:{ power:145, hp:820, speed:10 }},
            { name:"Guardromon", img:"img/guardromon.png", base:{ power:460, hp:3300, speed:12 }},
            { name:"Andromon", img:"img/andromon.png", base:{ power:750, hp:5800, speed:18 }},
            { name:"Craniamon", img:"img/craniamon.png", base:{ power:1020, hp:7600, speed:22 }}
        ],
        stellarSkills:[
            { name:"Blindaje Total", desc:"Incrementa defensa.", unlock:10 },
            { name:"Cañón Pesado", desc:"Daño mecánico masivo.", unlock:20 },
            { name:"Fortaleza Móvil", desc:"Reduce daño recibido.", unlock:30 },
            { name:"Contraataque Automático", desc:"Refleja daño.", unlock:40 },
            { name:"Muralla Absoluta", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Metálico: incrementa defensa y hp.",
            corrupcion:"Corrupción Bélica: modo exterminio.",
            supreme:"Defensor supremo del Digimundo."
        }   
    },
    kotemon:{
        id:"kotemon",
        name:"Kotemon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"⚔️ Espadachín del Honor Sagrado ⚔️",
        family:"guapo",
        faction:"hero",
        activeFactionPower:false,
        attributes:["ritmo","frio","perfecto","divino","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Kotemon", img:"img/kotemon.png", base:{ power:150, hp:760, speed:15 }},
            { name:"Gladimon", img:"img/gladimon.png", base:{ power:460, hp:3200, speed:20 }},
            { name:"Knightmon", img:"img/knightmon.png", base:{ power:740, hp:5600, speed:25 }},
            { name:"LordKnightmon", img:"img/lordknightmon.png", base:{ power:1100, hp:7900, speed:32 }}
        ],
        stellarSkills:[
            { name:"Filo Honorable", desc:"Incrementa daño crítico.", unlock:10 },
            { name:"Defensa Noble", desc:"Reduce daño recibido.", unlock:20 },
            { name:"Carga Caballeresca", desc:"Ataque potente.", unlock:30 },
            { name:"Espada Divina", desc:"Daño sagrado.", unlock:40 },
            { name:"Caballero Supremo", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Noble: incrementa poder y defensa.",
            corrupcion:"Corrupción Carmesí: furia desatada.",
            supreme:"Dominio absoluto de la espada."
        }
    },
    coronamon:{
        id:"coronamon",
        name:"Coronamon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"☀️ Avatar del Sol Ardiente ☀️",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["invencible","ardiente","orgulloso","divino","manada"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Coronamon", img:"img/coronamon.png", base:{ power:195, hp:980, speed:16 }},
            { name:"Firamon", img:"img/firamon.png", base:{ power:470, hp:3200, speed:20 }},
            { name:"Flaremon", img:"img/flaremon.png", base:{ power:750, hp:5600, speed:25 }},
            { name:"Apollomon", img:"img/apollomon.png", base:{ power:1100, hp:7800, speed:34 }}
        ],
        stellarSkills:[
            { name:"Fuego Solar", desc:"Incrementa daño ígneo.", unlock:10 },
            { name:"Explosión Radiante", desc:"Daño en área.", unlock:20 },
            { name:"Aura Solar", desc:"Incrementa poder aliado.", unlock:30 },
            { name:"Nova Ígnea", desc:"Ataque devastador.", unlock:40 },
            { name:"Dios Solar", desc:"Forma suprema.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Solar: incrementa ataque y crítico.",
            corrupcion:"Corrupción Ígnea: fuego caótico.",
            supreme:"Encarnación del sol eterno."
        }
    },
    lunamon:{
        id:"lunamon",
        name:"Lunamon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌙 Emperatriz de la Luna Plateada 🌙",
        family:"oscuro",
        faction:"hero",
        activeFactionPower:false,
        attributes:["encanto","codicioso","orgulloso","simpatico","ritmo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Lunamon", img:"img/lunamon.png", base:{ power:152, hp:960, speed:17 }},
            { name:"Lekismon", img:"img/lekismon.png", base:{ power:460, hp:3200, speed:22 }},
            { name:"Crescemon", img:"img/crescemon.png", base:{ power:740, hp:5500, speed:28 }},
            { name:"Dianamon", img:"img/dianamon.png", base:{ power:1080, hp:7600, speed:36 }}
        ],
        stellarSkills:[
            { name:"Luz Lunar", desc:"Incrementa evasión.", unlock:10 },
            { name:"Danza Plateada", desc:"Velocidad extrema.", unlock:20 },
            { name:"Corte Lunar", desc:"Daño preciso.", unlock:30 },
            { name:"Luna Final", desc:"Daño masivo.", unlock:40 },
            { name:"Diosa Lunar", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Lunar: incrementa velocidad y evasión.",
            corrupcion:"Corrupción Oscura: luna sangrienta.",
            supreme:"Dominio total de la noche."
        }
    },
    floramon:{
        id:"floramon",
        name:"Floramon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌿 Madre de la Vida Natural 🌿",
        family:"amable",
        faction:"hero",
        activeFactionPower:false,
        attributes:["naturalista","gigante","simpatico","tramposo","conflictivo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Floramon", img:"img/floramon.png", base:{ power:148, hp:870, speed:14 }},
            { name:"Vegimon", img:"img/vegimon.png", base:{ power:350, hp:3050, speed:18 }},
            { name:"Blossomon", img:"img/blossomon.png", base:{ power:620, hp:5900, speed:22 }},
            { name:"Ceresmon", img:"img/ceresmon.png", base:{ power:990, hp:7300, speed:30 }}
        ],
        stellarSkills:[
            { name:"Bendición Verde", desc:"Mejora regeneración.", unlock:10 },
            { name:"Espinas Gigantes", desc:"Daño continuo.", unlock:20 },
            { name:"Raíces Protectoras", desc:"Reduce daño.", unlock:30 },
            { name:"Tormenta Floral", desc:"Daño en área.", unlock:40 },
            { name:"Diosa de la Cosecha", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Natural: incrementa curación y hp.",
            corrupcion:"Corrupción Tóxica: veneno devastador.",
            supreme:"Manifestación suprema de la naturaleza."
        }
    },
    shakomon:{
        id:"shakomon",
        name:"Shakomon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌊 Emperador del Océano Eterno 🌊",
        family:"misterioso",
        faction:"hero",
        activeFactionPower:false,
        attributes:["nomuerto","frio","codicioso","infectado","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Shakomon", img:"img/shakomon.png", base:{ power:145, hp:880, speed:13 }},
            { name:"Ebidramon", img:"img/ebidramon.png", base:{ power:360, hp:3200, speed:17 }},
            { name:"Whamon", img:"img/whamon.png", base:{ power:650, hp:5000, speed:16 }},
            { name:"Neptunemon", img:"img/neptunemon.png", base:{ power:1050, hp:7500, speed:24 }}
        ],
        stellarSkills:[
            { name:"Marea Viva", desc:"Regeneración continua.", unlock:10 },
            { name:"Impacto Abisal", desc:"Daño de profundidad.", unlock:20 },
            { name:"Torbellino Marino", desc:"Daño en área.", unlock:30 },
            { name:"Bendición Oceánica", desc:"Reduce daño recibido.", unlock:40 },
            { name:"Señor del Abismo", desc:"Forma suprema.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Oceánico: incrementa hp y regeneración.",
            corrupcion:"Corrupción Abisal: mareas destructivas.",
            supreme:"Dominio absoluto del océano."
        }
    },
    cutemon:{
        id:"cutemon",
        name:"Cutemon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🎭 Portador del Caos Divino 🎭",
        family:"misterioso",
        faction:"hero",
        activeFactionPower:false,
        attributes:["encanto","gigante","invencible","naturalista","pureza"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Cutemon", img:"img/cutemon.png", base:{ power:120, hp:740, speed:18 }},
            { name:"Unimon", img:"img/unimon.png", base:{ power:450, hp:3100, speed:22 }},
            { name:"Piximon", img:"img/piximon.png", base:{ power:730, hp:5200, speed:28 }},
            { name:"Bacchusmon", img:"img/bacchusmon.png", base:{ power:1080, hp:8000, speed:32 }}
        ],
        stellarSkills:[
            { name:"Travesura Divina", desc:"Aumenta evasión.", unlock:10 },
            { name:"Ilusión Caótica", desc:"Reduce precisión enemiga.", unlock:20 },
            { name:"Festejo Místico", desc:"Regenera aliados.", unlock:30 },
            { name:"Embriaguez Arcana", desc:"Incrementa poder temporal.", unlock:40 },
            { name:"Rey del Caos", desc:"Forma suprema.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Arcano: incrementa evasión y velocidad.",
            corrupcion:"Corrupción Ilusoria: distorsiona la realidad.",
            supreme:"Dominio absoluto del caos mágico."
        }
    },
    iguneetmon:{
        id:"iguneetmon",
        name:"Iguneetmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"⚡ Diosa del Rayo Celestial ⚡",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","ritmo","dormilon","perfecto","simpatico"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Iguneetmon", img:"img/iguneetmon.png", base:{ power:185, hp:960, speed:20 }},
            { name:"Quetzalmon", img:"img/quetzalmon.png", base:{ power:470, hp:3800, speed:28 }},
            { name:"Minervamon", img:"img/minervamon.png", base:{ power:790, hp:6600, speed:34 }},
            { name:"Mervamon", img:"img/mervamon.png", base:{ power:1090, hp:8000, speed:38 }}
        ],
        stellarSkills:[
            { name:"Descarga Celeste", desc:"Daño eléctrico masivo.", unlock:10 },
            { name:"Rayo Divino", desc:"Golpe crítico.", unlock:20 },
            { name:"Danza del Trueno", desc:"Velocidad extrema.", unlock:30 },
            { name:"Tormenta Absoluta", desc:"Daño en área.", unlock:40 },
            { name:"Diosa del Relámpago", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Celestial: incrementa velocidad y crítico.",
            corrupcion:"Corrupción Eléctrica: rayos caóticos.",
            supreme:"Control absoluto del trueno divino."
        }
    },
    goblimon:{
        id:"goblimon",
        name:"Goblimon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"👹 Señor del Terror Carmesí 👹",
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["rabia","nomuerto","orgulloso","conflictivo","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Goblimon", img:"img/goblimon.png", base:{ power:148, hp:900, speed:13 }},
            { name:"Ogremon", img:"img/ogremon.png", base:{ power:470, hp:4400, speed:18 }},
            { name:"Digitamamon", img:"img/digitamamon.png", base:{ power:650, hp:6000, speed:16 }},
            { name:"Titamon", img:"img/titamon.png", base:{ power:1090, hp:8500, speed:24 }}
        ],
        stellarSkills:[
            { name:"Furia Salvaje", desc:"Incrementa daño físico.", unlock:10 },
            { name:"Impacto Brutal", desc:"Ataque devastador.", unlock:20 },
            { name:"Corazón Demoníaco", desc:"Reduce daño.", unlock:30 },
            { name:"Dominio Oscuro", desc:"Intimida enemigos.", unlock:40 },
            { name:"Tirano Supremo", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Carmesí: incrementa poder bruto.",
            corrupcion:"Corrupción Demoníaca: furia total.",
            supreme:"Destrucción absoluta del campo de batalla."
        }
    },
    labramon:{
        id:"labramon",
        name:"Labramon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐺 Guardián del Inframundo 🐺",
        family:"oscuro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["rabia","gigante","codicioso","invencible","infectado"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Labramon", img:"img/labramon.png", base:{ power:150, hp:880, speed:17 }},
            { name:"Dobermon", img:"img/dobermon.png", base:{ power:370, hp:3000, speed:22 }},
            { name:"Cerberumon", img:"img/cerberumon.png", base:{ power:650, hp:5800, speed:26 }},
            { name:"Plutomon", img:"img/plutomon.png", base:{ power:1000, hp:7800, speed:32 }}
        ],
        stellarSkills:[
            { name:"Colmillos Abisales", desc:"Incrementa daño.", unlock:10 },
            { name:"Acecho Oscuro", desc:"Incrementa evasión.", unlock:20 },
            { name:"Aullido Infernal", desc:"Reduce defensa enemiga.", unlock:30 },
            { name:"Dominio Infernal", desc:"Control del campo.", unlock:40 },
            { name:"Señor del Inframundo", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Umbrío: incrementa velocidad y crítico.",
            corrupcion:"Corrupción Infernal: poder demoníaco.",
            supreme:"Encarnación absoluta del inframundo."
        }
    },
    maquinamon:{
        id:"maquinamon",
        name:"Maquinamon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🤖 Arconte del Juicio Mecánico 🤖",
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["maquina","estatica","simpatico","ritmo","dormilon"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Maquinamon", img:"img/maquinamon.png", base:{ power:155, hp:800, speed:9 }},
            { name:"Mulemon", img:"img/mulemon.png", base:{ power:380, hp:3600, speed:12 }},
            { name:"MockingBirdmon", img:"img/mockingbirdmon.png", base:{ power:560, hp:5800, speed:20 }},
            { name:"Metatromon", img:"img/metatromon.png", base:{ power:950, hp:7000, speed:26 }}
        ],
        stellarSkills:[
            { name:"Circuitos Perfectos", desc:"Optimiza rendimiento.", unlock:10 },
            { name:"Cañones Divinos", desc:"Disparo masivo.", unlock:20 },
            { name:"Protocolos Celestiales", desc:"Reducción de daño.", unlock:30 },
            { name:"Motor Supremo", desc:"Velocidad extrema.", unlock:40 },
            { name:"Ángel Mecánico", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Mecánico: aumenta defensa y precisión.",
            corrupcion:"Corrupción Tecnológica: protocolos bélicos extremos.",
            supreme:"Juicio divino de la máquina perfecta."
        }
    },
    blackRenamon:{
        id:"blackRenamon",
        name:"Black Renamon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🦊 Emperatriz del Yin Maldito 🦊",
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["manada","codicioso","orgulloso","divino","simpatico"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Black Renamon", img:"img/blackrenamon.png", base:{ power:152, hp:750, speed:22 }},
            { name:"Youkomon", img:"img/youkomon.png", base:{ power:370, hp:2200, speed:28 }},
            { name:"Doumon", img:"img/doumon.png", base:{ power:590, hp:4600, speed:34 }},
            { name:"Kuzuhamon", img:"img/kuzuhamon.png", base:{ power:890, hp:6300, speed:38 }}
        ],
        stellarSkills:[
            { name:"Hechizo Maldito", desc:"Debilita enemigos.", unlock:10 },
            { name:"Ilusión Oscura", desc:"Confusión mental.", unlock:20 },
            { name:"Ritual Prohibido", desc:"Incremento temporal.", unlock:30 },
            { name:"Dominio Espiritual", desc:"Control místico.", unlock:40 },
            { name:"Emperatriz del Abismo", desc:"Forma suprema.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Espiritual: incrementa evasión y magia.",
            corrupcion:"Corrupción Maldita: artes prohibidas.",
            supreme:"Encarnación absoluta del Yin corrupto."
        }
    },
    sunarizamon:{
        id:"sunarizamon",
        name:"Sunarizamon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🪨 Titán del Núcleo Planetario 🪨",
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","ardiente","gigante","manada","codicioso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Sunarizamon", img:"img/sunarizamon.png", base:{ power:160, hp:780, speed:8 }},
            { name:"Landramon", img:"img/landramon.png", base:{ power:390, hp:3700, speed:11 }},
            { name:"Proganomon", img:"img/proganomon.png", base:{ power:680, hp:5000, speed:14 }},
            { name:"Magneticdramon", img:"img/magneticdramon.png", base:{ power:980, hp:7200, speed:18 }}
        ],
        stellarSkills:[
            { name:"Piel de Roca", desc:"Gran reducción de daño.", unlock:10 },
            { name:"Impacto Tectónico", desc:"Daño masivo.", unlock:20 },
            { name:"Campo Magnético", desc:"Control del enemigo.", unlock:30 },
            { name:"Corazón del Mundo", desc:"Regeneración extrema.", unlock:40 },
            { name:"Titán Absoluto", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Terrestre: incremento masivo de hp.",
            corrupcion:"Corrupción Geomántica: fuerza devastadora.",
            supreme:"Encarnación total del núcleo planetario."
        }
    },
    psychemon:{
        id:"psychemon",
        name:"Psychemon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐺 Emisario del Viento Plateado 🐺",
        family:"escurridizo",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","frio","simpatico","divino","infectado"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Psychemon", img:"img/psychemon.png", base:{ power:130, hp:860, speed:18 }},
            { name:"Dorulumon", img:"img/dorulumon.png", base:{ power:460, hp:3300, speed:28 }},
            { name:"YaegerDorulumon", img:"img/yaegerdorulumon.png", base:{ power:750, hp:5600, speed:36 }},
            { name:"Mercurymon", img:"img/mercurymon.png", base:{ power:1020, hp:7800, speed:42 }}
        ],
        stellarSkills:[
            { name:"Corte Huracanado", desc:"Ataques veloces.", unlock:10 },
            { name:"Paso Fantasma", desc:"Evasión elevada.", unlock:20 },
            { name:"Ráfaga Plateada", desc:"Golpes múltiples.", unlock:30 },
            { name:"Dominio Aéreo", desc:"Control del campo.", unlock:40 },
            { name:"Avatar del Viento", desc:"Forma suprema.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Aéreo: incrementa velocidad y precisión.",
            corrupcion:"Corrupción Huracanada: furia imparable.",
            supreme:"Encarnación total del viento absoluto."
        }
    },
    plotmon:{
        id:"plotmon",
        name:"Plotmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐈 Guardiana del Destino Lunar 🐈",
        family:"misterioso",
        faction:"hero",
        activeFactionPower:false,
        attributes:["encanto","naturalista","ritmo","divino","perfecto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Plotmon", img:"img/plotmon.png", base:{ power:136, hp:730, speed:14 }},
            { name:"Witchmon", img:"img/witchmon.png", base:{ power:350, hp:3200, speed:18 }},
            { name:"Bastemon", img:"img/bastemon.png", base:{ power:620, hp:5500, speed:25 }},
            { name:"Junomon", img:"img/junomon.png", base:{ power:1000, hp:7200, speed:30 }}
        ],
        stellarSkills:[
            { name:"Magia Lunar", desc:"Hechizos curativos.", unlock:10 },
            { name:"Pacto Felino", desc:"Aumenta evasión.", unlock:20 },
            { name:"Danza Arcana", desc:"Incremento mágico.", unlock:30 },
            { name:"Luna Protectora", desc:"Escudos místicos.", unlock:40 },
            { name:"Reina del Firmamento", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Lunar: incrementa magia y regeneración.",
            corrupcion:"Corrupción Arcana: hechicería prohibida.",
            supreme:"Encarnación del destino celestial."
        }
    },   
    tinkermon:{
        id:"tinkermon",
        name:"Tinkermon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🧚 Emperatriz del Amor Absoluto 🧚",
        family:"amable",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divina","perfecta","ritmo","invencible","estatica"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Tinkermon", img:"img/tinkermon.png", base:{ power:148, hp:800, speed:15 }},
            { name:"Darcmon", img:"img/darcmon.png", base:{ power:460, hp:3400, speed:22 }},
            { name:"Sanzomon", img:"img/sanzomon.png", base:{ power:730, hp:5700, speed:26 }},
            { name:"Venusmon", img:"img/venusmon.png", base:{ power:1050, hp:7500, speed:32 }}
        ],
        stellarSkills:[
            { name:"Aura Encantadora", desc:"Debilita enemigos.", unlock:10 },
            { name:"Caricia Celestial", desc:"Curación intensa.", unlock:20 },
            { name:"Pacto Divino", desc:"Buff general.", unlock:30 },
            { name:"Dominio Emocional", desc:"Control total.", unlock:40 },
            { name:"Diosa del Amor", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Celestial: aumenta curación y velocidad.",
            corrupcion:"Corrupción Emocional: control mental extremo.",
            supreme:"Manifestación absoluta del amor divino."
        }
    },
    pteromon:{
        id:"pteromon",
        name:"Pteromon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🦅 Señor de los Cielos Eternos 🦅",
        family:"escurridizo",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","frio","ritmo","nomuerto","codicioso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Pteromon", img:"img/pteromon.png", base:{ power:152, hp:860, speed:18 }},
            { name:"Galemon", img:"img/galemon.png", base:{ power:465, hp:3300, speed:28 }},
            { name:"GrandGalemon", img:"img/grandgalemon.png", base:{ power:760, hp:5700, speed:35 }},
            { name:"Zephagamon", img:"img/zephagamon.png", base:{ power:980, hp:7000, speed:42 }}
        ],
        stellarSkills:[
            { name:"Corte Aéreo", desc:"Ataques rápidos.", unlock:10 },
            { name:"Viento Cortante", desc:"Golpes en área.", unlock:20 },
            { name:"Danza Celeste", desc:"Evasión extrema.", unlock:30 },
            { name:"Dominio del Firmamento", desc:"Control aéreo.", unlock:40 },
            { name:"Señor del Viento Absoluto", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Celeste: aumenta velocidad y daño aéreo.",
            corrupcion:"Corrupción Tempestuosa: tormentas devastadoras.",
            supreme:"Encarnación del huracán eterno."
        }
    },
    otamamon:{
        id:"otamamon",
        name:"Otamamon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌊 Reina del Océano Primordial 🌊",
        family:"amable",
        faction:"hero",
        activeFactionPower:false,
        attributes:["ritmo","ardiente","gigante","divino","estatica"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Otamamon", img:"img/otamamon.png", base:{ power:124, hp:720, speed:10 }},
            { name:"Ranamon", img:"img/ranamon.png", base:{ power:455, hp:3500, speed:18 }},
            { name:"Mermaimon", img:"img/mermaimon.png", base:{ power:840, hp:5900, speed:24 }},
            { name:"AncientMermaimon", img:"img/ancientmermaimon.png", base:{ power:1100, hp:8500, speed:30 }}
        ],
        stellarSkills:[
            { name:"Burbuja Vital", desc:"Regeneración constante.", unlock:10 },
            { name:"Oleada Curativa", desc:"Curación en área.", unlock:20 },
            { name:"Marea Protectora", desc:"Escudos acuáticos.", unlock:30 },
            { name:"Tormenta Marina", desc:"Ataques en masa.", unlock:40 },
            { name:"Diosa del Mar", desc:"Forma ancestral.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Marino: potencia curación y resistencia.",
            corrupcion:"Corrupción Abisal: océano de destrucción.",
            supreme:"Despertar del océano primordial."
        }
    },
    mirrormon:{
        id:"mirrormon",
        name:"Mirrormon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🪞 Sabio del Conocimiento Infinito 🪞",
        family:"misterioso",
        faction:"villain",
        activeFactionPower:false,
        attributes:["naturalista","estatica","codicioso","tramposo","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Mirrormon", img:"img/mirrormon.png", base:{ power:148, hp:880, speed:12 }},
            { name:"Mercuremon", img:"img/mercuremon.png", base:{ power:470, hp:3400, speed:20 }},
            { name:"Wisemon", img:"img/wisemon.png", base:{ power:760, hp:6700, speed:25 }},
            { name:"AncientWisemon", img:"img/ancientwisemon.png", base:{ power:1000, hp:8500, speed:30 }}
        ],
        stellarSkills:[
            { name:"Reflejo Arcano", desc:"Devuelve daño.", unlock:10 },
            { name:"Libro Prohibido", desc:"Magia oscura.", unlock:20 },
            { name:"Sabiduría Ancestral", desc:"Potencia total.", unlock:30 },
            { name:"Dominio del Conocimiento", desc:"Control absoluto.", unlock:40 },
            { name:"Dios del Saber", desc:"Forma suprema.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Saber: incrementa magia y control.",
            corrupcion:"Corrupción Prohibida: sabiduría oscura.",
            supreme:"Mente absoluta del multiverso."
        }
    },
    palmonx:{
        id:"palmonx",
        name:"Palmon X",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌸 Diosa Floral del Código X 🌸",
        family:"amable",
        faction:"hero",
        activeFactionPower:false,
        attributes:["naturalista","infectado","orgulloso","dormilon","manada"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Palmon X", img:"img/palmonx.png", base:{ power:145, hp:720, speed:14 }},
            { name:"Togemon X", img:"img/togemonx.png", base:{ power:470, hp:2800, speed:18 }},
            { name:"Lillymon X", img:"img/lilimonX.png", base:{ power:760, hp:4900, speed:30 }},
            { name:"Rosemon X", img:"img/rosemonx.png", base:{ power:980, hp:6700, speed:36 }}
        ],
        stellarSkills:[
            { name:"Flor Divina X", desc:"Curación extrema.", unlock:10 },
            { name:"Espinas X", desc:"Daño elevado.", unlock:20 },
            { name:"Danza Natural X", desc:"Evasión suprema.", unlock:30 },
            { name:"Aura Vital X", desc:"Regeneración total.", unlock:40 },
            { name:"Emperatriz Floral X", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Natural X: curación y velocidad mejoradas.",
            corrupcion:"Corrupción Espinosa X: daño devastador.",
            supreme:"Encarnación absoluta del poder natural X."
        }
    },
    omegamon:{
        id:"omegamon",
        name:"Omegamon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"⚔️ Caballero Supremo del Digimundo ⚔️",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        attributes:["invencible","ardiente","orgulloso","perfecto","frio"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Omegamon", img:"img/omegamon.png", base:{ power:1200, hp:12000, speed:38 }}
        ],
        stellarSkills:[
            { name:"Espada Transcendente", desc:"Cortes devastadores.", unlock:6 },
            { name:"Cañón Supremo", desc:"Explosión absoluta.", unlock:12 },
            { name:"Instinto Perfecto", desc:"Reacciones instantáneas.", unlock:18 },
            { name:"Guardia Real", desc:"Defensa divina.", unlock:24 },
            { name:"Omega Infinito", desc:"Poder definitivo.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Supremo: maximiza todo su potencial.",
            corrupcion:"Corrupción Omega: poder fuera de control.",
            supreme:"Forma definitiva del guerrero perfecto."
        }
    },
    duskmon:{
        id:"duskmon",
        name:"Duskmon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌑 Señor de las Sombras Eternas 🌑",
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["codicioso","parca","orgulloso","tramposo","infectado"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Duskmon", img:"img/duskmon.png", base:{ power:1050, hp:10000, speed:32 }}
        ],
        stellarSkills:[
            { name:"Filo Umbrío", desc:"Daño oscuro.", unlock:6 },
            { name:"Paso Sombrío", desc:"Evasión extrema.", unlock:12 },
            { name:"Garra Infernal", desc:"Destrucción masiva.", unlock:18 },
            { name:"Dominio Nocturno", desc:"Debilita enemigos.", unlock:24 },
            { name:"Rey del Abismo", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Oscuro: potencia ataques sombríos.",
            corrupcion:"Corrupción Infernal: locura destructiva.",
            supreme:"Encarnación del caos nocturno."
        }
    },
    diaboromon:{
        id:"diaboromon",
        name:"Diaboromon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🕷️ La Plaga del Digimundo 🕷️",
        family:"malvado",
        faction:"villain",
        activeFactionPower:false,
        attributes:["tramposo","ardiente","gigante","parca","nomuerto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Diaboromon", img:"img/diaboromon.png", base:{ power:1300, hp:11500, speed:36 }}
        ],
        stellarSkills:[
            { name:"Virus Digital", desc:"Debilita sistemas.", unlock:6 },
            { name:"Clonación", desc:"Multiplica ataques.", unlock:12 },
            { name:"Colapso de Red", desc:"Daño masivo.", unlock:18 },
            { name:"Hack Supremo", desc:"Control del campo.", unlock:24 },
            { name:"Apocalipsis Digital", desc:"Aniquilación total.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Binario: acelera ataques.",
            corrupcion:"Corrupción Viral: destrucción total.",
            supreme:"Colapso absoluto del sistema digital."
        }
    },
    malomyotismon:{
        id:"malomyotismon",
        name:"MaloMyotismon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🦇 Emperador del Terror Absoluto 🦇",
        family:"oscuro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["rabia","tramposo","orgulloso","invencible","parca"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"MaloMyotismon", img:"img/malomyotismon.png", base:{ power:1300, hp:12000, speed:34 }}
        ],
        stellarSkills:[
            { name:"Colmillo Carmesí", desc:"Drenaje vital.", unlock:6 },
            { name:"Ala Infernal", desc:"Movilidad extrema.", unlock:12 },
            { name:"Dominio Sangriento", desc:"Debilita enemigos.", unlock:18 },
            { name:"Castigo Oscuro", desc:"Explosión maligna.", unlock:24 },
            { name:"Emperador de la Noche", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Carmesí: absorbe energía vital.",
            corrupcion:"Corrupción Vampírica: furia insaciable.",
            supreme:"Señor absoluto de la oscuridad."
        }
    },
    neemon:{
        id:"neemon",
        name:"Neemon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐘 El Payaso del Apocalipsis 🐘",
        family:"misterioso",
        faction:"hero",
        activeFactionPower:false,
        attributes:["simpatico","ritmo","infectado","naturalista","manada"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Neemon", img:"img/neemon.png", base:{ power:1000, hp:9000, speed:18 }}
        ],
        stellarSkills:[
            { name:"Broma Mortal", desc:"Ataque sorpresa.", unlock:6 },
            { name:"Defensa Payasa", desc:"Reducción masiva.", unlock:12 },
            { name:"Resistencia Absurda", desc:"HP infinito.", unlock:18 },
            { name:"Contraataque Caótico", desc:"Daño reflejado.", unlock:24 },
            { name:"Dios del Troleo", desc:"Modo divino.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Caos: poder impredecible.",
            corrupcion:"Corrupción Payasa: locura absoluta.",
            supreme:"Forma secreta del terror supremo."
        }
    },
    omegamonX: {
        id:"omegamonX",
        name:"Omegamon X",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌌 Caballero Definitivo del Multiverso 🌌",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        isBoss:true,
        attributes:["infectado","frio","orgulloso","invencible","divino"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Omegamon X", img:"img/omegamonx.png", base:{ power:1350, hp:12000, speed:50 }}
        ],
        stellarSkills:[
            { name:"X-Alpha Blade", desc:"Espada dimensional de destrucción absoluta.", unlock:6 },
            { name:"Over Omega Cannon", desc:"Cañón supremo de energía infinita.", unlock:12 },
            { name:"Defensa Multiversal", desc:"Reduce daño de cualquier fuente.", unlock:18 },
            { name:"Juicio del Caballero Real", desc:"Fortalece justicia y poder sagrado.", unlock:24 },
            { name:"Modo Apoteosis X", desc:"Despierta su forma divina definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal X: amplifica su núcleo digital supremo.",
            corrupcion:"Corrupción Omega: poder caótico devastador.",
            supreme:"Ascensión X Suprema: domina el multiverso digital."
        }
    },
    tactimon: {
        id:"tactimon",
        name:"Tactimon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🩸 General del Caos Absoluto 🩸",
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        isBoss:true,
        attributes:["rabia","ardiente","orgulloso","parca","invencible"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Tactimon", img:"img/tactimon.png", base:{ power:1250, hp:11800, speed:38 }}
        ],
        stellarSkills:[
            { name:"Estrategia Bélica", desc:"Control total del campo de batalla.", unlock:6 },
            { name:"Espada del Juicio Oscuro", desc:"Cortes que ignoran defensa.", unlock:12 },
            { name:"Aura de Dominación", desc:"Reduce moral enemiga.", unlock:18 },
            { name:"General Supremo", desc:"Refuerza tropas aliadas.", unlock:24 },
            { name:"Modo Conquista Total", desc:"Poder bélico absoluto.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del General: perfecciona su estrategia.",
            corrupcion:"Corrupción Bélica: aumenta brutalidad.",
            supreme:"Señor de la Guerra Suprema."
        }
    },
    barbamon: {
        id:"barbamon",
        name:"Barbamon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"💰 Demonio de la Codicia Eterna 💰",
        family:"malvado",
        faction:"villain",
        activeFactionPower:false,
        isBoss:true,
        attributes:["rabia","frio","codicioso","gigante","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Barbamon", img:"img/barbamon.png", base:{ power:1280, hp:11200, speed:32 }}
        ],
        stellarSkills:[
            { name:"Riqueza Maldita", desc:"Absorbe energía enemiga.", unlock:6 },
            { name:"Contrato Infernal", desc:"Pactos oscuros de poder.", unlock:12 },
            { name:"Manipulación Total", desc:"Controla el entorno.", unlock:18 },
            { name:"Aura de Avaricia", desc:"Debilita rivales.", unlock:24 },
            { name:"Emperador Demoníaco", desc:"Poder infernal absoluto.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Dorado: amplifica absorción vital.",
            corrupcion:"Corrupción Infernal: poder demoníaco extremo.",
            supreme:"Rey Supremo del Inframundo."
        }
    },
    daemon: {
        id:"daemon",
        name:"Daemon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🔥 Príncipe Supremo del Infierno 🔥",
        family:"oscuro",
        faction:"villain",
        activeFactionPower:false,
        isBoss:true,
        attributes:["codicioso","tramposo","estatica","conflictivo","parca"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Daemon", img:"img/daemon.png", base:{ power:1180, hp:12500, speed:36 }}
        ],
        stellarSkills:[
            { name:"Infierno Absoluto", desc:"Control del fuego infernal.", unlock:6 },
            { name:"Dominación Oscura", desc:"Somete rivales.", unlock:12 },
            { name:"Aura Demoníaca", desc:"Reduce resistencia enemiga.", unlock:18 },
            { name:"Señor del Abismo", desc:"Aumenta terror.", unlock:24 },
            { name:"Rey Demonio Supremo", desc:"Desata el infierno.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Infernal: refuerza poder demoníaco.",
            corrupcion:"Corrupción Abismal: destrucción sin límites.",
            supreme:"Avatar Supremo del Infierno."
        }
    },
    magnamon: {
        id:"magnamon",
        name:"Magnamon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🛡️ Caballero Dorado del Milagro 🛡️",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        isBoss:true,
        attributes:["divino","ardiente","ritmo","maquina","orgulloso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Magnamon", img:"img/magnamon.png", base:{ power:1180, hp:10200, speed:40 }}
        ],
        stellarSkills:[
            { name:"Milagro Dorado", desc:"Probabilidad de evitar daño.", unlock:6 },
            { name:"Escudo Absoluto", desc:"Defensa perfecta.", unlock:12 },
            { name:"Aura Sagrada", desc:"Reduce daño oscuro.", unlock:18 },
            { name:"Caballero del Destino", desc:"Refuerza aliados.", unlock:24 },
            { name:"Milagro Supremo", desc:"Despierta poder divino.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Dorado: mejora su milagro.",
            corrupcion:"Corrupción Sagrada: poder distorsionado.",
            supreme:"Forma Milagrosa Suprema."
        }
    },
    magnamonX: {
        id:"magnamonX",
        name:"Magnamon X",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"✨ Caballero Dorado Trascendental ✨",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        isBoss:true,
        attributes:["divino","ardiente","ritmo","maquina","orgulloso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Magnamon X", img:"img/magnamonx.png", base:{ power:1380, hp:12800, speed:48 }}
        ],
        stellarSkills:[
            { name:"Milagro X", desc:"Probabilidad extrema de evasión.", unlock:6 },
            { name:"Escudo Divino", desc:"Defensa casi absoluta.", unlock:12 },
            { name:"Luz Infinita", desc:"Aumenta resistencia.", unlock:18 },
            { name:"Caballero Perfecto", desc:"Sinergia total.", unlock:24 },
            { name:"Apoteosis Dorada", desc:"Poder celestial total.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal X Dorado: perfecciona milagros.",
            corrupcion:"Corrupción X: poder caótico.",
            supreme:"Forma Trascendental Suprema."
        }
    },
    ogudomon: {
        id:"ogudomon",
        name:"Ogudomon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"💀 Encarnación del Pecado Absoluto 💀",
        family:"malvado",
        faction:"villain",
        activeFactionPower:false,
        isBoss:true,
        attributes:["parca","conflictivo","invencible","tramposo","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Ogudomon", img:"img/ogudomon.png", base:{ power:1450, hp:14000, speed:35 }}
        ],
        stellarSkills:[
            { name:"Siete Pecados", desc:"Amplifica corrupción.", unlock:6 },
            { name:"Caos Total", desc:"Inestabilidad destructiva.", unlock:12 },
            { name:"Dominio Infernal", desc:"Control del campo.", unlock:18 },
            { name:"Abismo Viviente", desc:"Absorbe energía.", unlock:24 },
            { name:"Destrucción Final", desc:"Aniquilación absoluta.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Pecado: aumenta corrupción.",
            corrupcion:"Corrupción Suprema: devastación total.",
            supreme:"Avatar Absoluto del Mal."
            }   
    },
    reapermon: {
        id:"reapermon",
        name:"Reapermon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"☠️ Segador del Fin Digital ☠️",
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        isBoss:true,
        attributes:["divino","ardiente","ritmo","infectado","orgulloso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Reapermon", img:"img/reapermon.png", base:{ power:1200, hp:12200, speed:45 }}
        ],
        stellarSkills:[
            { name:"Cosecha de Almas", desc:"Drena energía vital.", unlock:6 },
            { name:"Paso Sombrío", desc:"Evasión extrema.", unlock:12 },
            { name:"Guadaña Final", desc:"Corte mortal.", unlock:18 },
            { name:"Manto de la Muerte", desc:"Reduce daño recibido.", unlock:24 },
            { name:"Juicio Final", desc:"Aniquilación inevitable.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Mortuorio: amplifica drenaje.",
            corrupcion:"Corrupción Letal: exterminio total.",
            supreme:"Encarnación Suprema de la Muerte."
        }
    },
    jupitermon: {
        id:"jupitermon",
        name:"Jupitermon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"⚡ Dios del Trueno Celestial ⚡",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        isBoss:true,
        attributes:["divino","perfecto","gigante","maquina","encanto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Jupitermon", img:"img/jupitermon.png", base:{ power:1280, hp:12200, speed:48 }}
        ],
        stellarSkills:[
            { name:"Trueno Divino", desc:"Descargas celestiales devastadoras.", unlock:6 },
            { name:"Ira del Olimpo", desc:"Potencia ataques eléctricos.", unlock:12 },
            { name:"Tormenta Celestial", desc:"Control absoluto del clima.", unlock:18 },
            { name:"Justicia Divina", desc:"Castigo a enemigos corruptos.", unlock:24 },
            { name:"Avatar del Trueno", desc:"Forma divina absoluta.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Trueno: amplifica rayos divinos.",
            corrupcion:"Corrupción Eléctrica: poder caótico.",
            supreme:"Encarnación Suprema del Trueno."
        }
    },
    marsmon: {
        id:"marsmon",
        name:"Marsmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🔥 Dios de la Guerra Ardiente 🔥",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        isBoss:true,
        attributes:["divino","frio","estatica","simpatico","orgulloso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Marsmon", img:"img/marsmon.png", base:{ power:1190, hp:12300, speed:42 }}
        ],
        stellarSkills:[
            { name:"Furia Bélica", desc:"Aumenta brutalidad de combate.", unlock:6 },
            { name:"Espadas Ígneas", desc:"Ataques de fuego devastadores.", unlock:12 },
            { name:"Aura de Guerra", desc:"Potencia aliados.", unlock:18 },
            { name:"Campeón del Olimpo", desc:"Resistencia divina.", unlock:24 },
            { name:"Avatar Marcial", desc:"Forma suprema de combate.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Marcial: potencia ofensiva extrema.",
            corrupcion:"Corrupción Bélica: violencia absoluta.",
            supreme:"Forma Suprema del Dios de la Guerra."
        }
    },
    vulcanusmon: {
        id:"vulcanusmon",
        name:"Vulcanusmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"⚙️ Forjador Supremo del Destino ⚙️",
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        isBoss:true,
        attributes:["divino","ardiente","simpatico","invencible","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Vulcanusmon", img:"img/vulcanusmon.png", base:{ power:1210, hp:11200, speed:28 }}
        ],
        stellarSkills:[
            { name:"Forja Divina", desc:"Mejora armas sagradas.", unlock:6 },
            { name:"Martillo del Destino", desc:"Golpes devastadores.", unlock:12 },
            { name:"Armadura Celestial", desc:"Defensa suprema.", unlock:18 },
            { name:"Ingeniero del Olimpo", desc:"Optimiza habilidades.", unlock:24 },
            { name:"Constructor Supremo", desc:"Dominio total de la materia.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Forjador: perfecciona creación.",
            corrupcion:"Corrupción Mecánica: caos industrial.",
            supreme:"Arquitecto Supremo del Multiverso."
        }
    },
    dynasmon: {
        id:"dynasmon",
        name:"Dynasmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐉 Dragón Santo del Poder Absoluto 🐉",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        isBoss:true,
        attributes:["divino","pureza","estatica","invencible","nomuerto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Dynasmon", img:"img/dynasmon.png", base:{ power:1280, hp:13200, speed:46 }}
        ],
        stellarSkills:[
            { name:"Aliento Dragónico", desc:"Explosión de energía dracónica.", unlock:6 },
            { name:"Golpe Sagrado", desc:"Ataques de luz concentrada.", unlock:12 },
            { name:"Fuerza Ancestral", desc:"Aumenta poder base.", unlock:18 },
            { name:"Caballero Dragón", desc:"Resistencia legendaria.", unlock:24 },
            { name:"Apoteosis Dracónica", desc:"Forma suprema del dragón.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Dracónico: amplifica poder dragón.",
            corrupcion:"Corrupción Abismal: fuerza descontrolada.",
            supreme:"Avatar Supremo del Dragón Sagrado."
        }
    },
    examon: {
        id:"examon",
        name:"Examon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🛡️ Guardián Supremo del Orden 🛡️",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        isBoss:true,
        attributes:["perfecto","ardiente","conflictivo","divino","codicioso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Examon", img:"img/examon.png", base:{ power:1400, hp:13800, speed:35 }}
        ],
        stellarSkills:[
            { name:"Lanza Celestial", desc:"Perforación divina.", unlock:6 },
            { name:"Escudo Absoluto", desc:"Defensa perfecta.", unlock:12 },
            { name:"Juicio del Caballero", desc:"Castigo equilibrado.", unlock:18 },
            { name:"Custodio del Mundo", desc:"Protección total.", unlock:24 },
            { name:"Forma Guardián Supremo", desc:"Poder máximo defensivo.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Guardián: refuerza defensas.",
            corrupcion:"Corrupción del Juicio: equilibrio distorsionado.",
            supreme:"Protector Supremo del Multiverso."
        }
    },
    clavisangemon: {
        id:"clavisangemon",
        name:"ClavisAngemon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🔑 Portador de las Llaves del Cielo 🔑",
        family:"misterioso",
        faction:"hero",
        activeFactionPower:false,
        isBoss:true,
        attributes:["divino","naturalista","simpatico","invencible","dormilon"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"ClavisAngemon", img:"img/clavisangemon.png", base:{ power:1230, hp:11600, speed:40 }}
        ],
        stellarSkills:[
            { name:"Llave Celestial", desc:"Control dimensional.", unlock:6 },
            { name:"Sello Divino", desc:"Bloquea poderes enemigos.", unlock:12 },
            { name:"Puerta del Paraíso", desc:"Canaliza energía sagrada.", unlock:18 },
            { name:"Guardían de las Llaves", desc:"Protección mística.", unlock:24 },
            { name:"Apertura Suprema", desc:"Liberación total del poder divino.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Celestial: amplifica control dimensional.",
            corrupcion:"Corrupción Arcana: distorsión de la realidad.",
            supreme:"Forma Suprema del Guardián Divino."
        }
    },
    ryudamon: {
        id:"ryudamon",
        name:"Ryudamon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐉 Portador de la Espada del Dragón Celestial 🐉",
        family:"misterioso",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","ardiente","infectado","gigante","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Ryudamon", img:"img/ryudamon.png", base:{ power:150, hp:900, speed:34 }},
            { name:"Ginryumon", img:"img/ginryumon.png", base:{ power:360, hp:3300, speed:38 }},
            { name:"Hisyaryumon", img:"img/hisyaryumon.png", base:{ power:520, hp:5500, speed:42 }},
            { name:"Ouryumon", img:"img/ouryumon.png", base:{ power:920, hp:7800, speed:48 }}
        ],
        stellarSkills:[
            { name:"Espada Dragón", desc:"Corte rápido imbuido en energía dracónica.", unlock:6 },
            { name:"Rugido Plateado", desc:"Aumenta el ataque temporalmente.", unlock:12 },
            { name:"Instinto Samurai", desc:"Incrementa velocidad y precisión.", unlock:18 },
            { name:"Espíritu del Dragón Celestial", desc:"Gran aumento de poder.", unlock:24 },
            { name:"Forma Ouryu Suprema", desc:"Desbloquea todo el potencial del linaje.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Dracónico: aumenta daño de tipo dragón.",
            corrupcion:"Corrupción Samurai: poder salvaje sin control.",
            supreme:"Avatar Supremo del Dragón Espiritual."
        }
    },
    coomon: {
        id:"coomon",
        name:"Coomon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"✨ Mensajera del Juicio Divino ✨",
        family:"guapo",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","estatica","naturalista","manada","encanto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Coomon", img:"img/coomon.png", base:{ power:170, hp:800, speed:40 }},
            { name:"Meicoomon", img:"img/meicoomon.png", base:{ power:440, hp:3200, speed:44 }},
            { name:"Meicrackmon", img:"img/meicrackmon.png", base:{ power:720, hp:6400, speed:46 }},
            { name:"Rasielmon", img:"img/rasielmon.png", base:{ power:1080, hp:8400, speSed:50 }}
        ],
        stellarSkills:[
            { name:"Garra Sagrada", desc:"Ataque rápido de energía divina.", unlock:6 },
            { name:"Instinto Bestial", desc:"Incrementa esquiva y velocidad.", unlock:12 },
            { name:"Furia Caótica", desc:"Aumenta poder ofensivo.", unlock:18 },
            { name:"Luz del Juicio", desc:"Daño sagrado masivo.", unlock:24 },
            { name:"Ascensión Rasiel", desc:"Desbloquea forma angelical suprema.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Celestial: potencia habilidades sagradas.",
            corrupcion:"Corrupción Caótica: poder descontrolado.",
            supreme:"Forma Suprema del Ángel del Juicio."
        }
    },
    blackgaomon: {
        id:"blackgaomon",
        name:"Black Gaomon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌑 Depredador de la Velocidad Oscura 🌑",
        family:"oscuro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["infectado","frio","encanto","conflictivo","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Black Gaomon", img:"img/blackgaomon.png", base:{ power:130, hp:850, speed:42 }},
            { name:"Black Gaogamon", img:"img/blackgaogamon.png", base:{ power:480, hp:3400, speed:48 }},
            { name:"Black MachGaogamon", img:"img/blackmachgaogamon.png", base:{ power:760, hp:5600, speed:52 }},
            { name:"Black MirageGaogamon", img:"img/blackmiragegaogamon.png", base:{ power:1000, hp:7800, speed:58 }}
        ],
        stellarSkills:[
            { name:"Puño Sombrío", desc:"Ataque veloz con energía oscura.", unlock:6 },
            { name:"Velocidad Fantasma", desc:"Incrementa esquiva extrema.", unlock:12 },
            { name:"Golpe Relámpago", desc:"Ataques consecutivos.", unlock:18 },
            { name:"Asalto Umbrío", desc:"Explosión de daño oscuro.", unlock:24 },
            { name:"Forma Mirage Oscura", desc:"Velocidad y daño máximos.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Umbrío: amplifica daño oscuro.",
            corrupcion:"Corrupción Abismal: poder sin límites.",
            supreme:"Encarnación Suprema del Depredador Oscuro."
        }
    },
    slashangemon:{
        id:"slashangemon",
        name:"SlashAngemon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"⚔ Verdugo Sagrado del Juicio Celestial ⚔",
        family:"amable",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","pureza","codicioso","dormilon","invencible"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"SlashAngemon", img:"img/slashangemon.png", base:{ power:1220, hp:12200, speed:34 }}
        ],
        stellarSkills:[
            { name:"Espada Divina", desc:"Corte sagrado devastador.", unlock:6 },
            { name:"Juicio Celestial", desc:"Aumenta daño y defensa.", unlock:12 },
            { name:"Corte Absoluto", desc:"Ignora defensa.", unlock:18 },
            { name:"Veredicto Final", desc:"Probabilidad de ejecución.", unlock:24 },
            { name:"Luz del Fin", desc:"Aniquilación divina.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Sagrado: multiplica el poder divino.",
            corrupcion:"Corrupción Celestial: energía caótica.",
            supreme:"Ejecutor absoluto del juicio divino."
        }
    },
    ancienttroiamon:{
        id:"ancienttroiamon",
        name:"AncientTroiamon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🏛 Guardián Eterno de la Ciudad Perdida 🏛",
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["gigante","ardiente","conflictivo","ritmo","maquina"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"AncientTroiamon", img:"img/ancienttroiamon.png", base:{ power:1180, hp:13500, speed:24 }}
        ],
        stellarSkills:[
            { name:"Muralla Ancestral", desc:"Defensa colosal.", unlock:6 },
            { name:"Pisotón Titánico", desc:"Daño masivo en área.", unlock:12 },
            { name:"Rugido de Piedra", desc:"Reduce ataque enemigo.", unlock:18 },
            { name:"Cólera Primordial", desc:"Incrementa poder brutalmente.", unlock:24 },
            { name:"Fin del Imperio", desc:"Destrucción total.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Terrenal: defensa absoluta.",
            corrupcion:"Corrupción Mineral: furia descontrolada.",
            supreme:"Destructor eterno del mundo antiguo."
        }
    },
    susanoomon:{
        id:"susanoomon",
        name:"Susanoomon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌌 Avatar Absoluto del Equilibrio Divino 🌌",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        attributes:["estatica","frio","perfecto","invencible","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
        { name:"Susanoomon", img:"img/susanoomon.png", base:{ power:1340, hp:14000, speed:38 }}
        ],
        stellarSkills:[
            { name:"Espada Primigenia", desc:"Daño divino masivo.", unlock:6 },
            { name:"Fusión Absoluta", desc:"Aumenta todos los stats.", unlock:12 },
            { name:"Juicio Universal", desc:"Daño verdadero.", unlock:18 },
            { name:"Ruptura Dimensional", desc:"Ignora toda defensa.", unlock:24 },
            { name:"Equilibrio Final", desc:"Anulación total.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Universal: armonía total.",
            corrupcion:"Corrupción del Caos: ruptura del balance.",
            supreme:"Deidad suprema del Digimundo."
        }
    },
    anubimon:{
        id:"anubimon",
        name:"Anubimon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"⚖ Juez Supremo de las Almas Caídas ⚖",
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["divino","parca","conflictivo","nomuerto","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Anubimon", img:"img/anubimon.png", base:{ power:1350, hp:14600, speed:32 }}
        ],
        stellarSkills:[
            { name:"Juicio Mortal", desc:"Sentencia oscura.", unlock:6 },
            { name:"Pesaje del Alma", desc:"Reduce HP enemigo.", unlock:12 },
            { name:"Marca Funesta", desc:"Debilita defensa.", unlock:18 },
            { name:"Cosecha de Almas", desc:"Robo masivo de vida.", unlock:24 },
            { name:"Veredicto Final", desc:"Ejecución divina.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Funesto: sentencia absoluta.",
            corrupcion:"Corrupción Abisal: caos del inframundo.",
            supreme:"Árbitro final de la muerte."
        }
    },
    gottsumon:{
        id:"gottsumon",
        name:"Gottsumon",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"🌋 Corazón Ardiente del Mundo Primordial 🌋",
        title:null,
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["gigante","ardiente","codicioso","nomuerto","manada"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"Gottsumon",img:"img/gottsumon.png",base:{power:170,hp:850,speed:19}},
            {name:"Golemon",img:"img/golemon.png",base:{power:450,hp:3450,speed:23}},
            {name:"Volcamon",img:"img/volcamon.png",base:{power:620,hp:5800,speed:28}},
            {name:"AncientVolcamon",img:"img/ancientvolcamon.png",base:{power:960,hp:7200,speed:34}}
        ],
        stellarSkills:[
            {name:"Puño Rocoso",desc:"Golpe contundente.",unlock:10},
            {name:"Muralla Mineral",desc:"Defensa reforzada.",unlock:20},
            {name:"Erupción",desc:"Daño ígneo.",unlock:30},
            {name:"Corazón Magmático",desc:"Regeneración.",unlock:40},
            {name:"Cataclismo",desc:"Explosión total.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Ígneo: poder volcánico.",
            corrupcion:"Corrupción Magmática: furia desatada.",
            supreme:"Titán absoluto de lava."
        }
    },
    dracumon:{
        id:"dracumon",
        name:"Dracumon",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"🩸 Heredero del Linaje Vampírico Supremo 🩸",
        title:null,
        family:"malvado",
        faction:"villain",
        activeFactionPower:false,
        attributes:["gigante","ardiente","rabia","infectado","parca"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"Dracumon",img:"img/dracumon.png",base:{power:150,hp:880,speed:16}},
            {name:"Sangloupmon",img:"img/sangloupmon.png",base:{power:400,hp:3450,speed:20}},
            {name:"Matadormon",img:"img/matadormon.png",base:{power:720,hp:6200,speed:26}},
            {name:"Grandracmon",img:"img/grandracmon.png",base:{power:1150,hp:8600,speed:32}}
        ],
        stellarSkills:[
            {name:"Colmillo Sangriento",desc:"Roba vida.",unlock:10},
            {name:"Sombra Mortal",desc:"Daño crítico.",unlock:20},
            {name:"Sed Carmesí",desc:"Buff vampírico.",unlock:30},
            {name:"Dominio Vampírico",desc:"Regeneración total.",unlock:40},
            {name:"Eclipse Escarlata",desc:"Aniquilación.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Carmesí: dominio vampírico.",
            corrupcion:"Corrupción Sanguinaria: sed infinita.",
            supreme:"Señor eterno de la noche."
        }
    },
    voltobautamon:{
        id:"voltobautamon",
        name:"Voltobautamon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🩸 Deidad del Pecado Absoluto 🩸",
        family:"malvado",
        faction:"villain",
        activeFactionPower:false,
        attributes:["parca","estatica","manada","gigante","orgulloso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Voltobautamon", img:"img/voltobautamon.png", base:{ power:1480, hp:14500, speed:34 }}
        ],
        stellarSkills:[
            { name:"Castigo Mortal", desc:"Daño masivo oscuro.", unlock:6 },
            { name:"Pecado Encarnado", desc:"Reduce defensa enemiga.", unlock:12 },
            { name:"Aura Maldita", desc:"Debuff general.", unlock:18 },
            { name:"Ritual Infernal", desc:"Poder extremo.", unlock:24 },
            { name:"Apocalipsis Oscuro", desc:"Destrucción total.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Profano: amplifica la corrupción.",
            corrupcion:"Corrupción Demoníaca: caos absoluto.",
            supreme:"Encarnación total del mal."
        }
    },
    bagramon:{
        id:"bagramon",
        name:"Bagramon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"👑 Emperador Oscuro del Caos Total 👑",
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["divino","frio","conflictivo","codicioso","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Bagramon", img:"img/bagramon.png", base:{ power:1260, hp:13000, speed:36 }}
        ],
        stellarSkills:[
            { name:"Dominio Absoluto", desc:"Control del campo.", unlock:6 },
            { name:"Ojo del Caos", desc:"Anula buffs.", unlock:12 },
            { name:"Ejército Oscuro", desc:"Invocación masiva.", unlock:18 },
            { name:"Tirano Supremo", desc:"Buff total.", unlock:24 },
            { name:"Imperio Final", desc:"Aniquilación total.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Imperial: control absoluto.",
            corrupcion:"Corrupción Tiránica: dominio caótico.",
            supreme:"Emperador definitivo del mal."
        }
    },
    darkknightmon:{
        id:"darkknightmon",
        name:"DarkKnightmon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🖤 Caballero del Abismo Eterno 🖤",
        family:"oscuro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["gigante","ardiente","rabia","invencible","orgulloso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"DarkKnightmon", img:"img/darkknightmon.png", base:{ power:1320, hp:14000, speed:33 }}
        ],
        stellarSkills:[
            { name:"Espada Oscura", desc:"Corte devastador.", unlock:6 },
            { name:"Defensa Abisal", desc:"Escudo oscuro.", unlock:12 },
            { name:"Carga Mortal", desc:"Ataque frontal brutal.", unlock:18 },
            { name:"Aura de Terror", desc:"Debuff masivo.", unlock:24 },
            { name:"Juicio del Abismo", desc:"Ejecución final.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Sombrío: potencia bélica.",
            corrupcion:"Corrupción Negra: furia absoluta.",
            supreme:"Paladín definitivo del caos."
        }
    },
    gumdramon:{
        id:"gumdramon",
        name:"Gumdramon",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"🔥 Espíritu Rebelde del Combate Extremo 🔥",
        title:null,
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","estatica","maquina","nomuerto","infectado"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"Gumdramon",img:"img/gumdramon.png",base:{power:170,hp:800,speed:15}},
            {name:"Arresterdramon",img:"img/arresterdramon.png",base:{power:460,hp:3900,speed:20}},
            {name:"Arresterdramon MS",img:"img/arresterdramonModosuperior.png",base:{power:750,hp:5000,speed:26}},
            {name:"Arresterdramon MS BS",img:"img/ArresterdramonModoSuperiorBraveSnatcher.png",base:{power:1050,hp:7800,speed:32}}
        ],
        stellarSkills:[
            {name:"Golpe Rebelde",desc:"Daño rápido.",unlock:10},
            {name:"Modo Cazador",desc:"Aumenta velocidad.",unlock:20},
            {name:"Instinto Salvaje",desc:"Críticos altos.",unlock:30},
            {name:"Despertar Supremo",desc:"Buff total.",unlock:40},
            {name:"Snatcher Final",desc:"Explosión máxima.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Salvaje: furia concentrada.",
            corrupcion:"Corrupción Rebelde: poder inestable.",
            supreme:"Guerrero indomable definitivo."
        }
    },
    pawnchessmonBlack:{
        id:"pawnchessmonBlack",
        name:"PawnChessmon Black",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"♟ Reina Oscura del Tablero Mortal ♟",
        title:null,
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["encanto","gigante","naturalista","dormilon","ritmo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"PawnChessmon Black",img:"img/pawnchessmonblack.png",base:{power:165,hp:850,speed:16}},
            {name:"KnightChessmon Black",img:"img/knightchessmonblack.png",base:{power:450,hp:2850,speed:20}},
            {name:"RookChessmon Black",img:"img/rookchessmonblack.png",base:{power:720,hp:4900,speed:24}},
            {name:"QueenChessmon",img:"img/queenchessmon.png",base:{power:920,hp:6500,speed:28}}
        ],
        stellarSkills:[
            {name:"Estrategia Oscura",desc:"Buff táctico.",unlock:10},
            {name:"Ataque Coordinado",desc:"Combo mortal.",unlock:20},
            {name:"Dominio del Tablero",desc:"Control total.",unlock:30},
            {name:"Reina Negra",desc:"Poder elevado.",unlock:40},
            {name:"Jaque Mate",desc:"Aniquilación final.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Estratégico: control absoluto.",
            corrupcion:"Corrupción del Rey Negro: dominación.",
            supreme:"Soberana total del ajedrez oscuro."
        }
    },
    pawnchessmonWhite:{
        id:"pawnchessmonWhite",
        name:"PawnChessmon White",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"♔ Rey Sagrado del Tablero Celestial ♔",
        title:null,
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","pureza","frio","encanto","simpatico"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"PawnChessmon White",img:"img/pawnchessmonwhite.png",base:{power:165,hp:850,speed:14}},
            {name:"KnightChessmon White",img:"img/knightchessmonwhite.png",base:{power:350,hp:2850,speed:18}},
            {name:"BishopChessmon",img:"img/bishopchessmon.png",base:{power:520,hp:4900,speed:22}},
            {name:"KingChessmon",img:"img/kingchessmon.png",base:{power:920,hp:6800,speed:28}}
        ],
        stellarSkills:[
            {name:"Estrategia Sagrada",desc:"Buff divino.",unlock:10},
            {name:"Ataque Luminoso",desc:"Daño sagrado.",unlock:20},
            {name:"Protección Real",desc:"Escudo aliado.",unlock:30},
            {name:"Rey Celestial",desc:"Dominio total.",unlock:40},
            {name:"Jaque Divino",desc:"Final absoluto.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Sagrado: orden absoluto.",
            corrupcion:"Corrupción de la Luz: poder inestable.",
            supreme:"Monarca eterno del tablero."
        }
    },
    junkmon:{
        id:"junkmon",
        name:"Junkmon",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"♻️ Guerrero de los Restos Sagrados ♻️",
        title:null,
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["maquina","ardiente","parca","gigante","codicioso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"Junkmon",img:"img/junkmon.png",base:{power:160,hp:780,speed:14}},
            {name:"Tankmon",img:"img/tankmon.png",base:{power:360,hp:3950,speed:16}},
            {name:"Tankdramon",img:"img/tankdramon.png",base:{power:680,hp:6300,speed:20}},
            {name:"Gundramon",img:"img/gundramon.png",base:{power:990,hp:8800,speed:30}}
        ],
        stellarSkills:[
            {name:"Blindaje Improvisado",desc:"Defensa mecánica.",unlock:10},
            {name:"Cañones Gemelos",desc:"Ataques masivos.",unlock:20},
            {name:"Modo Asalto",desc:"Aumento brutal.",unlock:30},
            {name:"Tormenta Balística",desc:"Destrucción total.",unlock:40},
            {name:"Destructor Supremo",desc:"Forma absoluta.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Mecánico: precisión letal.",
            corrupcion:"Corrupción Bélica: sobrecarga extrema.",
            supreme:"Arsenal viviente definitivo."
        }
    },
    beelstarmon:{
        id:"beelstarmon",
        name:"Beelstarmon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🔫 Reina del Crepúsculo Letal 🔫",
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["encanto","ardiente","rabia","manada","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Beelstarmon", img:"img/beelstarmon.png", base:{ power:1150, hp:12000, speed:42 }}
        ],
        stellarSkills:[
            { name:"Doble Disparo", desc:"Ataque fulminante.", unlock:6 },
            { name:"Balas del Infierno", desc:"Daño demoníaco.", unlock:12 },
            { name:"Reflejos Mortales", desc:"Evasión perfecta.", unlock:18 },
            { name:"Asesina Fantasma", desc:"Golpes invisibles.", unlock:24 },
            { name:"Reina del Ocaso", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Crepuscular: precisión absoluta.",
            corrupcion:"Corrupción Oscura: frenesí letal.",
            supreme:"Soberana de la muerte perfecta."
        }
    },
    bacomon:{
        id:"bacomon",
        name:"Bacomon",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"🎯 Forajido del Digimundo Salvaje 🎯",
        title:null,
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["pureza","dormilon","ritmo","estatica","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"Bacomon",img:"img/bakomon.png",base:{power:138,hp:690,speed:15}},
            {name:"Revolmon",img:"img/revolmon.png",base:{power:445,hp:2820,speed:18}},
            {name:"Woodwoodymon",img:"img/woodwoodymon.png",base:{power:620,hp:5000,speed:22}},
            {name:"Magnakidmon",img:"img/magnakidmon.png",base:{power:980,hp:8600,speed:34}}
        ],
        stellarSkills:[
            {name:"Disparo Preciso",desc:"Crítico asegurado.",unlock:10},
            {name:"Ráfaga Giratoria",desc:"Ataque múltiple.",unlock:20},
            {name:"Estilo Forajido",desc:"Velocidad extrema.",unlock:30},
            {name:"Juicio Final",desc:"Tiro definitivo.",unlock:40},
            {name:"Pistolero Supremo",desc:"Forma absoluta.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Balístico: daño crítico.",
            corrupcion:"Corrupción Salvaje: disparos caóticos.",
            supreme:"Leyenda armada definitiva."
        }
    },
    avengekidmon:{
        id:"avengekidmon",
        name:"Avengekidmon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🔥 Vengador Carmesí del Juicio Final 🔥",
        family:"malvado",
        faction:"villain",
        activeFactionPower:false,
        attributes:["parca","nomuerto","rabia","conflictivo","orgulloso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Avengekidmon", img:"img/avengekidmon.png", base:{ power:1450, hp:11400, speed:40 }}
        ],
        stellarSkills:[
            { name:"Disparo Vengativo", desc:"Daño brutal.", unlock:6 },
            { name:"Ráfaga Carmesí", desc:"Ataques múltiples.", unlock:12 },
            { name:"Furia Imparable", desc:"Incremento masivo.", unlock:18 },
            { name:"Ejecución Total", desc:"Golpe mortal.", unlock:24 },
            { name:"Justicia Oscura", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Carmesí: furia controlada.",
            corrupcion:"Corrupción Desatada: masacre sin límite.",
            supreme:"Vengador absoluto."
        }
    },
    millenniumon:{
        id:"millenniumon",
        name:"Millenniumon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"⏳ Señor del Caos Temporal Absoluto ⏳",
        family:"oscuro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["conflictivo","rabia","manada","nomuerto","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Millenniumon", img:"img/millenniumon.png", base:{ power:1500, hp:16000, speed:32 }}
        ],
        stellarSkills:[
            { name:"Distorsión Temporal", desc:"Control del tiempo.", unlock:6 },
            { name:"Caos Dimensional", desc:"Daño masivo.", unlock:12 },
            { name:"Colapso Existencial", desc:"Destrucción absoluta.", unlock:18 },
            { name:"Anihilación Total", desc:"Golpe final.", unlock:24 },
            { name:"Dios del Caos", desc:"Forma suprema.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Tiempo: control absoluto.",
            corrupcion:"Corrupción del Vacío: entropía infinita.",
            supreme:"Entidad caótica definitiva."
        }
    },
    raijinmon:{
        id:"raijinmon",
        name:"Raijinmon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"⚡ Dios del Trueno Celestial ⚡",
        family:"misterioso",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","manada","naturalista","invencible","maquina"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Raijinmon", img:"img/raijinmon.png", base:{ power:1400, hp:12000, speed:45 }}
        ],
        stellarSkills:[
            { name:"Rayo Divino", desc:"Impacto eléctrico.", unlock:6 },
            { name:"Tormenta Celestial", desc:"Daño masivo.", unlock:12 },
            { name:"Velocidad Absoluta", desc:"Turnos extra.", unlock:18 },
            { name:"Juicio del Trueno", desc:"Aniquilación.", unlock:24 },
            { name:"Forma Raijin", desc:"Ascensión divina.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Rayo: daño eléctrico puro.",
            corrupcion:"Corrupción Tempestuosa: caos climático.",
            supreme:"Encarnación del trueno."
        }
    },
    fujinmon:{
        id:"fujinmon",
        name:"Fujinmon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌪️ Dios del Viento Destructor 🌪️",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","ritmo","dormilon","maquina","pureza"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Fujinmon", img:"img/fujinmon.png", base:{ power:1380, hp:11800, speed:48 }}
        ],
        stellarSkills:[
            { name:"Corte Huracanado", desc:"Daño cortante.", unlock:6 },
            { name:"Tifón Supremo", desc:"Devastación aérea.", unlock:12 },
            { name:"Danza del Viento", desc:"Evasión perfecta.",   unlock:18 },
            { name:"Tormenta Final", desc:"Aniquilación total.", unlock:24 },
            { name:"Forma Fujin", desc:"Ascensión divina.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Viento: movilidad extrema.",
            corrupcion:"Corrupción del Vendaval: caos absoluto.",
            supreme:"Encarnación del huracán."
        }
    },
    suijinmon:{
        id:"suijinmon",
        name:"Suijinmon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌊 Dios del Océano Infinito 🌊",
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","nomuerto","infectado","ardiente","rabia"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Suijinmon", img:"img/suijinmon.png", base:{ power:1450, hp:12500, speed:34 }}
        ],
        stellarSkills:[
            { name:"Marea Devastadora", desc:"Daño masivo.", unlock:6 },
            { name:"Tsunami Absoluto", desc:"Golpe oceánico.", unlock:12 },
            { name:"Corriente Vital", desc:"Regeneración.", unlock:18 },
            { name:"Juicio Marino", desc:"Destrucción final.", unlock:24 },
            { name:"Forma Suijin", desc:"Ascensión divina.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Oceánico: control acuático.",
            corrupcion:"Corrupción Abisal: marea caótica.",
            supreme:"Encarnación del océano."
        }
    },
    ballistamon:{
        id:"ballistamon",
        name:"Ballistamon",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"💣 Titán del Acero Demoledor 💣",
        title:null,
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["maquina","pureza","estatica","gigante","rabia"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"Ballistamon",img:"img/ballistamon.png",base:{power:170,hp:890,speed:12}},
            {name:"DarkVolumon",img:"img/darkvolumon.png",base:{power:380,hp:3000,speed:15}},
            {name:"AtlurBallistamon",img:"img/atlurballistamon.png",base:{power:620,hp:5600,speed:19}},
            {name:"GrandLocomon",img:"img/grandlocomon.png",base:{power:950,hp:8200,speed:28}}
        ],
        stellarSkills:[
            {name:"Impacto Mecánico",desc:"Daño físico pesado.",unlock:10},
            {name:"Artillería Pesada",desc:"Bombardeo masivo.",unlock:20},
            {name:"Blindaje Total",desc:"Defensa extrema.",unlock:30},
            {name:"Aniquilación Total",desc:"Ataque devastador.",unlock:40},
            {name:"Fortaleza Viviente",desc:"Forma definitiva.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Balístico: potencia destructiva.",
            corrupcion:"Corrupción Bélica: caos mecánico.",
            supreme:"Arma viviente definitiva."
        }
    },
    raidenmon:{
        id:"raidenmon",
        name:"Raidenmon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"⚡ Señor del Rayo Apocalíptico ⚡",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        attributes:["gigante","estatica","maquina","invencible","naturalista"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Raidenmon", img:"img/raidenmon.png", base:{ power:1600, hp:14500, speed:46 }}
        ],
        stellarSkills:[
            { name:"Descarga Celestial", desc:"Daño eléctrico masivo.", unlock:6 },
            { name:"Trueno Aniquilador", desc:"Explosión devastadora.", unlock:12 },
            { name:"Velocidad Relámpago", desc:"Turnos extra.", unlock:18 },
            { name:"Tormenta Divina", desc:"Anulación enemiga.", unlock:24 },
            { name:"Avatar del Rayo", desc:"Forma absoluta.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Trueno: control eléctrico.",
            corrupcion:"Corrupción Tempestuosa: caos total.",
            supreme:"Encarnación del relámpago."
        }
    },
    elecmon_violet:{
        id:"elecmon_violet",
        name:"Elecmon Violet",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"🐉 Heraldo del Dragón Celestial 🐉",
        title:null,
        family:"Misterioso",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","ardiente","dormilon","manada","codicioso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"Elecmon Violet",img:"img/elecmonviolet.png",base:{power:158,hp:780,speed:15}},
            {name:"Tuskmon",img:"img/tuskmon.png",base:{power:450,hp:3880,speed:18}},
            {name:"Triceramon",img:"img/triceramon.png",base:{power:750,hp:6300,speed:22}},
            {name:"Qinglongmon",img:"img/qinglongmon.png",base:{power:1020,hp:8000,speed:34}}
        ],
        stellarSkills:[
            {name:"Carga Salvaje",desc:"Ataque brutal.",unlock:10},
            {name:"Ira Primordial",desc:"Daño aumentado.",unlock:20},
            {name:"Poder Ancestral",desc:"Buff masivo.",unlock:30},
            {name:"Rugido Celestial",desc:"Golpe devastador.",unlock:40},
            {name:"Dragón Divino",desc:"Forma suprema.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Dracónico: poder ancestral.",
            corrupcion:"Corrupción Bestial: furia sin control.",
            supreme:"Avatar del dragón celestial."
        }
    },
    goddramon:{
        id:"goddramon",
        name:"Goddramon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🌟 Dragón Supremo del Juicio Final 🌟",
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","ardiente","encanto","orgulloso","perfecto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Goddramon", img:"img/goddramon.png", base:{ power:1550, hp:14000, speed:36 }}
        ],
        stellarSkills:[
            { name:"Aliento Divino", desc:"Daño celestial.", unlock:6 },
            { name:"Llama Sagrada", desc:"Destrucción masiva.", unlock:12 },
            { name:"Escudo Divino", desc:"Defensa absoluta.", unlock:18 },
            { name:"Castigo Celestial", desc:"Aniquilación.", unlock:24 },
            { name:"Dragón del Génesis", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Divino: energía pura.",
            corrupcion:"Corrupción Celestial: poder inestable.",
            supreme:"Dragón creador absoluto."
        }
    },
    holydramon:{
        id:"holydramon",
        name:"Holydramon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"✨ Dragón Sagrado de la Esperanza ✨",
        family:"amable",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","pureza","simpatico","rabia","ritmo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Holydramon", img:"img/holydramon.png", base:{ power:1400, hp:14000, speed:34 }}
        ],
        stellarSkills:[
            { name:"Luz Sanadora", desc:"Curación masiva.", unlock:6 },
            { name:"Juicio Luminoso", desc:"Daño sagrado.", unlock:12 },
            { name:"Bendición Divina", desc:"Buff total.", unlock:18 },
            { name:"Llama Celestial", desc:"Aniquilación.", unlock:24 },
            { name:"Avatar Sagrado", desc:"Forma absoluta.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Luminoso: pureza total.",
            corrupcion:"Corrupción Celestial: luz corrompida.",
            supreme:"Manifestación divina."
        }
    },
    megidramon:{
        id:"megidramon",
        name:"Megidramon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🔥 Dragón del Apocalipsis Absoluto 🔥",
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["parca","gigante","ardiente","nomuerto","conflictivo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Megidramon", img:"img/megidramon.png", base:{ power:1350, hp:13000, speed:33 }}
        ],
        stellarSkills:[
            { name:"Llama Infernal", desc:"Destrucción brutal.", unlock:6 },
            { name:"Explosión Caótica", desc:"Daño masivo.", unlock:12 },
            { name:"Furia Apocalíptica", desc:"Buff extremo.", unlock:18 },
            { name:"Colapso Final", desc:"Aniquilación.", unlock:24 },
            { name:"Dragón del Fin", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Caótico: energía oscura.",
            corrupcion:"Corrupción Apocalíptica: destrucción total.",
            supreme:"Encarnación del fin."
        }
    },
    muchomon:{
        id:"muchomon",
        name:"Muchomon",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"🔥 Ave Sagrada del Fuego Celestial 🔥",
        title:null,
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["pureza","ardiente","encanto","ritmo","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"Muchomon",img:"img/muchomon.png",base:{power:155,hp:760,speed:16}},
            {name:"Akatorimon",img:"img/akatorimon.png",base:{power:345,hp:3820,speed:20}},
            {name:"Hippogryffomon",img:"img/hippogryphomon.png",base:{power:740,hp:6100,speed:24}},
            {name:"Zhuqiaomon",img:"img/zhuqiaomon.png",base:{power:1100,hp:8800,speed:35}}
        ],
        stellarSkills:[
            {name:"Pluma Ígnea",desc:"Daño elemental.",unlock:10},
            {name:"Vuelo Abrasador",desc:"Velocidad aumentada.",unlock:20},
            {name:"Llama Sagrada",desc:"Daño masivo.",unlock:30},
            {name:"Tormenta Solar",desc:"Aniquilación.",unlock:40},
            {name:"Ave Celestial",desc:"Forma definitiva.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Solar: energía ígnea.",
            corrupcion:"Corrupción Incandescente: fuego caótico.",
            supreme:"Encarnación del sol."
        }
    },
    bearmon:{
        id:"bearmon",
        name:"Bearmon",
        level:1,exp:0,stars:0,starPhase:0,fragments:0,
        activePower:null,stageIndex:0,
        mastery:{tier:0,level:1},
        classSystem:{tier:0,level:0,runes:0},
        uniqueTitle:"❄️ Guardián Glacial del Norte ❄️",
        title:null,
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["estatica","frio","conflictivo","naturalista","codicioso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            {name:"Bearmon",img:"img/bearmon.png",base:{power:162,hp:810,speed:18}},
            {name:"Gryzmon",img:"img/gryzmon.png",base:{power:355,hp:2900,speed:23}},
            {name:"LoaderLeomon",img:"img/loaderleomon.png",base:{power:660,hp:4400,speed:27}},
            {name:"Baihumon",img:"img/baihumon.png",base:{power:980,hp:6900,speed:32}}
        ],
        stellarSkills:[
            {name:"Garra Glacial",desc:"Daño helado.",unlock:10},
            {name:"Rugido Polar",desc:"Debuff enemigo.",unlock:20},
            {name:"Piel de Acero",desc:"Defensa aumentada.",unlock:30},
            {name:"Tormenta Ártica",desc:"Daño masivo.",unlock:40},
            {name:"Guardián Celestial",desc:"Forma suprema.",unlock:50}
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Ártico: control del hielo.",
            corrupcion:"Corrupción Glacial: congelación caótica.",
            supreme:"Protector absoluto."
        }
    },
    huanglongmon:{
        id:"huanglongmon",
        name:"Huanglongmon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐉 Emperador Dorado del Equilibrio Celestial 🐉",
        family:"escurridizo",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","dormilon","manada","orgulloso","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Huanglongmon", img:"img/huanglongmon.png", base:{ power:1300, hp:14000, speed:32 }}
        ],
        stellarSkills:[
            { name:"Juicio de los Cuatro Dioses", desc:"Daño celestial absoluto.", unlock:6 },
            { name:"Equilibrio Cósmico", desc:"Balance total del combate.", unlock:12 },
            { name:"Dragón del Centro", desc:"Buff supremo.", unlock:18 },
            { name:"Mandato Celestial", desc:"Control del campo.", unlock:24 },
            { name:"Avatar del Tao", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Dorado: armonía total.",
            corrupcion:"Corrupción Celestial: desequilibrio absoluto.",
            supreme:"Encarnación del orden universal."
        }
    },
    xuanwumon:{
        id:"xuanwumon",
        name:"Xuanwumon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        family:"robusto",
        uniqueTitle:"🐢 Guardián Abisal del Norte Eterno 🐢",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","naturalista","gigante","invencible","perfecto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Xuanwumon", img:"img/xuanwumon.png", base:{ power:1500, hp:16000, speed:18 }}
        ],
        stellarSkills:[
            { name:"Caparazón Sagrado", desc:"Defensa absoluta.", unlock:6 },
            { name:"Marea Abisal", desc:"Daño continuo.", unlock:12 },
            { name:"Peso del Norte", desc:"Reducción enemiga.", unlock:18 },
            { name:"Muralla Celestial", desc:"Inmunidad temporal.", unlock:24 },
            { name:"Tortuga del Fin", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Abisal: resistencia suprema.",
            corrupcion:"Corrupción Oscura: defensa corrupta.",
            supreme:"Baluarte del mundo."
        }
    },
    mihiramon:{
        id:"mihiramon",
        name:"Mihiramon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🦁 León Solar del Amanecer Dorado 🦁",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["pureza","ardiente","rabia","manada","codicioso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Mihiramon", img:"img/mihiramon.png", base:{ power:1450, hp:13500, speed:34 }}
        ],
        stellarSkills:[
            { name:"Garra Solar", desc:"Daño ardiente.", unlock:6 },
            { name:"Rugido del Alba", desc:"Buff ofensivo.", unlock:12 },
            { name:"Orgullo Celestial", desc:"Inmunidad a debuffs.", unlock:18 },
            { name:"Explosión Solar", desc:"Daño masivo.", unlock:24 },
            { name:"León del Amanecer", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Solar: energía pura.",
            corrupcion:"Corrupción Ígnea: fuego descontrolado.",
            supreme:"Avatar del sol naciente."
        }
    },
    majiramon:{
        id:"majiramon",
        name:"Majiramon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐉 Dragón Divino del Relámpago Sagrado 🐉",
        family:"misterioso",
        faction:"hero",
        activeFactionPower:false,
        attributes:["gigante","ardiente","frio","nomuerto","orgulloso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Majiramon", img:"img/majiramon.png", base:{ power:1550, hp:12500, speed:40 }}
        ],
        stellarSkills:[
            { name:"Carga Celestial", desc:"Daño veloz.", unlock:6 },
            { name:"Relámpago Sagrado", desc:"Daño eléctrico.", unlock:12 },
            { name:"Paso Divino", desc:"Evasión total.", unlock:18 },
            { name:"Tormenta de Juicio", desc:"Aniquilación.", unlock:24 },
            { name:"Dragón del Cielo", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Trueno: velocidad divina.",
            corrupcion:"Corrupción Eléctrica: caos veloz.",
            supreme:"Mensajero del cielo."
        }
    },
    vajramon:{
        id:"vajramon",
        name:"Vajramon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐎 Coloso del Trueno Celestial 🐎",
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","dormilon","estatica","ritmo","maquina"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Vajramon", img:"img/vajramon.png", base:{ power:1500, hp:14500, speed:22 }}
        ],
        stellarSkills:[
            { name:"Pisotón Divino", desc:"Daño masivo.", unlock:6 },
            { name:"Martillo del Cielo", desc:"Explosión eléctrica.", unlock:12 },
            { name:"Cuerpo Indestructible", desc:"Defensa extrema.", unlock:18 },
            { name:"Juicio del Vajra", desc:"Aniquilación.", unlock:24 },
            { name:"Avatar del Trueno", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Vajra: fuerza absoluta.",
            corrupcion:"Corrupción del Trueno: destrucción.",
            supreme:"Manifestación del rayo."
        }
    },
    kumbhiramon:{
        id:"kumbhiramon",
        name:"Kumbhiramon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐊 Devorador Sagrado de los Mares Antiguos 🐊",
        family:"guapo",
        faction:"hero",
        activeFactionPower:false,
        attributes:["encanto","rabia","conflictivo","simpatico","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Kumbhiramon", img:"img/kumbhiramon.png", base:{ power:1600, hp:13500, speed:26 }}
        ],
        stellarSkills:[
            { name:"Mordida Abisal", desc:"Daño brutal.", unlock:6 },
            { name:"Marea Divina", desc:"Daño continuo.", unlock:12 },
            { name:"Piel Ancestral", desc:"Reducción de daño.", unlock:18 },
            { name:"Diluvio Final", desc:"Aniquilación.", unlock:24 },
            { name:"Señor del Abismo", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Oceánico: control del mar.",
            corrupcion:"Corrupción Abisal: hambre eterna.",
            supreme:"Depredador divino."
        }
    },
    pajiramon:{
        id:"pajiramon",
        name:"Pajiramon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐐 Carnero del Juicio Divino 🐐",
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["ardiente","frio","rabia","conflictivo","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Pajiramon", img:"img/pajiramon.png", base:{ power:1500, hp:15000, speed:26 }}
        ],
        stellarSkills:[
                { name:"Embate Sagrado", desc:"Daño contundente.", unlock:6 },
            { name:"Orgullo Celestial", desc:"Buff ofensivo.", unlock:12 },
            { name:"Muralla Divina", desc:"Defensa elevada.", unlock:18 },
            { name:"Juicio del Carnero", desc:"Aniquilación.", unlock:24 },
            { name:"Bestia del Mandato", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Sagrado: fuerza pura.",
            corrupcion:"Corrupción Fanática: poder desmedido.",
            supreme:"Ejecutor del juicio divino."
        }
    },
    makuramon:{
        id:"makuramon",
        name:"Makuramon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐒 Mono del Caos Burlón 🐒",
        family:"oscuro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["nomuerto","conflictivo","simpatico","frio","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Makuramon", img:"img/makuramon.png", base:{ power:1450, hp:13000, speed:38 }}
        ],
        stellarSkills:[
            { name:"Burla Maldita", desc:"Debuffs.", unlock:6 },
            { name:"Salto Caótico", desc:"Alta evasión.", unlock:12 },
            { name:"Risa Profana", desc:"Descontrol enemigo.", unlock:18 },
            { name:"Pandemonio Celestial", desc:"Caos total.", unlock:24 },
            { name:"Avatar del Desorden", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal del Caos: imprevisibilidad.",
            corrupcion:"Corrupción Burlona: locura total.",
            supreme:"Manifestación del caos."
        }
    },
    sinduramon:{
        id:"sinduramon",
        name:"Sinduramon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0, activePower:null,
        stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        title:null,
        uniqueTitle:"🐓 Gallo del Alba Carmesí 🐓",
        family:"amable",
        faction:"hero",
        activeFactionPower:false,
        attributes:["gigante","ardiente","encanto","codicioso","estatica"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Sinduramon", img:"img/sinduramon.png", base:{ power:1500, hp:12500, speed:42 }}
        ],
        stellarSkills:[
            { name:"Grito del Amanecer", desc:"Buff aliado.", unlock:6 },
            { name:"Pluma Carmesí", desc:"Ataques rápidos.", unlock:12 },
            { name:"Orgullo Solar", desc:"Inmunidad.", unlock:18 },
            { name:"Explosión del Alba", desc:"Daño masivo.", unlock:24 },
            { name:"Heraldo del Día", desc:"Forma definitiva.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Solar: energía del alba.",
            corrupcion:"Corrupción Carmesí: furia desbordada.",
            supreme:"Heraldo del nuevo día."
        }
    },
    vikaralamon:{
        id:"vikaralamon",
        name:"Vikaralamon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"🐗 Deva del Jabalí Destructor 🐗",
        title:null,
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["gigante","conflictivo","rabia","estatica","dormilon"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Vikaralamon", img:"img/vikaralamon.png", base:{ power:1350, hp:14500, speed:22 } }
        ],
        stellarSkills:[
            { name:"Embestida Salvaje", desc:"Ataque brutal directo.", unlock:6 },
            { name:"Colmillos del Caos", desc:"Daño continuo feroz.", unlock:12 },
            { name:"Piel de Acero", desc:"Defensa masiva.", unlock:18 },
            { name:"Furia Deva", desc:"Incremento extremo de poder.", unlock:24 },
            { name:"Bestia Primordial", desc:"Destrucción absoluta.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Bestial: fuerza desatada.",
            corrupcion:"Corrupción Salvaje: poder incontrolable.",
            supreme:"Avatar del Deva Jabalí."
        }
    },
    sandiramon:{
        id:"sandiramon",
        name:"Sandiramon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"🐍 Deva Serpiente del Juicio 🐍",
        title:null,
        family:"escurridizo",
        faction:"villain",
        activeFactionPower:false,
        attributes:["manada","frio","rabia","orgulloso","conflictivo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Sandiramon", img:"img/sandiramon.png", base:{ power:1200, hp:11800, speed:40 } }
        ],
        stellarSkills:[
            { name:"Veneno Deva", desc:"Daño progresivo letal.", unlock:6 },
            { name:"Constricción Mortal", desc:"Control absoluto.", unlock:12 },
            { name:"Reflejos Serpiente", desc:"Velocidad extrema.", unlock:18 },
            { name:"Sangre Maldita", desc:"Debilita enemigos.", unlock:24 },
            { name:"Juicio Reptiliano", desc:"Aniquilación silenciosa.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Venenoso: daño amplificado.",
            corrupcion:"Corrupción Ofídica: toxicidad total.",
            supreme:"Forma suprema del Deva Serpiente."
        }
    },
    indaramon:{
        id:"indaramon",
        name:"Indaramon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"🐎 Deva del Corcel Celestial 🐎",
        title:null,
        family:"bestia",
        faction:"deva",
        activeFactionPower:false,
        attributes:["divino","ardiente","simpatico","invencible","orgulloso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Indaramon", img:"img/indaramon.png", base:{ power:1250, hp:13000, speed:36 } }
        ],
        stellarSkills:[
            { name:"Carga Sagrada", desc:"Ataque veloz devastador.", unlock:6 },
            { name:"Pisotón Celestial", desc:"Daño en área.", unlock:12 },
            { name:"Honor Deva", desc:"Resistencia elevada.", unlock:18 },
            { name:"Espíritu Indomable", desc:"Buffs personales.", unlock:24 },
            { name:"Corcel del Fin", desc:"Ataque final supremo.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Celestial: velocidad y poder.",
            corrupcion:"Corrupción Deva: fuerza desatada.",
            supreme:"Avatar del Corcel Divino."
        }
    },
    caturamon:{
        id:"caturamon",
        name:"Caturamon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"🐅 Deva Felino del Destino 🐅",
        title:null,
        family:"misterioso",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","ardiente","rabia","estatica","naturalista"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Caturamon", img:"img/caturamon.png", base:{ power:1300, hp:12500, speed:40 } }
        ],
        stellarSkills:[
            { name:"Garras del Juicio", desc:"Ataques rápidos letales.", unlock:6 },
            { name:"Salto Fantasma", desc:"Evasión total.", unlock:12 },
            { name:"Instinto Asesino", desc:"Críticos mejorados.", unlock:18 },
            { name:"Sombra Deva", desc:"Dominio del combate.", unlock:24 },
            { name:"Destino Cortado", desc:"Ejecución final.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Felino: agilidad extrema.",
            corrupcion:"Corrupción Salvaje: ferocidad total.",
            supreme:"Forma suprema del Deva Felino."
        }
    },
    sistermonNoir:{
        id:"sistermonNoir",
        name:"Sistermon Noir",
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"🌑 Monja del Pecado Silencioso 🌑",
        title:null,
        family:"oscuro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["orgulloso","parca","codicioso","simpatico","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Sistermon Noir", img:"img/sistermonNoir.png", base:{ power:220, hp:2200, speed:28 }},
            { name:"Sistermon Noir Awakened", img:"img/sistermonNoirAwakened.png", base:{ power:820, hp:6600, speed:36 }}
        ],
        stellarSkills:[
            { name:"Disparo Sombrío", desc:"Ataque rápido oscuro.", unlock:10 },
            { name:"Paso Silente", desc:"Aumenta evasión.", unlock:20 },
            { name:"Fe Distorsionada", desc:"Buff oscuro.", unlock:30 },
            { name:"Oración Prohibida", desc:"Gran daño oscuro.", unlock:40 },
            { name:"Despertar Noir", desc:"Poder total liberado.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Oscuro: precisión letal.",
            corrupcion:"Corrupción Devota: daño extremo.",
            supreme:"Fe oscura absoluta."
        }
    },
    sistermonBlanc:{
        id:"sistermonBlanc",
        name:"Sistermon Blanc",
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"🤍 Monja de la Fe Radiante 🤍",
        title:null,
        family:"amable",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","encanto","pureza","naturalista","orgulloso"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Sistermon Blanc", img:"img/sistermonBlanc.png",base:{ power:210, hp:2300, speed:26 }},
            { name:"Sistermon Blanc Awakened", img:"img/sistermonBlancAwakened.png", base:{ power:700, hp:6800, speed:34 }}
        ],
        stellarSkills:[
            { name:"Golpe Luminoso", desc:"Ataque de luz.", unlock:10 },
            { name:"Bendición Menor", desc:"Mejora defensiva.", unlock:20 },
            { name:"Fe Inquebrantable", desc:"Buff general.", unlock:30 },
            { name:"Juicio Blanco", desc:"Daño sagrado.", unlock:40 },
            { name:"Despertar Blanc", desc:"Luz absoluta.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Luminoso: pureza amplificada.",
            corrupcion:"Corrupción Sacra: poder inestable.",
            supreme:"Fe suprema manifestada."
        }
    },
    sistermonCiel:{
        id:"sistermonCiel",
        name:"Sistermon Ciel",
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"💙 Monja del Cielo Justiciero 💙",
        title:null,
        family:"guapo",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","nomuerto","simpatico","ritmo","frio"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Sistermon Ciel", img:"img/sistermonCiel.png",base:{ power:230, hp:2250, speed:30 }},
            { name:"Sistermon Ciel Awakened", img:"img/sistermonCielAwakened.png", base:{ power:740, hp:6700, speed:38 }}
        ],
        stellarSkills:[
            { name:"Ráfaga Celestial", desc:"Ataque veloz.", unlock:10 },
            { name:"Escudo Divino", desc:"Defensa temporal.", unlock:20 },
            { name:"Orden Sagrada", desc:"Buff de control.", unlock:30 },
            { name:"Castigo del Cielo", desc:"Daño masivo.", unlock:40 },
            { name:"Despertar Ciel", desc:"Justicia absoluta.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Celeste: velocidad divina.",
            corrupcion:"Corrupción Alada: poder caótico.",
            supreme:"Justicia suprema."
        }
    },
    victoryGreymon:{
        id:"victoryGreymon",
        name:"VictoryGreymon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"🔥 Dragón de la Victoria Absoluta 🔥",
        title:null,
        family:"valiente",
        faction:"hero",
        activeFactionPower:false,
        attributes:["rabia","maquina","ardiente","orgulloso","manada"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"VictoryGreymon", img:"img/victorygreymon.png", base:{ power:1700, hp:12500, speed:34 }}
        ],
        stellarSkills:[
            { name:"Espada Dracónica", desc:"Corte ígneo.", unlock:6 },
            { name:"Llama del Valor", desc:"Buff ofensivo.", unlock:12 },
            { name:"Corazón del Dragón", desc:"Resistencia extrema.", unlock:18 },
            { name:"Victoria Ardiente", desc:"Daño masivo.", unlock:24 },
            { name:"Final Victory", desc:"Golpe definitivo.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Ígneo: poder heroico.",
            corrupcion:"Corrupción Dracónica: furia total.",
            supreme:"Dragón supremo de la victoria."
        }
    },
    zeedGarurumon:{
        id:"zeedGarurumon",
        name:"ZeedGarurumon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"❄️ Lobo del Fin del Tiempo ❄️",
        title:null,
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["maquina","rabia","dormilon","invencible","frio"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"ZeedGarurumon", img:"img/zeedgarurumon.png", base:{ power:1650, hp:11500, speed:42 }}
        ],
        stellarSkills:[
            { name:"Colmillo Temporal", desc:"Ataque veloz.", unlock:6 },
            { name:"Escarcha Absoluta", desc:"Congela enemigos.", unlock:12 },
            { name:"Instinto Primordial", desc:"Críticos altos.", unlock:18 },
            { name:"Aullido del Fin", desc:"Debuff masivo.", unlock:24 },
            { name:"Extinción Glacial", desc:"Aniquilación total.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Glacial: precisión mortal.",
            corrupcion:"Corrupción Ártica: poder salvaje.",
            supreme:"Lobo supremo del fin."
        }
    },
    medievalDukemon:{
        id:"medievalDukemon",
        name:"MedievalDukemon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"⚔️ Caballero de la Era Oscura ⚔️",
        title:null,
        family:"caballero",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","ardiente","gigante","estatica","nomuerto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"MedievalDukemon", img:"img/medievaldukemon.png",base:{ power:1550, hp:14000, speed:32 }}
        ],
        stellarSkills:[
            { name:"Lanza Maldita", desc:"Ataque penetrante.", unlock:6 },
            { name:"Escudo Real", desc:"Defensa elevada.", unlock:12 },
            { name:"Código del Caballero", desc:"Buff balanceado.", unlock:18 },
            { name:"Cruzada Oscura", desc:"Daño sagrado/oscuro.", unlock:24 },
            { name:"Rey de la Edad Media", desc:"Dominio absoluto.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Real: poder equilibrado.",
            corrupcion:"Corrupción Caballeresca: fuerza brutal.",
            supreme:"Caballero supremo del Digimundo."
        }
    },
    pharaohmon:{
        id:"pharaohmon",
        name:"Pharaohmon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"🏺 Faraón del Juicio Eterno 🏺",
        title:null,
        family:"legendario",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","perfecto","pureza","invencible","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Pharaohmon", img:"img/pharaohmon.png", base:{ power:1780, hp:18800, speed:30 }}
        ],
        stellarSkills:[
            { name:"Maldición del Faraón", desc:"Debilita enemigos.", unlock:6 },
            { name:"Ojo del Más Allá", desc:"Precisión absoluta.", unlock:12 },
            { name:"Guardia Ancestral", desc:"Defensa elevada.", unlock:18 },
            { name:"Juicio Funerario", desc:"Daño masivo.", unlock:24 },
            { name:"Rey de los Muertos", desc:"Dominio eterno.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Ancestral: poder milenario.",
            corrupcion:"Corrupción Funeraria: muerte pura.",
            supreme:"Faraón supremo del Digimundo."
        }
    },
    shakamon:{
        id:"shakamon",
        name:"Shakamon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"🪷 Iluminado del Silencio Absoluto 🪷",
        title:null,
        family:"sagrado",
        faction:"hero",
        activeFactionPower:false,
        attributes:["divino","nomuerto","simpatico","gigante","perfecto"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Shakamon", img:"img/shakamon.png", base:{ power:1620, hp:18500, speed:28 }}
        ],
        stellarSkills:[
            { name:"Meditación Profunda", desc:"Reduce daño.", unlock:6 },
            { name:"Mantra Sagrado", desc:"Buff espiritual.", unlock:12 },
            { name:"Palma Iluminada", desc:"Daño de luz.", unlock:18 },
            { name:"Sello del Nirvana", desc:"Control total.", unlock:24 },
            { name:"Iluminación Suprema", desc:"Estado perfecto.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Iluminado: balance total.",
            corrupcion:"Corrupción Espiritual: poder inestable.",
            supreme:"Iluminación suprema."
        }
    },
    kakamon:{
        id:"kakamon",
        name:"Kakamon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"🐒 Heredero del Rey Mono 🐒",
        title:null,
        family:"robusto",
        faction:"hero",
        activeFactionPower:false,
        attributes:["encanto","ardiente","rabia","codicioso","pureza"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Kakamon", img:"img/kakamon.png", base:{ power:170, hp:820, speed:18 }},
            { name:"Hanumon", img:"img/hanumon.png", base:{ power:360, hp:3900, speed:22 }},
            { name:"Gokuwmon", img:"img/gokuwmon.png", base:{ power:660, hp:5000, speed:30 }},
            { name:"SeitenGokuwmon", img:"img/seitengokuwmon.png",base:{ power:920, hp:7200, speed:36 }}
        ],
        stellarSkills:[
            { name:"Bastón Giratorio", desc:"Ataque veloz.", unlock:10 },
            { name:"Salto Celestial", desc:"Aumenta evasión.", unlock:20 },
            { name:"Espíritu del Mono", desc:"Buff ofensivo.", unlock:30 },
            { name:"Furia Dorada", desc:"Daño elevado.", unlock:40 },
            { name:"Rey Mono Desatado", desc:"Forma definitiva.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Celestial: agilidad extrema.",
            corrupcion:"Corrupción Salvaje: poder caótico.",
            supreme:"Rey mono supremo."
        }
    },
    oinkmon:{
        id:"oinkmon",
        name:"Oinkmon",
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"🐷 Glotón del Poder Descomunal 🐷",
        title:null,
        family:"guapo",
        faction:"hero",
        activeFactionPower:false,
        attributes:["encanto","rabia","simpatico","estatica","maquina"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Oinkmon", img:"img/oinkmon.png", base:{ power:130, hp:800, speed:16 }},
            { name:"Burpmon", img:"img/burpmon.png", base:{ power:340, hp:3100, speed:20 }},
            { name:"Cho-hakkaimon", img:"img/cho-hakkaimon.png", base:{ power:730, hp:5400, speed:25 }},
            { name:"MegaHakkaimon", img:"img/megahakkaimon.png", base:{ power:1080, hp:7800, speed:29 }}
        ],
        stellarSkills:[
            { name:"Tragón Brutal", desc:"Aumenta HP.", unlock:10 },
            { name:"Golpe Pesado", desc:"Daño contundente.", unlock:20 },
            { name:"Coraje Glotón", desc:"Buff defensivo.", unlock:30 },
            { name:"Ira Desmedida", desc:"Daño masivo.", unlock:40 },
            { name:"Devorador Supremo", desc:"Forma final.", unlock:50 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Voraz: resistencia extrema.",
            corrupcion:"Corrupción Glotona: fuerza salvaje.",
            supreme:"Bestia suprema del apetito."
        }
    },
    sagomon:{
        id:"sagomon",
        name:"Sagomon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"🐟 Abismo Viviente del Caos 🐟",
        title:null,
        family:"oscuro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["parca","conflictivo","ardiente","estatica","ritmo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Sagomon", img:"img/sagomon.png", base:{ power:1500, hp:15000, speed:26 }}
        ],
        stellarSkills:[
            { name:"Mordida Abismal", desc:"Daño brutal.", unlock:6 },
            { name:"Marea Oscura", desc:"Debuff enemigo.", unlock:12 },
            { name:"Caparazón Profundo", desc:"Alta defensa.", unlock:18 },
            { name:"Tormenta Marina", desc:"Daño en área.", unlock:24 },
            { name:"Señor del Abismo", desc:"Dominio total.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Abisal: poder oceánico.",
            corrupcion:"Corrupción Marina: caos total.",
            supreme:"Bestia suprema del abismo."
        }
    },
    kinkakumon:{
        id:"kinkakumon",
        name:"Kinkakumon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"✨ Demonio Dorado del Exceso ✨",
        title:null,
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["divino","parca","infectado","nomuerto","gigante"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Kinkakumon", img:"img/kinkakumon.png", base:{ power:1520, hp:13200, speed:34 }}
        ],
        stellarSkills:[
            { name:"Oro Maldito", desc:"Debuff enemigo.", unlock:6 },
            { name:"Risa Demoníaca", desc:"Confusión.", unlock:12 },
            { name:"Puño Dorado", desc:"Daño elevado.", unlock:18 },
            { name:"Tesoro Prohibido", desc:"Buff extremo.", unlock:24 },
            { name:"Rey del Exceso", desc:"Dominio absoluto.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Dorado: poder desbordante.",
            corrupcion:"Corrupción Áurea: locura total.",
            supreme:"Demonio supremo del oro."
        }
    },
    ginkakumon:{
        id:"ginkakumon",
        name:"Ginkakumon",
        isBoss:true,
        level:1, exp:0, stars:0, starPhase:0, fragments:0,
        activePower:null, stageIndex:0,
        mastery:{tier:0, level:1},
        classSystem:{tier:0, level:0, runes:0},
        uniqueTitle:"🌙 Demonio Plateado del Engaño 🌙",
        title:null,
        family:"siniestro",
        faction:"villain",
        activeFactionPower:false,
        attributes:["conflictivo","ardiente","gigante","rabia","tramposo"],
        activeAttributes:[],
        soul:{ phase:0, count:0, spirits:0 },
        evolutions:[
            { name:"Ginkakumon", img:"img/ginkakumon.png", base:{ power:1490, hp:14800, speed:36 }}
        ],
        stellarSkills:[
            { name:"Reflejo Lunar", desc:"Evasión alta.", unlock:6 },
            { name:"Trampa Plateada", desc:"Control.", unlock:12 },
            { name:"Filo Ilusorio", desc:"Daño crítico.", unlock:18 },
            { name:"Espejo Maldito", desc:"Contraataque.", unlock:24 },
            { name:"Señor del Engaño", desc:"Ilusión total.", unlock:30 }
        ],
        activeSkill:null,
        powerDescriptions:{
            cristal:"Cristal Lunar: velocidad extrema.",
            corrupcion:"Corrupción Plateada: engaño absoluto.",
            supreme:"Demonio supremo de la luna."
        }
    }

}       
const starPhases = [
    { name:"Normal", color:"#bbb", multi:1.00 },
    { name:"Super", color:"#00bfff", multi:1.15 },
    { name:"Mega", color:"#b54cff", multi:1.35 },
    { name:"Legendaria", color:"#ffd700", multi:1.60 },
    { name:"Heroica", color:"#ff3333", multi:1.90 },
    { name:"Suprema", color:"#00ffae", multi:2.50 }
]
const soulPhases = [
    { name:"Normal", need:10, max:10, bonus:{power:0.01, hp:0.02}},
    { name:"Super", need:10, max:10, bonus:{power:0.015, hp:0.025}},
    { name:"Hyper", need:10, max:10, bonus:{power:0.02, hp:0.03}},
    { name:"Ultra", need:10, max:10, bonus:{power:0.03, hp:0.04}},
    { name:"Mega", need:10, max:10, bonus:{power:0.04, hp:0.05}},
    { name:"Maestra", need:10, max:10, bonus:{power:0.05, hp:0.06}},
    { name:"Legendaria", need:10, max:10, bonus:{power:0.06, hp:0.07}},
    { name:"Mitica", need:10, max:10, bonus:{power:0.07, hp:0.08}},
    { name:"Heroica", need:10, max:10, bonus:{power:0.085,hp:0.095}},
    { name:"Celestial", need:10, max:10, bonus:{power:0.10, hp:0.11}},
    { name:"Suprema", need:10,  max:5,  bonus:{power:0.15, hp:0.18}}
]
const soulColors = [
    "#9e9e9e", // Normal (gris)
    "#4fc3f7", // Super (azul)
    "#00e5ff", // Hyper (cian)
    "#1de9b6", // Ultra (turquesa)
    "#76ff03", // Mega (verde neón)
    "#ffd600", // Maestra (dorado)
    "#ff9100", // Legendaria (naranja fuego)
    "#ff1744", // Mitica (rojo carmesí)
    "#d500f9", // Heroica (violeta)
    "#7c4dff", // Celestial (púrpura divino)
    "#ffffff"  // Suprema (blanco absoluto)
]
const masteryTiers = [
    { name: "Bronce", color: "#cd7f32", power: 1.05, hp: 1.08, levels: 3 },
    { name: "Plata", color: "#c0c0c0", power: 1.10, hp: 1.12, levels: 3 },
    { name: "Oro", color: "#ffd700", power: 1.15, hp: 1.18, levels: 3 },
    { name: "Safiro", color: "#1e90ff", power: 1.22, hp: 1.25, levels: 3 },
    { name: "Esmeralda", color: "#00c853", power: 1.30, hp: 1.35, levels: 3 },
    { name: "Rubi", color: "#ff1744", power: 1.38, hp: 1.45, levels: 3 },
    { name: "Amatista", color: "#9c27b0", power: 1.48, hp: 1.55, levels: 3 },
    { name: "Perla", color: "#f8bbd0", power: 1.60, hp: 1.70, levels: 3 },
    { name: "Obsidiana", color: "#212121", power: 1.75, hp: 1.85, levels: 3 },
    { name: "Diamante", color: "#00e5ff", power: 2.00, hp: 2.20, levels: 5 }
]
const masteryTitles = [
    "El Elegido Supremo",
    "Guardián del Digimundo",
    "Avatar Digital",
    "Emperador de los Digimon",
    "Leyenda Viviente"
]
const classTiers = [
    { name:"Normal", color:"#aaa", power:1.00, hp:1.00, levels:1 },
    { name:"Verde", color:"#00c853", power:1.05, hp:1.08, levels:2 },
    { name:"Azul", color:"#2196f3", power:1.10, hp:1.12, levels:3 },
    { name:"Púrpura", color:"#9c27b0", power:1.18, hp:1.20, levels:4 },
    { name:"Naranja", color:"#ff9800", power:1.25, hp:1.30, levels:4 },
    { name:"Rojo", color:"#ff1744", power:1.35, hp:1.40, levels:5 },
    { name:"Amarillo", color:"#ffeb3b", power:1.45, hp:1.55, levels:6 },
    { name:"Bronce", color:"#cd7f32", power:1.60, hp:1.70, levels:4 },
    { name:"Plata", color:"#cfd8dc", power:1.75, hp:1.85, levels:4 },
    { name:"Oro", color:"#ffd700", power:1.90, hp:2.00, levels:4 },
    { name:"Platino", color:"#e0f7fa", power:2.05, hp:2.15, levels:4 },
    { name:"Safiro", color:"#00bcd4", power:2.25, hp:2.35, levels:5 },
    { name:"Esmeralda", color:"#00e676", power:2.45, hp:2.60, levels:6 },
    { name:"Rubí", color:"#ff1744", power:2.70, hp:2.90, levels:6 },
    { name:"Amatista", color:"#9c27b0", power:3.00, hp:3.20, levels:7 },
    { name:"Perla", color:"#f8bbd0", power:3.30, hp:3.60, levels:7 },
    { name:"Obsidiana", color:"#212121", power:3.70, hp:4.00, levels:8 },
    { name:"Diamante", color:"#00e5ff", power:4.50, hp:5.00, levels:10 }
]
const families = {
    valiente:   { name:"Valiente", color:"#ff5252", icon:"🗡️" },
    misterioso:{ name:"Misterioso", color:"#9c27b0", icon:"🔮" },
    robusto:   { name:"Robusto", color:"#795548", icon:"🛡️" },
    guapo:     { name:"Guapo", color:"#ff4081", icon:"✨" },
    amable:    { name:"Amable", color:"#4caf50", icon:"🌿" },
    oscuro:    { name:"Oscuro", color:"#212121", icon:"🌑" },
    siniestro: { name:"Siniestro", color:"#b71c1c", icon:"☠️" },
    escurridizo:{name:"Escurridizo", color:"#03a9f4", icon:"💨" },
    legendario:{ name:"Legendario", color:"#ffc107", icon:"👑" },
    malvado:   { name:"Malvado", color:"#6a1b9a", icon:"😈" }
}
const factions = {
    hero: {
        name: "Héroe",
        color: "#00e5ff",
        icon: "🛡️",
        buffs: { power: 1.6, hp: 1.7, speed: 1.4 }
    },
    villain: {
        name: "Villano",
        color: "#ff1744",
        icon: "☠️",
        buffs: { power: 1.9, hp: 1.5, speed: 1.6 }
    }
}
const attributesDB = {
    rabia: {
        name: "Rabia",
        desc: "Libera un estado de furia que acelera acciones y vuelve al Digimon más agresivo."
    },
    estatica: {
        name: "Estática",
        desc: "Carga energía eléctrica que puede paralizar o interrumpir acciones."
    },
    encanto: {
        name: "Encanto",
        desc: "Reduce la hostilidad enemiga y provoca errores momentáneos."
    },
    nomuerto: {
        name: "No-muerto",
        desc: "Permite seguir combatiendo incluso en condiciones críticas."
    },
    invencible: {
        name: "Invencible",
        desc: "Otorga inmunidad total por un breve periodo."
    },
    ritmo: {
        name: "Ritmo",
        desc: "Sincroniza acciones consecutivas con perfecta fluidez."
    },
    codicioso: {
        name: "Codicioso",
        desc: "Incrementa la obtención de recompensas y recursos."
    },
    ardiente: {
        name: "Ardiente",
        desc: "Envuelve al Digimon en energía ígnea que daña progresivamente."
    },
    parca: {
        name: "Parca",
        desc: "Marca enemigos haciendo inevitables ciertos efectos."
    },
    divino: {
        name: "Divino",
        desc: "Purifica estados negativos y fortalece efectos sagrados."
    },
    maquina: {
        name: "Máquina",
        desc: "Inmune a control mental y efectos emocionales."
    },
    naturalista: {
        name: "Naturalista",
        desc: "Conexión natural que activa regeneración pasiva."
    },
    conflictivo: {
        name: "Conflictivo",
        desc: "Se potencia conforme el combate se extiende."
    },
    pureza: {
        name: "Pureza",
        desc: "Elimina corrupción y debuffs oscuros."
    },
    dormilon: {
        name: "Dormilón",
        desc: "Entra en reposo especial que restaura energía."
    },
    simpatico: {
        name: "Simpático",
        desc: "Mejora interacciones y reduce agresividad enemiga."
    },
    tramposo: {
        name: "Tramposo",
        desc: "Evade reglas normales con efectos inesperados."
    },
    frio: {
        name: "Frío-frío",
        desc: "Congela acciones y ralentiza enemigos."
    },
    manada: {
        name: "Manada",
        desc: "Mejora su desempeño junto a aliados."
    },
    gigante: {
        name: "Gigante",
        desc: "Reduce empujes e interrupciones."
    },
    perfecto: {
        name: "Perfecto",
        desc: "Evita fallos y efectos aleatorios negativos."
    },
    infectado: {
        name: "Infectado",
        desc: "Propaga estados anómalos al contacto."
    },
    orgulloso: {
        name: "Orgulloso",
        desc: "Rechaza debilitamientos y reducciones."
    }
}
const powerModes = {
    cristal: {
        name: "Cristal",
        color: "#00ffff",
        power: 1.25,
        hp: 1.15,
        speed: 1.20
    },
    corrupcion: {
        name: "Corrupción",
        color: "#ff0033",
        power: 1.45,
        hp: 0.85,
        speed: 1.35
    }
}
let page = 0
const PAGE_SIZE = 25
function togglePower(id, type) {
    const d = digimons[id]
    let unlock
    if(type === "supreme"){
        unlock = d.isBoss ? 40 : 60
    } else {
        unlock = d.isBoss ? 30 : 50
    }
    if (d.level < unlock) {
        alert(`Se desbloquea al nivel ${unlock}`)
        return
    }
    if (d.activePower && d.activePower !== type) {
        d.activePower = type
    } else if (d.activePower === type) {
        d.activePower = null
    } else {
        d.activePower = type
    }
    render()
}
function toggleFactionPower(id) {
    const d = digimons[id]
    d.activeFactionPower = !d.activeFactionPower
    render()
}
function setStellarSkill(id, index) {
    const d = digimons[id]
    const skill = d.stellarSkills[index]
    if (d.level < skill.unlock) {
        alert(`Se desbloquea al nivel ${skill.unlock}`)
        return
    }
    d.activeSkill = index
    render()
}
function getAttributeUnlock(d){
    return d.isBoss ? 20 : 30
}
function toggleAttribute(id, key){
    const d = digimons[id]
    // 🛡 blindaje total
    if(!Array.isArray(d.activeAttributes)){
        d.activeAttributes = []
    }
    if(!Array.isArray(d.attributes)){
        d.attributes = []
    }
    const unlock = d.isBoss ? 20 : 30
    if(d.level < unlock){
        alert(`Atributos se desbloquean al nivel ${unlock}`)
        return
    }
    const index = d.activeAttributes.indexOf(key)
    // quitar
    if(index !== -1){
        d.activeAttributes.splice(index,1)
    }
    // agregar
    else{
        if(d.activeAttributes.length >= 2){
            alert("Solo puedes equipar 2 atributos")
            return
        }
        d.activeAttributes.push(key)
    }
    render()
}
function renderAttributes(d){
    // 🛡 blindaje absoluto
    if(!Array.isArray(d.activeAttributes)){
        d.activeAttributes = []
    }
    if(!Array.isArray(d.attributes)){
        d.attributes = []
    }
    const unlock = getAttributeUnlock(d)
    if(d.level < unlock){
        return `<small>🔒 Atributos se desbloquean al nivel ${unlock}</small>`
    }
    return d.attributes.map(attr => {
        const a = attributesDB[attr]
        if(!a) return ""
        const active = d.activeAttributes.includes(attr)
        return `
            <div class="attribute ${active ? 'active' : ''}"
                data-id="${d.id}"
                data-attr="${attr}">
                <strong>${a.name}</strong>
                <p>${a.desc}</p>
            </div>
        `
    }).join("")
}
function addSoul(id, amount = 1){
    const d = digimons[id]
    if(!d.soul){
        d.soul = { phase:0, count:0, spirits:0 }
    }
    let phaseData = soulPhases[d.soul.phase]
    d.soul.spirits += amount
    while(d.soul.spirits >= phaseData.need){
        d.soul.spirits -= phaseData.need
        d.soul.count++
        // ⚡ OJO: SOLO sube de fase si YA ESTABA LLENA
        if(d.soul.count > phaseData.max){
            if(d.soul.phase < soulPhases.length - 1){
                d.soul.phase++
                d.soul.count = 1   // empieza con 1 alma de la nueva fase
                phaseData = soulPhases[d.soul.phase]
            }else{
                // Suprema: se queda fija
                d.soul.count = phaseData.max
                d.soul.spirits = 0
                break
            }
        }
    }
    render()
}
function getSoulBonus(d){
    if(!d.soul) return {power:1, hp:1}
    let power = 1
    let hp = 1
    for(let i=0;i<=d.soul.phase;i++){
        const b = soulPhases[i].bonus
        power += b.power * (i === d.soul.phase ? d.soul.count : soulPhases[i].max)
        hp += b.hp * (i === d.soul.phase ? d.soul.count : soulPhases[i].max)
    }
    return { power, hp }
}
function renderSouls(d){
    if(!d.soul) return ""
    const phase = soulPhases[d.soul.phase]
    const max = phase.max
    const color = soulColors[d.soul.phase]
    let html = `<div class="souls" style="--soul:${color}">`
    for(let i = 0; i < max; i++){
        const active = i < d.soul.count
        html += `
            <span class="soul ${active ? 'active' : ''}">
                <span class="bolt">⚡</span>
            </span>
        `
    }
    html += `</div>`
    return html
}
function calculateStats(d) {
    const evo = d.evolutions[d.stageIndex]
    const phase = starPhases[d.starPhase] || starPhases[0]
    let power = evo.base.power
    let hp = evo.base.hp
    let speed = evo.base.speed
    power *= (1 + d.level * 0.05)
    hp *= (1 + d.level * 0.08)
    power *= (1 + d.stars * 0.04) * phase.multi
    hp *= (1 + d.stars * 0.04) * phase.multi
    speed += Math.floor(d.level / 5)
    // PODER ESPECIAL
    if (d.activePower) {
        const p = powerModes[d.activePower]
        power *= p.power
        hp *= p.hp
        speed *= p.speed
    }
    const mastery = masteryTiers[d.mastery.tier]
    const masteryBase = mastery.power
    const masteryGrowth = 1 + (d.mastery.level * 0.035)
    power *= masteryBase * masteryGrowth
    hp *= mastery.hp * masteryGrowth
    const cls = classTiers[d.classSystem.tier]
    const classBase = cls.power
    const classGrowth = 1 + (d.classSystem.level * 0.06)
    power *= classBase * classGrowth
    hp *= cls.hp * classGrowth
    // SUPER PODER DE BANDO
    const supremeUnlock = d.isBoss ? 40 : 60
    if (d.activeFactionPower && d.level >= supremeUnlock) {
        const f = factions[d.faction]
        power *= f.buffs.power
        hp *= f.buffs.hp
        speed *= f.buffs.speed
    }
    // 🧿 bonus del alma
    if(d.soul){
        const soul = getSoulBonus(d)
        power = Math.floor(power * soul.power)
        hp = Math.floor(hp * soul.hp)
    }
    return {
        power: Math.floor(power),
        hp: Math.floor(hp),
        speed: Math.floor(speed)
    }
}
function evolve(id) {
    const d = digimons[id]
    if (d.stageIndex < d.evolutions.length - 1) {
        d.stageIndex++
        render()
    }
}
function levelUp(id) {
    const d = digimons[id]
    const maxLevel = d.isBoss ? 40 : 60
    if (d.level < maxLevel) {
        d.level++
        render()
    }
}
function getExpMax(level) {
    return Math.floor(25 + level * 10)
}
function addExp(id, amount = 25) {
    const d = digimons[id]
    d.exp += amount
    const maxLevel = d.isBoss ? 40 : 60
    while (d.exp >= getExpMax(d.level)) {
        d.exp -= getExpMax(d.level)
        if (d.level < maxLevel) d.level++
    }
    render()
}
function addFragments(id, amount = 1) {
    const d = digimons[id]
    d.fragments += amount
    while (d.fragments >= 20) {
        d.fragments -= 20
        if (d.starPhase < starPhases.length - 1) {
            d.stars++
            if (d.stars >= 6) {
                d.stars = 1
                d.starPhase++
            }
        }
    }
    render()
}
function renderStars(d) {
    let html = ""
    const phase = starPhases[d.starPhase] || starPhases[0]
    for (let i = 0; i < d.stars; i++) {
        html += `<span style="color:${phase.color}">★</span>`
    }
    return html + ` <small>${phase.name}</small>`
}
function upgradeMastery(id) {
    const d = digimons[id]
    const tier = masteryTiers[d.mastery.tier]
    d.mastery.level++
    if (d.mastery.level > tier.levels) {
        d.mastery.level = 1
        d.mastery.tier++
        if (d.mastery.tier >= masteryTiers.length) {
            d.mastery.tier = masteryTiers.length - 1
            d.mastery.level = masteryTiers[d.mastery.tier].levels
            if (!d.title) {
                d.title = d.uniqueTitle
            }
        }
    }
    render()
}
function setMastery(id, tier, level) {
    const d = digimons[id]
    d.mastery.tier = tier
    d.mastery.level = level
    if (tier === 9 && level === 5 && !d.title) {
        d.title = d.uniqueTitle
    }
    render()
}
function addRune(id, amount=1){
    const d = digimons[id]
    d.classSystem.runes += amount
    while(d.classSystem.runes >= 6){
        d.classSystem.runes -= 6
        ascendClass(id)
    }
    render()
}
function ascendClass(id){
    const d = digimons[id]
    const tier = classTiers[d.classSystem.tier]
    d.classSystem.level++
    if(d.classSystem.level >= tier.levels) {
        d.classSystem.level = 0
        d.classSystem.tier++
        if(d.classSystem.tier >= classTiers.length) {
        d.classSystem.tier = classTiers.length - 1
        d.classSystem.level = classTiers[d.classSystem.tier].levels - 1
        }
    }
}
function setClass(id,tier,level=0){
    const d = digimons[id]
    d.classSystem.tier = tier
    d.classSystem.level = level
    d.classSystem.runes = 0
    render()
}
function roman(n){
    return ["I","II","III","IV","V","VI","VII","VIII","IX","X"][n-1] || ""
}
const container = document.getElementById("cards")
document.addEventListener("click", e => {
    const el = e.target.closest(".attribute")
    if(!el) return
    const id = el.dataset.id
    const attr = el.dataset.attr
    toggleAttribute(id, attr)
})
function render() {
    cards.innerHTML = ""
    const list = Object.values(digimons)
    const start = page * PAGE_SIZE
    const end = start + PAGE_SIZE
    list.slice(start, end).forEach(d => {
        if(!d.soul){
            d.soul = { phase:0, count:0, spirits:0 }
        }
        const evo = d.evolutions[d.stageIndex]
        const stats = calculateStats(d)
        const phase = starPhases[d.starPhase]
        const expPercent = (d.exp / getExpMax(d.level)) * 100
        const fragPercent = (d.fragments / 20) * 100
        const mastery = masteryTiers[d.mastery.tier]
        const cls = classTiers[d.classSystem.tier]
        const runePercent = (d.classSystem.runes / 6) * 100
        const fam = families[d.family] || families.valiente
        const powerUnlock = d.isBoss ? 30 : 50
        const supremeUnlock = d.isBoss ? 40 : 60
        cards.innerHTML += `
        <div class="card" style="border:2px solid ${phase.color}">
            ${d.isBoss ? `<div class="boss-tag">👑 JEFE SUPREMO</div>` : ""}
            <img src="${evo.img}">
            <h3 style="color:${phase.color}">${evo.name}</h3>
            <div class="family" style="--c:${fam.color}">
                <span class="icon ${d.family}"></span>
                <span>${fam.name}</span>
            </div>
            <div class="stars">${renderStars(d)}</div>
            <div class="soul-box" style="--soul:${soulColors[d.soul.phase]}">
                <h4 class="soul-title">
                    ⚡ Alma ${soulPhases[d.soul.phase].name}
                </h4>
                    ${renderSouls(d)}
                <div class="soul-progress">
                    <div class="soul-bar">
                        <div class="fill" style="width:${(d.soul.spirits / soulPhases[d.soul.phase].need) * 100}%"></div>
                    </div>
                    <div class="soul-text">
                        ${d.soul.spirits} / ${soulPhases[d.soul.phase].need} espíritus
                    </div>
                </div>
            </div>
            <p>Nivel ${d.level}</p>
            <div class="mastery" style="border-color:${mastery.color}">
                <strong style="color:${mastery.color}">
                    ${mastery.name} ${d.mastery.level}
                </strong>
                <button onclick="upgradeMastery('${d.id}')">⬆</button>
                <select onchange="setMastery('${d.id}', this.value, 1)">
                    ${masteryTiers.map((m,i)=>
                `<option value="${i}" ${i===d.mastery.tier?'selected':''}>
                    ${m.name}
                </option>`).join("")}
                </select>
            </div>
            ${d.title ? `<div class="title">👑 ${d.title}</div>` : ""}
            <div class="bar exp">
                <div class="fill" style="width:${expPercent}%"></div>
            </div>
            <div class="bar frag">
                <div class="fill" style="width:${fragPercent}%"></div>
            </div>
            <div class="class-box" style="border-color:${cls.color}">
                <strong style="color:${cls.color}">
                    ${cls.name} ${roman(d.classSystem.level+1)}
                </strong>
                <div class="bar rune">
                    <div class="fill" style="width:${runePercent}%"></div>
                </div>
                <button onclick="addRune('${d.id}',1)">+Runa</button>
                <select onchange="setClass('${d.id}',this.value,0)">
                    ${classTiers.map((c,i)=>`
                <option value="${i}" ${i===d.classSystem.tier?'selected':''}>
                    ${c.name}
                </option>
            `).join("")}
            </select>
        </div>
            <p>⚔ Poder: ${stats.power}</p>
            <p>❤️ HP: ${stats.hp}</p>
            <p>⚡ Vel: ${stats.speed}</p>
            ${d.level >= powerUnlock ? `
            <div class="powers">
                <button class="power cristal ${d.activePower==='cristal'?'active':''}"
                title="${d.powerDescriptions.cristal}" onclick="togglePower('${d.id}','cristal')">
                    💎 Cristal
                </button>
                <button class="power corrupcion ${d.activePower==='corrupcion'?'active':''}"
                title="${d.powerDescriptions.corrupcion}" onclick="togglePower('${d.id}','corrupcion')">
                    ☠ Corrupción
                </button>
            </div>
        ` : `<small>🔒 Poderes desbloquean en nivel ${powerUnlock}</small>`}
            ${d.level >= supremeUnlock ? `
            <div class="faction-power" style="border-color:${factions[d.faction].color}">
                <button class="power faction ${d.activeFactionPower?'active':''}" title="${d.powerDescriptions.supreme}" onclick="toggleFactionPower('${d.id}')">
                    ${factions[d.faction].icon}
                    ${factions[d.faction].name} Supremo
                </button>
            </div>
        ` : `<small>🔒 Superpoder desbloquea en nivel ${supremeUnlock}</small>`}
            <div class="skills-box">
                <h4>✨ Habilidades Estelares</h4>
                ${renderSkills(d)}
            </div>
            <div class="attributes-box">
                <h4>🧬 Atributos</h4>
                ${renderAttributes(d)}
            </div>
            <button onclick="addExp('${d.id}',40)">+EXP</button>
            <button onclick="addFragments('${d.id}',5)">+Frag</button>
            <button onclick="evolve('${d.id}')">Evolucionar</button>
            <button onclick="addSoul('${d.id}',1)">⚡ +Espíritu</button>
        </div>
    `
    function renderSkills(d) {
        if (!d.stellarSkills) return ""
        return d.stellarSkills.map((s,i)=>{
        const locked = d.level < s.unlock
        return `
            <div class="skill ${d.activeSkill===i?'active':''} ${locked?'locked':''}"
                onclick="setStellarSkill('${d.id}',${i})">
                <strong>${s.name}</strong>
                <small>Nivel ${s.unlock}</small>
                <p>${s.desc}</p>
            </div>
            `
            }).join("")
        }
    })
    document.getElementById("pageIndicator").textContent = `Pagina ${page+1} / ${Math.ceil(list.length / PAGE_SIZE)}`
}
function nextPage(){
    const max = Math.ceil(Object.keys(digimons).length / PAGE_SIZE)
    if(page < max-1){
        page++
        render()
    }
}
function prevPage(){
    if(page > 0){
        page--
        render()
    }
}

render()
