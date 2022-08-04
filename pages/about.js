import Image from 'next/image';
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About the project</h1>
      <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum dolor sit amet lorem ipsum dolor</p>
      <Image src='/images/charizard.png' width='300' height='300' alt='Imagem de um Charizard' />
    </div>
  );
}