import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  console.log(props);
  console.log(props.jokeData)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div >
          <h1>MongoDB: {props.mongodb}</h1>
          <h1>APP NAME: {props.name}</h1>
          <h1>APP EMAIL: {props.email}</h1>
          <h1>APP PASSWORD: {props.password}</h1>

        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        
      </main>
    </>
  );
}

// pages/index.js

export async function getServerSideProps(context) {
  // Fetch data from an API or perform any other asynchronous tasks
  const mongodb = process.env.NEXT_APP_MONGODB;
  const name = process.env.NEXT_APP_NAME;
  const email = process.env.NEXT_APP_EMAIL;
  const password = process.env.NEXT_APP_PWD;
  const jokeUrl = process.env.NEXT_APP_JOKE_URL;

  console.log("MongoDB:", mongodb);
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Joke URL:", jokeUrl);

  const data = await fetch(jokeUrl)

  const jsonData = await data.json();

  console.log(jsonData)

  // Return the data as props
  return {
    props: {
      mongodb,
      name,
      email,
      password,
      jokeData:JSON.parse(JSON.stringify(jsonData))
    }
  };
}


