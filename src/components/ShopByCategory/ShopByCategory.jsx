import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ShopByCategory = () => {

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/allToys/${category}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // },[])

    
    return (
        <div className="mt-8">
            <h2 className="text-center font-bold text-4xl">Shop Now</h2>
            <div className="mt-8">
            <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
      <Tab>Title 3</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;