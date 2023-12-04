import React from 'react'
import styles  from './page.module.css';
import Link from "next/link";
import Image from "next/image";


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{ next: { revalidate: 3600 } })
  console.log(res);
 
 
 
  return res.json()
}

const Blog = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={"https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-young-redhead-in-a-leather-jacket-and-sunglasses-sitting-on-a-bench.png?auto=compress&cs=tinysrgb&w=600&lazy=load"}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>

  )
}

export default Blog