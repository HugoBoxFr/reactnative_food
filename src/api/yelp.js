import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 6wokTzJOB0Hl9Yps8bMHfnI351TcIaZAVRU9-DIJH_5fH_5n3KctmmC3hqci51dRdM4de9nAeyxL1HHMRqzaBufeDJD6xRCdHEcj6DPepPKEiQX8cvo-KiSHWp_rX3Yx'
    }
});
