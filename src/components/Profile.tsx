import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallegesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/vhgarcia.png" alt="Victor Garcia" />
      <div>
        <strong>Victor Garcia</strong>

        <p>
          <img src="icons/level.svg" alt="levelup" />
          {level}
        </p>
      </div>
    </div>
  );
}
