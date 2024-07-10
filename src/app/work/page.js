import { Details, Explore, Homecrousel, ServiceCrousel, } from '@/components'
import Collaborator from '@/components/collaborator'
import React from 'react'

const Page = () => {
  return (
    <div>
     
     <Homecrousel  color={true} hideText={true} />
      
      <Collaborator />
      <Details />
      <Explore />
      
    </div>
  )
}

export default Page
