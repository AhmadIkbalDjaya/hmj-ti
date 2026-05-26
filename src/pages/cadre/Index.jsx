import { Box, Container, Pagination, Stack } from '@mui/material';
import { HeadTags } from '../../components/HeadTags';
import CadreFilterBar from './components/CadreFilterBar';
import CadreHero from './components/CadreHero';
import CadreMobileList from './components/CadreMobileList';
import CadreResultSummary from './components/CadreResultSummary';
import CadreTable from './components/CadreTable';
import EmptyState from './components/EmptyState';
import { useIndex } from './hooks/useIndex';

export default function CadrePage() {
  const { value, func } = useIndex();

  return (
    <>
      <HeadTags title="Database Kader" />
      <CadreHero />
      <Box bgcolor="#F9FAFB" minHeight="70vh">
        <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
          <Stack spacing={2.5}>
            <CadreFilterBar
              batch={value.batch}
              batchOptions={value.batchOptions}
              hasActiveFilters={value.hasActiveFilters}
              onChangeBatch={func.handleChangeBatch}
              onChangeSearch={func.setSearchInput}
              onChangeStatus={func.handleChangeStatus}
              onResetFilters={func.handleResetFilters}
              searchInput={value.searchInput}
              status={value.status}
            />

            <CadreResultSummary
              loading={value.loading}
              page={value.page}
              totalData={value.totalData}
              totalPage={value.totalPage}
            />

            {value.isMobile ? (
              <CadreMobileList cadres={value.cadres} loading={value.loading} />
            ) : (
              <CadreTable
                cadres={value.cadres}
                loading={value.loading}
                page={value.page}
              />
            )}

            {!value.loading && value.totalData === 0 && <EmptyState />}

            {value.totalPage > 1 && (
              <Box display="flex" justifyContent="center" pt={1}>
                <Pagination
                  count={value.totalPage}
                  page={value.page}
                  color="primary"
                  onChange={func.handleChangePage}
                />
              </Box>
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
