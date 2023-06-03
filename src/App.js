import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './style/index.css'

function App() {
  const pageTitle = 'React Components';
  const headerHome = 'Home';
  const headerAbout = 'About Us';
  const headerBlogs = 'Blogs';
  const headerContact ='Contact Us';

  return (
    <main>
      <Header
        title={pageTitle}
        home={headerHome}
        about={headerAbout}
        blogs={headerBlogs}
        contact={headerContact}
      />
      <Banner>
        
      </Banner>
    </main>
  );
}

export default App;
