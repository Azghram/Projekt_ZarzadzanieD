import React, { Component } from 'react';
import Result from './Result';
import './App.css';



class App extends Component {

  state = {
    value: "",
    date: '',
    time: '',
    city: '',
    temp: '',
    pressure: '',
    wind: '',
    humidity: '',
    err: false,
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const API = `/api/data/synop/station/${this.state.value}` ;

    fetch(API)
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error("Nie udało się")
    })
    .then(response => response.json())
    .then(data => {
      
      this.setState(state => ({
        err: false,
        date: data.data_pomiaru,
        time: data.godzina_pomiaru,
        city: data.stacja,
        temp: data.temperatura,
        pressure: data.cisnienie,
        wind: data.predkosc_wiatru,
        humidity: data.wilgotnosc_wzgledna,
      }))
    })
    .catch(err => {
      console.log(err);
      this.setState(prevState =>({
        err: true,
        city: prevState.value
      }))
    })

  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
        <label>
          <div className="opis">Wybierz stację synoptyczną: </div>
          <select class="select" value={this.state.value} onChange={this.handleChange} size="7">
            <option value="bialystok">Białystok</option>
            <option value="bielskobiala">Bielsko Biała</option>
            <option value="chojnice">Chojnice</option>
            <option value="czestochowa">Częstochowa</option>
            <option value="elblag">Elbląg</option>
            <option value="gdansk">Gdańsk</option>
            <option value="gorzow">Gorzów</option>
            <option value="hel">Hel</option>
            <option value="jeleniagora">Jelenia Góra</option>
            <option value="kalisz">Kalisz</option>
            <option value="kasprowywierch">Kasprowy Wierch</option>
            <option value="katowice">Katowice</option>
            <option value="ketrzyn">Kętrzyn</option>
            <option value="kielce">Kielce</option>
            <option value="klodzko">Kłodzko</option>
            <option value="kolo">Koło</option>
            <option value="kolobrzeg">Kołobrzeg</option>
            <option value="koszalin">Koszalin</option>
            <option value="kozienice">Kozienice</option>
            <option value="krakow">Kraków</option>
            <option value="krosno">Krosno</option>
            <option value="legnica">Legnica</option>
            <option value="lesko">Lesko</option>
            <option value="leszno">Leszno</option>
            <option value="lebork">Lębork</option>
            <option value="lublin">Lublin</option>
            <option value="rzeszow">Rzeszów</option>
            <option value="sandomierz">Sandomierz</option>
            <option value="warszawa">Warszawa</option>
            <option value="zakopane">Zakopane</option>
          </select>
          <input type="submit" value="Wyszukaj" />
        </label>
        </form>
        <Result weather={this.state}/>
      </div>
    );
  }
}

export default App;
