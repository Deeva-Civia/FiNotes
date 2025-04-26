import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {BgQuote, Lamp} from '../../../assets';

const Quotes = () => {
  return (
    <View>
      <ImageBackground source={BgQuote} style={styles.imageBg}>
        <View style={styles.overlay} />

        <View style={styles.content}>
          <View style={styles.header}>
            <Lamp style={styles.icon} />
            <Text style={styles.subTitle}>Quote of the Day</Text>
          </View>
          <Text style={styles.quote}>
            “Clean code is{'\n'}better than clever{'\n'}code”
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Quotes;

const styles = StyleSheet.create({
  imageBg: {
    width: '100%',
    height: 149,
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 56,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 21,
  },
  icon: {
    width: 21,
    height: 21,
  },
  subTitle: {
    fontFamily: 'Roboto-Regular',
    color: 'white',
    fontSize: 15,
  },
  quote: {
    fontFamily: 'ShareTechMono-Regular',
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});
