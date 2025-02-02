import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import fontFamily from './typography/fontFamily';

import fontSize from './typography/fontSize';
const typography = StyleSheet.create({
  tiny: {
    fontFamily: fontFamily.fontFamilyMedium,
    fontSize: fontSize.fontSizeTiny,
    lineHeight: normalize(12),
  },
  tinyBold: {
    fontFamily: fontFamily.fontFamilyBold,
    fontSize: fontSize.fontSizeTiny,
    lineHeight: normalize(12),
  },
  small: {
    fontFamily: fontFamily.fontFamilyMedium,
    fontSize: fontSize.fontSizeXSmall,
    lineHeight: normalize(16),
  },
  body3: {
    fontFamily: fontFamily.fontFamilyMedium,
    fontSize: fontSize.fontSizeSmall,
    lineHeight: normalize(18),
  },
  body2Bold: {
    fontFamily: fontFamily.fontFamilyBlack,
    fontSize: fontSize.fontSizeRegular,
    fontWeight: 'bold',
  },
  body2: {
    fontFamily: fontFamily.fontFamilySemiBold,
    fontSize: fontSize.fontSizeRegular,
    fontWeight: 'semibold',
  },
  body1: {
    fontFamily: fontFamily.fontFamilyMedium,
    fontSize: fontSize.fontSizeRegular,
  },
  title3Bold: {
    fontFamily: fontFamily.fontFamilyBold,
    fontSize: fontSize.fontSizeMedium,
    fontWeight: 'bold',
  },
  title3: {
    fontFamily: fontFamily.fontFamilySemiBold,
    fontSize: fontSize.fontSizeMedium,
  },
  title2Black: {
    fontFamily: fontFamily.fontFamilyBlack,
    fontSize: fontSize.fontSizeLarge,
  },
  title2: {
    fontFamily: fontFamily.fontFamilySemiBold,
    fontSize: fontSize.fontSizeLarge,
  },
  title1: {
    fontFamily: fontFamily.fontFamilyBold,
    fontSize: fontSize.fontSizeExtraLarge,
    lineHeight: normalize(39),
  },
  titleX: {
    fontFamily: fontFamily.fontFamilyBold,
    fontSize: fontSize.fontSizeHuge,
    lineHeight: normalize(80),
  },
});

export default typography;
