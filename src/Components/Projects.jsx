import React, { useMemo } from 'react'
import CircularGallery from '../Elements/CircularGallery'

// Source data for projects (extend as needed)
const projectData = [
  {
    title: 'Project One',
    description: 'This is the description for project one.',
    image: 'https://picsum.photos/seed/project1/800/600',
    link: '#',
    github: '#'
  },
  {
    title: 'Project Two',
    description: 'This is the description for project two.',
    image: 'https://picsum.photos/seed/project2/800/600',
    link: '#',
    github: '#'
  },
  {
    title: 'Project Three',
    description: 'This is the description for project three.',
    image: 'https://picsum.photos/seed/project3/800/600',
    link: '#'
  },
]

const Projects = () => {
  // Map to gallery items shape { image, text }
  const galleryItems = useMemo(() => projectData.map(p => ({ image: p.image, text: p.title })), [])

  return (
    <section id='projects' className='relative w-full min-h-screen flex flex-col bg-black text-white'>
      <header className='px-6 pt-10 pb-4 z-10'>
        <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>Projects</h2>
        <p className='text-gray-400 mt-2 text-sm md:text-base'>Drag or scroll horizontally to explore.</p>
      </header>
      <div className='' style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor='#ffffff'
          borderRadius={0.08}
          font='600 26px Figtree, sans-serif'
          scrollSpeed={2.2}
          scrollEase={0.07}
        />
      </div>
    </section>
  )
}

export default Projects