import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 50,
    marginEnd: 20,
    marginTop: 8,
  },
  title: {
    color: '#000',
    fontSize: 14,
    lineHeight: 30,
  },
});

export default styles;
