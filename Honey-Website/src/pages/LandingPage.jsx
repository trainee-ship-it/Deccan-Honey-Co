import Hero from '../components/Hero/Hero.jsx'
import FeatureStrip from '../components/FeatureStrip/FeatureStrip.jsx'
import StoryBanner from '../components/StoryBanner/StoryBanner.jsx'
import HoneyVarieties from '../components/HoneyVarieties/HoneyVarieties.jsx'
import Newsletter from '../components/Newsletter/Newsletter.jsx'
import rootedInNatureImg from '../assets/rooted-in-nature.webp'
import ourPromiseImg from '../assets/our-promise.webp'
import discoverHoneyJarImg from '../assets/ThreeHoney.png'
import beekeeperMountainOrchardImg from '../assets/beekeeper-mountain-orchard.png'
import goldenHoneyHarvestImg from '../assets/golden-honey-harvest.png'

function LandingPage() {
  return (
    <>
      <Hero />
      <StoryBanner
        title="Discover the Taste of Real, Raw Honey"
        text="Packed with natural enzymes and antioxidants, our honey is harvested with care and bottled exactly as the bees made it. No heating, no blending, no shortcuts — just honey the way nature intended."
        ctaLabel="Learn More"
        ctaHref="/our-promise"
        image={discoverHoneyJarImg}
        imageAlt="A jar of raw honey next to its gift box packaging"
        imagePosition="right"
      />
      <FeatureStrip />
      <HoneyVarieties />
      <StoryBanner
        id="bees"
        eyebrow="Meet the Bees"
        title="The Hives Behind Every Jar"
        text="Every jar starts with a healthy hive. Our beekeepers tend small apiaries across the Himalayan foothills and Kashmir's cave orchards, moving with the seasons so the bees — and the blooms they visit — are never rushed."
        ctaLabel="Meet Our Beekeepers"
        ctaHref="/the-deccan-farm"
        image={beekeeperMountainOrchardImg}
        imageAlt="A beekeeper inspecting a honeycomb frame in a blossoming mountain orchard, with snow-capped peaks behind"
        imagePosition="left"
      />
      <StoryBanner
        id="harvest"
        eyebrow="How We Harvest"
        title="Raw, As the Bees Made It"
        text="No heating, no blending, no shortcuts. Each batch is extracted cold, settled naturally, and jarred within days of leaving the hive — so every spoonful keeps its original aroma, enzymes, and flavour."
        ctaLabel="See Our Process"
        ctaHref="/our-promise"
        image={goldenHoneyHarvestImg}
        imageAlt="Raw honey dripping from a honeycomb frame into a mesh settling tank, with a filled jar and hives in the background"
        imagePosition="right"
      />
      <StoryBanner
        eyebrow="Our Promise"
        title="Honey You Can Trust"
        text="No heating, no blending, no shortcuts. Every jar is lab-tested for purity so you always know exactly what's inside."
        ctaLabel="Read Our Promise"
        ctaHref="/our-promise"
        image={ourPromiseImg}
        imageAlt="A Deccan Honey Co. beekeeper inspecting a honeycomb frame, alongside a lab photo of a purity test in progress"
        imagePosition="left"
      />
      <StoryBanner
        id="sustainability"
        variant="overlay"
        eyebrow="Our Commitment"
        title="Rooted in Nature, Hive to Hive"
        text="For every jar we sell, we plant wildflowers and protect pollinator habitats — because healthy bees make better honey, and a wilder world makes a better future."
        ctaLabel="Learn More"
        ctaHref="/the-deccan-farm"
        image={rootedInNatureImg}
        imageAlt="A parent and child exploring the forest, pointing out a wild beehive above a waterfall"
      />
      <Newsletter />
    </>
  )
}

export default LandingPage
