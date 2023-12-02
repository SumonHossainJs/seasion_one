import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

export const metaData = {
  title: 'Lama dev Contact Information',
  description:'This is the contact Page',
}


const Contact = () => {
  return (
    <div className={styles.container}>

    <h1 className={styles.title}>Let's Keep in touch</h1>
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image
        src={'/contact.png'}
        alt={''}
        fill={true}
        className={styles.image}
        />
      </div>
      <form className={styles.form}>
        <input type="text"  placeholder='Name'  className={styles.input}/>
        <input type="text"  placeholder='Email'  className={styles.input}/>
        <textarea
       
        >
          
        </textarea>
      </form>
    </div>
    </div>
  )
}

export default Contact