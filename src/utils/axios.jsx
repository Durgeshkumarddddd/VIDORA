import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTEyYzJlMDA0ZGE5ODYxZjU5MzkzODY1MWJlZjk3NSIsIm5iZiI6MTc0Mjc5NzM3MS4xNjUsInN1YiI6IjY3ZTBmYTNiNGNlMDdkNjg0ZTA3ZmI4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h8-j2H5lrux-1xMG-r8SXY9qz2vkG5-YdmkqTwkxXh8'
      }
})

export default instance;