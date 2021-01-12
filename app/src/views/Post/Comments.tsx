import React, { useContext } from "react";
import { View, Text } from "react-native";
import CommentSection from "./CommentSection";
import { PostContext } from "../../providers/Post/type";
import Footer from "./Footer";
import styles from "./styles";

export const Comments: React.FC = () => {
    const { post, numComments, comments } = useContext(PostContext);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.section}>
                <Text style={[styles.title, { fontSize: 16 }]}>
                    Numero de comentarios {numComments}
                </Text>
            </View>
            <CommentSection comments={comments} />
            <Footer id={post.id} />
        </View>
    );
};
