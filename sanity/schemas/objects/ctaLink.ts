const ctaLink = {
  name: 'ctaLink',
  title: 'CTA Link',
  type: 'object',
  fields: [
    { name: 'label', title: 'Etykieta przycisku', type: 'string' },
    { name: 'href', title: 'Adres URL / slug / identyfikator', type: 'string' },
    {
      name: 'type',
      title: 'Typ linku',
      type: 'string',
      options: { list: [
        {title:'Internal (Next Link)', value:'internal'},
        {title:'External (http/https)', value:'external'},
        {title:'Anchor (#sekcja)', value:'anchor'},
        {title:'Tel (tel:)', value:'tel'},
        {title:'Email (mailto:)', value:'mailto'},
        {title:'WhatsApp', value:'whatsapp'},
        {title:'Redirect doc (/r/[slug])', value:'redirect'},
      ]},
      initialValue: 'internal'
    },
    { name: 'openInNewTab', title: 'Otwórz w nowej karcie', type: 'boolean', initialValue: false },
    {
      name: 'utm',
      title: 'UTM (opcjonalnie)',
      type: 'object',
      fields: [
        {name:'source', type:'string', title:'utm_source'},
        {name:'medium', type:'string', title:'utm_medium'},
        {name:'campaign', type:'string', title:'utm_campaign'},
        {name:'content', type:'string', title:'utm_content'},
        {name:'term', type:'string', title:'utm_term'},
      ]
    },
    { name: 'eventKey', title: 'Klucz eventu (np. cta_click.hero)', type: 'string' },
    { name: 'payload', title: 'Dodatkowy payload trackingu (JSON)', type: 'text' },
  ],
  preview: { select: { title: 'label', subtitle: 'href' } }
}
export default ctaLink
