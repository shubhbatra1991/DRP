import * as React from "react"

import Hero from '../components/Hero'
import Trips from '../components/Trips'
import Testimonials from '../components/Testimonials'
// import Stats from '../components/Stats'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Email from "../components/Email"


const IndexPage = () => (
  <Layout>
      <Seo title="Home" />
      <Hero />
      <Trips heading="Delhi's Favorite Destinations" />
      <Testimonials />
      {/* <Stats /> */}
      <Email />
     
  </Layout>
)


export default IndexPage;
