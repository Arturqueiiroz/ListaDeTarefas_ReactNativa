import { TouchableOpacity, View, StyleSheet, FlatList, Text} from 'react-native';

export default function TodoScreen() {
    
    // lista fixa
    const taskList = [
        {id:'1', text:'Estudar React Native', completed: false},
        {id:'2', text:'Academia ás 18h', completed: true},
        {id:'3', text:'Ler um livro', completed: true},
    ];
    // função apenas visual para renderizar cada item
    const renderTodoItem = (item) => (
        <View style={styles.taskContainer}>
            <TouchableOpacity style={styles.taskTextContainer}>
                <View style={styles.cicle}>
                    <Text style={styles.checkMark}></Text>
                </View>
                <Text style={styles.taskText}>Teste</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <View>
            <FlatList
                data={taskList}
                renderItem={renderTodoItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
)
}

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 2,
    },
    taskTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    cicle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#0066cc',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12
    },
    taskText: {
        fontSize: 16,
    }
})