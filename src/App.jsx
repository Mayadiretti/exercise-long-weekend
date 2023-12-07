import { useState } from 'react'
import './App.css'
import CustomList from "./CustomLIst/CustomList"

function App() {
const listaOrdinata =["ciao", "Piero"];
const nonOrdinata = ["Pietro", "Laura", "Amanda"];

const allLista = [
  {
  title: "Invitati",
   type: "ul",
   list: ["Tizio", "Caio"]
  },
  {
   title: "Partecipanti",
   type: "ol",
   list: ["Tizio", "Caio"]
  }
]


  return (
    <>
    <h1>Esercizio 1</h1>

    <h2>Lista ordinata</h2>
      <CustomList 
      type="ol" 
      list={listaOrdinata}
       />
  <h2>Lista non ordinata</h2>
      <CustomList 
      type="ul" 
      list={nonOrdinata} />

    <h2>Esercizio 2</h2>
      <div>
        {allLista.map((e, i)=>(
          <section key={i}>
          <div>{e.title}</div>
          <CustomList type={e.type} list={e.list} />
          </section>
  
        ))}
      </div>
    </>
)}

export default App
