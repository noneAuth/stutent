import Nav from './nav';
import Content from './body';
import Toolbar from './toolbar';
import Types from '../types/index';
import Styles from './index.css';


const Layout = ({ children }: Types) => {
    return <div className={Styles.layout}>
          <Nav />
          <Content>{children}</Content>
          <Toolbar />
    </div>
}

export default Layout;