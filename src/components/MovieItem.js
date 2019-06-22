import React from 'react';
import { showButton, hideButton } from '../Redux/actions/index';
import { connect } from 'react-redux';
import './../App.css';

class MovieItem extends React.Component {


    handleMouseEnter(s){
        
        this.props.showbutton(s);
        console.log(this.props[s])
    }

    handleMouseLeave (s) {
        
        this.props.hidebutton(s);
        console.log(this.props[s])
    }


    render() {
        const { item } = this.props;
        return (
            <div
                onMouseEnter={()=>this.handleMouseEnter(item.title)} 
                onMouseLeave={()=>this.handleMouseLeave(item.title)}
                className="movieItem"
            >
                <img src={item.img} alt={item.title} width="100%" height="250px"/>
                <p className="movieItem-title"> {item.title} </p>
                <div className='button'>
                    <button 
                        className={this.props[item.title] ? "button-show":"button-hidden"}
                        onClick={() => this.props.onClick(item)}> {this.props.button} 
                    </button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => ({
    showbutton: (s) => { dispatch(showButton(s))},
    hidebutton: (s) => { dispatch(hideButton(s))},
})


export default connect(mapStateToProps, mapDispatchToProps)(MovieItem)
