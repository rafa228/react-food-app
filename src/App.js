import { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from "./store/auth-context";

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import Foods from "./components/Foods/Foods";
import Beverages from "./components/Beverages/Beverages";
import LandingPage from "./components/pages/LandingPage";
import MealCategoriesPage from "./components/pages/MealCategoriesPage";
import OrderHistoryPage from "./components/pages/OrderHistoryPage";
import AccountPage from "./components/pages/AccountPage";
import AccountDetailPage from './components/AccountNavPages/AccountDetailPage';
import OrderPage from './components/AccountNavPages/OrderPage';
import PaymentPage from './components/AccountNavPages/PaymentPage'
import PolicyPage from "./components/AccountNavPages/PolicyPage";
import PromosPage from "./components/AccountNavPages/PromosPage";
import AccountTypePage from "./components/AccountNavPages/AccountTypePage";
import Footer from "./components/Layout/Footer/Footer";
// import Header from "./components/Layout/Header/Header";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  useEffect(() => {
    document.title = `MEALS APP | Home Page`;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn && <Route path="/" element={<HomePage />} />}
        {!isLoggedIn && <Route path="/" element={<LandingPage />} />}

        {isLoggedIn && <Route path="/order-history" element={<OrderHistoryPage />}/>}
        {!isLoggedIn && <Route path="/order-history" element={<LoginPage />}/>}

        {/* Account */}
        {isLoggedIn && <Route path="/account" element={<AccountPage />}/>}
        {!isLoggedIn && <Route path="/account" element={<LoginPage />}/>}

        {/* Account / Account Navigation */}
        {isLoggedIn && <Route path='/account/mypayments' element={<PaymentPage />}/>}
        {!isLoggedIn && <Route path='/account/mypayments' element={<LoginPage />}/>}

        {isLoggedIn && <Route path='/account/myaccount' element={<AccountDetailPage />}/>}
        {!isLoggedIn && <Route path='/account/myaccount' element={<LoginPage />}/>}

        {isLoggedIn && <Route path='/account/myorders' element={<OrderPage />}/>}
        {!isLoggedIn && <Route path='/account/myorders' element={<LoginPage />}/>}

        {isLoggedIn && <Route path='/account/policy' element={<PolicyPage />}/>}
        {!isLoggedIn && <Route path='/account/policy' element={<LoginPage />}/>}

        {isLoggedIn && <Route path='/account/mypromos' element={<PromosPage />}/>}
        {!isLoggedIn && <Route path='/account/mypromos' element={<LoginPage />}/>}

        {isLoggedIn && <Route path='/account/account-type' element={<AccountTypePage />}/>}
        {!isLoggedIn && <Route path='/account/account-type' element={<LoginPage />}/>}

        {/* /Meals Category/Foods */}
        {isLoggedIn && <Route path='/meals-cat/:mealsId' element={<Foods />}/>}
        {!isLoggedIn && <Route path='/meals-cat/:mealsId' element={<LoginPage />}/>}

        {/* /Meals Category/Beverages */}
        {isLoggedIn && <Route path='/meals-cat/:bevsId' element={<Beverages />}/>}
        {!isLoggedIn && <Route path='/meals-cat/:bevsId' element={<LoginPage />}/>}

        {/* Meals Category */}
        {isLoggedIn && <Route path='/meals-cat' element={<MealCategoriesPage />}/>}
        {isLoggedIn && <Route path='/meals-cat' element={<LoginPage />}/>}

        {!isLoggedIn && <Route path="/login" element={<LoginPage />}/>}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
