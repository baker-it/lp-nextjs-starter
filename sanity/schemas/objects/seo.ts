const seo = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    { name: 'title', title: 'Meta title', type: 'string' },
    { name: 'description', title: 'Meta description', type: 'text' },
    { name: 'ogImage', title: 'OG image', type: 'image', options: { hotspot: true } },
  ],
}
export default seo
