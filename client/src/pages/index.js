import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Video from "../components/video"
import {Navbar} from "../components/navbar"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    {/* <Video /> */}
    {/* <Navbar /> */}
    <Link to="/news/">News</Link> <br />
    <Link to="/events/">Events</Link>
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

      <div>
        <section id="banner" className="bg-img-1">
          <div className="inner">
            <header>
              <h1>
                we are <span>Woodside</span>
              </h1>
            </header>
          </div>
          <a href="#one" className="more">
            Learn More
          </a>
        </section>

        <section id="one" className="wrapper post bg-img">
          <div className="inner">
            <article className="box">
              <header>
                <h2>Nibh non lobortis mus nibh</h2>
                <p>01.01.2017</p>
              </header>
              <div className="content">
                <p>
                  Scelerisque enim mi curae erat ultricies lobortis donec velit
                  in per cum consectetur purus a enim platea vestibulum lacinia
                  et elit ante scelerisque vestibulum. At urna condimentum sed
                  vulputate a duis in senectus ullamcorper lacus cubilia
                  consectetur odio proin sociosqu a parturient nam ac blandit
                  praesent aptent. Eros dignissim mus mauris a natoque ad
                  suspendisse nulla a urna in tincidunt tristique enim arcu
                  litora scelerisque eros suspendisse.
                </p>
              </div>
              <footer>
                <a href="generic.html" className="button alt">
                  Learn More
                </a>
              </footer>
            </article>
          </div>
          <a href="#two" className="more">
            Learn More
          </a>
        </section>

        <section id="two" className="wrapper post bg-img" data-bg="banner5.jpg">
          <div className="inner">
            <article className="box">
              <header>
                <h2>Mus elit a ultricies at</h2>
                <p>12.21.2016</p>
              </header>
              <div className="content">
                <p>
                  Scelerisque enim mi curae erat ultricies lobortis donec velit
                  in per cum consectetur purus a enim platea vestibulum lacinia
                  et elit ante scelerisque vestibulum. At urna condimentum sed
                  vulputate a duis in senectus ullamcorper lacus cubilia
                  consectetur odio proin sociosqu a parturient nam ac blandit
                  praesent aptent. Eros dignissim mus mauris a natoque ad
                  suspendisse nulla a urna in tincidunt tristique enim arcu
                  litora scelerisque eros suspendisse.
                </p>
              </div>
              <footer>
                <a href="generic.html" className="button alt">
                  Learn More
                </a>
              </footer>
            </article>
          </div>
          <a href="#three" className="more">
            Learn More
          </a>
        </section>

        <section
          id="three"
          className="wrapper post bg-img"
          data-bg="banner4.jpg"
        >
          <div className="inner">
            <article className="box">
              <header>
                <h2>Varius a cursus aliquet</h2>
                <p>11.11.2016</p>
              </header>
              <div className="content">
                <p>
                  Scelerisque enim mi curae erat ultricies lobortis donec velit
                  in per cum consectetur purus a enim platea vestibulum lacinia
                  et elit ante scelerisque vestibulum. At urna condimentum sed
                  vulputate a duis in senectus ullamcorper lacus cubilia
                  consectetur odio proin sociosqu a parturient nam ac blandit
                  praesent aptent. Eros dignissim mus mauris a natoque ad
                  suspendisse nulla a urna in tincidunt tristique enim arcu
                  litora scelerisque eros suspendisse.
                </p>
              </div>
              <footer>
                <a href="generic.html" className="button alt">
                  Learn More
                </a>
              </footer>
            </article>
          </div>
          <a href="#four" className="more">
            Learn More
          </a>
        </section>

        <section
          id="four"
          className="wrapper post bg-img"
          data-bg="banner3.jpg"
        >
          <div className="inner">
            <article className="box">
              <header>
                <h2>Luctus blandit mi lectus in nascetur</h2>
                <p>10.30.2016</p>
              </header>
              <div className="content">
                <p>
                  Scelerisque enim mi curae erat ultricies lobortis donec velit
                  in per cum consectetur purus a enim platea vestibulum lacinia
                  et elit ante scelerisque vestibulum. At urna condimentum sed
                  vulputate a duis in senectus ullamcorper lacus cubilia
                  consectetur odio proin sociosqu a parturient nam ac blandit
                  praesent aptent. Eros dignissim mus mauris a natoque ad
                  suspendisse nulla a urna in tincidunt tristique enim arcu
                  litora scelerisque eros suspendisse.
                </p>
              </div>
              <footer>
                <a href="generic.html" className="button alt">
                  Learn More
                </a>
              </footer>
            </article>
          </div>
        </section>
      </div>
  </Layout>
)

export default IndexPage
