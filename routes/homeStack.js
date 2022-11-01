import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import  HomeScreen  from '../screens/home';
import  InputData  from '../screens/inputData';
import ShowData from '../screens/showData';
import QuestionOne from '../screens/questionOne'
import QuestionTwo from '../screens/questionTwo'
import QuestionThree from '../screens/questionThree'

const screens = {
    //need key value pairs for each particular screen
    Home: {
        screen: HomeScreen
        //default; start of the stack 
    },
    InputData: {
        screen: InputData
    },
    showData: {
        screen: ShowData
    },
    questionOne: {
        screen: QuestionOne
    },
    questionTwo: {
        screen: QuestionTwo
    },
    questionThree: {
        screen: QuestionThree
    },

}
//configuring of screens is done


//this is the function that is used to create a new stack navigator
// now we need to send in an object into this function, to denote what
//screens we want 
const HomeStack = createStackNavigator(screens);
//we still have to wrap this in an app container

export default createAppContainer(HomeStack);
//returns a component that we can render to App.js
//contains all information into the navagation stack