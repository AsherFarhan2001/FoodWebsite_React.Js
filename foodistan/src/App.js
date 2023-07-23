import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import AvatarImage from './assets/images/avatar.png';
import ContinentalImage from './assets/images/continental.png';
import DessertImage from './assets/images/dessert.png';
import FastfoodImage from './assets/images/fast_food.png';


const App = () => {

  const FoodItems = [
    {
      title: "FastFood",
      image: FastfoodImage,
      description: "Step into a world of delightful fast food offerings that will leave you craving for more. Our diverse menu caters to all tastes and preferences, offering a symphony of savory and sweet treats that will tantalize your taste buds."
    },

    {
      title: "Continental",
      image: ContinentalImage,
      description: "Transport your taste buds to a culinary journey across the globe with our exquisite Continental food offerings. Our menu boasts a delightful array of dishes inspired by the diverse flavors and traditions of Pakistan."
    },

    {
      title: "Dessert",
      image: DessertImage,
      description: "Indulge in the sweet symphony of our delectable dessert creations that will sweep you off your feet and satisfy your sweetest cravings. Each dessert on our menu is a masterpiece of flavors and textures."
    }
  ]

  return(
    <div className='app-container'>
      <Header logo = {AvatarImage}/>
      <section className='section'>
        <Cards title = {FoodItems[0].title} image = {FoodItems[0].image} description = {FoodItems[0].description}></Cards>
        <Cards title = {FoodItems[1].title} image = {FoodItems[1].image} description = {FoodItems[1].description}></Cards>
        <Cards title = {FoodItems[2].title} image = {FoodItems[2].image} description = {FoodItems[2].description}></Cards>
      </section>
    
    </div>
  )
  
}

export default App;
