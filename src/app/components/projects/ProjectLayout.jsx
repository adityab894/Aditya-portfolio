import React from 'react'
import Image from 'next/image'

const ProjectLayout = ({title, des, img, link}) => {
  return (
    <div className="flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg ">
      <div className='flex items-center justify-center space-x-2'>
        <h2 className="text-foreground"> {title}</h2>
        <p className="text-muted"> {des}</p>        
      </div>
      <Image src={img} alt={title} width ={200} height={100} />
    </div>
  )
}

export default ProjectLayout