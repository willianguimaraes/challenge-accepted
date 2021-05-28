import React, { useState } from 'react';
// import { useQuery,gql } from '@apollo/client';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

import './App.css';

import Card from './components/card/card';
import Header from './components/header/index'

import axios from 'axios'
import { BreakingChangeType } from 'graphql';

// const QUERY_LOCALES = gql`
//   query getLocales {
//     locales {
//       id
//       name
//       state
//     }
//   }
// `;



// const QUERY_WEATHER = gql`
//   query weather()
// `;

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      cities: [],
      loading: true,
      loadingCards: false,
      weather: null,
      weathers: [],
      type: "t",
    }

    axios.get('http://localhost:21021/locales')
      .then(res => {
        this.setState({ cities: res.data, loading: false });
      })
      .catch(e => {
        this.setState({ loading: false, erroApi: true });

      })
  }

  render() {
    const onSelect = (city) => {
      this.setState({ loadingCards: true })
      axios.get('http://localhost:21021/weathers/' + city.id)
        .then(res => {
          console.log(res.data.weather)
          this.setState({ weather: res.data, weathers: res.data.weather });
        })
        .catch(e => {
          console.log(e);
        })
        .finally(f => {
          this.setState({ loadingCards: false })
        })
    }

    const changeType = () => {
      this.setState({ loadingCards: true });
      if (this.state.type === 't') {
        this.setState({ type: 'f' });
      } else {
        this.setState({ type: 't' });
      }
      this.setState({ loadingCards: false });
    }
    
    // const { loading, data } = useQuery(QUERY_LOCALES, {
    //   onCompleted: () => {
    //     window.alert(data)
    //     setCity(data.locales);
    //     this.setState({ cities: data.locales })
    //   },
    // });
    if (this.state.loading) {
      return (<h1>carregando</h1>);
    }


    return (
      <>
        <Header />
        <Autocomplete
          id="city-select"
          options={this.state.cities}
          getOptionLabel={(city) => city.name}
          style={{ width: '100%', marginTop: 10, }}
          onSelect={(city) => { }}
          onChange={(e, city) => onSelect(city)}
          renderInput={(params) => <TextField {...params} label="Procurar Cidade" variant="outlined" />}
        />
        {this.state.weather ? (
          <div>
            {this.state.loadingCards ? (
              <div>
                <h2>Carregando</h2>
              </div>
            ) : (
                <div className='cards'>

                  <div className='cityInfo'>
                    <h1>Previsão para {this.state.weather.locale.name} - {this.state.weather.locale.state}
                    </h1>
                  </div>
                  <div className='buttonChangeType'>
                    <Button type="button" name="changeType" onClick={() => changeType()} variant="contained" color="primary">
                      Alterar visualização
                </Button>
                  </div>
                  <div className='cardData'>
                    {this.state.weathers.map((weather) => (
                      <Card date={weather.date}
                        text={weather.text}
                        tempMax={weather.temperature.max}
                        tempMin={weather.temperature.min}
                        precipitation={weather.rain.precipitation}
                        probability={weather.rain.probability}
                        type={this.state.type} />

                    ))}
                  </div>
                </div >
              )
            }
          </div>



        ) : (

            <div>
              {this.state.erroApi ? (
                <div className="info-cidade">
                <span>
                  Tivemos um problema com nossos serviços, logo retornaremos.
                </span>
              </div>
              ) :
                (
                  <div className="info-cidade">
                    <span>
                      Selecione uma cidade para saber a previsao do tempo.
                    </span>
                  </div>)}
            </div>


          )}

      </>
    );
  }
}
