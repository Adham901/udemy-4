import React from 'react'
import { Row } from 'react-bootstrap'
import Cardmovied from './Cardmovied'
import MoviesNum from './MoviesNum'



export default function MoviesLists({movies ,getPage, pageCount }) {
  return (
    <>
    <Row>
      {
        movies.length >=1 ? (movies.map((mov)=>{
            return(<Cardmovied key={mov.id} mov={mov}/>)
        })) : <h1>لا يوجد</h1>
      }
    
     <MoviesNum  getPage={getPage} pageCount={pageCount} />
    </Row>

    
    
    </>
  )
}
