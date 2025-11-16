import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'methodologyModule',
  title: 'Metodologia Szkolenia',
  type: 'object',
  fields: [
    defineField({
      name: 'preTraining',
      title: 'Przed szkoleniem',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [],
          },
        },
      ],
      description: 'Przygotowania przed szkoleniem (podstawowe formatowanie)',
    }),
    defineField({
      name: 'day1',
      title: 'Dzień 1 - Teoria i podstawy',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
      description: 'Program pierwszego dnia (podstawowe formatowanie)',
    }),
    defineField({
      name: 'day2',
      title: 'Dzień 2 - Praktyka',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
      description: 'Program drugiego dnia (podstawowe formatowanie)',
    }),
    defineField({
      name: 'postTraining',
      title: 'Po szkoleniu',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [],
          },
        },
      ],
      description: 'Wsparcie po szkoleniu (podstawowe formatowanie)',
    }),
  ],
})


