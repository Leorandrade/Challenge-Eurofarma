import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

import eurofarmaCapa from '../assets/eurofarma-capa.jpeg';
import fotoPerfil from '../assets/Thiago.png';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src={eurofarmaCapa} 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src={fotoPerfil} />

                <strong>Thiago Ieffa</strong>
                <span>Farmacêutico</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}