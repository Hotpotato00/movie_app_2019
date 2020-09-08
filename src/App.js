import React from 'react';
import PropTypes from 'prop-types';



const foodILike = [
  { 
    id:1,
    name:"kimbap",
    image:"https://jajabakes.com/wp-content/uploads/2018/08/cut-kimbab-recipe-1.jpg",
    rating:5
  },
  { 
    id:2,
    name:"doncasu",
    image:"http://www.yongwoodong.co.kr/bbs/data/menu/1694458239.JPG",
    rating:4.9
  }];

function Food({name, picture,rating}){
  return <div>
    <h1>I like {name}</h1>
    <h2>{rating}/5.0</h2>
    <img src={picture} alt={name}/>
  </div>;
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired

}
function App() {
  return (
    <div>
      {foodILike.map(dish=> (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
