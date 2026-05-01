import { Container } from '@mui/material';
import { useIndex } from './hooks/useIndex';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import { HeadTags } from '../../components/HeadTags';

export default function BusinessPage() {
  const { value } = useIndex();

  return (
    <>
      <HeadTags title="Ekonomi Kreatif" />
      <HeroSection />
      <Container maxWidth="xl" sx={{ py: 9, bgcolor: '#F9FAFB' }}>
        <ProductList products={value.products?.data} loading={value.loading} />
      </Container>
    </>
  );
}
