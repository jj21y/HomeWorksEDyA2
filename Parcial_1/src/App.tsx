import { useEffect } from 'react'
import React, { useState } from 'react'

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
  const [Comite, setComite] = useState <MiembroComite | null> (null);


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
      let current = HeadPatient;
      while (current.next) {
        current = current.next;
      }
      const newHead = { ...HeadPatient };
      let newCurrent = newHead;
      while (newCurrent.next) {
        newCurrent = { ...newCurrent.next };
        newCurrent = newCurrent.next;
      }
      newCurrent.next = nuevo;
      setHeadPatient(newHead);
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
    
    
    D1.next = D2
    D2.next = D3
    D3.next = D1

    setDoctorActual(D1)
  },[])

  useEffect(() => {
    const IntervaloCambio = setInterval(() => {
      if(DoctorActual?.next){
        setDoctorActual(DoctorActual.next)
      }

    }, 10000)
    return () => clearInterval(IntervaloCambio)
  },[DoctorActual])

    useEffect(() => {
    const mem1: MiembroComite = { nombre: "Juanito", numeroMiembro: "3127221082", prev: null, next: null };
    const mem2: MiembroComite = { nombre: "María", numeroMiembro: "3176151081", prev: null, next: null };
    const mem3: MiembroComite = { nombre: "Pedro", numeroMiembro: "3206967663", prev: null, next: null };
    const mem4: MiembroComite = { nombre: "Alfredo", numeroMiembro: "3156967542", prev: null, next: null };

    // conectar doble circular
    mem1.next = mem2;
    mem2.next = mem3;
    mem3.next = mem4;
    mem4.next = mem1;

    mem1.prev = mem4;
    mem2.prev = mem1;
    mem3.prev = mem2;
    mem4.prev = mem3;

    setComite(mem1);
  }, []);

  const mostrarPatients = () => {
    const List = [];
    let actual = HeadPatient;
    while (actual) {
      List.push(
        <li key={actual.cedula}>
          {actual.nombre} - {actual.cedula}
        </li>
      );
      actual = actual.next;
    }
    return List;
  };

  const showHistory = () => {
    const List = [];
    let actual = HeadHistory;
    while (actual) {
      List.push(
        <li key={actual.cedula}>
          {actual.nombre} - {actual.cedula}
        </li>
      );
      actual = actual.next;
    }
    return List;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Panel Clinica </h1>

      <h2>Agregar Paciente</h2>
      <input
        placeholder="Nombre"
        value={NombrePatient}
        onChange={(e) => setNombrePatient(e.target.value)}
      />
      <input
        placeholder="Cédula"
        value={CedulaPatient}
        onChange={(e) => setCedulaPatient(e.target.value)}
      />
      <button onClick={addpatient}>Agregar</button>

      <h2>Pacientes en lista de espera</h2>
      <ul>{mostrarPatients()}</ul>
      <button onClick={atenderPatient}>Atender Paciente</button>

      <h2>Médico de Guardia (cambia cada 10 seg)</h2>
      <p>
        {DoctorActual?.nombre} - Código: {DoctorActual?.codigo}
      </p>

      <h2>Historial de Atención de clientes</h2>
      <ul>{showHistory()}</ul>

      <h2>Comité Administrativo</h2>
      <p>
        {Comite?.nombre} - Cel: {Comite?.numeroMiembro}
      </p>
    </div>
  );
}


export default App
