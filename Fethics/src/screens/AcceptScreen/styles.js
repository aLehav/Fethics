import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: 'rgba(172, 172, 172, 0.8)',
        width:'70%', 
        padding:10,
        alignItems: "center",
        justifyContent: 'center',
        margin: 10
    },
    buttonText: {
        fontSize: 20,
        color: '#333333',
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 30,
        color: '#333333',
    },
    logo: {
        flex: 1,
        width: 300,
        height: 90,
        resizeMode: 'contain',
        margin: 10,
        alignSelf: "center",
    },
    greyContainer: {
        width: 'auto',
        padding: 10,
        height: 'auto',
        marginBottom: 10,
        backgroundColor: 'rgba(172, 172, 172, 0.8)',
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 5
    },
    text: {
        color: "#006600", 
        fontSize: 35,
    },
    description: {
        fontSize: 10, 
        textAlign: "left", 
        paddingLeft: 10,
    },
    class: {
        fontSize: 30,
        paddingLeft: 10,
        textAlign: "left",
        textDecorationLine: "underline",
    },
    assignment: {
        fontSize: 25,
        paddingLeft: 10,
        textAlign: "left",
    },
    price: {
        fontSize: 20,
        textAlign: "right",
        margin: "auto",
        color: "#565656",
    },
    smallButton: {
        margin: "auto",
        width: "45%",
        marginTop: 10,
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 10,
    },
    acceptBox: {
        margin: "auto",
        marginVertical: 10,
        width: "80%",
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: "#C4C4C4",
        color: "#20232a",
        textAlign: "center",
        fontWeight: "bold",
    },
})