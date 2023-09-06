import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B82F6',
    borderRadius: 10,
  },
  content: {},
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: '#fff',
    fontSize: 14,
  },
  closeButton: {
    backgroundColor: 'rgba(257,257,257,0.3)',
    borderRadius: 8,
  },
});

export default styles;
