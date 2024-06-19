import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const PopularJobs = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topic}>
                <Text style={styles.featured}>Popular Jobs</Text>
                <TouchableOpacity>
                    <View>
                        <Text style={{ textDecorationLine: 'underline' }}>See all</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <TouchableOpacity  style={styles.jobs}>
                    <View style={{ flexDirection: 'row', marginBottom: 35 }}>
                        <View style={{ marginRight: 10 }}>
                            <Image style={styles.fimage} source={require("./assets/burger.png")} />
                        </View>
                        <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Jr Executive</Text>
                    </View>
                    <View style={{ alignSelf: "flex-end", position: "absolute" }}>
                        <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold" }}>$96,000/y</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#666362", fontSize: 15 }}>Burger King</Text>
                        <Text style={{ color: "#666362", alignSelf: 'flex-end', fontSize: 15 }}>Los Angeles, US</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.jobs}>
                    <View style={{ flexDirection: 'row', marginBottom: 35 }}>
                        <View style={{ marginRight: 10 }}>
                            <Image style={styles.fimage} source={require("./assets/image 8.png")} />
                        </View>
                        <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Product Manager</Text>
                    </View>
                    <View style={{ alignSelf: "flex-end", position: "absolute" }}>
                        <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold" }}>$84,000/y</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#666362", fontSize: 15 }}>Beats</Text>
                        <Text style={{ color: "#666362", alignSelf: 'flex-end', fontSize: 15 }}>Florida, US</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.jobs}>
                    <View style={{ flexDirection: 'row', marginBottom: 35 }}>
                        <View style={{ marginRight: 10 }}>
                            <Image style={styles.fimage} source={require("./assets/facebook.png")} />
                        </View>
                        <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Product Manager</Text>
                    </View>
                    <View style={{ alignSelf: "flex-end", position: "absolute" }}>
                        <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold" }}>$86,000/y</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#666362", fontSize: 15 }}>Facebook</Text>
                        <Text style={{ color: "#666362", alignSelf: 'flex-end', fontSize: 15 }}>Florida, US</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.jobs}>
                    <View style={{ flexDirection: 'row', marginBottom: 35 }}>
                        <View style={{ marginRight: 10 }}>
                            <Image style={styles.fimage} source={require("./assets/apple.png")} />
                        </View>
                        <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>DevOps</Text>
                    </View>
                    <View style={{ alignSelf: "flex-end", position: "absolute" }}>
                        <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold" }}>$80,000/y</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#666362", fontSize: 15 }}>IOS</Text>
                        <Text style={{ color: "#666362", alignSelf: 'flex-end', fontSize: 15 }}>New Jersey, US</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.jobs}>
                    <View style={{ flexDirection: 'row', marginBottom: 35 }}>
                        <View style={{ marginRight: 10 }}>
                            <Image style={styles.fimage} source={require("./assets/Kantanka.png")} />
                        </View>
                        <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Mechanic</Text>
                    </View>
                    <View style={{ alignSelf: "flex-end", position: "absolute" }}>
                        <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold" }}>$30,000/y</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#666362", fontSize: 15 }}>Kantanka Production</Text>
                        <Text style={{ color: "#666362", alignSelf: 'flex-end', fontSize: 15 }}>Accra, Ghana</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.jobs}>
                    <View style={{ flexDirection: 'row', marginBottom: 35 }}>
                        <View style={{ marginRight: 10 }}>
                            <Image style={styles.fimage} source={require("./assets/simple.png")} />
                        </View>
                        <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Tutor</Text>
                    </View>
                    <View style={{ alignSelf: "flex-end", position: "absolute" }}>
                        <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold" }}>$50,000/y</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#666362", fontSize: 15 }}>Simplilearn</Text>
                        <Text style={{ color: "#666362", alignSelf: 'flex-end', fontSize: 15 }}>Accra, Ghana</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.jobs}>
                    <View style={{ flexDirection: 'row', marginBottom: 35 }}>
                        <View style={{ marginRight: 10 }}>
                            <Image style={styles.fimage} source={require("./assets/utv.png")} />
                        </View>
                        <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Presenter</Text>
                    </View>
                    <View style={{ alignSelf: "flex-end", position: "absolute" }}>
                        <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold" }}>$30,000/y</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#666362", fontSize: 15 }}>Utv</Text>
                        <Text style={{ color: "#666362", alignSelf: 'flex-end', fontSize: 15 }}>Accra, Ghana</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.jobs}>
                    <View style={{ flexDirection: 'row', marginBottom: 35 }}>
                        <View style={{ marginRight: 10 }}>
                            <Image style={styles.fimage} source={require("./assets/aws.png")} />
                        </View>
                        <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>Hosting</Text>
                    </View>
                    <View style={{ alignSelf: "flex-end", position: "absolute" }}>
                        <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold" }}>$100,000/y</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#666362", fontSize: 15 }}>AWS</Text>
                        <Text style={{ color: "#666362", alignSelf: 'flex-end', fontSize: 15 }}>UK</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
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
        marginBottom:35,
        justifyContent: 'space-between',
    },
    featured: {
        color: '#0D0D26',
        fontSize: 20,
        fontWeight: 'bold',
    },
    scrollContent: {
        paddingHorizontal: 20,
    },
    jobs: {
        backgroundColor: "#FAF9F6",
        borderRadius: 10,
        padding: 15,
        marginBottom:40,
    },
    fimage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
});

export default PopularJobs;
