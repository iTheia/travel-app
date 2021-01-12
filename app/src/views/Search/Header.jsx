import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { SearchContext } from "../../providers/Search";
import styles from "./styles";

import Animated from "react-native-reanimated";

export default function Header() {
    const { fetchData, handleChange } = useContext(SearchContext);

    return (
        <Animated.View style={[styles.container]}>
            <TextInput
                placeholder='Conoce un nuevo lugar'
                placeholderTextColor='#2b2b2b'
                style={styles.textInput}
                onChangeText={handleChange}
                onSubmitEditing={fetchData}
            ></TextInput>
            <Feather
                onPress={fetchData}
                name='search'
                size={22}
                color='#666'
                style={styles.icon}
            />
        </Animated.View>
    );
}
