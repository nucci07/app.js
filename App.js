import {text, button, view, StyleSheet} from 'react-native'
import react from 'react'

const App = () => {
    return (
        <View>
            <text>Olá</text>
            <button title='Clique aqui'></button>
        </View>
    );
}
const Styles = StyleSheet.create({
    text:{
        color: 'red',
        fontsize: 18,
    }
})
export default App;
