import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Title from './components/Title';

function App() {
  const [number, setnumber] = useState(1)
  const [planet, setplanet] = useState('')
  const [resident, setresident] = useState('');

  useEffect(()=>{
    const fetchplanetdata = async ()=>{
      const response = await axios.get(`https://swapi.py4e.com/api/planets/${number}`);
      setplanet(response.data)
    }
    fetchplanetdata();
  },[number]);

  useEffect(()=>{
    const fetchresidents = async ()=>{
      const response = await axios.get(`https://swapi.py4e.com/api/people/${number}`)
      setresident(response.data)
    }
    fetchresidents()
  },[number])
  console.log(resident)

  function handleChange(event){
    setnumber(event.target.value)
  }
  const {name, rotation_period,terrain,population,climate} = planet;
  const {gender, hair_color, eye_color, height, birth_year} = resident;
  return (
    <div className="App">
      <Title/>
      <div className='options'>
        <label htmlFor='options'>select a number</label>
        <select value={number} onChange={handleChange} id='options'>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
      </div>
      <div className='person-info'>
        <h1>{resident.name}</h1>
        <ul>
          <li><b>gender</b>: {gender}</li>
          <li><b>hair color</b> : {hair_color}</li>
          <li><b>eye color</b> : {eye_color}</li>
          <li><b>height</b> : {height}</li>
          <li><b>birth year</b> : {birth_year}</li>
        </ul>
      </div>
      <div className='planet-info'>
        <ul className='list'>
          <li><b>planet</b> :  {name}</li>
          <li><b>rotation_period</b> :  {rotation_period}</li>
          <li><b>terrain</b> :  {terrain}</li>
          <li><b>climate</b> :  {climate}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
