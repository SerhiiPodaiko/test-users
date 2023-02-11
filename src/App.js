import NavBar from "./components/nav-bar/NavBar"
import Router from "./routes/router"

const App = () => (
    <div className="app-container">
        <NavBar/>
        <main className="app-content">
            <div className="container">
                <Router/>
            </div>
        </main>
    </div>
)
export default App

