import StoryBanner from '../components/StoryBanner/StoryBanner.jsx'
import goldenHarvestSunriseImg from '../assets/golden-honey-harvest-sunrise.png'
import goldenHoneyLabImg from '../assets/golden-honey-lab-sunset.png'
import wildHiveToGoldenJarImg from '../assets/wild-hive-to-golden-jar.png'

export const OurPromise = () => (
  <>
    <StoryBanner
      variant="overlay"
      eyebrow="Our Story"
      title="Our Promise"
      text="Honey has a trust problem — diluted, overheated, blended beyond recognition, and sold on a label that tells you nothing. We built Deccan Honey Co. so you'd never have to wonder what's actually in the jar."
      image={goldenHarvestSunriseImg}
      imageAlt="A jar of raw honey and honeycomb on a stone wall at sunrise, overlooking a hilltop fort and lake"
    />

    <StoryBanner
      eyebrow="Purity"
      title="Honey You Can Interrogate"
      text="Every batch is lab-tested for purity before it reaches a shelf — no heating, no blending, no shortcuts. We'd rather show you the evidence than ask you to take our word for it."
      image={goldenHoneyLabImg}
      imageAlt="A jar of honey and honeycomb on a stone table beside lab testing equipment — a microscope, dropper, and sample vials — overlooking a sunset valley"
      imagePosition="right"
    />

    <StoryBanner
      eyebrow="Traceability"
      title="Every Jar Has a Story. Ours Has Receipts."
      text="Jar → batch → harvest → region → apiary → testing → packing date. We keep a record of all of it, so the honey on your shelf can always be traced back to the hive it came from."
      ctaLabel="Shop With Confidence"
      ctaHref="/shop-all"
      image={wildHiveToGoldenJarImg}
      imageAlt="A beekeeper harvesting wild honeycomb, with a trail of icons showing the hive, apiary, extraction, lab testing, and bottling steps, ending in a finished jar"
      imagePosition="left"
    />
  </>
)
