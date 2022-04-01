import React from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native'

import Texto from './Texto';

export default function Botao({ children, style }){
    return <>
        <TouchableOpacity style = {[style, estilos.botao]}>
        <Texto style={[style, estilos.textoBotao]}>{ children }</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})