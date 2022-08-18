import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000123",
        alignItems: "flex-start",
        padding: 10,
        paddingTop: 30,
    },

    eventName: {
        fontSize: 30,
        color: "#fff",
    },

    eventDate: {
        fontSize: 16,
        color: "#6d6d6d",
    },

    input: {
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
        backgroundColor: "#7de80f",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        fontSize: 25,
        color: "#fff",
        textAlign: "center",
    },

    containerForm: {
        width: "100%",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 30,
    },

    listEmptyText: {
        textAlign: "center",
        fontSize: 20,
        color: "#fff",
    },
})
