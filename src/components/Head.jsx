/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import './styles/Crypto.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import bitcoin from './assets/bitcoin.png';
import cardano from './assets/cardano.png';
import ethereum from './assets/ethereum.png';
import tether from './assets/tether.png';

function Head() {
  return (
    <header className="div-class">
      <Carousel fade>
        <Carousel.Item>
          <div className="d-block w-100 p-3 mb-2 bg-info text-dark">
            <div className="position">
              <img
                id="bitcoin"
                className="w-50"
                src={bitcoin}
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
              <h3>Bitcoin</h3>
              <p>
                Bitcoin (Abbreviation: BTC; sign: ₿) is a decentralized digital currency
                that can be transferred on the peer-to-peer bitcoin network.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 p-3 mb-2 bg-info text-dark">
            <div className="position">
              <img
                className="w-50"
                src={cardano}
                alt="Second slide"
              />
            </div>
            <Carousel.Caption>
              <h3>Cardano</h3>
              <p>
                Cardano is a public blockchain platform. It is open-source and decentralized,
                with consensus achieved using proof of stake.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 p-3 mb-2 bg-info text-dark">
            <div className="position">
              <img
                className="w-50"
                src={ethereum}
                alt="Third slide"
              />
            </div>
            <Carousel.Caption>
              <h3>Ethereum</h3>
              <p>
                Ethereum is a decentralized, open-source blockchain with smart contract
                functionality. Ether is the native cryptocurrency of the platform.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 p-3 mb-2 bg-info text-dark">
            <div className="position">
              <img
                className="w-50"
                src={tether}
                alt="Second slide"
              />
            </div>
            <Carousel.Caption>
              <h3>Tether</h3>
              <p>
                Tether (often referred to by one of its currency codes, USD₮), is an asset-backed
                cryptocurrency stablecoin. It was launched by the company Tether Limited Inc.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}

export default Head;
