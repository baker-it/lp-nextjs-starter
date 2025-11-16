import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'benefitsModule',
  title: 'Korzyści',
  type: 'object',
  fields: [
    defineField({
      name: 'forStylist',
      title: 'Korzyści dla Stylisty',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => 
        Rule.required()
          .min(3)
          .max(7)
          .error('Dodaj od 3 do 7 korzyści dla stylisty'),
      description: 'Lista korzyści dla stylisty (3-7 pozycji)',
    }),
    defineField({
      name: 'forClient',
      title: 'Korzyści dla Klienta',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => 
        Rule.required()
          .min(3)
          .max(7)
          .error('Dodaj od 3 do 7 korzyści dla klienta'),
      description: 'Lista korzyści dla klienta końcowego (3-7 pozycji)',
    }),
  ],
})


