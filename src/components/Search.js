
import images from "../images/bckg.jpg";
const Search = () => {
  return (
    <>
    
      <div className="section-center ">
        <img src={images} alt="" />
      </div>

        <div className="restaurant-item container">
        <div className="search-bar">
      <h3>What would you like to cook?</h3>
        <input type="search" placeholder="Recipes, ingredients, Trends ..."/>
      </div>
        </div>
   
    </>
  );
};

export default Search;
