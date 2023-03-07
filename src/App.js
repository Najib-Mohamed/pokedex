import { useEffect, useState } from "react";
import PokeNom from "./PokeNom";
function App() {
  const [imagePokemon, setImagePokemon] = useState();
  const [data, setData] = useState([]);
  const [filtrePokemon, setFiltrePokemon] = useState();
  const [region, setRegion] = useState(0);
  const regionList = [
    "All",
    "Kanto",
    "Johto",
    "Hoenn",
    "Sinnoh",
    "Unys",
    "Kalos",
    "Alola",
    "Galar",
  ];
  function regionSuivante() {
    if (region == 8) {
      setRegion(0);
    } else {
      setRegion(region + 1);
    }
  }
  function regionPrecédente() {
    if (region == 0) {
      setRegion(8);
    } else {
      setRegion(region - 1);
    }
  }
  function changerImage(params) {
    setImagePokemon(params);
  }
  useEffect(()=>{
    console.log(region);
    switch (region) {
      case 0:
        setFiltrePokemon([0, 1010]);
        break;
      case 1:
        setFiltrePokemon([0, 151]);
        break;
      case 2:
        setFiltrePokemon([152, 251]);
        break;
      case 3:
        setFiltrePokemon([252, 386]);
        break;
      case 4:
        setFiltrePokemon([387, 493]);
        break;
      case 5:
        setFiltrePokemon([494, 649]);
        break;
      case 6:
        setFiltrePokemon([650, 721]);
        break;
      case 7:
        setFiltrePokemon([722, 809]);
        break;
      case 8:
        setFiltrePokemon([810, 905]);
        break;
    }
  },[region])
  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setImagePokemon(data[0].image);
        console.log(data);
      });
  }, []);
  let info = data.map((element) => {
    if (element.id >= filtrePokemon[0] && element.id <= filtrePokemon[1]) {
      return <PokeNom data={element} image={changerImage} />;
    }
  });
  return (
    <div className="h-screen">
      <div className="containerBg">
        <div className="bgLeft"></div>
        <div className="bgRight"></div>
      </div>
      <div className="h-[20%] ">
        <div className="filtre">
          <div className="containerTitresPkdx">
            <p className="titrePokedex">Pokedex</p>
            <p className="nomFiltre">
              <span
                onClick={() => {
                  regionPrecédente();
                }}
                className="cursor-pointer"
              >
                &lt;-
              </span>
              {regionList[region]}{" "}
              <span
                onClick={() => {
                  regionSuivante();
                }}
                className="cursor-pointer"
              >
                -&gt;
              </span>
            </p>
          </div>
          <div className="bgFiltreLeft"></div>
          <div className="bgFiltreRight"></div>
        </div>
      </div>
      <div className="App w-screen h-[80%] flex gap-5">
        <div className="w-1/2 h-full">
          <img src={imagePokemon} alt="" />
        </div>
        <div className="overflow-y-scroll z-0 w-1/2 h-full flex flex-col">
          {info}
        </div>
      </div>
    </div>
  );
}
export default App;
