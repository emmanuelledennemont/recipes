import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
  };
  useEffect(() => {
    getPopular();
  }, []);

  return (
      <>
    <div className="title-category">
    <h3>Popular Piks</h3>
  </div>

    <div className="section">
      
<Splide options={{perPage: 4, gap:"2rem", drag:"free", pagination:false, arrows:false,}}>
      {popular.map((recipe) => {
        return (
         <SplideSlide>
            <div className="cards" key={recipe.id}>
              <h4>{recipe.title}</h4>
              <div className="image-gradient"><img src={recipe.image} alt={recipe.title} /></div>
            </div>
            </SplideSlide>
        );
      })}
      </Splide>
    </div>
    
    </>
  );
};
export default Popular;
