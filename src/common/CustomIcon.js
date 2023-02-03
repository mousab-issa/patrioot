import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import Constants from './Constants';


import ForkSpoon from '../../assets/svg/Fork-Spoon.svg';
import Home from '../../assets/svg/Home.svg';
import Basket from '../../assets/svg/Basket.svg';
import Coffee from '../../assets/svg/Coffee.svg';
import Med from '../../assets/svg/Med.svg';
import Promos from '../../assets/svg/Promos.svg';
import Hand from '../../assets/svg/Hand.svg';
import Person from '../../assets/svg/Person.svg';
import Notification from '../../assets/svg/Notification.svg';
import Driver from '../../assets/svg/Driver.svg';
import Trash from '../../assets/svg/trash.svg';
import Edit from '../../assets/svg/edit.svg';
import Ellipse from '../../assets/svg/ellipse.svg';
import StarFeedback from '../../assets/svg/StarFeedback.svg';
import RightPointer from '../../assets/svg/Right-Pointer.svg';
import LeftPointer from '../../assets/svg/Left-Pointer.svg';
import WhiteLeftPointer from '../../assets/svg/white_send_rtl.svg';
import FileDocument from '../../assets/svg/file-document.svg';

import NameIcon from '../../assets/svg/NameIcon.svg';
import CallIcon from '../../assets/svg/CallIcon.svg';
import EmailIcon from '../../assets/svg/EmailIcon.svg';
import InviteIcon from '../../assets/svg/InviteIcon.svg';
import Globe from '../../assets/svg/Globe.svg';
import Alert from '../../assets/svg/Alert.svg';
import Privacy from '../../assets/svg/Privacy.svg';
import Terms from '../../assets/svg/Terms.svg';
import StarIcon from '../../assets/svg/StarIcon.svg';
import Car from '../../assets/svg/Car.svg';
import Check from '../../assets/svg/Check.svg';
import Search from '../../assets/svg/search.svg';
import RedPin from '../../assets/svg/RedPin.svg';
import GreenPin from '../../assets/svg/GreenPin.svg';

import You from '../../assets/svg/You.svg'
import Store from '../../assets/svg/Store.svg'
import WhiteForwardArrow from '../../assets/svg/white_forward_arrow.svg';
import WelcomeBG from '../../assets/svg/welcome_bg.svg';
import GreenHand from '../../assets/svg/green_hand.svg';
import Bag from '../../assets/svg/Bag.svg';
import WhiteForwardArrowRTL from '../../assets/svg/white_arrow_rtl.svg';
import PatriootLogoWhite from '../../assets/svg/patrioot_logo_white.svg';
import PatriootLogoGreen from '../../assets/svg/green_logo_splash.svg';
import PatriootWhite from '../../assets/svg/PatriootWhite.svg';
import BlackArrow from '../../assets/svg/black_arrow.svg';
import BlackArrowRTL from '../../assets/svg/black_arrow_rtl.svg';
import FatBlackArrow from '../../assets/svg/fat_black_arrow.svg';
import FatBlackArrowRTL from '../../assets/svg/fat_black_arrow_rtl.svg';
import FatGreenArrow from '../../assets/svg/fat_green_arrow.svg';
import FatGreenArrowRTL from '../../assets/svg/fat_green_arrow_rtl.svg';
import GPSLocation from '../../assets/svg/gps_location.svg';
import ChevronRight from '../../assets/svg/chevron_right.svg';
import ChevronRightRTL from '../../assets/svg/chevron_right_rtl.svg';
import GreenLogo from '../../assets/svg/green_logo.svg';

import ChatTab from '../../assets/svg/chat_tab.svg';
import HomeTab from '../../assets/svg/home_tab.svg';
import PromosTab from '../../assets/svg/promos_tab.svg';
import EditLocation from '../../assets/svg/edit_location.svg';
import Location from '../../assets/svg/location.svg';
import TwinPins from '../../assets/svg/twin_pins.svg';
import PrivacyPolicy from '../../assets/svg/privacy_policy.svg';
import BlueDoubleTick from '../../assets/svg/blue_double_tick.svg';
import GrayDoubleTick from '../../assets/svg/gray_double_tick.svg';

import Calories from '../../assets/svg/calories.svg';
import Tag from '../../assets/svg/tag.svg';

