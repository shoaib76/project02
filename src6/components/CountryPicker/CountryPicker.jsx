import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import style from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = () => {
    const [ fetchedCountrys, setfetchedCountrys ] = useState([]);
    useEffect(() => {
       const fetchAPI = async () => {
           setfetchedCountrys(await fetchCountries());
       }
        fetchAPI();
        
    }, [setfetchedCountrys]);
    return(
        <FormControl className= { style.formControl }>
            <NativeSelect>
                <option value='global'>Global</option>
    { fetchedCountrys.map((country,i) => <option key={i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;