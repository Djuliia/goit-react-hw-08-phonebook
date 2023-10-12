import { GlobalStyle } from 'components/GlobalStyle';

const Home = () => {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1 style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '15%' }}>
        Welcome to Phonebook, where you can save your contacts{' '}
        <span role="img" aria-label="book icon">
          📖
        </span>
      </h1>
      <GlobalStyle />
    </div>
  );
};

export default Home;
