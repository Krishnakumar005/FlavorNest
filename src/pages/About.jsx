import React from 'react'
import Boy from '../images/32.jpg';
import Girl from '../images/44.jpg';

const team = [
  { name: 'John Doe', role: 'Head Chef', bio: '20 years of culinary experience.', img: Boy },
  { name: 'Jane Smith', role: 'Manager', bio: 'Loves making guests feel at home.', img: Girl },
];

function About() {
  return (
    <section id="about" className="p-8 bg-primary text-center min-h-[60vh] pt-24 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-4 text-secondary">About Us</h2>
      <div className="mx-auto w-full md:w-3/5 lg:w-3/5 xl:w-3/5 mb-8 bg-surface/40 rounded-lg p-4 md:p-8 border-2 text-justify">
        <p className="mb-4">The story of FlavorNest began with a passion for authentic taste and timeless tradition. Founded with the vision of creating a home for unforgettable flavors, FlavorNest was born out of a deep-rooted love for regional recipes and carefully curated ingredients.</p>
        <p className="mb-4">Our culinary journey is inspired by classic cooking methods, using only the finest elements — from the rich aroma of hand-ground spices to the distinct taste of premium Seeraga samba rice. Every dish served at FlavorNest reflects a commitment to quality, tradition, and the belief that great food creates lasting memories.</p>
        <p className="text-secondary text-lg underline underline-offset-4 font-bold text-center">At FlavorNest, it’s not just about food — it’s about flavor, heritage, and heart.</p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-secondary">Our Location</h3>
        <p className="text-secondary">123 Main Street, Foodville, Country</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4 text-secondary">Meet the Team</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-surface rounded-lg shadow p-4 w-60 flex flex-col items-center">
              <img src={member.img} alt={member.name} className="w-20 h-20 object-cover rounded-full mb-2" />
              <div className="font-bold text-secondary">{member.name}</div>
              <div className="text-secondary text-sm mb-1">{member.role}</div>
              <div className="text-gray-500 text-xs">{member.bio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
