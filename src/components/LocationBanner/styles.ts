import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1976D2',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    color: '#EDF6FF',
    fontSize: 24,
    lineHeight: 30,
  },
  button: {
    backgroundColor: '#000000',
    marginTop: 30,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    maxWidth: 130,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowRadius: 0.3,
    elevation: 34,
  },
  buttonText: {
    color: '#EDF6FF',
  },
});

export default styles;
