import React from 'react'

function Home() {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center bg-primary pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-center bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80')"}} />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-primary text-center max-w-xl w-full mx-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Restaurant</h1>
        <p className="text-lg md:text-xl mb-2 text-accent bg-primary font-medium px-3 py-1 rounded">Delicious food, delightful experience</p>
        <p className="text-sm md:text-lg mb-4">Enjoy a variety of dishes made with fresh ingredients, served in a cozy atmosphere. Perfect for family dinners, romantic dates, and friendly gatherings.</p>
        <a href="#menu" className="inline-block bg-accent text-primary font-semibold px-6 py-2 rounded shadow hover:bg-secondary hover:text-primary transition">View Menu</a>
      </div>
    </section>
  )
}

export default Home
