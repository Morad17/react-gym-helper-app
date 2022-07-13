import React from 'react'
import axios from 'axios'

const Home = () => {
    
const getFoodInfo = async ({})  => {
  try {
    const data = await axios.get('https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data', {
      params: {},
      headers: {
        'x-rapidapi-host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
        'x-rapidapi-key': process.env.APP_KEY
      }
    
    })
    return data
    
  } catch (err){
      console.log(err)
    }
}
  console.log(data);
  return (
    <div>Home</div>
  )
}

export default Home