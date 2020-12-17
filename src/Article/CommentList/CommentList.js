import { Component }from 'react';
import './CommentList.css';
import Comment from './Comment/Comment'

class CommentList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="CommentList">
                    <Comment author="Alon Rubin" date="17.12.20" content="bla bla bla bla bla" />
                    <Comment author="Ella Banyan" date="16.12.20" content="no no no, it's bla bla Bla bla" />
                    <Comment author="Barak Obama" date="17.12.20" content="we all need to uhhhhh, keep it together" />
            </div>
        )
    }
}

export default CommentList;