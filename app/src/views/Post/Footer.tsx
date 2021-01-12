import { Feather } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { View } from "react-native-animatable";
import { TextInput } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";
import { PostContext } from "../../providers/Post/type";

export default function Footer({ id }: { id: number }) {
    const insets = useSafeAreaInsets();
    const { handleSubmit } = useContext(PostContext);
    const [text, setText] = useState("");
    function handleChange(text: string) {
        setText(text);
    }
    return (
        <View style={{ paddingBottom: insets.bottom, marginBottom: 20 }}>
            <TextInput
                style={styles.searchBox}
                placeholder='Comenta tu experiencia'
                placeholderTextColor='#666'
                onChangeText={handleChange}
                onSubmitEditing={() => {
                    handleSubmit(text);
                    setText("");
                }}
            ></TextInput>
            <Feather
                name='arrow-right'
                size={22}
                color='#666'
                onPress={() => {
                    handleSubmit(text);
                    setText("");
                }}
                style={{
                    position: "absolute",
                    top: 30,
                    right: 50,
                    opacity: 0.6,
                }}
            />
        </View>
    );
}
