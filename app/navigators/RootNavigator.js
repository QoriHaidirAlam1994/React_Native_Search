import { StackNavigator } from 'react-navigation';

import
HomeList
  from "../home/screens/list";
import GaleryList from "../galery/list";
// import { ContactsList, ContactsCreate, ContactsDetail } from '../contacts/screens'

const RootNavigator = StackNavigator({
  HomeList: {
    screen: HomeList,
    navigationOptions: {
      header: null
    }
  },
  GaleryList: {
    screen: GaleryList,
    navigationOptions: {
      header: null
    }
  }
  // ContactsList: {
  //   screen: ContactsList,
  //   navigationOptions: {
  //     title: "Contacts List"
  //   }
  // }
  // ContactsCreate: {
  //   screen: ContactsCreate,
  //   navigationOptions: {
  //     title: "Create Contact"
  //   }
  // },
  // ContactsDetail: {
  //   screen: ContactsDetail,
  //   navigationOptions: {
  //     title: "Detail Contact"
  //   }
  // }
});

export default RootNavigator
