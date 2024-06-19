import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Personpage from './Personpage';
import JobCard from './Jobcard';
import Popularjobs from './Popularjobs';

const Home = ({ route }) => {
  const jobDetails = [
    {
      jobTitle: 'Software Engineer',
      company: 'Facebook',
      price: '$180,00',
      location: 'Accra, Ghana',
      imageSource: require('./assets/facebook.png'),
      alertMessage: 'Price per month, $180,00',
    },
    {
      jobTitle: 'Product Manager',
      company: 'Google',
      price: '$300,00',
      location: ' USA',
      cardStyle: { backgroundColor: "#0F52BA" },
      imageSource: require('./assets/google.png'),
      alertMessage: 'Price per month, $300,00',
    },
    {
      jobTitle: 'IOS Developer',
      company: 'Apple',
      price: '$250,00',
      location: 'Netherland',
      cardStyle: { backgroundColor: "#4682B4" },
      imageSource: require('./assets/apple.png'),
      alertMessage: 'Price per month, $250,00',
    },
    {
      jobTitle: 'Data Scientist',
      company: 'Amazon',
      price: '$500,00',
      location: 'England',
      imageSource: require('./assets/Amazon.png'),
      cardStyle: { backgroundColor: "#008080" },
      customStyle: { width: 25, height: 25 }, 
      alertMessage: 'Price per month, $220,00',
    },
    {
      jobTitle: 'Android Developer',
      company: 'Android',
      price: '$220,00',
      location: 'Accra,Ghana',
      cardStyle: { backgroundColor: "#CCCCFF" },
      imageSource: require('./assets/Android.png'),
      alertMessage: 'Price per month, $220,00',
      customStyle: { width: 20, height: 20 }, 
    },
    {
      jobTitle: 'Data Mining',
      company: 'Tesla',
      price: '$800,00',
      location: 'Rwanda',
      cardStyle: { backgroundColor: "#1434A4" },
      imageSource: require('./assets/Tesla.png'),
      alertMessage: 'Price per month, $800,00',
      customStyle: { width: 25, height: 25 },
    },
    {
      jobTitle: 'Information Modelling',
      company: 'Benz',
      price: '$150,00',
      location: 'Accra,Ghana',
      cardStyle: { backgroundColor: "#00A36C" },
      imageSource: require('./assets/benz.jpeg'),
      alertMessage: 'Price per month, $150,00',
      customStyle: { width: 20, height: 20 },
    },
    {
      jobTitle: 'Data Analyst',
      company: 'Twitter',
      price: '$220,00',
      location: 'Seattle, USA',
      cardStyle: { backgroundColor: "#191970" },
      imageSource: require('./assets/twitter.png'),
      alertMessage: 'Price per month, $220,00',
      customStyle: { width: 25, height: 25 }, 
    },
  ];

  return (
    <View style={styles.container}>
      <Personpage />
      <View style={styles.topic}>
        <Text style={styles.featured}>Featured Jobs</Text>
        <TouchableOpacity>
          <View>
            <Text style={{ textDecorationLine: 'underline' }}>See all</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {jobDetails.map((job, index) => (
            <JobCard
              key={index}
              jobTitle={job.jobTitle}
              company={job.company}
              price={job.price}
              location={job.location}
              imageSource={job.imageSource}
              alertMessage={job.alertMessage}
              customStyle={job.customStyle}
              cardStyle={job.cardStyle} 
            />
          ))}
        </ScrollView>
      </View>

      <Popularjobs/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topic: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40,
    justifyContent: 'space-between',
  },
  featured: {
    color: '#0D0D26',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    marginTop: 20,
    paddingLeft: 20,
  },
  scrollContent: {
    alignItems: 'center',
  },
});

export default Home;
