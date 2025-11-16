import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Tytuł strony w wynikach wyszukiwania (50-60 znaków)',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Opis strony w wynikach wyszukiwania (150-160 znaków)',
      validation: (Rule) => Rule.max(160),
      rows: 3,
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Obraz wyświetlany podczas udostępniania na mediach społecznościowych (1200x630px)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'canonical',
      title: 'Canonical URL',
      type: 'url',
      description: 'Kanoniczny URL strony (opcjonalny)',
    }),
  ],
})
