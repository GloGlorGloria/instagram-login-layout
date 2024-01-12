import styles from './Footer.module.css'
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.infofooter}>
                <li>Meta About Blog Jobs Help API Privacy Terms Locations <span className={styles.lite}>Instagram Lite</span>  
                 <span className={styles.threads}>Threads</span>
                 <span className={styles.uploading}>Contact Uploading & Non-Users</span> 
                 <span className={styles.meta}>Meta Verified</span> </li>
            </ul>
            <br/>
        <div className={styles.footer2}>
            <select className={styles.lang}>
                <option>Afrikaans</option>
                <option>العربية</option>
                <option>Čeština</option>
                <option>Dansk</option>
                <option>Deutsch</option>
                <option>Ελληνικά</option>
                <option value ="English"selected>English</option>
                <option>English (UK)</option>
                <option>Español (España)</option>
                <option>Español</option>
                <option>فارسی</option>
                <option>Suomi</option>
                <option>Français</option>
                <option>עברית</option>
                <option>Bahasa Indonesia</option>
                <option>Italiano</option>
                <option>日本語</option>
                <option>한국어</option>
                <option>Bahasa Melayu</option>
                <option>Norsk</option>
                <option>Nederlands</option>
                <option>Polski</option>
                <option>Português (Brasil)</option>
                <option>Português (Portugal)</option>
                <option>Русский</option>
                <option>Svenska</option>
                <option>ภาษาไทย</option>
                <option>Filipino</option>
                <option>Türkçe</option>
                <option>中文(简体)</option>
                <option>中文(台灣)</option>
                <option>বাংলা</option>
                <option>ગુજરાતી</option>
                <option>हिन्दी</option>
                <option>Hrvatski</option>
                <option>Magyar</option>
                <option>ಕನ್ನಡ</option>
                <option>മലയാളം</option>
                <option>मराठी</option>
                <option>नेपाली</option>
                <option>ਪੰਜਾਬੀ</option>
                <option>සිංහල</option>
                <option>Slovenčina</option>
                <option>தமிழ்</option>
                <option>తెలుగు</option>
                <option>اردو</option>
                <option>Tiếng Việt</option>
                <option>中文(香港)</option>
                <option>Български</option>
                <option>Français (Canada)</option>
                <option>Română</option>
                <option>Српски</option>
                <option>Українська</option>
            </select>
            <span className={styles.from_meta}> © 2024 Instagram From Meta</span> 
         </div>
        </footer>
    )
}
