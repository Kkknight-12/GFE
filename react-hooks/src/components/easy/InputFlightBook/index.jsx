/*
* The user can choose from two flight options: "One-way flight" and "Return flight".
Input date fields
The date input fields represent the departure date and return dates.
The return date input is displayed if the "Return flight" option is chosen, hidden otherwise.
Form validation should be done upon submission for invalid fields:
Dates are in the past.
Return date is before the departure date.
Upon successful submission, a message is displayed informing the user of the selection:
One-way flight: "You have booked a one-way flight on YYYY-MM-DD"
Return-flight "You have booked a return flight, departing on YYYY-MM-DD and returning on YYYY-MM-DD"

 * */

import { useState } from "react"

const InputFlightBook = () => {
  const [flightOption, setFlightOption] = useState("one-way")
  const [departureDate, setDepartureDate] = useState("")
  const [returnDate, setReturnDate] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()
    if (flightOption === "one-way") {
      alert(`You have booked a one-way flight on ${departureDate}`)
      return
    }

    alert(
      `You have booked a return flight, departing on ${departureDate} and returning on ${returnDate}`
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
        {flightOption === "return" && (
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
      </form>
    </div>
  )
}

export default InputFlightBook
