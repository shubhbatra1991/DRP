import * as React from "react"

import Hero from '../components/Hero'
import Trips from '../components/Trips'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
      <Seo title="Home" />
      <Hero />
      <Trips heading="Our Favorite Destinations" />
      <Testimonials />
      <Stats />
     
  </Layout>
)


export default IndexPage;
