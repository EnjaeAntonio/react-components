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
  const bannerDesc = 'I\'m really enjoying building this new React app. Learning about components and props is interesting. It\'s great how they make the code more organized and easier to manage. It\'s quite satisfying to see all the separate parts come together into a functioning app. I\'m looking forward to mastering more aspects of React';
  const btnPrimary = 'Primary';
  const btnSecondary = 'Secondary';
  const copyright = '2023 React Components'
  const contact = 'Contact us at: ReactComponents@email.com'
  const privacypolicy = 'Privacy Policy'
  const terms = 'Terms and Conditions'
  const movies = [
    {
      "id": 1000,
      "name": "The Batman",
      "img": "https://raw.githubusercontent.com/mrspecht/media/main/img/the-batman.jpg"
    },
    {
      "id": 1001,
      "name": "Avengers: Infinity War",
      "img": "https://raw.githubusercontent.com/mrspecht/media/main/img/avengers-infinity-war.jpg"
    },
    {
      "id": 1002,
      "name": "The Flash",
      "img": "https://raw.githubusercontent.com/mrspecht/media/main/img/the-flash.jpg"
    },
    {
      "id": 1003,
      "name": "The Grand Budapest Hotel",
      "img": "https://raw.githubusercontent.com/mrspecht/media/main/img/the-grand-budapest-hotel.jpg"
    },
  ];

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
      <Gallery 
        movies={movies}
      />
      <Footer 
        copyright={copyright}
        contactEmail={contact}
        about={headerAbout}
        privacypolicy={privacypolicy}
        contact={headerContact}
        terms={terms}
      />
    </main>
  );
}

export default App;