import FinalDelivery from '../../assets/svg/FinalDelivery.svg';
import FinalPickup from '../../assets/svg/FinalPickup.svg';

const CustomIcon = ({ name, type, iconStyle }) => {
  if (name == 'home') {
    return (
      <Home
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f28}
        width={Constants.ResponsiveSize.f28}
      />
    );
  } else if (name == 'shopping-cart') {
    return (
      <Basket
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f25}
        width={Constants.ResponsiveSize.f25}
      />
    );
  } else if (name == 'coffee') {
    return (
      <Coffee
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f25}
        width={Constants.ResponsiveSize.f25}
      />
    );
  } else if (name == 'med') {
    return (
      <Med
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f25}
        width={Constants.ResponsiveSize.f25}
      />
    );
  } else if (name == 'fork') {
    return (
      <ForkSpoon
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f25}
        width={Constants.ResponsiveSize.f25}
      />
    );
  } else if (name == 'certificate') {
    return (
      <Promos
        style={{ color: 'white', marginLeft: Constants.ResponsiveSize.f5 }}
        height={Constants.ResponsiveSize.f28}
        width={Constants.ResponsiveSize.f28}
      />
    );
  } else if (name == 'hand') {
    return (
      <Hand
        style={{ color: 'white', marginLeft: Constants.ResponsiveSize.f5 }}
        height={Constants.ResponsiveSize.f38}
        width={Constants.ResponsiveSize.f38}
      />
    );
  } else if (name == 'person') {
    return (
      <Person
        style={{ color: 'white', marginLeft: Constants.ResponsiveSize.f5 }}
        height={Constants.ResponsiveSize.f35}
        width={Constants.ResponsiveSize.f35}
      />
    );
  } else if (name == 'notification') {
    return (
      <Notification
        style={{ color: 'white', marginRight: Constants.ResponsiveSize.f5 }}
        height={Constants.ResponsiveSize.f22}
        width={Constants.ResponsiveSize.f22}
      />
    );
  } else if (name == 'driver') {
    return (
      <Driver
        style={{ color: 'white', marginRight: Constants.ResponsiveSize.f5 }}
        height={100}
        width={100}
      />
    );
  } else if (name == 'white_forward_arrow') {
    return (
      <WhiteForwardArrow
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f16}
        width={Constants.ResponsiveSize.f16}
      />
    );
  } else if (name == 'nameIcon') {
    return (
      <NameIcon
        style={{ color: 'white', marginHorizontal: Constants.ResponsiveSize.f8 }}
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  } else if (name == 'callIcon') {
    return (
      <CallIcon
        style={{ color: 'white', marginHorizontal: Constants.ResponsiveSize.f8 }}
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  } else if (name == 'emailIcon') {
    return (
      <EmailIcon
        style={{ color: 'white', marginHorizontal: Constants.ResponsiveSize.f8 }}
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  } else if (name == 'inviteIcon') {
    return (
      <InviteIcon
        style={{ color: 'white', marginHorizontal: Constants.ResponsiveSize.f8 }}
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  } else if (name == 'globe') {
    return (
      <Globe
        style={{ color: 'white', marginHorizontal: Constants.ResponsiveSize.f8 }}
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  } else if (name == 'alert') {
    return (
      <Alert
        style={{ color: 'white', marginHorizontal: Constants.ResponsiveSize.f8 }}
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  } else if (name == 'privacy') {
    return (
      <Privacy
        style={{ color: 'white', marginHorizontal: Constants.ResponsiveSize.f8 }}
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  } else if (name == 'terms') {
    return (
      <Terms
        style={{ color: 'white', marginHorizontal: Constants.ResponsiveSize.f8 }}
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  } else if (name == 'starIcon') {
    return (
      <StarIcon
        style={{ color: 'white', marginHorizontal: Constants.ResponsiveSize.f8 }}
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  } else if (name == 'car') {
    return (
      <Car
        style={{ color: 'white', marginHorizontal: Constants.ResponsiveSize.f8 }}
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  } else if (name == 'check') {
    return (
      <Check
        style={{ color: 'white', marginHorizontal: Constants.ResponsiveSize.f8 }}
        height={Constants.ResponsiveSize.f17}
        width={Constants.ResponsiveSize.f17}
      />
    );
  } else if (name == 'search') {
    return (
      <Search
        style={{ color: 'white', marginHorizontal: Constants.ResponsiveSize.f8 }}
        height={Constants.ResponsiveSize.f18}
        width={Constants.ResponsiveSize.f18}
      />
    );
  } else if (name == 'bag') {
    return (
      <Bag
        style={{ color: 'white', marginHorizontal: Constants.ResponsiveSize.f15 }}
        height={Constants.ResponsiveSize.f25}
        width={Constants.ResponsiveSize.f25}
      />
    );
  } else if (name == 'WhiteForwardArrowRTL') {
    return (
      <WhiteForwardArrowRTL
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f18}
        width={Constants.ResponsiveSize.f18}
      />
    );
  } else if (name == 'PatriootLogoWhite') {
    return (
      <PatriootLogoWhite
        style={{ color: 'white' }}
        width={Constants.ResponsiveSize.screenWidth * 0.58}
      />
    );
  }
  else if (name == 'PatriootWhite') {
    return (
      <PatriootWhite
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20} />
    );
  }
  else if (name == 'PatriootLogoGreen') {
    return (
      <PatriootLogoGreen
        style={{ color: 'white' }}
        width={Constants.ResponsiveSize.screenWidth * 0.58}
      />
    );
  }
  else if (name == 'BlackArrow') {
    return (
      <BlackArrow
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f30}
        width={Constants.ResponsiveSize.f30}
      />
    );
  } else if (name == 'BlackArrowRTL') {
    return (
      <BlackArrowRTL
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f30}
        width={Constants.ResponsiveSize.f30}
      />
    );
  }
  else if (name == 'FatBlackArrow') {
    return (
      <FatBlackArrow
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f22}
        width={Constants.ResponsiveSize.f22}
      />
    );
  }
  else if (name == 'FatBlackArrowRTL') {
    return (
      <FatBlackArrowRTL
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f22}
        width={Constants.ResponsiveSize.f22}
      />
    );
  }
  else if (name == 'FatGreenArrow') {
    return (
      <FatGreenArrow
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f18}
        width={Constants.ResponsiveSize.f18}
      />
    );
  }
  else if (name == 'PrivacyPolicy') {
    return (
      <PrivacyPolicy
        style={{ color: 'white', marginRight: Constants.ResponsiveSize.f7, marginLeft: Constants.ResponsiveSize.f7, }}
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  }
  else if (name == 'FatGreenArrowRTL') {
    return (
      <FatGreenArrowRTL
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f18}
        width={Constants.ResponsiveSize.f18}
      />
    );
  }
  else if (name == 'TwinPins') {
    return (
      <TwinPins
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f19}
        width={Constants.ResponsiveSize.f23}
      />
    );
  }
  else if (name == 'GPSLocation') {
    return (
      <GPSLocation
        style={{ color: 'white' }}
        height={Constants.ResponsiveSize.f19}
        width={Constants.ResponsiveSize.f19}
      />
    );
  }
  else if (name == 'BlueDoubleTick') {
    return (
      <BlueDoubleTick
        style={{ color: 'white', marginRight: Constants.ResponsiveSize.f2 }}
        height={Constants.ResponsiveSize.f9}
        width={Constants.ResponsiveSize.f9}
      />
    );
  }
  else if (name == 'GrayDoubleTick') {
    return (
      <GrayDoubleTick
        style={{ color: 'white', marginRight: Constants.ResponsiveSize.f2 }}
        height={Constants.ResponsiveSize.f9}
        width={Constants.ResponsiveSize.f9}
      />
    );
  }
  else if (name == 'ChevronRight') {
    return (
      <ChevronRight
        style={{ color: 'white', marginRight: Constants.ResponsiveSize.f7 }}
        height={Constants.ResponsiveSize.f15}
        width={Constants.ResponsiveSize.f15}
      />
    );
  } else if (name == 'ChevronRightRTL') {
    return (
      <ChevronRightRTL
        style={{ color: 'white', marginRight: Constants.ResponsiveSize.f7 }}
        height={Constants.ResponsiveSize.f15}
        width={Constants.ResponsiveSize.f15}
      />
    );
  } else if (name == 'redPin') {
    return (
      <RedPin
        height={Constants.ResponsiveSize.f40}
        width={Constants.ResponsiveSize.f40}
      />
    );
  } else if (name == 'greenPin') {
    return (
      <GreenPin
        height={Constants.ResponsiveSize.f40}
        width={Constants.ResponsiveSize.f40}
      />
    );
  } else if (name == 'shop') {
    return (
      <Store style={{ color: "white", opacity: 0.9 }} height={30} width={30} />
    )
  }
  else if (name == 'myLocation') {
    return (
      <You style={{ color: "white", opacity: 0.9 }} height={30} width={30} />
    )
  }
  else if (name == 'GreenHand') {
    return (
      <GreenHand
        height={Constants.ResponsiveSize.f60}
        width={Constants.ResponsiveSize.f60}
      />
    );
  } else if (name == 'trash') {
    return (
      <Trash
        height={Constants.ResponsiveSize.f16}
        width={Constants.ResponsiveSize.f16}
      />
    );
  } else if (name == 'edit') {
    return (
      <Edit
        height={Constants.ResponsiveSize.f16}
        width={Constants.ResponsiveSize.f16}
      />
    );
  } else if (name == 'ellipse') {
    return (
      <Ellipse
        height={Constants.ResponsiveSize.f16}
        width={Constants.ResponsiveSize.f16}
      />
    );
  } else if (name == 'GreenLogo') {
    return (
      <GreenLogo
        height={Constants.ResponsiveSize.f60}
        width={Constants.ResponsiveSize.f60}
      />
    );
  }
  else if (name == 'ChatTab') {
    return (
      <ChatTab
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  }
  else if (name == 'HomeTab') {
    return (
      <HomeTab
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  }
  else if (name == 'PromosTab') {
    return (
      <PromosTab
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  }
  else if (name == 'EditLocation') {
    return (
      <EditLocation
        height={Constants.ResponsiveSize.f11}
        width={Constants.ResponsiveSize.f11}
      />
    );
  }
  else if (name == 'Location') {
    return (
      <Location
        height={Constants.ResponsiveSize.f16}
        width={Constants.ResponsiveSize.f16}
      />
    );
  }
  else if (name == 'starFeedback') {
    return (
      <StarFeedback
        height={Constants.ResponsiveSize.f25}
        width={Constants.ResponsiveSize.f25}
      />
    );
  } else if (name == 'rightPointer') {
    return (
      <RightPointer
        height={Constants.ResponsiveSize.f23}
        width={Constants.ResponsiveSize.f23}
      />
    );
  } else if (name == 'leftPointer') {
    return (
      <LeftPointer
        height={Constants.ResponsiveSize.f23}
        width={Constants.ResponsiveSize.f23}
      />
    );
  } else if (name == 'WhiteLeftPointer') {
    return (
      <WhiteLeftPointer
        height={Constants.ResponsiveSize.f23}
        width={Constants.ResponsiveSize.f23}
      />
    );
  } else if (name == 'fileDocument') {
    return <FileDocument height={78} width={70} />;
  }
  else if (name == 'welcome_bg') {
    return (
      <WelcomeBG
        style={{ color: 'white' }}
        width={Constants.ResponsiveSize.screenWidth * 0.85}
      />
    );
  } else if (name == 'calories') {
    return (
      <Calories
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20} />
    );
  }
  else if (name == 'tag') {
    return (
      <Tag
        height={Constants.ResponsiveSize.f20}
        width={Constants.ResponsiveSize.f20}
      />
    );
  }
  else if (name == 'FinalDelivery') {
    return (
      <FinalDelivery
        height={Constants.ResponsiveSize.f40}
        width={Constants.ResponsiveSize.f40}
      />
    );
  }
  else if (name == 'FinalPickup') {
    return (
      <FinalPickup
        height={Constants.ResponsiveSize.f40}
        width={Constants.ResponsiveSize.f40}
      />
    );
  }
  else {
    return (
      <Icon
        name={name}
        type={type}
        style={{
          fontSize: Constants.ResponsiveSize.f28,
          height: null,
          width: null,
          color: '#000000',
          ...iconStyle,
        }}
      />
    );
  }
};
const styles = StyleSheet.create({});

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(CustomIcon);
