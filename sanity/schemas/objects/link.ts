import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Tekst linku',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (Rule) => 
        Rule.required().custom((url) => {
          if (!url) return true
          if (url.startsWith('/') || url.startsWith('#')) return true
          try {
            new URL(url)
            return true
          } catch {
            return 'Wprowadź poprawny URL'
          }
        }),
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Otwórz w nowej karcie',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      text: 'text',
      url: 'url',
    },
    prepare({ text, url }) {
      return {
        title: text || 'Link bez tekstu',
        subtitle: url || 'Brak URL',
      }
    },
  },
})


