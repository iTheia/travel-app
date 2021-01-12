import { StyleSheet } from "react-native";
import { blue } from "../../constant";
import { height_logo } from "./const";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blue,
    },
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    logo: {
        borderRadius: 50,
        width: height_logo,
        height: height_logo,
    },
    title: {
        color: "#05375a",
        fontSize: 30,
        fontWeight: "bold",
    },
    text: {
        color: "grey",
        marginTop: 5,
    },
    button: {
        alignItems: "flex-end",
        marginTop: 30,
    },
    signIn: {
        width: 180,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        flexDirection: "row",
    },
    textSign: {
        color: "white",
        fontWeight: "bold",
    },
});
