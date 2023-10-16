import styles from "./App.module.scss";
import Homepage from "./components/Homepage";


function App() {

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Homepage />
    </div>
  )
}

export default App;
