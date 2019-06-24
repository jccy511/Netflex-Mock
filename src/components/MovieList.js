import React from 'react';
import { addMovie, removeMovie, fetchMovie, hideButton } from '../Redux/actions/index';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';

class MovieList extends React.Component {
   
    componentDidMount() {
        this.props.fetchMovie()
    }

    render() {
        const myList = this.props.MovieList["mylist"];
        const recommendList = this.props.MovieList["recommendations"];
        return (
            <div >
                <h2 className="title">My List</h2>
                <ul className="movie-content" >
                {
                    myList.map((item) => {
                    return  <li key={item.id}>
                                <MovieItem item = {item}  button="Remove"  onClick={()=>this.props.removeMovie(item)}/>    
                            </li>
                    })
                } 
                </ul>
                <h2 className="title">Recommendation List</h2>
                <ul className="movie-content" >
                {
                    recommendList.map((item) => {
                    return  <li key={item.id}>
                                <MovieItem item = {item}  button="Add"  onClick={()=>this.props.addMovie(item)}/>                     
                            </li>
                    })
                } 
                </ul>
            </div>
            
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        MovieList: state
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchMovie: () => { dispatch(fetchMovie())},
    addMovie: (movie) => { 
        dispatch(addMovie(movie));
        dispatch(hideButton(movie.title))
    },
    removeMovie: (movie) => { dispatch(removeMovie(movie));
        dispatch(hideButton(movie.title))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(MovieList)