/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import './styles/Crypto.css';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowLeft, FaMicrophoneAlt } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { searchCryptos } from '../Redux/Crypto';
import globe from './assets/globe.png';

function Details() {
  const animes = useSelector((state) => state.animes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCryptos());
  }, [dispatch]);
  const { name } = useParams();
  const index = animes.findIndex((data) => data.name === name);

  return (
    <div className="details-container" data-testid="detailsdiv">
      <div className="details-nav nav-bar">
        <Link to="/">
          <span className="arrow">
            <FaArrowLeft />
          </span>
        </Link>
        <p className="nav-name">{animes[index].name}</p>
        <div className="nav-right">
          <div className="icons">
            <FaMicrophoneAlt />
            <AiFillSetting />
          </div>
        </div>
      </div>
      <div className="imagedetails">
        <h1>{animes[index].symbol}</h1>
        <div className="title-details">
          <h2>
            #
            {animes[index].rank}
          </h2>
          <span>Ranked</span>
        </div>
      </div>
      <div className="div-stats">
        <span className="stats">Stats</span>
      </div>
      <div className="rows">
        <div className="div-price">
          <span className="current">Current Price</span>
          <p id="namepop" className="card-text">
            $
            {animes[index].priceUsd}
          </p>
        </div>
        <div className="first">
          <div className="breakdown">
            <span className="soan">Supply</span>
            <p className="noto">{animes[index].supply}</p>
          </div>
          <div className="market">
            <span className="market-span">Market Cap</span>
            <p className="market-p">
              $
              {animes[index].marketCapUsd}
            </p>
          </div>
        </div>
        <div className="second">
          <div className="volumen-div">
            <span className="volumen-span">Volume (last 24 hrs)</span>
            <p>{animes[index].volumeUsd24Hr}</p>
          </div>
          <div className="explorer-div">
            <span className="explorer">Explorer </span>
            <a href={animes[index].explorer}>
              <img className="imagen" src={globe} alt="globe" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
