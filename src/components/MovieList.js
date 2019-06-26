import React from 'react';
import { addMovie, removeMovie, fetchMovie, hideButton, showButton } from '../Redux/actions/index';
import { connect } from 'react-redux';
import './../App.css';

class MovieList extends React.Component {
   
    componentDidMount() {
        this.props.fetchMovie()
       
    }

    handleMouseEnter(s){
        
        this.props.showbutton(s);
        
    }

    handleMouseLeave (s) {
        
        this.props.hidebutton(s);
        
    }

    render() {
        const list = this.props.MovieList[this.props.listType];
        const buttonName = this.props.btnName;
        const listName = this.props.list;
        const clickName = buttonName === 'Remove' ? this.props.removeMovie : this.props.addMovie;
        console.log('clickName is', clickName);
        return (
            <div >
                <h2 className="title">{listName}</h2>
                <ul className="movie-content" >
                {
                    list.map((item) => {
                    return  <li key={item.id}>
                               <div
                                onMouseOver={()=>this.handleMouseEnter(item.title)} 
                                onMouseLeave={()=>this.handleMouseLeave(item.title)}
                                className="movieItem"
                                >
                                    <img src={item.img} alt={item.title} width="100%" height="250px"/>
                                    <p className="movieItem-title"> {item.title} </p>
                                    <div className='button'>
                                        <button 
                                        className={this.props[item.title] ? "button-show":"button-hidden"}
                                        onClick={()=>clickName(item)}> {buttonName} 
                                        </button>
                                    </div>
                                </div>
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
        ...state,
        MovieList: state
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchMovie: () => { dispatch(fetchMovie())},
    addMovie: (movie) => { 
        dispatch(addMovie(movie));
        dispatch(hideButton(movie.title))
    },
    removeMovie: (movie) => { 
        dispatch(removeMovie(movie));
        dispatch(hideButton(movie.title))
    },
    showbutton: (s) => { dispatch(showButton(s))},
    hidebutton: (s) => { dispatch(hideButton(s))}
})


export default connect(mapStateToProps, mapDispatchToProps)(MovieList)