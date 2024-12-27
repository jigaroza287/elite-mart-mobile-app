import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, spacing, typography } from '../../../../theme';

interface IconDescriptionProps extends ViewProps {
  iconName: string;
  descriptionText: string;
  descriptionTextStyle?: TextStyle;
  linkButtonText?: string;
  onPressLink?: () => void;
  showCheckIcon?: boolean;
}

const IconDescription: React.FC<IconDescriptionProps> = ({
  iconName,
  descriptionText,
  descriptionTextStyle,
  linkButtonText,
  onPressLink,
  showCheckIcon = true,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={spacing.xMedium} />
        {showCheckIcon && (
          <Icon
            name="check-circle"
            size={spacing.medium}
            color={colors.green}
            style={styles.greenCheckIcon}
          />
        )}
      </View>
      <View>
        <Text style={[styles.descriptionTextStyle, descriptionTextStyle]}>
          {descriptionText}
        </Text>
        {linkButtonText && (
          <Text style={styles.linkButtonTextStyle} onPress={onPressLink}>
            {linkButtonText}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: spacing.small,
    padding: spacing.tiny,
    borderRadius: spacing.medium,
    borderWidth: spacing.atom,
  },
  greenCheckIcon: {
    position: 'absolute',
    bottom: -spacing.tiny,
    right: -spacing.tiny,
    backgroundColor: colors.light,
    borderRadius: spacing.xSmall,
  },
  descriptionTextStyle: {
    ...typography.body1,
  },
  linkButtonTextStyle: {
    ...typography.small,
    color: colors.primary,
    marginTop: spacing.tiny,
  },
});

export default IconDescription;
