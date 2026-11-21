import {createRoot} from 'react-dom/client'

const rootElement = document.querySelector('#root')

// const App = () => <h1>Hello App</h1>

function App() {
	return <h1>Hello App</h1>
}


createRoot(rootElement).render(
	<App />
)