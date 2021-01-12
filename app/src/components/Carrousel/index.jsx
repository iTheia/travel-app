import React from "react";
import { Fragment } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "../ImageView";
import styles from "./styles";

export const List = ({ list, text }) => {
    return (
        <Fragment>
            <View style={styles.content}>
                <Text style={styles.title}>{text}</Text>
            </View>
            <View>
                <FlatList
                    horizontal={true}
                    data={list}
                    renderItem={({ item }) => <Card {...{ post: item }} />}
                    keyExtractor={(item) => `${item.id}`}
                />
            </View>
        </Fragment>
    );
};
