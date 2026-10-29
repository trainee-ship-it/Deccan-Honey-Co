import StoryBanner from '../components/StoryBanner/StoryBanner.jsx'
import deccanLandscapesImg from '../assets/honeybees-india-landscapes.png'
import deccanLandscapeCollectionImg from '../assets/deccan-landscape-collection.png'
import goldenHourHarvestImg from '../assets/golden-hour-honey-harvest.png'

export const TheDeccanFarm = () => (
  <>
    <StoryBanner
      variant="overlay"
      eyebrow="Our Story"
      title="The Deccan Farm"
      text="Across the Himalayan foothills, the dry scrublands of the Thar, and the high valleys of Kashmir, our beekeepers follow the bloom. Each harvest carries the taste of wherever it was gathered — because honey, done right, should taste of somewhere."
      image={deccanLandscapesImg}
      imageAlt="A collage of beekeepers tending hives across the Himalayan foothills, the Thar desert at sunset, and a Kashmir valley"
    />

    <StoryBanner
      eyebrow="Provenance"
      title="Honey Should Taste of Somewhere"
      text="Wildflower honey tells you almost nothing. Ours tells you everything — the altitude it grew at, the flowers in bloom that week, the soil beneath the hive. From alpine wildflowers to desert blossom to high-valley orchards, every jar carries the character of the land it came from."
      image={deccanLandscapeCollectionImg}
      imageAlt="Four Deccan Honey Co. jars — Himalayan Alpine Gold, Western Ghats Jungle Gold, Desert Flower Gold, and Kashmir Cave Reserve — each set against its own source landscape"
      imagePosition="right"
    />

    <StoryBanner
      eyebrow="Seasonal Harvest"
      title="This Harvest. This Place. This Season."
      text="We don't manufacture flavours — we wait for them. Each batch is tied to a single harvest, in a single place, in a single season, and once it's gone, that exact jar won't come again. What you're tasting is a moment in a hive's year, not a recipe."
      ctaLabel="Shop This Season's Harvest"
      ctaHref="/shop-all"
      image={goldenHourHarvestImg}
      imageAlt="A jar of Deccan Honey Co. honey on a hilltop at golden hour, wildflowers in front and a beekeeper working a hive frame behind"
      imagePosition="left"
    />
  </>
)
