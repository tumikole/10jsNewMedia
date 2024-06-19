import React from 'react'

function ValuesSection() {
  return (
    <section className="bg-green-500 text-white p-8">
      <h2 className="text-4xl font-bold mb-4">Our Values</h2>
      <p>Describe your values here.</p>
      {/* Include images for the values */}
      <img src="values_image.jpg" alt="Values" className="mt-4 rounded" />
    </section>
  )
}

export default ValuesSection