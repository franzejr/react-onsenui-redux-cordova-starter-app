import React from 'react';

import {
  Page
} from 'react-onsenui';

import NavBar from './NavBar';
import Geolocation from './Geolocation';
import LocationList from '../containers/LocationList';
import AddLocation from '../containers/AddLocation';

const MainPage = ({navigator}) => (
  <Page renderToolbar={() => <NavBar title='Onsen Weather' navigator={navigator} />}>
    <Geolocation />
  </Page>
);

export default MainPage;
