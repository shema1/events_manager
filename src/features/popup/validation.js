const validate = (event, events) => {
	let startTime =
		+event.startTime.slice(0, 2) + event.startTime.slice(3, 5) * 0.01
	let endTime = +event.endTime.slice(0, 2) + +event.endTime.slice(3, 5) * 0.01

	if (endTime - startTime < 0) {
		alert('enter correct time ')
		return false
	}

	if (endTime - startTime < 0.3) {
		alert('min 30 minute')
		return false
	}

	let check = events.filter(
		elem =>
			startTime <=
				+elem.endTime.slice(0, 2) + elem.endTime.slice(3, 5) * 0.01 &&
			endTime >= +elem.startTime.slice(0, 2) + elem.startTime.slice(3, 5) * 0.01
	)

	if (check.length !== 0) {
		alert('your event crosses another event. Choose another time')
		return false
	}

	return true
}

export default validate
