import axios from 'axios'
import './App.css'
import './custom.css'
import React, { useState,useEffect } from 'react'


export default function AutoComplete() {
    const [users, setUsers] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([])

    const [items, setItems] = useState([]);
    /* const [itemName, setItemName] = useState(""); */
    
    const addItem = () => {
        
        setItems([...items, { id: items.length, name: text }]);
        setText("");
    };


    useEffect(() => {
        const loadUsers = async () =>{
            const response = await axios.get('https://reqres.in/api/users');
            setUsers(response.data.data)
          }
          loadUsers();
        }, []);
        const onSuggestHandler = (text)=>{
            setText(text);
            setSuggestions([]);
        } 

        const onChangeHandler = (text) =>{
            let matches = []
            if(text.length > 0){
                matches = users.filter(user =>{
                    const regex = new RegExp(`${text}`, "gi")
                    return user.first_name.match(regex)
                })
            }
            console.log('matches',matches)
            setSuggestions(matches)
            setText(text)
        }

    return (
        <>
        <div className='container'>
            <h2>Buscador de Paises</h2>
            <input type="text" className="col-md-8 input" 
                   styles={{marginTop: 10 }}
                   onChange={ e => onChangeHandler(e.target.value) }
                   value={text}
                   onBlur={()=>{
                       setTimeout(()=>{
                           setSuggestions([])
                       },100);
                   }}
            /><button onClick={addItem}>Insertar</button>
            {suggestions && suggestions.map((suggestion,i) => 
                /* No es un div grande, son varios divs */
                <div key={i} 
                     className="suggestion col-md-12 justify-content-md-center"
                     onClick={()=>onSuggestHandler(suggestion.first_name)}
                >
                    {suggestion.first_name}
                </div>
                
              )
            }
        </div>
        <br/><br/>
        <table>
        <tbody>
            {items.map(item => (
                <tr key={item.id}><td>{item.name}</td></tr>
                )
            )
            }
            </tbody>
        </table>
        </>
    )
}
