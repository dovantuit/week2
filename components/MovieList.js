import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

export default class MovieList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={this.props.movies}
                keyExtractor={(movie) => movie.id}
                onRefresh = {() => this.props.onRefresh}
                refreshing = {this.props.refreshing}
                renderItem={({ item }) => {
                    let baseURL = 'https://image.tmdb.org/t/p/w342';
                    return (
                        <View style={{justifyContent: 'center',
                        alignItems: 'center',}}>
                            <Image style = {{ width: 400, height: 300,}} 
                                    source = {{uri: baseURL + item.poster_path}}
                                    indicator={ProgressBar} 
                                    />
                            <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                            <Text>{item.overview}</Text>
                        </View>
                    );
                }}
            />
        );
    }
} 
