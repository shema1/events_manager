const baseUrl = 'https://5ec27ea38ebdcc0016a59db2.mockapi.io/schedule'

export const fetchEventList = () => {
	return fetch(baseUrl).then(response => response.json())
}

export const fetchUser = id => {
	return fetch(`${baseUrl}/${id}`).then(response => response.json())
}

export const createEvent = newEvent =>
	fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(newEvent),
	})
