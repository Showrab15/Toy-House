import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import SportsCar from '../SportsCar/SportsCar';
import PoliceCars from '../PoliceCars/PoliceCars';
import MiniFireTruck from '../MiniFireTruck/MiniFireTruck';

const ShopByCategory = () => {

  const { loading } = useContext(AuthContext)
  if (loading) {
    return <div className='text-center'>
      <progress className="progress w-56"></progress>
    </div>
  }





  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://assignment11-server-site-blond.vercel.app/allToys/${categories}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategories(data)
      });
  }, [])

  const sportsCar = categories.filter((item) => item.toyCategory === 'Sports Car')
  // console.log(sportsCar);
  const policeCar = categories.filter((item) => item.toyCategory === 'Police Car')
  const miniFireTruck = categories.filter((item) => item.toyCategory === 'Mini Fire Truck')

  return (


<div className="mt-8">
<Tabs>

<TabList className="flex justify-center gap-12"> { sportsCar.slice(0, 1).map((category, index) => ( <Tab className='btn btn-primary' key={index}>{category.toyCategory}</Tab> )) }

{ policeCar.slice(0, 1).map((category, index) => ( <Tab className='btn btn-primary' key={index}>{category.toyCategory}</Tab> )) }

{ miniFireTruck.slice(0, 1).map((category, index) => ( <Tab className='btn btn-primary' key={index}>{category.toyCategory}</Tab> )) } </ TabList>


<TabPanel>
 <div className="flex justify-center gap-8">
   {sportsCar.slice(0, 2).map((category, index) => (
  

    <SportsCar
     category={category}
    key={index}
    ></SportsCar>
  ))}


 </div>
</TabPanel>

<TabPanel>
 <div className="flex justify-center gap-8">
   {policeCar.slice(0, 2).map((category, index) => (
   <PoliceCars
   category={category}
   key={index}
   
   ></PoliceCars>
  ))}
 </div>
</TabPanel>

<TabPanel>
  <div className="flex justify-center gap-8">
  {miniFireTruck.slice(0, 2).map((category, index) => (
    <MiniFireTruck
    
    category={category}
   key={index}
    ></MiniFireTruck>
  ))}
  </div>
</TabPanel>
</Tabs>
</div>
   

  );
};

export default ShopByCategory;