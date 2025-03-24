import React from 'react'
import Test from './components/Test'
import Person2 from './components/Person2';
import Person3 from './components/Person3';
import Laptop from './components/Laptop';
import Events from './components/Events';
import Counter from './components/Counter';
import ShowProduct from './components/ShowProduct';
import FilterProduct from './components/FilterProduct';
const App = () => {
  return (
   <>
         <div>
       {/* <Person/> */}
   {/* <h1>App is entry point</h1> */}
    {/* <Test/> */}
    {/* <Product 
    title="vivo" 
    brand="y-12s"
    price="5555"
    /> */}
    </div>

    <div>
  {/* <Person2 name="rajib" age="19" salary={3000000} ram="joy shree ram"/> */}
    </div>
 <div>
  {/* <Person3 name="rajib" age={19} panCard={false} price={100}/> */}
 </div>
  <div>
    {/* <Laptop brandName="acer" model="balbichi" price={36000}/>
    <Laptop brandName="acer" model="balbichi" price={36000}/>
    <Laptop brandName="acer" model="balbichi" price={36000}/> */}
  </div>
  <div>
    {/* <Events/> */}
  </div>
  <div>
    {/* <Counter/> */}
  </div>
  <div>
    {/* <ShowProduct/> */}
  </div>
  <div>
    {/* <FilterProduct/> */}
  </div>
   </>
  );
};
export default App