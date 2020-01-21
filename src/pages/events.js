import React from "react"
import Layout from "../components/layout"
// import HeroImage from "../components/heroImage"
import HeroStatic from "../components/heroStatic"
import colors from "../theme/colors"
import Event from "../components/event"

import Content from "../components/content"

///temp images

import feb2020 from "../images/events/feb_2020.jpg"
import jan2020 from "../images/events/jan_2020.jpg"
///

const Events = () => {
  return (
    <Layout>
      <HeroStatic title="events" color={colors.pink} />
      <Content>
        {/* <h2>Future events</h2> */}
        <Event
          key="2020_02"
          freeEvent={true}
          title="February 2020"
          workshopTitle="3D Printer Workshop"
          image={feb2020}
          town="horsham"
          date="8th February 2020"
          ticketsAddress="https://philstenning.com/event/feb"
          onSale={true}
        />
        <Event
          key="2020_01"
          freeEvent={false}
          title="January 2020"
          workshopTitle=""
          image={jan2020}
          town="horsham"
          date="11th January 2020"
          ticketsAddress="https://philstenning.com/event/jan"
          onSale={false}
        />
      </Content>
    </Layout>
  )
}
export default Events
