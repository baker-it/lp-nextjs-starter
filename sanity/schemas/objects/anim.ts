const anim = {
  name: 'anim',
  title: 'Animacja',
  type: 'object',
  fields: [
    { name: 'variant', title: 'Wariant', type: 'string',
      options: { list: [
        {title:'Brak', value:'none'},
        {title:'Fade In', value:'fade'},
        {title:'Slide Up', value:'slideUp'},
        {title:'Reveal Mask', value:'reveal'},
      ]}, initialValue: 'fade' },
    { name: 'delay', title: 'Delay (s)', type: 'number', initialValue: 0 },
    { name: 'duration', title: 'Duration (s)', type: 'number', initialValue: 0.5 },
    { name: 'stagger', title: 'Stagger (s)', type: 'number', initialValue: 0.06 },
    { name: 'easing', title: 'Easing (np. easeOut)', type: 'string' },
  ]
}
export default anim
