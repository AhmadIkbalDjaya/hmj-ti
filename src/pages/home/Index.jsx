import Hero from './components/Hero/Hero';
import VideoFrame from './components/VideoFrame';
import Description from './components/Description';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import { HeadTags } from '../../components/HeadTags';
import ArticleSection from './components/ArticleSection/ArticleSection';
import ProductSection from './components/ProductSection/ProductSection';

export default function HomePage() {
  return (
    <>
      <HeadTags />
      <Hero />
      <Description />
      <VideoFrame />
      <ArticleSection />
      <ProductSection />
      <FeedbackForm />
    </>
  );
}
