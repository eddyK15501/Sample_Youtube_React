import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: 'AIzaSyBr0JH2AhMpJeKTNurdGyE7jsqluq2bqyk', 
    }
})
