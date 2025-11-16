import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'ctaSectionModule',
  title: 'Final CTA Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Nagłówek',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
      description: 'Nagłówek sekcji CTA (max 100 znaków)',
    }),
    defineField({
      name: 'subheadline',
      title: 'Podtytuł (opcjonalny)',
      type: 'string',
      validation: (Rule) => Rule.max(200),
      description: 'Dodatkowy tekst pod nagłówkiem (max 200 znaków)',
    }),
    defineField({
      name: 'urgencyMessage',
      title: 'Wiadomość pilności (opcjonalna)',
      type: 'string',
      validation: (Rule) => Rule.max(150),
      description: 'Np. "Tylko 3 miejsca pozostały!" (max 150 znaków)',
    }),
    defineField({
      name: 'cta',
      title: 'Przycisk CTA',
      type: 'cta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Wariant CTA',
      type: 'string',
      options: {
        list: [
          { title: 'Pilność (Scarcity)', value: 'scarcity' },
          { title: 'Niskie ryzyko (Low-Risk)', value: 'low-risk' },
          { title: 'Wartość (Value-Stack)', value: 'value-stack' },
          { title: 'FOMO', value: 'fomo' },
        ],
        layout: 'radio',
      },
      initialValue: 'scarcity',
      description: 'Typ komunikatu CTA dla celów testowania',
    }),
  ],
  preview: {
    select: {
      headline: 'headline',
      variant: 'variant',
    },
    prepare({ headline, variant }) {
      return {
        title: headline || 'CTA Section',
        subtitle: `Wariant: ${variant || 'scarcity'}`,
      }
    },
  },
})


