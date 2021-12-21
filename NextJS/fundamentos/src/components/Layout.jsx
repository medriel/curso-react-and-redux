import styles from '../styles/Layout.module.css'
import Link from "next/link"

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Link href="/">Voltar</Link>
      </div>
      <div className={styles.body}>
        {props.children}
      </div>
    </div>
  )
}