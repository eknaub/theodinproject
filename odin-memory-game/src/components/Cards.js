import Card from './Card';
import { useState, useEffect} from 'react';

import caranthir from "../images/monsters/caranthir.jpg";
import dettlaff from "../images/monsters/dettlaff.jpg";
import eredin from "../images/monsters/eredin.jpg";
import imlerith from "../images/monsters/imlerith.jpg";
import naglfar from "../images/monsters/naglfar.jpg";
import tirnalia from "../images/monsters/tirnalia.jpg";
import whispess from "../images/monsters/whispess.jpg";

import ciri from "../images/neutral/ciri.jpg";
import dandelion from "../images/neutral/dandelion.jpg";
import gaunterodimm from "../images/neutral/gaunterodimm.jpg";
import geralt from "../images/neutral/geralt.jpg";
import regis from "../images/neutral/regis.jpg";
import triss from "../images/neutral/triss.jpg";
import yennefer from "../images/neutral/yennefer.jpg";

import annaHenrietta from "../images/nilfgaard/annaHenrietta.jpg";
import beauclair from "../images/nilfgaard/beauclair.jpg";
import coupDeGrace from "../images/nilfgaard/coupDeGrace.jpg";
import emhyr from "../images/nilfgaard/emhyr.jpg";
import masqueradeBall from "../images/nilfgaard/masqueradeBall.jpg";
import tiborEggebracht from "../images/nilfgaard/tiborEggebracht.jpg";
import vivienneDeTabris from "../images/nilfgaard/vivienneDeTabris.jpg";

import draug from "../images/northern_realms/draug.jpg";
import philippa from "../images/northern_realms/philippa.jpg";
import radovid from "../images/northern_realms/radovid.jpg";
import roche from "../images/northern_realms/roche.jpg";
import shani from "../images/northern_realms/shani.jpg";
import siege from "../images/northern_realms/siege.jpg";
import warElephant from "../images/northern_realms/warElephant.jpg";

import aucwenn from "../images/scoiatael/aucwenn.jpg";
import iorveth from "../images/scoiatael/iorveth.jpg";
import mysteriesOfLocFeainn from "../images/scoiatael/mysteriesOfLocFeainn.jpg";
import saesenthessis from "../images/scoiatael/saesenthessis.jpg";
import theGreatOak from "../images/scoiatael/theGreatOak.jpg";
import waterOfBrokilon from "../images/scoiatael/waterOfBrokilon.jpg";
import zoltanChivay from "../images/scoiatael/zoltanChivay.jpg";

import bloodEagle from "../images/skellige/bloodEagle.jpg";
import crachAnCraite from "../images/skellige/crachAnCraite.jpg";
import crowsEyeRhizome from "../images/skellige/crowsEyeRhizome.jpg";
import endlessVoyage from "../images/skellige/endlessVoyage.jpg";
import hemdall from "../images/skellige/hemdall.jpg";
import olaf from "../images/skellige/olaf.jpg";
import svalblodTotem from "../images/skellige/svalblodTotem.jpg";

import countReuvensTreasure from "../images/syndicate/countReuvensTreasure.jpg";
import kingOfBeggars from "../images/syndicate/kingOfBeggars.jpg";
import savolla from "../images/syndicate/savolla.jpg";
import sigiReuven from "../images/syndicate/sigiReuven.jpg";
import tatterwing from "../images/syndicate/tatterwing.jpg";
import theFlyingRedanian from "../images/syndicate/theFlyingRedanian.jpg";
import vivaldiBank from "../images/syndicate/vivaldiBank.jpg";

