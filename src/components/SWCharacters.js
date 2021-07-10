import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import './SWCharacters.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    margin: 15,
    padding: 12
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SWCharacters() {
  const classes = useStyles();

  const [characters, setCharacters] = useState({})

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/').then(data => {
      // console.log(data)
      let characters = data.data.results;
      setCharacters(characters)
      //#TODO think of a way to walk through this linked list of requests
    })
    //if [] run once when row loads and then dont run again
  }, [])


  return (
    <div className='Cards'>
      {Object.keys(characters).map(person => {
        return <Card className={classes.root}>
          <h2>{characters[person].name}</h2>
          <p>Stats:</p>
          <ul>
            <li>Height: {characters[person].height}cm</li>
            <li>Weight: {characters[person].mass}kg</li>
            <li>Birth Year: {characters[person].birth_year}</li>
          </ul>
        </Card>
      })}
    </div>
  )
}
