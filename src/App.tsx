import Card, { CardVariant } from './components/Card'

function App() {
	return (
		<div>
			<Card width={'200px'} height={'200px'} variant={CardVariant.primary}>
				<button>Button</button>
				<div>HI</div>
			</Card>
		</div>
	)
}

export default App
