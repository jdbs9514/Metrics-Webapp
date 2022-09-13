import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnimes, searchAnimes } from '../Redux/animes';

function Animes () {
  const animes = useSelector((state) => state.anime);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimes());
  },[]);

  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchAnimes(search));
  };

  const showAll = (e) => {
    e.preventDefault();
    dispatch(getAnimes());
    setSearch('');
  };

  return(
    
  )
}

export default Animes;