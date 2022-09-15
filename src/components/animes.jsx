/* eslint-disable  linebreak-style */
/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAnimes, searchAnimes } from '../Redux/animes';
import Head from './Head';

function Animes() {
  const animes = useSelector((state) => state.animes);
  console.log(animes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimes());
  }, [dispatch]);

  const [state, setState] = useState('');
  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchAnimes(state));
  };

  const showAll = (e) => {
    e.preventDefault();
    dispatch(getAnimes());
    setState('');
  };

  const renderAnimes = animes.map((data) => (
    <div key={data.anime_id}>
      <Link className="big" to={`./details/${data.anime_name}`}>
        <img className="anime-image" alt="details" src={data.anime_img} />
        <div className="anime-name">
          <h2 className="anime-paragraph">{data.anime_name.toUpperCase()}</h2>
        </div>
      </Link>
    </div>
  ));

  return (
    <div>
      <div id="section">
        <Head />
        <div id="search-bar" className="search-bar">
          <input
            type="text"
            className="input-anime"
            placeholder="Search Anime"
            onChange={handleChange}
            value={state}
          />
          <button
            className="button-search"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
          <button className="button-back" type="button" onClick={showAll}>
            See All
          </button>
        </div>
        <div className="all-animes">{renderAnimes}</div>
      </div>
    </div>
  );
}

export default Animes;
