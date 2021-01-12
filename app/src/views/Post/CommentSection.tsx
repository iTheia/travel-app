import React from "react";
import { Image, Text } from "react-native";
import { View } from "react-native-animatable";
import { ScrollView } from "react-native-gesture-handler";
import { IComment } from "../../variables";
import styles from "./styles";

interface Props {
    comments: IComment[];
}
export default function ({ comments }: Props) {
    return (
        <ScrollView style={styles.section}>
            {comments.map((comment, index) => (
                <View key={index} style={styles.commentCard}>
                    <Image
                        source={{
                            uri: comment.author.avatar,
                        }}
                        style={styles.commentAvatar}
                        resizeMethod='resize'
                        resizeMode='cover'
                    />
                    <View style={styles.comment}>
                        <Text style={styles.commentAuthor}>
                            {comment.author.name}
                        </Text>
                        <Text style={{ color: "#555" }}>{comment.comment}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}
