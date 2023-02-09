import { View, Text, StyleSheet } from 'react-native'

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginTop: 4,
        marginBottom: 10,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
      },
      subtitle: {
        fontSize: 18,
        fontWeight:'bold',
        margin: 8,
        textAlign: 'center',
        color: '#e2b497'
      },
})