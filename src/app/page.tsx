"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [cnpj, setCnpj] = useState<any>();

  function getDataFromCNPJ() {
    fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <label htmlFor="">Digite o CNPJ</label>
      <input
        type="text"
        value={cnpj}
        onChange={(e) => setCnpj(e.target.value)}
      />
      <button onClick={getDataFromCNPJ}></button>
    </div>
  );
}
