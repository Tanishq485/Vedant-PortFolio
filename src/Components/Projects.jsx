import React, { useMemo } from 'react'
import CircularGallery from '../Elements/CircularGallery'

// Source data for projects (extend as needed)
const projectData = [
  {
    title: 'Project One',
    description: 'Interactive 3D gallery built with WebGL (OGL) demonstrating smooth curved scrolling and performant shaders.',
    image: 'https://picsum.photos/seed/project1/800/600',
    video: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
    link: '#',
    github: '#'
  },
  {
    title: 'Project Two',
    description: 'Full‑stack application featuring authentication, real‑time updates, and responsive UI components.',
    image: 'https://picsum.photos/seed/project2/800/600',
    video: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
    link: '#',
    github: '#'
  },
  {
    title: 'Project Three',
    description: 'Data visualization dashboard with dynamic charts, dark mode, and accessibility first design.',
    image: 'https://picsum.photos/seed/project3/800/600',
    video: 'https://storage.googleapis.com/coverr-main/mp4/Night_Street.mp4',
    link: '#',
    github: '#'
  },
]

const Projects = () => {
  // Map to gallery items shape consumed by CircularGallery
  const galleryItems = useMemo(() => projectData.map(p => ({
    image: p.image,
    text: p.title,
    description: p.description,
    video: p.video,
    link: p.link,
    github: p.github
  })), [])

  return (
    <section id='projects' className='relative w-full min-h-screen flex flex-col bg-black text-white'>
     {/* desktop view */}
      <header className='px-6 pt-10 pb-4 z-10'>
        <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>Projects</h2>
        <p className='text-gray-400 mt-2 text-sm md:text-base'>Drag or scroll horizontally to explore.</p>
      </header>
      <div className='' style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor='#ffffff'
            // Border radius in fragment shader (world units fraction). Slightly higher for smoother rounding.
          borderRadius={0.12}
          font='600 26px Figtree, sans-serif'
          scrollSpeed={2.2}
          scrollEase={0.07}
        />
      </div>


      Mobile
    </section>
  )
}

export default Projects