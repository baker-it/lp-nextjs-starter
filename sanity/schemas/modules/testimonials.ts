import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonialsModule',
  title: 'Testimoniale',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Opinie klientów',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'quote',
              title: 'Cytat',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required().max(500),
              description: 'Opinia klienta (max 500 znaków)',
            }),
            defineField({
              name: 'author',
              title: 'Autor',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'Imię i nazwisko autora opinii',
            }),
            defineField({
              name: 'role',
              title: 'Rola/Stanowisko',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'Np. "Stylistka", "Właścicielka salonu"',
            }),
            defineField({
              name: 'location',
              title: 'Lokalizacja',
              type: 'string',
              description: 'Miasto lub region (opcjonalnie)',
            }),
            defineField({
              name: 'photo',
              title: 'Zdjęcie (opcjonalnie)',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            select: {
              author: 'author',
              role: 'role',
              quote: 'quote',
            },
            prepare({ author, role, quote }) {
              return {
                title: author || 'Autor',
                subtitle: role || 'Rola',
                description: quote ? `"${quote.substring(0, 60)}..."` : '',
              }
            },
          },
        },
      ],
      validation: (Rule) => 
        Rule.required()
          .min(3)
          .max(6)
          .error('Dodaj od 3 do 6 testimoniali'),
      description: 'Lista opinii klientów (3-6 pozycji)',
    }),
  ],
})


