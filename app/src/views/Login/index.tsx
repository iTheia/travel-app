import React from "react";
import { View } from "react-native";
import { AuthNavProps } from "../../navigation/Auth/types";
import styles from "./styles";
import Form from "./Form";

export const LoginView: React.FC<AuthNavProps<"Login">> = () => {
    return (
        <View style={styles.container}>
            <Form />
        </View>
    );
};
