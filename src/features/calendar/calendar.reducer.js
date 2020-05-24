import { EVENT_LIST_RECIEVED } from './calendar.actions'

const initState = {
	eventsList: [],
}

const eventsReducer = (state = initState, action) => {
	switch (action.type) {
		case EVENT_LIST_RECIEVED: {
			return {
				...state,
				eventsList: action.payload.eventsList,
			}
		}

		default: {
			return state
		}
	}
}

export default eventsReducer
