import Types from '../types/index';
import styles from './index.css';
const Body = ({children}: Types) => {
  return <div className={styles.body}>{children}</div>
}
export default Body;