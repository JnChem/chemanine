import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    fontFamily: 'sans-serif',
  },
  illustrationContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '80px',
  },
  square: {
    width: '280px',
    height: '280px',
    borderRadius: '16px',
    backgroundColor: '#FFE8DC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '80px',
  },
  contentContainer: {
    flex: 1,
    padding: '0 40px 60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#2D3142',
    textAlign: 'center',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
    color: '#8A8A8E',
    textAlign: 'center',
    lineHeight: '1.6',
    marginBottom: '40px',
    maxWidth: '360px',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: '360px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#FF9A3D',
    padding: '18px',
    borderRadius: '16px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(255, 154, 61, 0.3)',
    width: '100%',
  },
};

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.illustrationContainer}>
        <div style={styles.square}>
          🛠️
        </div>
      </div>

      <div style={styles.contentContainer}>
        <h1 style={styles.title}>Bem-vindo Admin!</h1>
        <p style={styles.description}>
          Faça login para acessar o painel de administração.
        </p>

        <div style={styles.buttonContainer}>
          <SignedOut>
            <SignInButton mode="modal">
              <button style={styles.button}>Entrar</button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default App;