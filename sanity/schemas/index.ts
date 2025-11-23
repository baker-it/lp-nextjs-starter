// Documents
import landingPage from './documents/landingPage'
import mediaAsset from './documents/mediaAsset'

// Objects
import seo from './objects/seo'
import cta from './objects/cta'
import link from './objects/link'

// Modules
import heroModule from './modules/hero'
import painPointsModule from './modules/painPoints'
import methodologyModule from './modules/methodology'
import benefitsModule from './modules/benefits'
import testimonialsModule from './modules/testimonials'
import faqsModule from './modules/faqs'
import ctaSectionModule from './modules/ctaSection'

// Legacy - keep for existing data
import redirect from './redirect'
import anim from './objects/anim'

const schemas = [
  // Main Documents
  landingPage,
  mediaAsset,
  
  // Objects
  seo,
  cta,
  link,
  
  // Modules
  heroModule,
  painPointsModule,
  methodologyModule,
  benefitsModule,
  testimonialsModule,
  faqsModule,
  ctaSectionModule,
  
  // Legacy (for backward compatibility)
  redirect,
  anim,
]

export default schemas
