import React from "react";
import { Image } from "react-native";
import { blue } from "../../constant";
import styles from "./styles";

export const Pages = [
    {
        backgroundColor: blue,
        image: (
            <Image
                style={styles.image}
                source={require("../../../assets/fotos.png")}
                resizeMethod='resize'
                resizeMode='contain'
            />
        ),
        title: "Descubre",
        subtitle: "Conoce las maravillas que tiene esta ciudad",
    },
    {
        backgroundColor: "#519032",
        image: (
            <Image
                resizeMethod='scale'
                resizeMode='contain'
                style={styles.image}
                source={require("../../../assets/loving.png")}
            />
        ),
        title: "Siente",
        subtitle: "Guarda aquellos lugares que mas te gustaron",
    },
    {
        backgroundColor: "#f0f07a",
        image: (
            <Image
                style={styles.image}
                source={require("../../../assets/comentarios.png")}
            />
        ),
        title: "Interactua",
        subtitle: "Lee y escribe comentarios",
    },
];
