const redirect = {
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  fields: [
    {name:'slug', title:'Slug (np. kampania-x)', type:'slug', options:{source:'toUrl'}, validation:(R:any)=>R.required()},
    {name:'toUrl', title:'Docelowy URL', type:'url', validation:(R:any)=>R.required()},
    {name:'status', title:'Status (301/302/307/308)', type:'number', initialValue: 308 },
    {name:'enabled', title:'Włączony', type:'boolean', initialValue:true},
    {name:'appendUtm', title:'Doklej UTM z pola kampanii', type:'boolean', initialValue: true},
    {name:'utm', title:'UTM (opcjonalnie)', type:'object',
      fields:[
        {name:'source', type:'string', title:'utm_source'},
        {name:'medium', type:'string', title:'utm_medium'},
        {name:'campaign', type:'string', title:'utm_campaign'},
        {name:'content', type:'string', title:'utm_content'},
        {name:'term', type:'string', title:'utm_term'},
      ]},
  ],
  preview:{ select:{ title:'slug.current', subtitle:'toUrl' } }
}
export default redirect
