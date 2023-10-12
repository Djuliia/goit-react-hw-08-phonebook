import { GlobalStyle } from 'components/GlobalStyle';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '600px',
      }}
    >
      <h1>
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
