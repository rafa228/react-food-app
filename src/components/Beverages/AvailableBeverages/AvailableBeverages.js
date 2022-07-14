import React, { useEffect, useState } from "react";
import MealItem from "../../Meals/MealItem/MealItem";
import Card from "../../UI/Card/Card";
import * as Styled from './AvailableBeverages.styled';
import { useParams } from "react-router-dom";

//assets
import loadBar from '../../../assets/loading-bar.png';

const AvailableBeverages = () => {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

    const { bevsId } = useParams();
    console.log(bevsId);

  const BASE_URL =
    `https://react-foodapp-c8cbb-default-rtdb.firebaseio.com/${bevsId}.json`;

    useEffect(() => {
        document.title = `MEALS APP | Beverages`
    },[])

    useEffect(() => {
        const fetchDrinks = async () => {
            const response = await fetch(BASE_URL);

            if(!response.ok) {
                throw new Error('Something went wrong!');
            }
            
            const responseData = await response.json();
            const loadedDrinks = [];

            for (const key in responseData) {
                loadedDrinks.push({
                    id:key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                    image: responseData[key].image
                });
            }

            setDrinks(loadedDrinks);
            setIsLoading(false);
        };

        fetchDrinks().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    },[BASE_URL]);

    if (isLoading) {
        return (
            <Styled.DrinksLoader>
                <p>Loading...</p>
                <img src={loadBar} alt='load-bar'/>
            </Styled.DrinksLoader>
        );
    }

    if(httpError) {
        return (
            <Styled.DrinksError>
                <p>{httpError}</p>
            </Styled.DrinksError>
        );
    }

    const drinksList = drinks.map((drink) => (
        <MealItem 
            key={drink.id}
            id={drink.id}
            name={drink.name}
            description={drink.description}
            price={drink.price}
            image={drink.image}
        />
    ));

  return (
    <Styled.Drinks>
       <Card>
        <Styled.Ul>{drinksList[0]}</Styled.Ul>
       </Card>
       <Card>
        <Styled.Ul>{drinksList[1]}</Styled.Ul>
       </Card>
       <Card>
        <Styled.Ul>{drinksList[2]}</Styled.Ul>
       </Card>
       <Card>
        <Styled.Ul>{drinksList[3]}</Styled.Ul>
       </Card>
    </Styled.Drinks>
  );
};

export default AvailableBeverages;
