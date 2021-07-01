import { useState } from "react";
import axios from "axios";
import "./index.css"


const BasicForm =()=>{

    /* Simple form to test synthetic monitoring */
    const [id, setId] = useState(1);
    const [pokemon, setPokemon] = useState(null);
    const [invalidId, setInvalidId] = useState(false)

    const searchBtn = ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                invalidId && setInvalidId(false);
                setPokemon(res.data)
            }).catch(e=>{
                setInvalidId(true);
                setPokemon(null);
            });
    }

    return <div>
            <label>Pokemon Id:
                <input type="text" value={id} onChange={e=>setId(e.target.value)} />
            </label>
            <button  onClick={searchBtn}>Search</button>
            
                <div className="form-content">
                    {invalidId && <span>Invalid Pokemon Id</span>}
                    {/*pokemon && 
                        <>
                            <img src={pokemon.sprites.front_default} alt="#" />
                            <span>{pokemon.name}</span>
                        </>
                    */}
                </div>
        </div>;


}

export default BasicForm;