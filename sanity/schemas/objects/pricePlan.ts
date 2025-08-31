const pricePlan = {
  name: 'pricePlan',
  title: 'Plan cenowy',
  type: 'object',
  fields: [
    { name: 'name', title: 'Nazwa', type: 'string' },
    { name: 'price', title: 'Cena (np. 1499)', type: 'number' },
    { name: 'period', title: 'Okres (np. /osoba, /pakiet)', type: 'string' },
    { name: 'features', title: 'Funkcje / co w pakiecie', type: 'array', of: [{ type: 'string' }] },
    { name: 'highlighted', title: 'Wyróżniony', type: 'boolean', initialValue: false },
    { name: 'cta', title: 'CTA dla planu', type: 'ctaLink' },
    { name: 'animation', title: 'Animacja', type: 'anim' },
  ],
}
export default pricePlan
