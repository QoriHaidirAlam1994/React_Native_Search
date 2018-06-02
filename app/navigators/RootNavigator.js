import { StackNavigator } from 'react-navigation';

import { ContactsList, ContactsCreate, ContactsDetail } from '../contacts/screens'
import { ProductsList, ProductsCreate, productsDetail } from '../products/screens'

const RootNavigator = StackNavigator({
  ContactsList: {
    screen: ContactsList,
    navigationOptions: {
      title: 'Contacts List'
    }
  },
  ContactsCreate: {
    screen: ContactsCreate,
    navigationOptions: {
      title: 'Create Contact'
    }
  },
  ContactsDetail: {
    screen: ContactsDetail,
    navigationOptions: {
      title: 'Detail Contact'
    }
  },
  ProductsList: {
    screen: ProductsList,
    navigationOptions: {
      title: 'Products List'
    }
  },
})

export default RootNavigator
