import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faqsModule',
  title: 'FAQ',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Pytania i odpowiedzi',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Pytanie',
              type: 'string',
              validation: (Rule) => Rule.required().max(200),
              description: 'Pytanie (max 200 znaków)',
            }),
            defineField({
              name: 'answer',
              title: 'Odpowiedź',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'H4', value: 'h4' },
                  ],
                  lists: [
                    { title: 'Bullet', value: 'bullet' },
                    { title: 'Numbered', value: 'number' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                          {
                            name: 'href',
                            type: 'url',
                            title: 'URL',
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
              validation: (Rule) => Rule.required(),
              description: 'Odpowiedź (pełne formatowanie)',
            }),
          ],
          preview: {
            select: {
              question: 'question',
            },
            prepare({ question }) {
              return {
                title: question || 'Pytanie',
              }
            },
          },
        },
      ],
      validation: (Rule) => 
        Rule.required()
          .min(5)
          .max(10)
          .error('Dodaj od 5 do 10 pytań FAQ'),
      description: 'Lista pytań i odpowiedzi (5-10 pozycji)',
    }),
  ],
})


