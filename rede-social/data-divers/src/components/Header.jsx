import styles from './Header.module.css'

import eurofarmaLogo from '../assets/eurofarma-logo.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={eurofarmaLogo} alt="Logo" />
        </header>
    );
}