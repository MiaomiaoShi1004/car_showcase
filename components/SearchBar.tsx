"use client";

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { SearchManufacturer } from './';

// Render a search form
const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState('');

  const handleSearch = () => {}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar