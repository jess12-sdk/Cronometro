import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#221D41',
        justifyContent: 'center'
      },
      button: {
        backgroundColor: '#221D41',
        marginHorizontal: 15,
        height: 40,
        justifyContent: 'center',
        width: 75,
        alignItems: 'center',
        borderRadius: 10
      },
      buttonContainer:{
        flexDirection: 'row',
        padding: 20
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold'
      },
      container_0:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
      },
      container_1:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 80,
        backgroundColor: '#551A8B',
        margin: 10
      },
      container_2:{
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        margin: 10
      },
      counterText:{
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold'
      },
      footer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#000',
        opacity: 0.4,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: 20
      },
      footerText: {
        color: '#fff'
      },
      img:{
        height: 150,
        width: 150
      },
      textHora:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
      },
      txt:{
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold'
      }
});