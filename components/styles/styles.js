import { StyleSheet } from 'react-native';

const darkPurpleColor='#2B0928';
const purpleColor='#3C2348';
const redColor='#F24928';
const tanColor='#FFC89B';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    right: 20,
    fontSize: 80,
    fontWeight: 'bold',
    color: darkPurpleColor,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
  textShadowOffset: { width: -1, height: 3 },
  textShadowRadius: 10,
  },
  secondTitle: {
    paddingLeft: 175,
    color: redColor,
    bottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  searchBar: {
    height: 52,
    width: 295,
    borderColor: purpleColor,
    borderWidth: 3,
    marginTop: 20,
    borderRadius: 50,
    position: "absolute",
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  },
  circle: {
    height: 30,
    width: 30,
    borderColor: redColor,
    borderWidth: 5,
    borderRadius: 50,
    marginLeft: 295-35-20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
    
  },
  box: {
    width: 180,
    height: 180,
    backgroundColor: tanColor,
    borderRadius: 35,
    
  },
  innerBox:{
    width: 180,
    height: 80,
    backgroundColor: purpleColor,
    borderRadius: 35,
    
    position: 'absolute',
  },
  boxTextWrapper:{
    top: 10,
    left: 25,
    flex: 1,
    position: 'absolute',
  },
  innerBoxText:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  innerBoxTextBottom:{
    left: 25
  },
  image: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 250,
    height: 250,
    margin: 10,
  },
});
