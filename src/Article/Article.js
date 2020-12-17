import { Component }from 'react';
import './Article.css';
import CommentList from './CommentList/CommentList'


class Article extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Article">
                <span className="title">{this.props.title} </span>
                <span>{this.props.content}</span> 
                <span>{this.props.route} </span>
                <CommentList />
            </div>
        )
    }
}

export default Article;