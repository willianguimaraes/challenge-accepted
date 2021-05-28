import React from 'react';
import moment from 'moment';
import './card.css';

import download from '../../assets/images/icons/download.png'
import upload from '../../assets/images/icons/upload.png'
import raindrops from '../../assets/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png'
import rainClose from '../../assets/images/icons/raindrop-close-up.png'

export default function Card({ date, text, tempMax, tempMin, probability, precipitation, type }) {
    return (
        <div className='card'>
            <div className='card-title'>
                <h4>{moment(date).format('DD/MM/YYYY')}</h4>
                <p>{text}</p>
            </div>
            <div className='card-body'>
                <div className='card-temp'>
                    <div className='box'>
                        <img src={upload} alt='temperatura maxima'></img>
                        <h1 className='temp-max'>{`${type}` === 't' ? `${tempMax}ºC` : `${(tempMax * 1.8 + 32).toFixed(1)}°F`}</h1>
                    </div>
                    <div className='box'>
                        <img src={download} alt='temperatura minima'></img>
                        <h1 className='temp-min'>{`${type}` === 't' ? `${tempMin}ºC`: `${(tempMin * 1.8 + 32).toFixed(1)}°F`}</h1>
                    </div>
                </div>
                <div className='card-temp'>
                    <div className='box'>
                        <img src={rainClose} alt='precipitação'></img>
                        <h1>{`${type}` === 't' ? `${precipitation}mm` : `${(precipitation / 25.4).toFixed(2)}inch`}</h1>
                    </div>
                    <div className='box'>
                        <img src={raindrops} alt='probabilidade chuva'></img>
                        <h1>{`${probability}%`}</h1>
                    </div>
                </div>
            </div>
        </div>
    )

}
