import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getAllfavorites, getWishList, removeFavorite, removeWishList } from '../Utility/Utility';
import Card from '../Card/Card';

const Dashboard = ({ }) => {
  const allItem = useLoaderData();
  const [gadgets, setGadgets] = useState([]);
  const [addedItem, setAddItem] = useState([]);
  const [prices, setPrices] = useState(0);

  useEffect(() => {
    const favorites = getAllfavorites();
    setGadgets(favorites)
  }, [])
  useEffect(() => {
    const favorites = getAllfavorites();
    setGadgets(favorites)
  }, [])

  useEffect(() => {
    const totalPrice = allItem?.reduce((a, c) => a + c.price, 0);
    setPrices(totalPrice)
  }, [prices])

  const handleRemoveAddList = (product_id) => {
    removeFavorite(product_id);
    const favorites = getAllfavorites();
    setGadgets(favorites)
  }

  const handleRemoveWishList = (product_id) => {
    removeWishList(product_id);
    const favorite = getWishList();
    setAddItem(favorite)
  }
  console.log(gadgets)
  return (
    <>
      <div>
        <Banner
          title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
          subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} >
        </Banner>
        <div>
          <Tabs>
            <TabList>
              <Tab>Cart</Tab>
              <Tab>Wish List</Tab>
            </TabList>

            <TabPanel>
              <h2>Cart:{gadgets.length}</h2>
              <div className='grid grid-cols-1 mx-10 my-8'>
                {
                  gadgets && gadgets.map(gadget => (<Card handleRemoveAddList={handleRemoveAddList} key={gadget.id} gadget={gadget}></Card>))
                }
              </div>

            </TabPanel>
            <TabPanel>
              <h2>List:{addedItem.length}</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-8'>
                {
                  addedItem.map(gadget => (<Card handleRemoveWishList={handleRemoveWishList} key={gadget.id} gadget={gadget}></Card>))
                }
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <h1>Total Cost: {prices}</h1>
      </div>
    </>

  );
};

export default Dashboard;