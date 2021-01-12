import { StyleSheet } from "react-native";
import { grey } from "../../constant";

export default StyleSheet.create({
    textInput: {
        borderColor: "#000",
        backgroundColor: "#fff",
        paddingLeft: 24,
        padding: 12,
        borderRadius: 5,
        width: "100%",
    },
    container: {
        padding: 15,
        backgroundColor: grey,
        zIndex: 1000,
        elevation: 1000,
    },
    icon: {
        position: "absolute",
        top: 30,
        right: 30,
        opacity: 0.6,
    },
});
