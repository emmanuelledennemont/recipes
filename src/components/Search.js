import images from "../images/bckg.jpg";
import Bar from "./Bar";
const Search = () => {
  return (
    <>
    
      <div className="section-center ">
        <img src={images} alt="" />
      </div>

        <div className="restaurant-item container">
          <Bar />
        </div>
   
    </>
  );
};

export default Search;
