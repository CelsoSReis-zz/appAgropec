import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.viewTela}>
        <View style={styles.viewTitulo}>
          <Text style={styles.tituloApp}>Gestão Agropecuaria</Text>
        </View>
        <View style={styles.viewImg}>
          <Image
            source={{
              uri:
                'https://lh6.googleusercontent.com/QwtCMolz-9ysdE01xJBJ-4hnMryLB2PFAwsKFw4LJsnvzfYf4nXscvE4274DucdpPvpx0ME76Q=w16383',
            }}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: 160, height: 50}}
          />
        </View>
        <View style={styles.viewRodape}>
          <Text style={styles.textrodape}> Desenvolvido por Celso Reis</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewTela: {
    flex: 1,
    padding: 20,
  },
  viewTitulo: {
    flex: 1,
  },
  tituloApp: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dcdcdc',

  },
  viewRodape: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textrodape: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});
export default App;
