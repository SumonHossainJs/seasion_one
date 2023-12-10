'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
const Login = () => {

  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [errore, seterrore] = useState('');
  const [setsuccess, setSetsuccess] = useState('');

  useEffect(() =>{
    seterrore(params.get('error'));
    setSetsuccess(params.get('seccess'));
  },[params]);

  if(session.status === 'loading'){
   return <p>Loading....</p> 
  }
  if(session.status === 'authenticated'){
    router?.push('/dashboard');
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;


    signIn('credentials',{
      email,
      password
    })
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{setsuccess ? setsuccess : "Welcome Back"}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {errore && errore}
      </form>
        <p>Don't have an accout?</p>
      <Link className={styles.register} href={'/dashboard/register'}> Register now</Link>
      </div>
  )
}

export default Login