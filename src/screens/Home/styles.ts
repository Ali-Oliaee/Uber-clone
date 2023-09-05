import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 40,
  },
  icon: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: -10,
    },
    elevation: 12,
    shadowOpacity: 1,
    shadowRadius: 1,
    marginBottom: 10,
  },
  iconButton: {
    padding: 8,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapButton: {
    marginVertical: 40,
    backgroundColor: '#2B2B2B',
    alignSelf: 'center',
    width: '92%',
    paddingVertical: 14,
    justifyContent: 'center',
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  mapButtonText: {
    color: '#EDF6FF',
    fontSize: 18,
  },
  recentContainer: {
    paddingHorizontal: 20,
  },
  recentTitle: {
    fontWeight: 'bold',
    color: '#381B1B',
    fontSize: 18,
  },
});

export default styles;
