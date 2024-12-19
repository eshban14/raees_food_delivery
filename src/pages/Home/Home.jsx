import React from 'react'
import Layout from '../../components/Layouts/Layout'
import "../../styles/HomeStyle.css"
import Section1 from './section1/Section1'
import Section2 from './section2/Section2'
import Section3 from './section3/Section3'
import Section4 from './section4/Section4'
import Section5 from './section5/Section5'
import Section6 from './section6/Section6'
import Section7 from './section7/Section7'





function Home() {
  return (
    <>
    <Layout>
      {/* Home section hero banner */}
      <Section1/>

      {/* Home section about */}

      <Section2/>

      {/* home section menu */}
      <Section3/>

      {/* home section4 promotion */}

      <Section4/>

      {/* home section5 shop */}

      <Section5/>

      {/* home section6 Blog */}

      <Section6/>

      {/* home section7 contact */}

      <Section7/>



    

      
    </Layout>
    
    </>
  )
}

export default Home