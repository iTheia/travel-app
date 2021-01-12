import { StyleSheet } from "react-native";
import { blue } from "../../constant";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blue,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: { borderRadius: 50 },
    text: { fontSize: 22, color: "white", marginTop: 20 },
});
