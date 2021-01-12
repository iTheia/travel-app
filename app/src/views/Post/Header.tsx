import React, { useContext } from "react";
import { Image } from "react-native";
import { PostContext } from "../../providers/Post/type";
import styles from "./styles";

export default function Header() {
    const { post } = useContext(PostContext);
    return <Image style={styles.image} source={{ uri: post.image }} />;
}
