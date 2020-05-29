import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer Q-tqiF_DLFCyisoykpmzrSzuLUUVtZG4tzmzgLXZVOMwqyw6cVJk4yC-dHu6EMleRXnKLeonaQVyyFuEH4audfy2u_b9q9JJB6Vi5NzFbSLMhpimbdZghnXSDaG9XnYx'
    }
});

