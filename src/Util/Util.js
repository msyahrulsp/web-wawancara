import React from "react";
import "./Util.scss";

const Card = (props) => {
    return (
        <div className="card-container">
            <img src={props.image} className="image" alt={props.title} />
            <div className="text">
                <h2>{props.title}</h2>
                <p id="name">{props.name}</p>
                <p id="date">{props.date}</p>
            </div>
        </div>
    )
}

const Table = ({data}) => {
    return (
        <ul>
            <li>Nama : {data.nama}</li>
            <li>Angkatan : {data.angkatan}</li>
            <li>Fakultas : {data.fakultas}</li>
            <li>Jurusan Impian : {data.jurusan}</li>
            <li>Hobby : {data.hobby}</li>
            <li>Keluh Kesah di ITB : {data.keluh}</li>
            <li>Alasan Masuk ARC : {data.arc}</li>
        </ul>
    )
}

export { Card, Table }