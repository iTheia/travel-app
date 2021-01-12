import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Form from "./Form";

export const RegisterView: React.FC = () => {
    return (
        <View style={styles.container}>
            <Form />
        </View>
    );
};
