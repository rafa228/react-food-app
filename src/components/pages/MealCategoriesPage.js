import React, { useState } from 'react';

import Header from '../Layout/Header/Header';
import Cart from '../Cart/Cart';
import CartProvider from '../../store/CartProvider';
import OverviewImg from '../Layout/OverviewImg';
import MealsSummary from '../Meals/MealsSummary/MealsSummary';
import BeverageCategories from '../Beverages/BeverageCategories/BeverageCategories';
import FoodCategories from '../Foods/FoodCategories/FoodCategories';

const MealCategoriesPage = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    }

  return (
    <>
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <OverviewImg />
            <MealsSummary />
            <main>
                <FoodCategories />
                <BeverageCategories />
            </main>
        </CartProvider>
    </>
  )
}

export default MealCategoriesPage