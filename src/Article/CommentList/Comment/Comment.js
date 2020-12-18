import { Component } from 'react';
import './Comment.css';


class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Comment">
               <div className="author">{this.props.author}</div> 
               <div>{this.props.date}</div>
               <div>{this.props.content}</div> 
            </div>
        )
    }
}

export default Comment;