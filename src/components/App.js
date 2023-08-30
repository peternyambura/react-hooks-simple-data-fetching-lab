function App() {
  // Create state variables for the dog image and loading status
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      });
  }, []); 

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={dogImage} alt="A Random Dog" />
        </div>
      )}
    </div>
  );
}

export default App;
