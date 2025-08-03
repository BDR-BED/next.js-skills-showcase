export default function Footer() {
  return (
    <footer style={{
      padding: '1rem',
      textAlign: 'center',
      background: '#f5f5f5',
      marginTop: 'auto'
    }}>
      <p>&copy; {new Date().getFullYear()} Boiko D.</p>
    </footer>
  );
}
