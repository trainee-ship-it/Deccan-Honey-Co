import himalayanAlpineGold from '../assets/product-himalayan-alpine-gold.jpg'
import himalayanAlpineGoldAlt from '../assets/product-himalayan-alpine-gold-alt.png'
import kashmirCaveReserve from '../assets/product-kashmir-cave-reserve.png'

// Rating and reviewCount are placeholder values, randomly generated once and
// stored as static data so they stay stable across renders.
const products = [
  {
    id: 'himalayan-alpine-gold',
    name: 'Himalayan Alpine Gold',
    size: '500g',
    price: 699,
    rating: 4.6,
    reviewCount: 119,
    image: himalayanAlpineGold,
    category: 'honey',
    description:
      "Harvested from high-altitude wildflower meadows in the Himalayan foothills, this light, floral honey is raw and unheated — bottled exactly as the bees made it.",
    ingredients: '100% raw Himalayan wildflower honey. No additives, no blending, no shortcuts.',
    directions:
      'Stir into warm (not boiling) water or tea, drizzle over breakfast, or eat straight off the spoon. Store at room temperature — natural crystallisation is a sign of purity, not spoilage.',
    benefits:
      'Rich in natural enzymes and antioxidants. A gentler, floral sweetness that works well as an everyday sugar alternative.',
  },
  {
    id: 'kashmir-cave-reserve',
    name: 'Kashmir Cave Reserve',
    size: '500g',
    price: 699,
    rating: 4.6,
    reviewCount: 50,
    image: kashmirCaveReserve,
    category: 'honey',
    description:
      "A rare small-batch honey gathered from wild hives in the cave orchards of Kashmir, prized for its deep amber colour and bold, mineral-rich flavour.",
    ingredients: '100% raw Kashmir wild honey.',
    directions: 'Best enjoyed on its own, drizzled over cheese, or stirred into warm milk.',
    benefits:
      "Naturally rich in minerals from the forest canopy it's gathered under. Unheated and unfiltered to preserve every bioactive compound.",
  },
  {
    id: 'raw-honey',
    name: 'Raw Honey',
    size: '500g',
    price: 699,
    rating: 4.9,
    reviewCount: 159,
    image: himalayanAlpineGoldAlt,
    category: 'honey',
    description:
      'Our everyday raw honey — unheated, unblended, and lab-tested for purity, the way honey was always meant to taste.',
    ingredients: '100% raw honey.',
    directions: 'An everyday sweetener for tea, toast, or baking. Store in a cool, dry place.',
    benefits:
      'Packed with natural enzymes lost in heated, processed honey. The one jar in your pantry that works for everything.',
  },
  {
    id: 'litchi-honey',
    name: 'Litchi Honey',
    size: '250g',
    price: 699,
    rating: 4.9,
    reviewCount: 78,
    image: himalayanAlpineGold,
    category: 'honey',
    description:
      "Gathered during the brief litchi bloom, this honey carries the fruit's signature floral-sweet aroma in every spoonful.",
    ingredients: '100% raw litchi blossom honey.',
    directions: 'Pairs beautifully with yoghurt, pancakes, or a simple glass of lemon water.',
    benefits:
      'A naturally fragrant, single-origin honey — harvested in small batches during a short seasonal window.',
  },
  {
    id: 'gift-pack-3',
    name: 'Gift Pack of 3',
    size: '3 x jars',
    price: 1599,
    rating: 4.7,
    reviewCount: 73,
    image: kashmirCaveReserve,
    category: 'gift-set',
    description:
      "Three of our favourite raw honeys, boxed together and ready to give — for the honey lover who can't pick just one.",
    ingredients:
      'Includes 3 x 500g jars of raw, single-origin honey (Himalayan Alpine Gold, Kashmir Cave Reserve, and Raw Honey).',
    directions: 'Gift as-is, or keep a jar for yourself. Store each jar at room temperature.',
    benefits: 'A thoughtfully packaged introduction to our full range, in one box.',
  },
  {
    id: 'gift-pack-5',
    name: 'Gift Pack of 5',
    size: '5 x jars',
    price: 2499,
    rating: 4.4,
    reviewCount: 154,
    image: himalayanAlpineGoldAlt,
    category: 'gift-set',
    description:
      'Our complete tasting set — five jars spanning our full range of raw and infused honeys, beautifully boxed.',
    ingredients: 'Includes 5 x jars of raw, single-origin and infused honey.',
    directions:
      'Gift as-is, or work through the set yourself one jar at a time. Store each jar at room temperature.',
    benefits: 'The best way to taste everything Deccan Honey Co. makes, in one gift.',
  },
]

export default products
