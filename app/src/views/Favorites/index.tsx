import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "../../components/ImageView";
import { useGet } from "../../hooks/useGet";
import styles from "./styles";

export const FavoritesView: React.FC = () => {
    const navigation = useNavigation();
    let { loading, data } = useGet("users/getFavorites", []);

    if (loading) {
        return (
            <View style={{ flex: 1 }}>
                <View style={[styles.section]}></View>
            </View>
        );
    }

    if (data.length === 0) {
        return (
            <View style={{ flex: 1 }}>
                <View style={[styles.section]}>
                    <Text style={styles.title}>Aun no tienes Favoritos</Text>
                </View>
                <Button
                    title='Descubre nuevos lugares'
                    onPress={() => navigation.navigate("Search")}
                />
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.section]}>
                <Text style={styles.title}>Lugares que mas te han gustado</Text>
            </View>
            <ScrollView style={styles.section}>
                {data.map((item: any, index) => {
                    let raw = {
                        ...item.post,
                        image:
                            item.post.image.path +
                            "/" +
                            item.post.image.name +
                            "." +
                            item.post.image.type,
                    };
                    return (
                        <View key={index} style={{ marginBottom: 15 }}>
                            <Card
                                post={raw}
                                style={{
                                    width: "100%",
                                    height: 175,
                                    borderRadius: 20,
                                }}
                            />
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};
