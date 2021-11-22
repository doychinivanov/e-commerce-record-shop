import { Grid, Skeleton, } from "@mui/material";


const ProductDetailsLoading = () => {

    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
               <Skeleton variant="rectangular" width={440} height={410} />
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
                {/* Title */}
                <Skeleton height={100} sx={{ marginBottom: -5 }} />

                {/* Description */}
                <Skeleton height={250} sx={{ marginBottom: -5 }} />
            
                {/*price  */}
                <Skeleton height={60} sx={{ marginBottom: -2 }} />
                
                {/* Button */}
                <Skeleton height={80} />

            </Grid>
        </>
    )
}

export default ProductDetailsLoading;