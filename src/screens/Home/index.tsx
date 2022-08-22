import { useEffect, useState } from "react"
import {
    Alert,
    FlatList,
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
    const [participants, setParticipants] = useState<ParticipantType[]>([])
    const [participantName, setParticipantName] = useState("")

    const allParticipants = () => {
        setParticipants([{ id: "0", name: "Higor" }])
    }

    const handleParticipantAdd = () => {
        participants.forEach((participant) => {
            if (participant.name.includes(participantName)) {
                return Alert.alert(
                    "Participante existe",
                    "Já existe um participante na lista com esse nome."
                )
            }
        })

        setParticipants((prevState) => [
            ...prevState,
            { id: `${prevState.length + 1}`, name: participantName },
        ])

        setParticipantName("")
    }

    const handleParticipantRemove = (name: string) => {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => {
                    setParticipants((prevState) =>
                        prevState.filter(
                            (participant) => participant.name !== name
                        )
                    )
                },
            },

            {
                text: "Não",
                style: "cancel",
            },
        ])
    }

    useEffect(() => {
        allParticipants()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 Novembro de 2022</Text>

            <View style={styles.containerForm}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#000123"
                    value={participantName}
                    onChangeText={setParticipantName}
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
