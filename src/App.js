import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '4372892a506b377f58eb554ef7197e86';

class App extends React.Component {

	getWeather = async () => {
		const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`); 
		const data = await api_call.json();
		console.log(data)
	}
  render(){
    return (
      <div>
       	<Titles />
       	<Form getWeather={this.getWeather}/>
       	<Weather />
      </div>
      );
  }
};



export default App;