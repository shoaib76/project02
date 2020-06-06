import axios from 'axios';

const Url = 'http://covid19.mathdro.id/api';

export const fetchData = async () => {
    
    try {
       const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(Url) ;
       
       return { confirmed, recovered, deaths, lastUpdate };

 
  } catch(error) {

  }
}


