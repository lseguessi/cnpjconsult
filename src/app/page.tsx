"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { headers } from "next/dist/client/components/headers";

export default function Home() {
  const [cnpj, setCnpj] = useState<any>();

  async function getDataFromCNPJ() {
    const resp = await axios.get(
      `https://www.receitaws.com.br/v1/cnpj/${cnpj}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    console.log(resp);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , gap: 16}}>
      <div>
        <label htmlFor="">Digite o CNPJ</label>
        <input
          type="text"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
        />
      </div>
      <button onClick={getDataFromCNPJ}>Consultar</button>
    </div>
  );
}
