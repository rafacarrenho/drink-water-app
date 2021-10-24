/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import ImageWaterBG from './images/waterbg.png';

import {StyleSheet, View, ImageBackground, Text, Pressable} from 'react-native';

const drinkStatus = {
  bad: 'Ruim',
  good: 'Bom',
};

const App = () => {
  const [goal] = useState(2000);
  const [consumed, setConsumed] = useState(0);
  const [status, setStatus] = useState(drinkStatus.bad);

  const handleDrinkWater = () => {
    setConsumed(prevState => prevState + 200);
  };

  useEffect(() => {
    if (consumed >= goal) {
      setStatus(drinkStatus.good);
    } else {
      setStatus(drinkStatus.bad);
    }
  }, [consumed]);

  const percent = consumed === 0 ? 0 : ((consumed / goal) * 100).toFixed(0);

  return (
    <View style={styles.body}>
      <ImageBackground source={ImageWaterBG} style={styles.imageBG}>
        <View>
          <View style={styles.infoArea}>
            <View style={styles.infoAreaContainer}>
              <Text style={styles.infoAreaTitle}>Meta</Text>
              <Text style={styles.infoAreaData}>{goal}ml</Text>
            </View>
            <View style={styles.infoAreaContainer}>
              <Text style={styles.infoAreaTitle}>Consumido</Text>
              <Text style={styles.infoAreaData}>{consumed}ml</Text>
            </View>
            <View style={styles.infoAreaContainer}>
              <Text style={styles.infoAreaTitle}>Status</Text>
              <Text style={styles.infoAreaData}>{status}</Text>
            </View>
          </View>
          <View style={styles.percentArea}>
            <Text style={styles.percentAreaText}>{percent}%</Text>
          </View>
          <View style={styles.buttonArea}>
            <Pressable style={styles.buttonDrink} onPress={handleDrinkWater}>
              <Text style={styles.buttonDrinkText}>Beber 200ml</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20,
  },
  imageBG: {
    flex: 1,
    width: null,
  },
  infoArea: {
    flexDirection: 'row',
    marginTop: 50,
  },
  infoAreaContainer: {
    flex: 1,
    alignItems: 'center',
  },
  infoAreaTitle: {
    color: '#45b0fc',
    fontSize: 14,
  },
  infoAreaData: {
    color: '#2b4274',
    fontWeight: 'bold',
    fontSize: 16,
  },
  percentArea: {
    marginTop: 170,
  },
  percentAreaText: {
    fontSize: 70,
    color: 'white',
    textAlign: 'center',
  },
  buttonArea: {
    marginTop: 30,
    paddingHorizontal: 100,
  },
  buttonDrink: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  buttonDrinkText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default App;
