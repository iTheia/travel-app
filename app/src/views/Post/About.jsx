import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { PostContext } from "../../providers/Post/type";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { List } from "../../components/Carrousel";
import styles from "./styles";
import Category from "../../components/Category";
import { useGet } from "../../hooks/useGet";
export const About = () => {
    const { post, loading: post_loading } = useContext(PostContext);
    const { data: related, loading } = useGet(
        `posts/getRelated/${post.id}`,
        []
    );
    if (post_loading) {
        return <View></View>;
    }
    return (
        <ScrollView>
            <View style={styles.section}>
                <Text style={{ color: "#555", fontSize: 16 }}>
                    {post.description}
                </Text>
            </View>
            <View style={styles.section}>
                <View style={styles.categories}>
                    {post.categories.map((category) => (
                        <Category category={category.name} key={category.id} />
                    ))}
                </View>
            </View>
            <View style={[styles.section, { height: 250 }]}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ flex: 1 }}
                    region={{
                        latitude: post.latitude,
                        longitude: post.longitude,
                        latitudeDelta: 0.00864195044303443,
                        longitudeDelta: 0.000142817690068,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: post.latitude,
                            longitude: post.longitude,
                        }}
                        image={require("../../../assets/map_marker.png")}
                    />
                </MapView>
            </View>
            <View style={styles.section}>
                {loading ? null : <List list={related} text='Relacionados' />}
            </View>
        </ScrollView>
    );
};
