
import React, { Component,  } from 'react';
import { StyleSheet, Animated,View,Text,Alert }from 'react-native';
import PropTypes, { element } from 'prop-types' ;
import {ThemeProvider, Toolbar,COLOR, } from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

class ToolbarExample extends Component {

    onSearchClosed = ()=>{
        Alert.alert(
            'on Search close',
            'My Alert Msg',
            [
              {text: 'NEUTRAL', onPress: () => console.log(' NEUTRAL pressed')},
              {text: 'NEGATIVE', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'POSITIVE', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    }
    onSearchPressed = ()=>{
        Alert.alert(
            'on Search Pressed',
            'My Alert Msg',
            [
              {text: 'NEUTRAL', onPress: () => console.log(' NEUTRAL pressed')},
              {text: 'NEGATIVE', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'POSITIVE', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    }
    onRightElementPress = (indexObject)=>{
        Alert.alert(
            " Handling onRightElementPress ",
             indexObject.action +"   "+ indexObject.index,
            [
              {text: 'NEUTRAL', onPress: () => console.log(' NEUTRAL pressed')},
              {text: 'NEGATIVE', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'POSITIVE', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    }
      render() { 
        return (
            <View style={styles.container}>
            <View style={styles.toolbar}>
            <ThemeProvider uiTheme={uiTheme}>
                <Toolbar
                    uiTheme={uiTheme}
                    leftElement="menu"
                    centerElement="Searchable"
                    searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    onSearchClosed:this.onSearchClosed,
                    onSearchPressed:this.onSearchPressed
                    }}
                    rightElement={{
                        actions: ['edit'],
                        menu: { labels: ['Item 1', 'Item 2'] },
                    }}
                    onRightElementPress={(e) => {
                        console.log( e.action +"   "+ e.index);
                        this.onRightElementPress(e)
                    }
                    }
                    />
            </ThemeProvider>
            </View>
            </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    toolbar:{
        flex:8,
    }
});
export default ToolbarExample;