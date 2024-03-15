import { StyleSheet } from 'react-native';

const darkPurpleColor='#2B0928';
const purpleColor='#3C2348';
const orangeColor='#F24928';
const redColor='#D32714';
const tanColor='#FFC89B';

const backgroundColor='#FFF1E6';
const shadowColor='#000';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  coloredContainer: {
    backgroundColor: backgroundColor,
  },
  reviewPreviewContainer: {
    width: '80%',
    height: 270,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: tanColor,
    borderRadius: 25,
  },
  previewTagContainer:{
    width: "40%",
    height: 70,
    backgroundColor: purpleColor,
    borderRadius: 25,
    alignSelf: 'flex-end',
    position: 'absolute',
    justifyContent: 'center',
  },
  previewTextColumn:{
    width: "35%",
    height: '50%',
    borderRadius: 25,
    alignSelf: 'flex-start',
    margin: 10,
    
  },
  previewColumnTitle:{
    textAlign: 'right',
    left: 32,
  },
  previewColumnText:{
    fontSize: 20,
    fontWeight: '300',
    color: darkPurpleColor,
    textAlign: 'right',
  },
  previewPillTitle: {
    fontSize: 20,
    paddingLeft: 18,
    paddingRight: 18,
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
    color: orangeColor,
    bottom: 20,
  },
  usernameTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: darkPurpleColor,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
  textShadowOffset: { width: -1, height: 3 },
  textShadowRadius: 10,
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
    shadowColor: shadowColor,
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
    borderColor: orangeColor,
    borderWidth: 5,
    borderRadius: 50,
    marginLeft: 295-35-20,
  },
  pillShape:{
    height: 40,
    backgroundColor: orangeColor,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  dropDown:{
    flex: .5,
    height: 50,
    backgroundColor: purpleColor,
  },
  dropDownTitle: {
    alignSelf: 'flex-start'
  },
  reviewButton:{
    flex: .35,
    height: 50,
    backgroundColor: redColor,
  },
  infoPill:{
    backgroundColor: tanColor,
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
  smallerImage:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 170,
    height: 170,
    margin: 10,
  },
  addShadow:{
    shadowColor: shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  starContainer: { 
    width: 50,
    height: 50,
    justifyContent: "center",
  },
starLine: {
  width: 40,
  height: 8,
  borderRadius: 50,
  backgroundColor: orangeColor,
  position: "absolute",
  alignSelf: "center",
  justifyContent: "center",
},
circleButton:{
  width: 70,
  height: 70,
  borderRadius: 50,
  backgroundColor: 'white',
},
arrowButtonLine:{
  top: 20,
  width: 45,
  height: 20,
  borderRadius: 50,
  backgroundColor: orangeColor,
  position: "absolute",
  alignSelf: "center",
  justifyContent: "center",
},
xButtonLine:{
  top: 20,
  width: 50,
  height: 20,
  borderRadius: 50,
  backgroundColor: orangeColor,
  position: "absolute",
  alignSelf: "center",
  justifyContent: "center",
}
});
