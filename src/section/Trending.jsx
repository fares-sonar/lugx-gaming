import {Head,TrendingCards} from '../components/index';
const Trending = () => {
  return (
    <>
      <section className="max-w-[1200px] mx-auto mt-16">
        <Head text="trending" title="Trending Games"/>
        <TrendingCards/>
      </section>
    </>
  )
}

export default Trending