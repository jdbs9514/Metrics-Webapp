/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowLeft, FaMicrophoneAlt } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { getAnimes } from '../Redux/animes';

function Details() {
  const animes = useSelector((state) => state.animes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimes());
  }, [dispatch]);
  const { name } = useParams();
  const index = animes.findIndex((data) => data.anime_name === name);

  return (
    <div className="details-container" data-testid="detailsdiv">
      <div className="details-nav nav-bar">
        <Link to="/">
          <FaArrowLeft />
        </Link>
        <p>COUNTRY DATA</p>
        <div className="nav-right">
          <p>
            <FaMicrophoneAlt />
          </p>

          <p>
            <AiFillSetting />
          </p>
        </div>
      </div>
      <div className="imagedetails">
        <img
          className="card-img-top"
          id="coat"
          src={animes[index].anime_img}
          alt="Card cap"
        />
        <p id="namepop" className="card-text">
          {animes[index].fact_id}
        </p>
      </div>
      <div className="breakdown">
        <p className="noto">ANIME DATA BREAKDOWN</p>
      </div>
      <div className="imagedetail">
        <p className="noto">NAME</p>
        <p className="card-text">{animes[index].anime_name.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default Details;
