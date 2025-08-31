const landingPage = {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Nazwa strony', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule: any) => Rule.required() },

    { name: 'ab', title: 'A/B Testing', type: 'object',
      fields: [
        { name: 'active', title: 'Aktywny wariant', type: 'string', options: { list: [{title:'A', value:'A'},{title:'B', value:'B'}]}, initialValue: 'A' },
        { name: 'allowUrlOverride', title: 'Zezwól na override parametrem ?v=', type: 'boolean', initialValue: true },
        { name: 'experimentKey', title: 'Klucz eksperymentu (np. hero_test_aug25)', type: 'string' },
      ]
    },

    { name: 'heroA', title: 'Hero (wariant A)', type: 'hero' },
    { name: 'heroB', title: 'Hero (wariant B)', type: 'hero' },

    { name: 'usps', title: 'USP (sekcja korzyści)', type: 'array', of: [{ type: 'usp' }] },
    { name: 'socialProof', title: 'Social Proof (opinie)', type: 'array', of: [{ type: 'testimonial' }] },
    { name: 'pricing', title: 'Cennik', type: 'array', of: [{ type: 'pricePlan' }] },
    { name: 'faq', title: 'FAQ', type: 'array', of: [{ type: 'faqItem' }] },
    { name: 'seo', title: 'SEO', type: 'seo' },
  ],
  preview: { select: { title: 'title' } },
}
export default landingPage
