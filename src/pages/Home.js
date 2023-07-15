const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
  title: {
    fontWeight: 500,
    fontSize: 40,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to your contact manager{' '}
        <span role="img" aria-label="Phone icon">
          ☎
        </span>
      </h1>
    </div>
  );
}
