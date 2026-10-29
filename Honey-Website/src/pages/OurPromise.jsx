import StoryBanner from '../components/StoryBanner/StoryBanner.jsx'

export const OurPromise = () => (
  <>
    <StoryBanner
      variant="overlay"
      eyebrow="Our Story"
      title="Our Promise"
      text="Honey has a trust problem — diluted, overheated, blended beyond recognition, and sold on a label that tells you nothing. We built Deccan Honey Co. so you'd never have to wonder what's actually in the jar."
      image="https://placehold.co/1600x900/6c8c5f/faf4e6?text=Our+Promise"
      imageAlt="A jar of raw honey beside a laboratory purity test in progress"
    />

    <StoryBanner
      eyebrow="Purity"
      title="Honey You Can Interrogate"
      text="Every batch is lab-tested for purity before it reaches a shelf — no heating, no blending, no shortcuts. We'd rather show you the evidence than ask you to take our word for it."
      image="https://placehold.co/600x480/d98a2b/faf4e6?text=Purity"
      imageAlt="Beekeeper inspecting a honeycomb frame alongside lab testing equipment"
      imagePosition="right"
    />

    <StoryBanner
      eyebrow="Traceability"
      title="Every Jar Has a Story. Ours Has Receipts."
      text="Jar → batch → harvest → region → apiary → testing → packing date. We keep a record of all of it, so the honey on your shelf can always be traced back to the hive it came from."
      ctaLabel="Shop With Confidence"
      ctaHref="/shop-all"
      image="https://placehold.co/600x480/b56f1d/faf4e6?text=Traceability"
      imageAlt="Jar of honey with a batch and harvest label attached"
      imagePosition="left"
    />
  </>
)
