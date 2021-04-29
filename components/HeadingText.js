import React from 'react';
import { Text, StyleSheet } from "react-native";

const HeadingText= props => {
    return <Text style={{...styles.text, ...props.styles}}>{props.children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans',
        fontSize: 22
    }
});

export default HeadingText;
