import { primary } from "./palette";

export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md }) {
  return {
    '@media (max-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (max-width:600px)': {
      fontSize: pxToRem(sm),
    }

  };
}

// ----------------------------------------------------------------------

export const typography = {
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontFamily: 'inherit',
  h1: {

    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58 }),
  },
  h2: {

    fontWeight: 800,
    lineHeight: 1.8,
    fontSize: pxToRem(34),
    ...responsiveFontSizes({ sm: 28, md: 30 }),
  },
  h3: {

    fontWeight: 800,
    lineHeight: 1.5,
    fontSize: pxToRem(30),
    ...responsiveFontSizes({ sm: 20, md: 22 }),
  },
  h4: {
    fontWeight: 800,
    lineHeight: 1.5,
    fontSize: pxToRem(26),
    margin: `${pxToRem(10)} 0`,
    ...responsiveFontSizes({ sm: 18, md: 20 }),
  },
  h5: {

    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 14, md: 18 }),
  },
  h6: {

    fontWeight: 600,
    lineHeight: 1.4,
    fontSize: pxToRem(13),
    ...responsiveFontSizes({ sm: 13, md: 13 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.6,
    fontSize: pxToRem(14),
    fontWeight: 400
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'unset',
  },

};
