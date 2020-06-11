import React from 'react'
// import {Video} from './video'

export class Home extends React.Component {
  render() {
    return (
      // <Video />
      <div className="container">
        <div
          className="parallax-window"
          data-parallax="scroll"
          data-image-src="https://i.ibb.co/ZJhTFxf/banner-1.jpg"
          data-z-index="1"
        >
          <h1>
            We Are <span>Woodside</span>
          </h1>
        </div>
        <div className="content">
          <h1>Who We Are</h1>
          <p>
            Woodside on the Move is a grassroots community organization
            dedicated to making Woodside and Western Queens a better place to
            live and learn. Our services include one-on-one help with affordable
            housing, pro bono legal clinics, after school and summer camp, adult
            ESL and computer classes, and public events including street fairs
            and art festivals. Our monthly tenant meetings and rallies are
            gathering spaces where immigrants, seniors, and other residents can
            bring their questions, concerns, and voices to the table as well as
            acting on citywide campaigns for rent stabilization and right to
            counsel. Our neighborhood thrives when all of our neighbors
            participate and have a voice at the table. We welcome your ideas and
            participation. Together we will strive to keep Woodside and Western
            Queens moving forward.
          </p>
        </div>
        <div
          className="parallax-window"
          data-parallax="scroll"
          data-image-src="https://i.ibb.co/dtxCkz2/409536202-57868e0a60-b.jpg"
          data-z-index="1"
        >
          <p>
            Woodside on the Move has been a pillar of the Western Queens
            community since 1976. We serve about 5,000 families annually,
            providing assistance for housing related issues, as well as after
            school programs, summer camp, SYEP, and other community development
            initiatives.
          </p>
        </div>
      </div>
    )
  }
}
