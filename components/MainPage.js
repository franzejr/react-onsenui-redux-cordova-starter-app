import React from 'react';

import {
  Page
} from 'react-onsenui';

import GoogleMapsWidget from './GoogleMapsWidget';
import NavBar from './NavBar';

const MainPage = ({navigator}) => (
  <Page renderToolbar={() => <NavBar title='Onsen2 Weather' navigator={navigator} />}>
    <GoogleMapsWidget />
  </Page>
);

export default MainPage;
