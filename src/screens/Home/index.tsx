import {
    FlatList,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"
import Participant from "../../components/Participant"
import { styles } from "./stles"

type ParticipantType = {
    id: string
    name: string
}

const Home = () => {
    const participants: ParticipantType[] = [
        { id: "0", name: "Higão" },
        { id: "1", name: "Vini" },
        { id: "2", name: "Diego" },
        { id: "3", name: "Biro" },
        { id: "4", name: "Biro" },
        { id: "5", name: "Biro" },
        { id: "6", name: "Biro" },
        { id: "7", name: "Biro" },
        { id: "8", name: "Biro" },
        { id: "9", name: "Biro" },
        { id: "10", name: "Biro" },
    ]

    const handleParticipantAdd = () => {
        console.log("Clique no button Add")
    }

    const handleParticipantRemove = (name: string) => {
        console.log("Remove", name)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 Novembro de 2022</Text>

            <View style={styles.containerForm}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#000123"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                style={{ width: "100%" }}
                data={participants}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento, Adicione participantes a sua
                        lista!
                    </Text>
                )}
                renderItem={({ item }) => (
                    <Participant
                        key={item.id}
                        name={item.name}
                        onRemove={handleParticipantRemove}
                    />
                )}
            />
        </View>
    )
}

export default Home
