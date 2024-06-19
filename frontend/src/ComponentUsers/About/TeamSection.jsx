import React from 'react'
import TeamMember from './TeamMember';

function TeamSection() {
  return (
    <section className="bg-purple-500 text-white p-8">
      <h2 className="text-4xl font-bold mb-4">Our Team</h2>
      <div className="flex flex-wrap">
        {/* Repeat this block for each team member */}
        <TeamMember
          name="John Doe"
          role="CEO"
          imageSrc="john-doe.jpg"
          socialLinks={{ linkedin: '#', twitter: '#' }}
          about="Brief description of John Doe."
        />
        {/* Add more TeamMember components for each team member */}
      </div>
    </section>
  )
}

export default TeamSection