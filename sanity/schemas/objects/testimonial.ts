const testimonial = {
  name: 'testimonial',
  title: 'Opinia',
  type: 'object',
  fields: [
    { name: 'name', title: 'Imię', type: 'string' },
    { name: 'role', title: 'Rola / opis', type: 'string' },
    { name: 'quote', title: 'Cytat', type: 'text' },
    { name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } },
    { name: 'animation', title: 'Animacja', type: 'anim' },
  ],
}
export default testimonial
