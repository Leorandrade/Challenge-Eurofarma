import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import eurofarmaPerfil from '../src/assets/eurofarma-perfil.png';
import presidente from '../src/assets/Rafael.png';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatar: presidente,
      name: 'Presidente Rafael',
      role: 'Data Divers'
    },
    content: [
      { type: 'paragraph', content: 'Olá Colaborador!' },
      { type: 'paragraph', content: 'Nós somos a Data Divers e fomos contratados para tornar sua experiência ainda melhor.'},
      { type: 'paragraph', content: 'Criamos um chatbot personalizado para responder suas dúvidas de forma eficiente e rápida. Acesse o link e aproveite!'},
      { type: 'link', content: 'https://chatbotdatadivers.com.br'},
    ],
    publisheAt: new Date('2024-05-03 14:00:00'),
  },
  {
    id: 2,
    author: {
      avatar: eurofarmaPerfil,
      name: 'Apoio Ao Colaborador',
      role: 'Recursos Humanos'
    },
    content: [
      { type: 'paragraph', content: 'Bem-vindo(a) à Eurofarma!' },
      { type: 'paragraph', content: 'Estamos muito felizes por você ter escolhido fazer parte do nosso time. Na Eurofarma, acreditamos que nosso maior ativo são as pessoas que, com seu talento e dedicação, contribuem para o nosso sucesso contínuo. Nosso propósito é promover o acesso à saúde e bem-estar, e estamos certos de que você desempenhará um papel fundamental nessa missão.'},
    ],
    publisheAt: new Date('2024-05-10 14:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post 
              key={posts.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publisheAt}
            />)
          })}
        </main>
      </div>
    </div>
    
  )
}
