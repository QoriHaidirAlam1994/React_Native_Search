import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions
} from "react-native";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
  Icon,
  Footer,
  FooterTab,
  Button,
  Card,
  Thumbnail
} from "native-base";
import { connect } from "react-redux";

import { allGalerys } from "./actions";
class GaleryList extends Component {
  state = { selected: (new Map(): Map<string, boolean>) };

  getData = () => {
    this.props.dispatch(allGalerys());
  };

  componentDidMount() {
    this.getData();
  }

  _keyExtractor = (item, index) => item;

  _renderItem = ({ item }) => (
    <Card>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("HomeList")}
      >
        <Thumbnail
          style={{
            height: Dimensions.get("screen").height * 0.15,
            width: Dimensions.get("screen").width * 0.25
          }}
          square
          source={{ uri: item }}
        />
      </TouchableOpacity>
    </Card>
  );

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Galery</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <FlatList
            data={this.props.galerys.results.message}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            refreshing={this.props.galerys.isLoading}
            onRefresh={this.getData}
            numColumns={4}
          />
        </Content>

        <Footer>
          <FooterTab style={styles.white}>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate("HomeList")}
            >
              <Icon style={styles.black} name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon style={styles.orange} name="apps" />
              <Text>Galery</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  galerys: state.galerysReducer
});

export default connect(mapStateToProps)(GaleryList);

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
