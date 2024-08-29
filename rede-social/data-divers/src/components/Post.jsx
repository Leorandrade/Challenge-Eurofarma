import styles from './Post.module.css';

import eurofarmaPerfil from '../assets/eurofarma-perfil.png';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={eurofarmaPerfil} />
                    <div className={styles.authorInfo}>
                        <strong>Apoio Ao Colaborador</strong>
                        <span>Recursos Humanos</span>
                    </div>
               </div>

               <time title="24 de Agosto às 18:51h" dateTime="2024-08-24 18:51:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Bem-vindo(a) à Eurofarma!</p>
                <p>Estamos muito felizes por você ter escolhido fazer parte do nosso time. 
                   Na Eurofarma, acreditamos que nosso maior ativo são as pessoas que, com seu talento e dedicação, contribuem para o nosso sucesso contínuo. 
                   Nosso propósito é promover o acesso à saúde e bem-estar, e estamos certos de que você desempenhará um papel fundamental nessa missão.</p>
                <p>Lembre-se, estamos aqui para apoiar você em cada etapa dessa jornada. Se precisar de qualquer ajuda, acesse o nosso chatbot:</p>
                <p> ❤{' '} <a href="">Teste.com</a>{' '} </p>
                <p> <a href="">#DataDivers #Eurofarma</a> </p>{' '}
            </div>
        </article>
    );
}