import React from "react";
import { addMovie, removeMovie, fetchMovie } from "../Redux/actions/index";
import { connect } from "react-redux";
import "./../App.css";

//MovieList template
class MovieList extends React.Component {
  componentDidMount() {
    this.props.fetchMovie();
  }

  render() {
    const list = this.props.MovieList[this.props.listType];
    const buttonName = this.props.btnName;
    const listName = this.props.list;
    const clickName =
      buttonName === "Remove" ? this.props.removeMovie : this.props.addMovie;
    return (
      <div>
        <h2 className="title">{listName}</h2>
        <ul className="movie-content">
          {list.map(item => {
            return (
              <li key={item.id}>
                <div className="movieItem">
                  <img
                    src={item.img}
                    alt={item.title}
                    width="100%"
                    height="250px"
                  />
                  <p className="movieItem-title"> {item.title} </p>
                  <div className="button">
                    <button className="btn" onClick={() => clickName(item)}>
                      {" "}
                      {buttonName}
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...state,
    MovieList: state
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMovie: () => {
    dispatch(fetchMovie());
  },
  addMovie: movie => {
    dispatch(addMovie(movie));
  },
  removeMovie: movie => {
    dispatch(removeMovie(movie));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
