import React from "react"
import styled from "styled-components"
import colors from "../theme/colors"

import { Button, ButtonPrimary } from "../components/buttons"

const Section = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;

  padding: 0;
  margin: 0 0 1em 0;

  img {
    max-width: 100%;
  }
  .event_summery {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: solid 3px ${colors.pink};
    border-left: transparent;
    height: 100%;
  }
  ul {
    list-style: none;
    margin: 0em 1em;
    padding: 0;
  }
  .freeEvent,
  .paidEvent {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    text-decoration: underline;
    font-size: 1.2rem;
    font-weight: bold;
    /* color: hot */
  }
  .paidEvent {
    color: ${colors.background};
  }
  .event_date {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }
  .event_town,
  .event_workshopTitle {
    text-transform: capitalize;
  }

  .event_buttons {
    padding: 0.4em 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1em;
  }
  @media (max-width: 50em) {
    grid-template-columns: 1fr;
    .event_summery {
      padding: 0.4em 0;
      border-top: transparent;
      border-left: solid;
    }
    .paidEvent {
      display: none;
      padding-bottom: 0.4em;
    }
    /* .date {
      
    } */
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
      <div className="event_summery">
        <ul>
          {freeEvent ? (
            <li className="freeEvent">Free advent</li>
          ) : (
            <li className="paidEvent">Paid</li>
          )}

          <li className="event_date">{title}</li>
          <li className="event_town">{town}</li>
          <li className="event_date">{date}</li>
          <li className="event_workshopTitle">{workshopTitle}</li>
          <li>
            <div className="event_buttons">
              <ButtonPrimary>Get tickets</ButtonPrimary>
              {/* <a href="https://www.eventbrite.com/e/hack-horsham-rebel-makers-february-2020-tickets-89750045803?ref=elink">
                Text for link
              </a> */}
              <Button>show details</Button>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  )
}

export default Event
