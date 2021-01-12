import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./Header";
import Recent from "./Recent";
import { List } from "../../components/Carrousel";
import { useGet } from "../../hooks/useGet";

export const HomeView: React.FC = () => {
    const { loading, data } = useGet("posts/getTrending", []);

    if (loading) {
        return (
            <View style={{ flexGrow: 1, height: "100%" }}>
                <Header />
            </View>
        );
    }
    console.log(data);
    return (
        <View style={{ flexGrow: 1, height: "100%" }}>
            <Header />
            <ScrollView>
                <List list={data} text='Tendencias' />
                <Recent />
            </ScrollView>
        </View>
    );
};
