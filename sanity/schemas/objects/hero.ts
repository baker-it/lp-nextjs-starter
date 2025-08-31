const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    { name: 'eyebrow', title: 'Eyebrow (mały nagłówek)', type: 'string' },
    { name: 'headline', title: 'Nagłówek', type: 'string' },
    { name: 'subheading', title: 'Podtytuł', type: 'text' },
    { name: 'image', title: 'Obraz', type: 'image', options: { hotspot: true } },
    { name: 'ctaPrimary', title: 'CTA główne', type: 'ctaLink' },
    { name: 'ctaSecondary', title: 'CTA dodatkowe', type: 'ctaLink' },
    {
      name: 'animation', title: 'Animacja (hero)', type: 'object',
      fields: [
        { name: 'variant', title: 'Wariant', type: 'string',
          options: { list: [
            { title: 'Brak', value: 'none' },
            { title: 'Fade In', value: 'fade' },
            { title: 'Slide Up', value: 'slideUp' },
            { title: 'Reveal Mask', value: 'reveal' },
          ]}, initialValue: 'fade' },
        { name: 'delay', title: 'Delay (s)', type: 'number', initialValue: 0 },
        { name: 'duration', title: 'Duration (s)', type: 'number', initialValue: 0.6 },
        { name: 'stagger', title: 'Stagger children (s)', type: 'number', initialValue: 0.08 },
        { name: 'easing', title: 'Easing (np. easeOut, easeInOut)', type: 'string' },
        { name: 'lottie', title: 'Lottie JSON', type: 'file', options: { accept: '.json' } },
        { name: 'lottieLoop', title: 'Lottie loop', type: 'boolean', initialValue: true },
        { name: 'lottieClass', title: 'Lottie class (Tailwind)', type: 'string' },
      ]
    }
  ],
}
export default hero
