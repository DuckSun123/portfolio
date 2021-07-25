import './App.less';
import Projects from './Containers/Project/Projects';
import { Layout } from 'antd';
import HeaderContainer from './Containers/Header/Header';
import About from './Containers/About/About';
import TypistContainer from './Containers/Typist/TypistContainer';
import Contact from './Containers/Contact/Contact';

const {  Content } = Layout;
function App() {
  return (
    <Layout>
      <HeaderContainer />
      <Content>
        <TypistContainer />
        <About />
        <Projects />
        <Contact />
      </Content>
    </Layout>
  );
}

export default App;
