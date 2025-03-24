import React from 'react'
import Superman from './Superman';
const Person = () => {
    const name="rajib";
    const age=19;
    const person={
     name:'rajib',
     age:'19',
     roll:'43'
    }
    const product={
     title:"iphone",
     model:"iphone-15",
     price:5555
    }
  return (
    <div>

    <div>
     <h1>Name={person.name}</h1>
     <h1>Age={person.age}</h1>
     <h1>Roll={person.roll}</h1>
    </div>
  <Superman/>
    <div>
      <h3>title={product.title}</h3>
    </div>

    </div>
  )
}

export default Person
