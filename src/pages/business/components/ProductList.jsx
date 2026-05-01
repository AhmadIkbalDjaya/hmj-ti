import { Grid } from "@mui/material";
import ProductCard from "../../../components/ProductCard";

export default function ProductList({ products = [], loading }) {
  return (
    <Grid container spacing={3} px={{ xs: 3, sm: 0 }}>
      {loading
        ? Array.from(new Array(2)).map((_, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={12}
              md={6}
              justifyContent="center"
              display="flex"
            >
              <ProductCard loading={true} />
            </Grid>
          ))
        : products.map((product, i) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                sm={12}
                md={6}
                justifyContent="center"
                display="flex"
              >
                <ProductCard product={product} />
              </Grid>
            );
          })}
    </Grid>
  );
}
