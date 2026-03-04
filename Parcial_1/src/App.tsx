import { useEffect } from 'react'
import React, { useState, useEffect } from 'react'

import './App.css'
  type Patient = {
    nombre: string;
    cedula: string;
    next: Patient | null;
  }

  type History = {
    nombre: string;
    cedula: string;
    prev: History | null;
    next: History | null;
  }

  type Doctor = {
    nombre: string;
    codigo: string;
    next: Doctor | null;
  }

  type MiembroComite = {
    nombre: string;
    numeroMiembro: string;
    next: MiembroComite | null;
    prev: MiembroComite | null;
  }
function App() {
  const [HeadPatient, setHeadPatient] = useState<Patient | null>(null);
  const [NombrePatient, setNombrePatient] = useState("");
  const [CedulaPatient, setCedulaPatient] = useState("");
  const [HeadHistory, setHeadHistory] = useState<History | null>(null);
  const [DoctorActual, setDoctorActual] = useState <Doctor | null>(null);


  const addpatient = () => {
    if (!NombrePatient || !CedulaPatient)
      return "Error no se pudo agregar al Paciente";
    const nuevo: Patient = {
      nombre: NombrePatient,
      cedula: CedulaPatient,
      next: null
    }
     if (!HeadPatient) {
      setHeadPatient(nuevo);
    } else {
      let actual = HeadPatient;
      while (actual.next) {
        actual = actual.next;
      }
      actual.next = nuevo;
    }

    setNombrePatient("");
    setCedulaPatient("");
  }
  const addHistory = (nombre: string, cedula: string) => {
    const nuevo: History = {
      nombre,
      cedula,
      prev: null,
      next: null
    }
    if(!HeadHistory){
      setHeadHistory(nuevo)
    } else {
      let actual = HeadHistory
      while (actual.next){
        actual = actual.next;
      }
      actual.next = nuevo;
    }
  }
  const atenderPatient = () => {
    if(!HeadPatient)
      return "No se puede atender al paciente";

    const nombre = HeadPatient.nombre;
    const cedula = HeadPatient.cedula;

    addHistory(nombre, cedula)
    setHeadPatient(HeadPatient.next)
  }
  
  useEffect(() => {
    const D1: Doctor = {nombre: "Doc Juan Jose", codigo: "2234991", next: null}
    const D2: Doctor = {nombre: "Doc Ana Sofia", codigo: "2234881", next: null}
    const D3: Doctor = {nombre: "Doc Lucy", codigo: "2234771", next: null}
  })


}


export default App
