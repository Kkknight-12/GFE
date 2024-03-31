import React, { useState } from 'react'

const FlightBooker = () => {
  const [flightOption, setFlightOption] = useState('one-way')
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (flightOption === 'one-way') {
      alert(`You have booked a one-way flight on ${departureDate}`)
      return
    }

    alert(
      `You have booked a return flight, departing on ${departureDate} and returning on ${returnDate}`,
    )
  }

  return (
    <div>
      <form className="flight-booker" onSubmit={onSubmit}>
        <div>
          <label htmlFor="flight-option">Choose Flight book option:</label>

          <select
            id="flight-option"
            onChange={(e) => setFlightOption(e.target.value)}
            value={flightOption}
          >
            <option value="one-way">One-way flight</option>
            <option value="return">Return Flight</option>
          </select>
        </div>

        <div>
          <label>Departure date:</label>
          <input
            type="date"
            name="flight"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        {flightOption === 'return' && (
          <div>
            <label>Return date:</label>
            <input
              type="date"
              name="flight"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        )}
        <button type="submit">Book</button>
      </form>
    </div>
  )
}
export default FlightBooker