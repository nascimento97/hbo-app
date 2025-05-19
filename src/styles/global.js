import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonBlue: {
    backgroundColor: '#2196F3',
  },
  input: {
    height: 40,
    width: '100%',
    maxWidth: 300,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginVertical: 5,
  },
  radioGroup: {
    marginVertical: 10,
  },
  radioLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  table: {
    width: '100%',
    maxWidth: 500,
    marginVertical: 20,
  },
  tableRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableCell: {
    flex: 1,
    padding: 8,
  borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  tableCellFirst: {
    fontWeight: 'bold',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  registroContainer: {
    marginBottom: 30,
    width: '100%',
    maxWidth: 500,
  },
});