import {StyleSheet,Dimensions} from "react-native";

const widthScreen = Dimensions.get('window').width; 
const heightScreen = Dimensions.get('window').height;
const css = StyleSheet.create({

    // ALL SCREENS STYLE------------------------------------------------------------------------------------------
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
      },
    containerCentralized: {
        
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
      },
    containerPadded:{
        width: widthScreen,
        height: heightScreen,
        // backgroundColor: '#ff2300',
    },
    centralized:{
        alignItems: 'center',
    },

    // MAIN TEXTS

    h1: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    h2: {
        fontSize: 25,
        fontWeight: 'normal',
    },
    h2b: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    h3: {
        fontSize: 20,
        fontWeight: 'normal',
    },
    h3b: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    h3w: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'normal',
    },
    h4: {
        fontSize: 17,
        fontWeight: 'normal',
    },
    h4c: {
        fontSize: 17,
        fontWeight: 'normal',
        textAlign: 'center',
    },
    // LOGIN SCREEN     ------------------------------------------------------------------------------------------
    loginHeader:{
        flexDirection: "column",
        // backgroundColor: '#ff2300',
        marginTop: heightScreen * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    registerHeader:{
        flexDirection: "column",
        // backgroundColor: '#ff2300',
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // LOGIN AND CADASTRO INPUTS
    inputNome:{
        width: '100%',
        marginTop: 20,  
        padding:15,
        fontSize: 17,
        fontWeight: 'normal',
        borderRadius: 4,
        backgroundColor: '#e6e6fa',
        maxHeight: 180,
    },

    loginBody:{
        marginTop: 20,
        alignItems: 'center',
        width: widthScreen * .8,
        // backgroundColor: '#2f3d4c',
        
    },
    
    inputUserID:{
        width: '100%',
        marginTop: 20,  
        padding:15,
        fontSize: 17,
        fontWeight: 'normal',
        borderRadius: 4,
        backgroundColor: '#e6e6fa',
        maxHeight: 180,
    },
    inputEmail:{
        width: '100%',
        marginTop: 20,  
        padding:15,
        fontSize: 17,
        fontWeight: 'normal',
        borderRadius: 4,
        backgroundColor: '#e6e6fa',
        maxHeight: 180,
    },
    inputPassw:{
        width: '100%',
        marginTop: 20,  
        padding:15,
        fontSize: 17,
        fontWeight: 'normal',
        borderRadius: 4,
        backgroundColor: '#e6e6fa',
        maxHeight: 180,
    },
    loginButton: {
        width: widthScreen * .7,
        height:50,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#031a1a",
        borderRadius:5,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
    }, 
    loginButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'normal',
    },

    // HOME SCREEN      ------------------------------------------------------------------------------------------

    // HOME TILES
    tiles: {
        width:110,
        height:110,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#000",
        borderRadius:10,
        padding: 10,
        margin: 5,
    }, 
    // HOME HEADER AND NAME
    homeHeader:{
        // backgroundColor: '#ff2300',
        marginTop: heightScreen * 0.06,
        alignItems: 'center',
        
    },
    homeHeaderTitleBold: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    homeHeaderTitle: {
        fontSize: 28,
        fontWeight: 'normal',
    },

    buttonTextHomeHeader: {
        alignItems: "center",
        // backgroundColor: '#e6e6fa',
        marginTop: 30,
      
    },


    // HEADER SCREEN       ------------------------------------------------------------------------------------------

    header: {
        alignItems: 'center',
        flexDirection: "row",
    },  

    // HEADER BUTTONS STYLE
    
    buttonTextHeader: {
        // backgroundColor: '#ff2300',
        width:110,
        height:40,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius:10,
        padding: 10,
        marginRight:15,
      
    },
    secondButtonTextHeader: {
        // backgroundColor: '#ff2300',
        width:80,
        height:40,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius:10,
        padding: 10,
        marginRight:5,
      
    },
    buttonDeletenoteHeader: {
        width:30,
        height:30,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius:10,
        padding: 10,
        marginRight:5,
        
  
    },  
    buttonAddnoteHeader: {
        width:30,
        height:30,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius:10,
        padding: 10,
        marginRight:15,
        
  
    },  
    imageButtonHeader:{
        width: 30,
        height: 30,
    },

    // NOTE LISTING         ------------------------------------------------------------------------------------------

    noteList: {
        backgroundColor: '#fff',
        padding: 10,
        height: 130,
        width: widthScreen,
        borderBottomColor:'#aeaeae',
        borderBottomWidth:1,
    }, 


    // NOTE TAKING          ------------------------------------------------------------------------------------------

    inputTitle:{
        padding:10,
        width: widthScreen,
        fontSize: 26,
        fontWeight: 'bold',
        borderRadius: 4,
        // backgroundColor: '#ffe2df',
        maxHeight: 180,
    },
    inputDesc:{
        padding:10,
        width: widthScreen,
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 4,
        // backgroundColor: '#ffe2df',
        maxHeight: 180,
    },
    inputBody:{
        marginTop: 5,
        padding:10,
        width: widthScreen,
        fontSize: 15,
        maxHeight: 1000000, 
        borderRadius: 4,
        // backgroundColor: '#e6e6fa',
        textAlignVertical: 'top',
    },  
    inputStatus:{
        marginTop: 0,
        padding:10,
        width: widthScreen,
        fontSize: 20,
        fontWeight: 'bold', 
        borderRadius: 4,
        // backgroundColor: '#e6e6fa',
        textAlignVertical: 'top',
        color:'#ef1008',
    },
    
    // EXPLORE LISTING

    exploreList: {
        backgroundColor: '#fff',
        padding: 10,
        height: 140,
        width: widthScreen,
        borderBottomColor:'#aeaeae',
        borderBottomWidth:1,
    }, 
    profileNoteList:{
        borderRadius: 5,
        backgroundColor: '#c3c3c3',
        padding: 10,
        height: 120,
        width: widthScreen * 0.97,
        marginBottom: 4,
        marginTop:4,
    },
    inputPublisher:{
        marginTop: 0,
        padding:10,
        width: widthScreen,
        fontSize: 18,
        fontWeight: 'bold', 
        borderRadius: 4,
        color: 'grey',
        // backgroundColor: '#e6e6fa',
        textAlignVertical: 'top',
    },

    buttonSavenoteHeader: {
        width:30,
        height:30,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius:10,
        padding: 10,
        marginRight:10,
    },  

    // PROFILE          ------------------------------------------------------------------------------------------

    profileMain:{
        
        padding: 8,
    },
    profileBody:{
        padding: 10,
        
    },
    profileBio: {
        width: '100%',
        // backgroundColor: '#ff2300',
        marginBottom:10,
    },  
});
export {css};