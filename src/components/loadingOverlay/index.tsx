import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import { useLoadingOverlay } from '../../redux/hooks/useLoadingOverlay';
import { colors, spacing, typography } from '../../theme';

const LoadingOverlay: React.FC = () => {
  const { visible, message } = useLoadingOverlay();

  if (!visible) {
    return null;
  }

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color={colors.light} />
        {message && <Text style={styles.message}>{message}</Text>}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    ...typography.body2,
    marginTop: spacing.medium,
    color: colors.light,
  },
});

export default LoadingOverlay;
