import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const response = await axios(url);

        //console.log(response);

        return response.data;
    }
    catch(error){

    }
}