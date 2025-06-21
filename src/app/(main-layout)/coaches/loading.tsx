'use client'
import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import ABCD from '../../../../public/loading.json'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (

    <Box sx={(theme) => ({ height: theme.spacing(18), m: 'auto' })}>
      <Lottie
        style={{ height: '100%' }}
        animationData={ABCD}
        loop={true}
      />
    </Box>
  );
}
