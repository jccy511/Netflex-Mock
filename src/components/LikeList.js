import React from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../Redux/actions/index";

class LikeList extends React.Component {
  componentDidMount() {
    this.props.fetchMovie();
  }

  render() {
    const list = this.props.movieList.mylist;
    console.log(list);
    return (
      <div>
        <h2 className="title">Like List</h2>
        <ol className="like-list-titles">
          {list.map(item => {
            return (
              <li style={{ margin: 20 }} key={item.id}>
                {item.title}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movieList: state };
};

const mapDispatchToProps = dispatch => ({
  fetchMovie: () => {
    dispatch(fetchMovie());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeList);
