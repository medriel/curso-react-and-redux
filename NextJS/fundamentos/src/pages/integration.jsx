import React, { useState } from "react"
import Layout from "../components/Layout";

export default function Integration() {

  const [code, setCode] = useState(1)
  const [client, setClient] = useState({})

  async function getClient() {
    const resp = fetch(`http://localhost:3000/api/clients/${code}`)
    const data = await resp.json()
    setClient(data)
  }


  return (
    <Layout>
      <div>
        <input
          type="number"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <ul>
        <li>Código: {client.id}</li>
        <li>Nome: {client.name}</li>
      </ul>
    </Layout>

  )
}