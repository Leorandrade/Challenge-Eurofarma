import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import perfilcomentario from '../assets/Thiago.png';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={perfilcomentario} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Ieffa</strong>
                            <time title="24 de Agosto às 18:51h" dateTime="2024-08-24 18:51:00">Agora</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            Deletar Comentário
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                    
                </footer>
            </div>

        </div>
    )
}