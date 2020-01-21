import React from "react"
import styled from "styled-components"

const Section = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;

  img {
    max-width: 100%;
  }
  ul {
    list-style: none;
    margin: 1em;
    padding: 0;
  }
  .freeEvent {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    text-decoration: underline;
    font-size: 1.5rem;
    font-weight: bold;
    /* color: hot */
  }
  .date {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }
`

const Event = ({
  freeEvent,
  title,
  workshopTitle,
  image,
  town,
  date,
  ticketAddress,
  onSale,
}) => {
  return (
    <Section>
      <img src={image} alt="" />
      <div className="details">
        <ul>
          {freeEvent ? <li className="freeEvent">Free advent</li> : null}

          <li className="date">{title}</li>
          <li className="town">{town}</li>
          <li className="date">{date}</li>
          <li className="workshopTitle">{workshopTitle}</li>
          <li>
            <div>
              <button>Get tickets</button>
              <button>DETAILS</button>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  )
}

export default Event
