import { useState,useEffect } from "react";
import LinkedList from "./classes/LinkedList";


function SongPlayer (){
    const [list] = useState (new LinkedList())
    const [current, setCurrent] = useState<any>(null)

    useEffect(() => {
        list.append("Song 1")
        list.append("Song 2")
        list.append("Song 3")
        
        setCurrent(list.peek())
    }, [])

    const nextSong = () => {
    if (current && current.next) {
      setCurrent(current.next);
    }
  };

  return (
    <>
      <h2>Reproductor</h2>
      <p>Canción actual: {current?.value}</p>
      <button onClick={nextSong}>Siguiente</button>
    </>
  );
}

export default SongPlayer;