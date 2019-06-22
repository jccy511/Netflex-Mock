import React from 'react';
import { addMovie, removeMovie, fetchMovie, hideButton } from '../Redux/actions/index';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';

class MovieList extends React.Component {
   
    componentDidMount() {
        this.props.fetchMovie()
    }

    render() {
        const list = this.props.MovieList[this.props.listType];
        const name = this.props.btnName;
        const listName = this.props.list;
        const clickName = name === 'Remove' ? this.props.removeMovie : this.props.addMovie;
        return (
            <div >
                <h2 className="title">{listName}</h2>
                <ul className="movie-content" >
                {
                    list.map((item) => {
                    return  <li key={item.id}>
                                <MovieItem item = {item}  button={name}  onClick={clickName}/>
                                
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