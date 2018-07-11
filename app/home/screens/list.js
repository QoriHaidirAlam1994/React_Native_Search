import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
  Item,
  Input,
  Icon,
  List,
  ListItem,
  Footer,
  FooterTab,
  Button
} from "native-base";
export default class HomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Video 1",
          url: "https://mystorage/video1.jpeg"
        },
        {
          title: "Video 2",
          url: "https://mystorage/video2.jpeg"
        },
        {
          title: "Video 3",
          url: "https://mystorage/video3.jpeg"
        }
      ],
      search: ""
    };
  }

  updateSearch(text) {
    this.setState({ search: text });
  }

  render() {
    const filteredSearch = this.state.data.filter(filter => {
      return filter.title.indexOf(this.state.search) !== -1;
    });
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Video</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Item>
            <Icon active name="search" />
            <Input
              placeholder="Search"
              onChangeText={text => {
                this.updateSearch(text);
              }}
            />
          </Item>
          <List>
            {filteredSearch.map((items, i) => {
              return (
                <ListItem key={i}>
                  <Body>
                    <Text>{items.title}</Text>
                    <Text>{items.url}</Text>
                  </Body>
                </ListItem>
              );
            })}
          </List>
        </Content>

        <Footer>
          <FooterTab style={styles.white}>
            <Button vertical>
              <Icon style={styles.orange} name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate("GaleryList")}
            >
              <Icon style={styles.black} name="apps" />
              <Text>Galery</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  judul: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30
  },
  black: {
    color: "black",
    textAlign: "center"
  },
  white: {
    backgroundColor: "#FFF"
  },
  orange: {
    color: "#ffa500"
  },
  info: {
    flex: 1,
    flexDirection: "column"
  }
});
