import React, { Component } from 'react';



export default class SearchBar extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Item>
                        <Input placeholder="Search here" />
                    </Item>
                </Content>
            </Container>

        );
    }
}