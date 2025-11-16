import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'painPointsModule',
  title: 'Pain Points Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Punkty bólu (dokładnie 4)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'problem',
              title: 'Problem',
              type: 'string',
              description: 'Krótki opis problemu (max 100 znaków)',
              validation: (Rule) => Rule.required().max(100),
            }),
            defineField({
              name: 'costImpact',
              title: 'Koszt/Wpływ',
              type: 'string',
              description: 'Jaki jest koszt tego problemu? (max 150 znaków)',
              validation: (Rule) => Rule.required().max(150),
            }),
            defineField({
              name: 'solution',
              title: 'Rozwiązanie',
              type: 'string',
              description: 'Jak AirTouch rozwiązuje ten problem? (max 150 znaków)',
              validation: (Rule) => Rule.required().max(150),
            }),
          ],
          preview: {
            select: {
              problem: 'problem',
            },
            prepare({ problem }) {
              return {
                title: problem || 'Problem',
              }
            },
          },
        },
      ],
      validation: (Rule) => 
        Rule.required()
          .length(4)
          .error('Musisz dodać dokładnie 4 punkty bólu'),
    }),
  ],
})


