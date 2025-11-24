import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'mediaAsset',
  title: 'Media Asset',
  type: 'document',
  description: 'Zarządzanie zdjęciami i grafikami dla landing pages. Używaj tagów do organizacji.',
  fields: [
    defineField({
      name: 'title',
      title: 'Nazwa',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Krótka nazwa zdjęcia (np. "Hero - AirTouch V2")',
    }),
    defineField({
      name: 'image',
      title: 'Obraz',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true, // Pozwala na cropowanie w Sanity Studio
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Tekst alternatywny dla SEO i dostępności',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tagi',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tagi do organizacji (np. airtouch-v2, hero, benefits, social-proof)',
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.min(1).error('Dodaj przynajmniej jeden tag'),
    }),
    defineField({
      name: 'category',
      title: 'Kategoria',
      type: 'string',
      options: {
        list: [
          { title: 'Hero', value: 'hero' },
          { title: 'Benefits', value: 'benefits' },
          { title: 'Social Proof', value: 'social-proof' },
          { title: 'Instructor', value: 'instructor' },
          { title: 'Before/After', value: 'before-after' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
      initialValue: 'other',
      description: 'Główna kategoria obrazu',
    }),
    defineField({
      name: 'notes',
      title: 'Notatki',
      type: 'text',
      rows: 3,
      description: 'Dodatkowe informacje o obrazie (opcjonalne)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      tags: 'tags',
      category: 'category',
    },
    prepare({ title, media, tags, category }) {
      const tagList = tags && tags.length > 0 ? tags.join(', ') : 'brak tagów'
      return {
        title: title || 'Bez nazwy',
        subtitle: `${category || 'other'} • ${tagList}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Kategoria',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }],
    },
    {
      title: 'Nazwa',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})






