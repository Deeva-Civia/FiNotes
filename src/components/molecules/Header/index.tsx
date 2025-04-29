import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackLogo} from '../../../assets';
import ImageUser from '../../atoms/ImageUser';

const Header = ({
  title,
  titleSize = 26,
  displayBackButton = false,
  backgroundColor = '#FFFFFF',
  rightImage = false,
  align = 'left', // left = title kiri, right = title kanan
}) => {
  return (
    <View style={styles.container(backgroundColor)}>
      {align === 'left' ? (
        <>
          {/* Kiri: Title */}
          <Text style={styles.title(titleSize)}>{title}</Text>

          {/* Kanan: Gambar user */}
          {rightImage && <ImageUser border width={70} height={70} />}
        </>
      ) : (
        <>
          {/* Kiri: Back */}
          {displayBackButton && (
            <TouchableOpacity activeOpacity={0.5} style={styles.backButton}>
              <BackLogo />
            </TouchableOpacity>
          )}

          {/* Kanan: Title */}
          <Text style={[styles.title(titleSize), {textAlign: 'right'}]}>
            {title}
          </Text>
        </>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: backgroundColor,
    paddingHorizontal: 24,
    paddingVertical: 22,
    elevation: 5,
  }),
  title: titleSize => ({
    fontFamily: 'Roboto-Bold',
    fontSize: titleSize,
    color: '#10266F',
  }),
  backButton: {
    paddingRight: 10,
  },
});
