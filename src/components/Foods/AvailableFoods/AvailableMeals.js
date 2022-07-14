import { useEffect, useState } from 'react';

import Card from '../../UI/Card/Card';
import MealItem from '../../Meals/MealItem/MealItem';
import { useParams } from 'react-router-dom';
import * as Styled from './AvailableMeals.styled';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const { mealsId } = useParams();
  // console.log(mealsId);

  const BASE_URL = `https://react-foodapp-c8cbb-default-rtdb.firebaseio.com/${mealsId}.json`;

  useEffect(() => {
    document.title = `MEALS APP | Meals`
  },[])

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(BASE_URL);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [BASE_URL]);
  

  if (isLoading) {
    return (
      <Styled.LoadMeals>
        <p>Loading...</p>
      </Styled.LoadMeals>
    );
  }

  if (httpError) {
    return (
      <Styled.MealsError>
        <p>{httpError}</p>
      </Styled.MealsError>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
    <Styled.Meals>
      <Card>
      <ul>{mealsList[0]}</ul>
      </Card>
      <Card>
        <ul>{mealsList[1]}</ul>
      </Card>
      <Card>
        <ul>{mealsList[2]}</ul>
      </Card>
      <Card>
        <ul>{mealsList[3]}</ul>
      </Card>
    </Styled.Meals>
  );
};

export default AvailableMeals;
