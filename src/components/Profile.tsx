import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/60237326?s=460&u=45e0ce3b0f4d29f6442d62544a1119cc878daf0f&v=4" alt="Rafa Figueiredo"/>
            <div>
                <strong>Rafa Figueiredo</strong>    
                
                <p>
                <img src="icons/level.svg" alt="Level"/>
                     Level {level}</p>
                
            </div>
        </div>
    );
}