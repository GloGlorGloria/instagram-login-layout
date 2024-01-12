import styles from './Form.module.css'
import Image from 'next/image'

export default function Form(){
    return(
<form className={styles.info}>
    <input type="text" className={styles.user} placeholder="Phone number, username, or email"></input>
    
    <input type ="password" className={styles.user} placeholder="Password"></input>
    
    <button className={styles.login}>Log in</button>

    <div className={styles.orbreak}>
        <div className={styles.line}></div>
        <div className={styles.or}>OR</div>
        <div className={styles.line}></div> 
    </div>

    <button className={styles.fblink}>
        <Image className={styles.fblogo} src={'/Image/facebook_icon.png'}alt="Facebook logo" width={16} height={16}/>
        <div class={styles.fblogin}>Log in with Facebook</div>
    </button>

    <div className={styles.forgotpw}>
        <p>Forgot password?</p>
    </div>  
</form>
    )
}