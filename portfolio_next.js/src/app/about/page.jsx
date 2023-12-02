import React from 'react';
import styles from './page.module.css';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroPart}>
        <div className={styles.wrapper}>
        <h2>Digital StoryTellers</h2>
          <p>handCarfting award winning digital exprience</p>
        </div>
          
      </div>
      <div className={styles.boxCon}>
        <div className={styles.boxItem}>
            <h2 className={styles.title}>Who are we</h2>
            <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed illo, magni eligendi hic enim obcaecati quam, aliquid ipsum sint, maiores nisi perspiciatis reprehenderit harum.<br/> Natus exercitationem autem quaerat nemo delectus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ducimus autem praesentium perferendis magnam enim assumenda ipsam laborum architecto laboriosam.

            </p>
            
        </div>
        <div className={styles.boxItem}>
        <h2 className={styles.title}>Who are we</h2>
            <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed illo, magni eligendi hic enim obcaecati quam, aliquid ipsum sint, maiores nisi perspiciatis reprehenderit harum.<br/> Natus exercitationem autem quaerat nemo delectus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ducimus autem praesentium perferendis magnam enim assumenda ipsam laborum architecto laboriosam.
              <br/> --Dynamic Website 
              <br/> --Graphic Design 
              <br/> --Mobile Apps

              

            </p>
            <Button text={'Contact'} url={'/contact'}/>
        </div>
      </div>
    </div>
  )
}

export default About