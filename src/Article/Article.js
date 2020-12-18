import { Component }from 'react';
import logo from '../assets/avatarIMG.jpg';
import './Article.css';
import CommentList from './CommentList/CommentList'

console.log('logo: ',logo);

class Article extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div className="Article">
                <span className="title">{this.props.title} </span>
                <span>{this.props.content}</span> 
                <img width={150} src={logo} /> 
                <CommentList />
            </div>
        )
    }
}

export default Article;