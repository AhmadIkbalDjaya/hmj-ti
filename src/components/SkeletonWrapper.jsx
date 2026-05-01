import { Grid, Skeleton } from "@mui/material";

export default function SkeletonWrapper({
  children,
  loading = false,
  rows = 1,
  columns = 1,
  spacing = 1,
  gridSx = {},
  ...props
}) {
  if (!loading) {
    return <>{children}</>;
  }

  if (rows <= 1 && columns <= 1) {
    return <Skeleton {...props} />
  }

  return (
    <Grid container spacing={spacing} columns={columns} sx={gridSx}>
      {Array.from({ length: rows * columns }).map((_, index) => (
        <Grid item key={index} xs={1}>
          <Skeleton {...props} />
        </Grid>
      ))}
    </Grid>
  );
}
