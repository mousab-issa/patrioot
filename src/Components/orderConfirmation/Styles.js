import { Dimensions } from 'react-native';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default {
  cardOrder: {
    width: Screen.width * 0.9,
    marginLeft: 2,
    flexDirection: 'row',
  },
  orderConfirmMessageView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    PaddingTop: 15,
    paddingBottom: 1,
  },

  orderConfirmMessageText: {
    marginLeft: 5,
    color: '#fff',
    padding: 2,
  },

  confirmButtonStyle: {
    height: 30,
    width: 90,
    backgroundColor: '#1cad61',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  enterButtonStyle: {
    height: 30,
    width: 90,
    marginTop: 20,
    backgroundColor: '#1cad61',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
  },
  orderTopView: {width: '100%', paddingVertical: 10},
  orderTopInnerView: {width: '100%', flexDirection: 'row'},
  orderNoButton: {width: '37%', alignItems: 'flex-end'},
  enterbuttonView: {},
  orderYesButton: {width: '37%', alignItems: 'center'},
  orderConfirmImage: {width: 45, height: 45, marginRight: 10},
  confirmationCardInner: {
    flex: 1,
    width: '100%',
    backgroundColor: '#5c76fa',
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    marginTop: 25,
  },
  chatTextStyle: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'OpenSans',
    textAlign: 'center',
  },
  doubleTickTopView: {width: '100%', flexDirection: 'row'},
  doubletickView: {
    width: '25%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },

  doubleTickSpace: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doubleTickText: {
    marginLeft: 5,
    color: '#383838',
    marginTop: 10,
  },
  rejectButtonStyle: {
    height: 30,
    width: 90,
    backgroundColor: '#fc5863',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 1,
  },
  rejectButtonView: {width: '37%', alignItems: 'center'},
  comfirmButtonView: {width: '37%', alignItems: 'flex-end'},
  buttonTopView: {width: '100%', flexDirection: 'row'},
  doubleTickImage: {width: 12, height: 12, marginLeft: 1},
};
