import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    count: 5,
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader-text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }

  // async / await 방식
  getMovies = async () => {
    try {
      //오브젝트 객체분해..
      // 위 과정을 한 번에 처리
      const {
        data: {
          data: { movies },
        },
      } = await axios.get('https://yts-proxy.now.sh/list_movies.json?limit=5&sort_by=rating');
      this.setState({ movies: movies, isLoading: false });
    } catch (err) {
      console.log('통신시 오류가 발생했습니다.');
      console.log(err);
    }
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 5000);
    this.getMovies();
  }
}

export default Home;
