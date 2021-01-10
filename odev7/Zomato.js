import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Zomato extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            restaurant: null
        }
        this.state = {
            menu: null
        }
    }



    componentDidMount() {

        fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=16615034"
            , {
                method: 'GET',
                headers: {
                    "user-key": "ec3406142acd9f6785a7fb262bcb2b41"
                }
            })
            .then(r => {
                return r.json();
            })
            .then(res => {
                this.setState({ restaurant: res });
            }).catch(e => {
                console.warn("error zomato : ", e);
            });


            fetch("https://developers.zomato.com/api/v2.1/dailymenu?res_id=16615034"
            , {
                method: 'GET',
                headers: {
                    "user-key": "ec3406142acd9f6785a7fb262bcb2b41"
                }
            })
            .then(r => {
                return r.json();
            })
            .then(res => {
                this.setState({ menu: res });
            }).catch(e => {
                console.warn("error zomato : ", e);
            });
        
    }



   

    render() {

        

        if (!this.state.restaurant) {
            return null;
        }


        if (!this.state.menu) {
            return null;
        }

        return (
            <View>
                <Text>ID : {this.state.restaurant.id}</Text>
                <Text>---------------------------------------------------------------------------------------------</Text>
                <Text>NAME : {this.state.restaurant.name}</Text>
                <Text>---------------------------------------------------------------------------------------------</Text>
                <Text>HİGHLİGHTS : {this.state.restaurant.highlights}</Text>
                <Text>---------------------------------------------------------------------------------------------</Text>
                <Text>URL : {this.state.restaurant.url}</Text>
                <Text>---------------------------------------------------------------------------------------------</Text>
                <Text>LOCALİTY : {this.state.restaurant.location.locality}</Text>
                <Text>---------------------------------------------------------------------------------------------</Text>
                <Text>ADDRESS : {this.state.restaurant.location.address}</Text>
                <Text>---------------------------------------------------------------------------------------------</Text>
                <Text>MENU : {this.state.menu.message}</Text>
                
            </View>
        );
    }
}