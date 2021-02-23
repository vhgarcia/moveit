import styles from '../styles/components/Profile.module.css'

export function Profile () {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/vhgarcia.png" alt="Victor Garcia" />
      <div>
        <strong>
          Victor Garcia
        </strong>
        
        <p><img src="icons/level.svg" alt="levelup"/>Level 1</p>
      </div>
    </div>
  )
}