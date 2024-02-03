import React from 'react';
import './Comment.css';

interface CommentProps {
    id: number;
    name: string;
    email: string;
    body: string;
}

export const Comment: React.FC<CommentProps> = ({ id, name, email, body }) => {
    return (
        <div className="comment-item" key={id}>
            <div className="comment-content">
                <h5 className="comment-name">{name}</h5>
                <p className="comment-email">Email: {email}</p>
                <p className="comment-body">{body}</p>
            </div>
        </div>
    );
};
