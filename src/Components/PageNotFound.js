import React from 'react'
import Layout from './Layout'
import './Foot.css'

const PageNotFound = () => {
  const logo="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-11840.jpg?t=st=1665250206~exp=1665250806~hmac=30c674de15507890737698f757383d8449f433597ba1389648dfc110f6aa662f";
  return (
    <Layout>
      
        <img src={logo} alt="logo"  />
      
    </Layout>
  )
}

export default PageNotFound
