import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './styles/breakpoints.scss'
import store from './store'
import Calendar from './features/calendar/commponts/Calendar'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Calendar />
				
			</Provider>
		)
	}
}

export default App
