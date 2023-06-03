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
  const bannerTitle = 'Having fun with React!';
  const bannerDesc = 'This is just a basic paragraph for now but I will add some more relatable content later!';
  const btnPrimary = 'Primary';
  const btnSecondary = 'Secondary';
  
  return (
    <main>
      <Header
        title={pageTitle}
        home={headerHome}
        about={headerAbout}
        blogs={headerBlogs}
        contact={headerContact}
      />
      <Banner
        title={bannerTitle}
        desc={bannerDesc}
        primary={btnPrimary}
        secondary={btnSecondary}
      />
      <Gallery>

      </Gallery>
      <Footer>

      </Footer>
    </main>
  );
}

export default App;
