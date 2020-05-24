import * as eventsGateway from './gateway'
export const EVENT_LIST_RECIEVED = 'EVENT_LIST_RECIEVED'

export const eventListRecived = eventsList => {
	return {
		type: EVENT_LIST_RECIEVED,
		payload: {
			eventsList,
		},
	}
}

export const getEventsList = () => {
	return function(dispatch) {
		eventsGateway
			.fetchEventList()
			.then(data => dispatch(eventListRecived(data)))
	}
}

export const createEvent = obj => {
	return function(dispatch) {
		eventsGateway.createEvent(obj).then(() => dispatch(getEventsList()))
	}
}
