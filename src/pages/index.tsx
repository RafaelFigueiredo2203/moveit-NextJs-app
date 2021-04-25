import { ExperienceBar } from "../components/ExperienceBar";
import {GetServerSideProps} from 'next';

import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import styles from '../styles/pages/Home.module.css';
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import  Head from 'next/head';
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps{
  level: number;
  currentExperience:number;
  challengesCompleted:number;
}

export default function Home(props: HomeProps) {
  console.log(props)
  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
    <div className={styles.container}>
      <Head>
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <title>Inicio | Move.it</title>
      </Head>
      
    <ExperienceBar/>  
    
    <CountdownProvider>
    <section>
      <div>
        <Profile />
        <CompletedChallenges/>
        <Countdown/>
        </div>

        <div>
        <ChallengeBox/>
      </div>
    </section>
    </CountdownProvider>
    
    </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  

  const {level, currentExperience, challengesCompleted } = ctx.req.cookies;
  


  return {
    props: {
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted)
    }
  }
}