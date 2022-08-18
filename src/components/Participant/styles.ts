import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },

    name: {
        height: 56,
        flex: 1,
        backgroundColor: "rgb(130, 87, 230)",
        borderRadius: 5,
        color: "#000",
        padding: 16,
        fontWeight: "bold",
        marginRight: 5,
    },

    button: {
        width: 56,
        height: 56,
        padding: 10,
        backgroundColor: "#e23c44",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        fontSize: 25,
        color: "#fff",
        textAlign: "center",
    },
})
