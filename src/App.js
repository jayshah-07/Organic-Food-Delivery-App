import React, { useState } from 'react'
import { NavBar } from './NavBar/NavBar'
import { Banner } from './Banner/Banner'
import { Menu } from './Menu/Menu'
import { FoodDialog } from './FoodDialog/FoodDialog'
import { GlobalStyle } from './Styles/GlobalStyle'
import { Order } from './Order/Order'
import { useOpenFood } from './Hooks/useOpenFood'
import { useOrders } from './Hooks/useOrders'
import { useTitle } from './Hooks/useTitle'
import { useAuthentication } from './Hooks/useAuthentication'
import { OrderDialog } from './Order/OrderDialog'
import { useOrderDialog } from './Hooks/useOrderDialog'


function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  const orderDialog = useOrderDialog();

  useTitle({...openFood, ...orders});

  return (
    <>
      <GlobalStyle />
      <OrderDialog {...orderDialog} {...orders}/>
      <FoodDialog {...openFood} {...orders} />
      <NavBar {...auth}/>
      <Order {...orders} {...openFood} {...auth} {...orderDialog} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
