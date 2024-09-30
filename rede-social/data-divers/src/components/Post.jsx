import { Comment } from './Comment';
import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

import eurofarmaPerfil from '../assets/eurofarma-perfil.png';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Muito obrigado e parabéns a todos que entraram pelo programa de contratação 2024, essa empresa é um sonho pra mim!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAt);

  function handleCreateNewComment() {
    event.preventDefault()


    setComments([...comments, newCommentText]);
    setNewCommentText('');
    
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
        return comment != commentToDelete;
    })
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatar} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
               </div>

               <time>
                {publishedDateFormatted}
               </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type = 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type = 'link') {
                        return <p key={line.content}><a href = "#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name = "comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                    <Comment
                    key={comment}
                    content={comment}
                    onDeleteComment={deleteComment} 
                    />
                )
                })}
            </div>

        </article>
    );
}