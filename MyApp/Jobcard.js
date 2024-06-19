import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const JobCard = ({ jobTitle, company, price, location, imageSource, alertMessage, customStyle, cardStyle }) => {
  return (
    <TouchableOpacity onPress={() => alert(alertMessage)} style={[styles.card, cardStyle]}>
      <View style={{ flexDirection: 'row', marginBottom: 35 }}>
        <View style={styles.fimage}>
          <Image source={imageSource} style={[styles.image, customStyle]} />
        </View>
        <View>
          <Text style={{ color: '#FFF' }}>{jobTitle}</Text>
          <Text style={{ color: '#FFF' }}>{company}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#FFF' }}>{price}</Text>
        <Text style={{ color: '#FFF', alignSelf: 'flex-end' }}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#87CEEB',
    width: 200,
    marginRight: 20,
    borderRadius: 10,
    padding: 15,
  },
  fimage: {
    backgroundColor: '#FFF',
    width: 40,
    alignItems: 'center',
    borderRadius: 10,
    padding: 6,
    marginRight: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default JobCard;
