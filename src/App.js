import React, { useState } from "react";
import { Card, Table } from "./Util/Util";
import data from "./data.json";
import "./styles/base.scss";

import ImageKru from "./images/kru.png";
import ImageCaKru from "./images/cakru.png";

function App() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState();

  const easterEgg = () => {
    window.alert("Gabut ya?? xddd");
  }

  const showDiv = (data) => {
    if (show === false) {
      setShow(true);
      setType(data);
    }
    else {
      if (data === type) {
        setShow(false);
      } else {
        setType(data);
      }
    }
  }

  return (
    <div className="wrapper">
      <div className="header">
        <p>M Syahrul Surya Putr<a onClick={() => easterEgg()}>a</a></p>
        <p>16520430</p>
      </div> 
      <div className="container">
        <div onClick={() => showDiv("Kru")}className="kru">
          <Card
            image = {ImageKru}
            title = "Wawancara Kru"
            name = "Ka Christopher Ivan Gunardi"
            date = "Minggu, 28 Februari 2021"
          />
        </div>
        <div onClick={() => showDiv("Ca-Kru")} className="cakru">
          <Card
            image  = {ImageCaKru}
            title = "Wawancara Ca-Kru"
            date = "Minggu, 28 Februari 2021"
          />
        </div>
      </div>
      <div className={show ? "wawancara" : "wawancara-hidden"}>
        <div className= {type === "Ca-Kru" ? "wawan-cakru" : "wawan-kru"}>
          <h1>Wawancara {type}</h1>
          <img src={ImageKru} className="kru" alt="kru" />
          <img src={ImageCaKru} className="cakru" alt="cakru" />
          <p className="kru">Nama : Ka Christopher Ivan Gunardi</p>
          <p className="kru">Angkatan : 2019</p>
          <p className="kru">Jurusan : Teknik Telekomunikasi</p>
          <p className="kru">Fun Fact</p>
          <p className="kru">ARC memiliki waktu 
kumpul yang bebas atau tidak memiliki jadwal pasti. Selain itu, ketika kita ke sekre, akan 
selalu ada orang (jika memang tidak sedang ada jadwal kuliah). Selain itu, Kegiatan ARC bisa dibilang “ngoding, projectan, ngumpul, dan ngoprek” (quotation mark intended).
          </p>
          <div className="cakru">
            {data && data.map((data) => <Table data={data} key={data.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
