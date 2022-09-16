/* eslint-disable  linebreak-style */
/* eslint-disable no-trailing-spaces */
import React, { useEffect } from 'react';
import './styles/Crypto.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCryptos } from '../Redux/Crypto';
import Head from './Head';

function Cryptos() {
  const animes = useSelector((state) => state.animes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptos());
  }, [dispatch]);

  const renderAnimes = animes.map((data) => (
    <div key={data.id}>
      <Link className="big" to={`./details/${data.name}`}>
        <div className="crypto-name">
          <h1 className="crypto-paragraph">{data.symbol.toUpperCase()}</h1>
          <div className="info">
            <h3 className="data-name">{data.name}</h3>
            <span className="price">
              $
              {data.priceUsd}
            </span>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <section>
      <div id="section">
        <Head />
        <div className="all-cryptos">{renderAnimes}</div>
      </div>
    </section>
  );
}

export default Cryptos;
