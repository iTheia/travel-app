import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface Props {
    category: string;
    item?: {
        text: string;
        key: string;
        selected: boolean;
    };
}

export default ({ category, item }: Props) => (
    <View style={styles.categoryContainer}>
        <FontAwesome
            name='tag'
            size={16}
            color={item?.selected ? "#1f1f1f" : "#fff"}
        />
        <Text style={styles.category}>{category}</Text>
    </View>
);
