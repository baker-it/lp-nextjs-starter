import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Tekst CTA',
      type: 'string',
      validation: (Rule) => Rule.required().max(50),
      description: 'Tekst wyświetlany na przycisku (max 50 znaków)',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (Rule) => 
        Rule.required().custom((url) => {
          if (!url) return true
          // Allow relative URLs starting with / or #, or valid absolute URLs
          if (url.startsWith('/') || url.startsWith('#')) return true
          try {
            new URL(url)
            return true
          } catch {
            return 'Wprowadź poprawny URL (np. /kontakt lub https://example.com)'
          }
        }),
      description: 'URL docelowy (może być względny jak /kontakt lub absolutny)',
    }),
    defineField({
      name: 'style',
      title: 'Styl przycisku',
      type: 'string',
      options: {
        list: [
          { title: 'Główny (Primary)', value: 'primary' },
          { title: 'Drugorzędny (Secondary)', value: 'secondary' },
          { title: 'Tekstowy (Text)', value: 'text' },
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      text: 'text',
      style: 'style',
    },
    prepare({ text, style }) {
      return {
        title: text || 'CTA bez tekstu',
        subtitle: `Styl: ${style || 'primary'}`,
      }
    },
  },
})


