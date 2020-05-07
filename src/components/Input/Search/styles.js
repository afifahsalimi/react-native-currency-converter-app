import { StyleSheet } from 'react-native'
import Colors from '@utils/colors'

module.exports = StyleSheet.create({
  shadow: {
    elevation: 2,
    shadowOffset: { width: 4.5, height: 4.5 },
    shadowColor: Colors.shadowBlue,
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  searchContainer: { 
    borderRadius: 20, 
    backgroundColor: Colors.lightblue,
    paddingHorizontal: 12, 
    height: 40,
    alignItems: 'center',
    flexDirection: 'row', 
    marginVertical: 12, 
  },
  searchTInput: { 
    marginLeft: 12, 
    color: Colors.blue,
    flex: 1,
    fontSize: 14,
  },

})
