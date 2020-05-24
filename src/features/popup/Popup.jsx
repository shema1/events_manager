import React, { useState } from 'react'
import './popup.scss'
import { connect } from 'react-redux'
import * as calendarAction from '../calendar/calendar.actions'
import PropTypes from 'prop-types'
import Event from '../event/Event'
import validate from './validation'

const PopUp = ({ closePopUp, createEvent, selectDay, curentEvents }) => {
	const [name, setName] = useState('')
	const [startTime, setStartTime] = useState('')
	const [endTime, setEndTime] = useState('')
	const hours = [
		'00:00',
		'01:00',
		'02:00',
		'03:00',
		'04:00',
		'05:00',
		'06:00',
		'07:00',
		'08:00',
		'09:00',
		'10:00',
		'11:00',
		'12:00',
		'13:00',
		'14:00',
		'15:00',
		'16:00',
		'17:00',
		'18:00',
		'19:00',
		'20:00',
		'21:00',
		'22:00',
		'23:00',
	]

	const handleCreateEvent = () => {
		event.preventDefault()
		let newEvent = {
			name,
			date: selectDay,
			startTime,
			endTime,
		}

		if (validate(newEvent, curentEvents)) {
			createEvent(newEvent)
			setName('')
			setStartTime('')
			setEndTime('')
			closePopUp(false)
		}
	}

	return (
		<div className='popup'>
			<form action='popup-form' className='popup-form'>
				<button className='close btn' onClick={() => closePopUp(false)}>
					<i className='fas fa-times'></i>
				</button>
				<label htmlFor='name' className='input-label'>
					Name event
				</label>
				<input
					name='name'
					type='text'
					onChange={event => setName(event.target.value)}
				/>
				<div className='time-input'>
					<label htmlFor='start-time'>from</label>
					<input
						name='start-time'
						className='time-input__start'
						type='time'
						onChange={event => setStartTime(event.target.value)}
					/>
					<label htmlFor='start-time'>to</label>
					<input
						name='end-time'
						className='time-input__end'
						type='time'
						onChange={event => setEndTime(event.target.value)}
					/>
					<button
						className='add-task btn-popup'
						type='submit'
						onClick={handleCreateEvent}
					>
						create
					</button>
				</div>

				<ul className='schedule'>
					{hours.map(elem => (
						<li className='hour' key={elem}>
							{elem}
						</li>
					))}
					{curentEvents.map(elem => (
						<Event {...elem} key={Math.random()} />
					))}
				</ul>
			</form>
		</div>
	)
}

const mapDispatch = {
	createEvent: calendarAction.createEvent,
}

PopUp.propTypes = {
	closePopUp: PropTypes.func,
	createEvent: PropTypes.func,
	selectDay: PropTypes.string,
	curentEvents: PropTypes.array,
}

export default connect(null, mapDispatch)(PopUp)
