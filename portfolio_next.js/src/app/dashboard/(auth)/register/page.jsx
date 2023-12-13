"use client";
import styles from "./page.module.css";
import Link from "next/link";
import React, { useState } from "react";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      console.log(res);
      res.status === 201 &&
      router.push("/dashboard/login?success=Account has been created");
      console.log(res);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return <div className={styles.container}>
        <h1 className={styles.title}>Create an Account</h1>
        <h2 className={styles.subTitle}>Please signup to see the dashboard</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text"
            placeholder="User name"
            required
            className={styles.input}
            />
            <input type="text"
            placeholder="Email"
            required
            className={styles.input}
            />
            <input type="text"
            placeholder="Password"
            required
            className={styles.input}
            />
            <button className={styles.button} >submit</button>

            {error &&  error}
        </form>
    </div>;
};

export default Register;
