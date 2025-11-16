import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł wewnętrzny',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Nazwa strony do użytku wewnętrznego (nie wyświetlana publicznie)',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, ''),
      },
      validation: (Rule) => 
        Rule.required().custom((slug) => {
          if (!slug?.current) return 'Slug jest wymagany'
          if (slug.current !== slug.current.toLowerCase()) {
            return 'Slug musi być małymi literami'
          }
          return true
        }),
      description: 'URL strony (np. airtouch-warszawa)',
    }),
    defineField({
      name: 'variant',
      title: 'Wariant',
      type: 'string',
      options: {
        list: [
          { title: 'Wariant A', value: 'A' },
          { title: 'Wariant B', value: 'B' },
          { title: 'Wariant C', value: 'C' },
        ],
        layout: 'radio',
      },
      initialValue: 'A',
      validation: (Rule) => Rule.required(),
      description: 'Wariant strony dla testów A/B/C',
    }),
    defineField({
      name: 'isActive',
      title: 'Aktywna',
      type: 'boolean',
      initialValue: true,
      description: 'Czy strona jest aktywna i widoczna publicznie',
    }),
    defineField({
      name: 'experimentMetadata',
      title: 'Metadane eksperymentu (opcjonalne)',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'experimentId',
          title: 'ID eksperymentu',
          type: 'string',
          description: 'Identyfikator eksperymentu w systemie analytics',
        }),
        defineField({
          name: 'variantId',
          title: 'ID wariantu',
          type: 'string',
          description: 'Identyfikator wariantu w systemie analytics',
        }),
        defineField({
          name: 'isControl',
          title: 'Wariant kontrolny',
          type: 'boolean',
          initialValue: false,
          description: 'Czy to wariant kontrolny (bazowy)',
        }),
        defineField({
          name: 'notes',
          title: 'Notatki',
          type: 'text',
          rows: 3,
          description: 'Notatki o eksperymencie lub wariancie',
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      validation: (Rule) => Rule.required(),
      description: 'Ustawienia SEO i metadane',
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'heroModule',
      validation: (Rule) => Rule.required(),
      description: 'Sekcja Hero na górze strony',
    }),
    defineField({
      name: 'painPoints',
      title: 'Punkty bólu',
      type: 'painPointsModule',
      validation: (Rule) => Rule.required(),
      description: 'Sekcja z 4 punktami bólu i rozwiązaniami',
    }),
    defineField({
      name: 'methodology',
      title: 'Metodologia',
      type: 'methodologyModule',
      validation: (Rule) => Rule.required(),
      description: 'Opis metodologii szkolenia (4 fazy)',
    }),
    defineField({
      name: 'benefits',
      title: 'Korzyści',
      type: 'benefitsModule',
      validation: (Rule) => Rule.required(),
      description: 'Korzyści dla stylisty i klienta',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimoniale',
      type: 'testimonialsModule',
      validation: (Rule) => Rule.required(),
      description: 'Opinie klientów',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQ',
      type: 'faqsModule',
      validation: (Rule) => Rule.required(),
      description: 'Często zadawane pytania',
    }),
    defineField({
      name: 'ctaSection',
      title: 'Finalna sekcja CTA',
      type: 'ctaSectionModule',
      validation: (Rule) => Rule.required(),
      description: 'Ostatnia sekcja z call-to-action',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      variant: 'variant',
      slug: 'slug.current',
      isActive: 'isActive',
    },
    prepare({ title, variant, slug, isActive }) {
      return {
        title: `${title} (${variant})`,
        subtitle: `${slug || 'brak-slug'} ${isActive ? '✅' : '⚠️ Nieaktywna'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Wariant',
      name: 'variantAsc',
      by: [{ field: 'variant', direction: 'asc' }],
    },
    {
      title: 'Slug',
      name: 'slugAsc',
      by: [{ field: 'slug', direction: 'asc' }],
    },
  ],
})