function Cards(props) {
  const {handleGameLoop, level, score, highscore} = props;

  let imgMonsters = [
    {
      imgPath: caranthir,
      title: "Caranthir Ar-Feiniel",
    },
    {
      imgPath: dettlaff,
      title: "Dettlaff van der Eretein",
    },
    {
      imgPath: eredin,
      title: "Eredin Bréacc Glas",
    },
    {
      imgPath: imlerith,
      title: "Imlerith",
    },
    {
      imgPath: naglfar,
      title: "Naglfar",
    },
    {
      imgPath: tirnalia,
      title: "Tir ná Lia",
    },
    {
      imgPath: whispess,
      title: "Whispess",
    },
  ];
  
  let imgNeutral = [
    {
      imgPath: ciri,
      title: "Cirilla Fiona Elen Riannon",
    },
    {
      imgPath: dandelion,
      title: "Dandelion",
    },
    {
      imgPath: gaunterodimm,
      title: "Gaunter O'Dimm",
    },
    {
      imgPath: geralt,
      title: "Geralt of Rivia",
    },
    {
      imgPath: regis,
      title: "Regis Terzieff-Godefroy",
    },
    {
      imgPath: triss,
      title: "Triss Merigold",
    },
    {
      imgPath: yennefer,
      title: "Yennefer of Vengerberg",
    },
  ];
  
  let imgNilfgaard = [
    {
      imgPath: annaHenrietta,
      title: "Anna Henrietta",
    },
    {
      imgPath: beauclair,
      title: "Beauclair",
    },
    {
      imgPath: coupDeGrace,
      title: "Coup De Grace",
    },
    {
      imgPath: emhyr,
      title: "Emhyr var Emreis",
    },
    {
      imgPath: masqueradeBall,
      title: "Masquerade Ball",
    },
    {
      imgPath: tiborEggebracht,
      title: "Tibor Eggebracht",
    },
    {
      imgPath: vivienneDeTabris,
      title: "Vivienne de Tabris",
    },
  ];
  
  let imgNorthernRealms = [
    {
      imgPath: draug,
      title: "Draug",
    },
    {
      imgPath: philippa,
      title: "Philippa Eilhart",
    },
    {
      imgPath: radovid,
      title: "Radovid V the Stern",
    },
    {
      imgPath: roche,
      title: "Vernon Roche",
    },
    {
      imgPath: shani,
      title: "Shani",
    },
    {
      imgPath: siege,
      title: "Siege",
    },
    {
      imgPath: warElephant,
      title: "War Elephant",
    },
  ];
  
  let imgScoiatael = [
    {
      imgPath: aucwenn,
      title: "Aucwenn",
    },
    {
      imgPath: iorveth,
      title: "Iorveth",
    },
    {
      imgPath: mysteriesOfLocFeainn,
      title: "Mysteries of Loc Feainn",
    },
    {
      imgPath: saesenthessis,
      title: "Saesenthessis",
    },
    {
      imgPath: theGreatOak,
      title: "The Great Oak",
    },
    {
      imgPath: waterOfBrokilon,
      title: "Water of Brokilon",
    },
    {
      imgPath: zoltanChivay,
      title: "Zoltan Chivay",
    },
  ];
  
  let imgSkellige = [
    {
      imgPath: bloodEagle,
      title: "Blood Eagle",
    },
    {
      imgPath: crachAnCraite,
      title: "Crach an Craite",
    },
    {
      imgPath: crowsEyeRhizome,
      title: "Crow's-eye Rhizome",
    },
    {
      imgPath: endlessVoyage,
      title: "Endless Voyage",
    },
    {
      imgPath: hemdall,
      title: "Hemdall",
    },
    {
      imgPath: olaf,
      title: "Olaf",
    },
    {
      imgPath: svalblodTotem,
      title: "Svalblod Totem",
    },
  ];
  
  let imgSyndicate = [
    {
      imgPath: countReuvensTreasure,
      title: "Count Reuven's Treasure",
    },
    {
      imgPath: kingOfBeggars,
      title: "King of Beggars",
    },
    {
      imgPath: savolla,
      title: "Savolla",
    },
    {
      imgPath: sigiReuven,
      title: "Sigismund Dijkstra",
    },
    {
      imgPath: tatterwing,
      title: "Tatterwing",
    },
    {
      imgPath: theFlyingRedanian,
      title: "The Flying Redanian",
    },
    {
      imgPath: vivaldiBank,
      title: "Vivaldi Bank",
    },
  ];

  const [cards, setCards] = useState([]);

  const shuffle = (shuffeledCards) => {
    for (let i = shuffeledCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [shuffeledCards[randomIdx], shuffeledCards[i]] = [shuffeledCards[i], shuffeledCards[randomIdx]];
    }
  };

  useEffect(() => {
    let shuffeledCards = [...cards];
    shuffle(shuffeledCards);
    setCards(shuffeledCards);
  }, [score, highscore]);

  useEffect(() => {
    let newLevelCards = [];
    switch(level) {
      case 1:
        newLevelCards = [...imgMonsters];
        break;
      case 2:
        newLevelCards = [...imgMonsters,
          ...imgNeutral];
        break;
      case 3:
        newLevelCards = [...imgMonsters,
          ...imgNeutral,
          ...imgNilfgaard];
        break;
      case 4:
        newLevelCards = [...imgMonsters,
          ...imgNeutral,
          ...imgNilfgaard,
          ...imgNorthernRealms];
        break;
      case 5:
        newLevelCards = [...imgMonsters,
          ...imgNeutral,
          ...imgNilfgaard,
          ...imgNorthernRealms,
          ...imgScoiatael];
        break;
      case 6:
        newLevelCards = [...imgMonsters,
          ...imgNeutral,
          ...imgNilfgaard,
          ...imgNorthernRealms,
          ...imgScoiatael,
          ...imgSkellige];
        break;
      case 7:
        newLevelCards = [...imgMonsters,
          ...imgNeutral,
          ...imgNilfgaard,
          ...imgNorthernRealms,
          ...imgScoiatael,
          ...imgSkellige,
          ...imgSyndicate];
        break;
      default:
        newLevelCards = [
          ...imgMonsters,
          ...imgNeutral,
          ...imgNilfgaard,
          ...imgNorthernRealms,
          ...imgScoiatael,
          ...imgSkellige,
          ...imgSyndicate
        ]
    }
    setCards(newLevelCards);
  }, [level])

  return (
    <>
      {cards.map((card) => (
        <Card card={card} key={card.title} handleGameLoop={handleGameLoop}/>
      ))}
    </>
  )
}

export default Cards;