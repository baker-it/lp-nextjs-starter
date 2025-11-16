import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'heroModule',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Nagłówek główny',
      type: 'string',
      description: 'Główny nagłówek hero (max 100 znaków)',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'subheadline',
      title: 'Podtytuł',
      type: 'string',
      description: 'Podtytuł pod głównym nagłówkiem (max 200 znaków)',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'Główny CTA',
      type: 'cta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Drugorzędny CTA (opcjonalny)',
      type: 'cta',
    }),
  ],
  preview: {
    select: {
      headline: 'headline',
    },
    prepare({ headline }) {
      return {
        title: headline || 'Hero bez nagłówka',
        subtitle: 'Hero Section',
      }
    },
  },
})


