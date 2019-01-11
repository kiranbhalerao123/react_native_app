import React from 'react'
import { Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomIcon from './CustomIcon'

class CustomHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Icon
            name='menu'
            size={26}
            color='#7f7f7f'
            onPress={() => this.props._toggleDrawer()}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>SICCA</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.batteryText}>0%</Text>
          <Icon name='battery-charging-full' size={26} />
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingRight: 14,
    paddingLeft: 14
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
    // backgroundColor: 'pink'
  },
  titleContainer: {
    height: 70,
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    // backgroundColor: 'pink',
    paddingLeft: 20
  },
  batteryText: {
    fontSize: 16,
    fontWeight: 'light'
  }
}

export default CustomHeader