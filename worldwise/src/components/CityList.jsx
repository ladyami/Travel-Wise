import React from 'react';
import Sipnner from './Sipnner';
import styles from './CityList.module.css';
import CityItem from './CityItem';

const CityList = ({cities, isLoading}) => {

   if(isLoading) return <Sipnner/>;

  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (  <CityItem city={city} key={city.id} />))}
    </ul>
  )
}

export default CityList