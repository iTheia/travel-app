import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

export const FullsizeLoader: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/logo.png")}
                style={styles.logo}
            />
            <Text style={styles.text}>Applicacion de turismo</Text>
        </View>
    );
};
