import wildflowerImg from '../assets/variety-wildflower.webp'
import heatherImg from '../assets/variety-heather.webp'
import lavenderImg from '../assets/variety-lavender.webp'
import cinnamonImg from '../assets/variety-cinnamon.webp'

const varieties = [
  {
    id: 'wildflower',
    productId: 'wildflower-raw-honey',
    label: 'Wildflower',
    tagline: 'Everyday Favourite',
    accent: 'var(--color-amber-500)',
    image: wildflowerImg,
    heroImage: wildflowerImg,
    heroImageAlt: 'A spoonful of granola, yoghurt and Wildflower honey',
    story:
      'Our signature jar. Bees forage freely across open meadows, giving this honey a light, floral sweetness that works in absolutely everything.',
    highlights: [
      {
        title: 'Light & Floral',
        text: 'Perfect for tea, baking, or drizzling over yoghurt.',
      },
      {
        title: 'Free-Range Harvest',
        text: 'Bees forage freely across open wildflower meadows.',
      },
    ],
    facts: [
      { label: 'Flavour', value: 'Light & Floral' },
      { label: 'Texture', value: 'Smooth, Pourable' },
      { label: 'Harvest', value: 'Spring' },
      { label: 'Pairs With', value: 'Tea & Yoghurt' },
    ],
    note: 'Every jar is traceable back to the exact hive it came from.',
  },
  {
    id: 'heather',
    productId: 'highland-heather-honey',
    label: 'Heather',
    tagline: 'Rich & Robust',
    accent: 'var(--color-amber-600)',
    image: heatherImg,
    heroImage: heatherImg,
    heroImageAlt: 'Heather honey being tasted straight off the spoon',
    story:
      'Gathered from wild heather moorland in late summer, this honey has a deep, almost jelly-like set and a rich, lingering flavour unlike any other.',
    highlights: [
      {
        title: 'Rich & Robust',
        text: 'A deep, jelly-set texture found in very few honeys.',
      },
      {
        title: 'Single-Origin',
        text: 'A rare harvest, gathered once a year from wild moorland.',
      },
    ],
    facts: [
      { label: 'Flavour', value: 'Deep & Earthy' },
      { label: 'Texture', value: 'Thick, Jelly-Set' },
      { label: 'Harvest', value: 'Late Summer' },
      { label: 'Pairs With', value: 'Cheese & Bread' },
    ],
    note: 'Every jar is traceable back to the exact hive it came from.',
  },
  {
    id: 'lavender',
    productId: 'lavender-infused-honey',
    label: 'Lavender',
    tagline: 'Delicately Floral',
    accent: 'var(--color-green-400)',
    image: lavenderImg,
    heroImage: lavenderImg,
    heroImageAlt: 'Lavender honey being applied as a soothing skincare mask',
    story:
      'Real lavender buds are steeped slowly into raw honey, lending a soft floral aroma that works just as well on your skin as it does on toast.',
    highlights: [
      {
        title: 'Delicately Floral',
        text: 'Infused with real lavender buds, never oil or flavouring.',
      },
      {
        title: 'Skin & Kitchen',
        text: 'Gentle enough for a weekly honey face mask.',
      },
    ],
    facts: [
      { label: 'Flavour', value: 'Soft & Floral' },
      { label: 'Texture', value: 'Smooth, Pourable' },
      { label: 'Harvest', value: 'Early Summer' },
      { label: 'Pairs With', value: 'Skin & Warm Milk' },
    ],
    note: 'Every jar is traceable back to the exact hive it came from.',
  },
  {
    id: 'cinnamon',
    productId: 'cinnamon-infused-honey',
    label: 'Cinnamon',
    tagline: 'Warm & Spiced',
    accent: 'var(--color-amber-700)',
    image: cinnamonImg,
    heroImage: cinnamonImg,
    heroImageAlt: 'Cinnamon honey being stirred into a warm cup of tea',
    story:
      'Ceylon cinnamon is blended into raw honey for a warming spice that turns a cup of tea, or a slice of toast, into something special.',
    highlights: [
      {
        title: 'Warm & Spiced',
        text: 'Made with real Ceylon cinnamon, not flavouring.',
      },
      {
        title: 'Everyday Favourite',
        text: 'A favourite stirred into warm tea, coffee, or porridge.',
      },
    ],
    facts: [
      { label: 'Flavour', value: 'Warm & Spiced' },
      { label: 'Texture', value: 'Smooth, Pourable' },
      { label: 'Harvest', value: 'Autumn' },
      { label: 'Pairs With', value: 'Tea & Porridge' },
    ],
    note: 'Every jar is traceable back to the exact hive it came from.',
  },
]

export default varieties
