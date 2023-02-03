// import React, { useState } from 'react';
// import {
//   Image,
//   Text,
//   TextInput, TouchableOpacity, View
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Toast from 'react-native-simple-toast';
// import { connect } from 'react-redux';
// import CustomIcon from '../../common/CustomIcon';
// import Languages from '../../common/Languages';
// import {
//   addCardAction,
//   deleteCardAction
// } from '../../redux/paymentMethod/action';
// import Styles from './Styles';


// const masterCard = require('../../../assets/images/paymentAccount/masterCard.png');
// const madaCard = require('../../../assets/images/paymentAccount/madaCard.png');
// const visaCard = require('../../../assets/images/paymentAccount/visaCard.png');

// const selectedRadioButton = require('../../../assets/images/paymentAccount/radioButton_selected.png');
// const redioButton = require('../../../assets/images/paymentAccount/radioButton.png');

// function AddPaymentMethodScreen(props) {
//   const {
//     addPaymentMethod,
//     deletePaymentMethod,
//     loading,
//     error,
//     isCardAdded,
//     cardData
//   } = props;

//   const [paymentMethodSelected, ispaymentMethodSelected] = useState(1);
//   const [txtCardNumber, settxtCardNumber] = useState('');
//   const [txtCardHolderName, setTxtCardHolderName] = useState('');
//   const [txtCVV, setTxtCVV] = useState('');
//   const [txtExpiry, setTxtExpiry] = useState('');

//   const onMasterCardClicked = () => {
//     ispaymentMethodSelected(1);

//   };

//   const onMadaCardClicked = () => {
//     ispaymentMethodSelected(2);
//   };

//   const onVisaCardClicked = () => {
//     ispaymentMethodSelected(3);
//   };


//   const onChangeCardHolderNameText = (key, value) => {
//     setTxtCardHolderName(value)

//   };

//   const onCardNoTextChange = (key, value) => {

//     if (value.length < 17) {
//       settxtCardNumber(value)
//     }
//   };

//   const onExpiryTextChange = (key, value) => {
//     if (value.length < 6) {
//       setTxtExpiry(value);
//     }
//     if (value.length == 2) {
//       setTxtExpiry(value + '/');
//     }
//   };

//   const onCVVTextChange = (key, value) => {
//     if (value.length < 4) {
//       setTxtCVV(value);
//     }
//   };

//   const onDeleteClicked = () => {
//     deletePaymentMethod('')
//   }

//   const onAddClicked = () => {

//     if (txtCardHolderName.length < 2) {
//       Toast.showWithGravity(Languages.EnterCardHolderName, Toast.LONG, Toast.TOP);
//     }
//     else if (txtCardNumber.length != 16) {
//       Toast.showWithGravity(Languages.EnterValidCardNumber, Toast.LONG, Toast.TOP);
//     }
//     else if (txtExpiry.length < 5) {
//       Toast.showWithGravity(Languages.EnterValidExpiryDate, Toast.LONG, Toast.TOP);
//     }
//     else if (txtCVV.length != 3) {
//       Toast.showWithGravity(Languages.EnterValidSecurityNumber, Toast.LONG, Toast.TOP);
//     }
//     else {
//       const cardType = paymentMethodSelected == 1 ? 'MASTER' : (paymentMethodSelected == 2 ? 'MADA' : 'VISA');

//       const newPaymentMethod = {
//         cardType: cardType,
//         cardHolderName: txtCardHolderName,
//         cardNumber: txtCardNumber,
//         cardExipry: txtExpiry,
//         cardCVV: txtCVV,
//       };
//       addPaymentMethod(newPaymentMethod)

//       setTxtCardHolderName('')
//       settxtCardNumber('')
//       setTxtCVV('')
//       setTxtExpiry('')
//     }
//   };

//   return (
//     <SafeAreaView style={Styles.container}>
//       <View style={Styles.topView}>
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <TouchableOpacity
//             onPress={() => props.navigation.goBack()}
//             style={Styles.back_btn_view}>
//             <CustomIcon name={Languages.BackBlackArrow} type="MaterialIcons" />
//           </TouchableOpacity>
//           <Text style={Styles.textHeadingStyle}>
//             {Languages.AddaPaymentmethod}
//           </Text>
//         </View>
//       </View>
//       <View style={Styles.bodyView}>
//         <View style={Styles.paymentArea}>
//           <View style={Styles.paymentArea_inner}>
//             <TouchableOpacity onPress={onMasterCardClicked}>
//               <View style={Styles.flex_row}>
//                 <Image
//                   source={masterCard}
//                   resizeMode="contain"
//                   style={Styles.master_img}
//                 />
//                 {paymentMethodSelected == 1 && (
//                   <Image
//                     source={selectedRadioButton}
//                     resizeMode="contain"
//                     style={Styles.radio_btn}
//                   />
//                 )}
//                 {paymentMethodSelected != 1 && (
//                   <Image
//                     source={redioButton}
//                     resizeMode="contain"
//                     style={Styles.radio_btn}
//                   />
//                 )}
//               </View>
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={onMadaCardClicked}
//               style={{ marginLeft: 10 }}>
//               <View style={Styles.flex_row}>
//                 <Image
//                   source={madaCard}
//                   resizeMode="contain"
//                   style={Styles.master_and_visa_card}
//                 />
//                 {paymentMethodSelected == 2 && (
//                   <Image
//                     source={selectedRadioButton}
//                     resizeMode="contain"
//                     style={Styles.radio_btn}
//                   />
//                 )}
//                 {paymentMethodSelected != 2 && (
//                   <Image
//                     source={redioButton}
//                     resizeMode="contain"
//                     style={Styles.radio_btn}
//                   />
//                 )}
//               </View>
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={onVisaCardClicked}
//               style={{ marginLeft: 10 }}>
//               <View style={Styles.flex_row}>
//                 <Image
//                   source={visaCard}
//                   resizeMode="contain"
//                   style={Styles.master_and_visa_card}
//                 />
//                 {paymentMethodSelected == 3 && (
//                   <Image
//                     source={selectedRadioButton}
//                     resizeMode="contain"
//                     style={Styles.radio_btn}
//                   />
//                 )}
//                 {paymentMethodSelected != 3 && (
//                   <Image
//                     source={redioButton}
//                     resizeMode="contain"
//                     style={Styles.radio_btn}
//                   />
//                 )}
//               </View>
//             </TouchableOpacity>
//           </View>
//           <View style={Styles.cardRowStyle}>
//             <Text style={Styles.headingStyle}>{Languages.Cardsholder}</Text>
//             <View style={Styles.cardFieldOuter}>
//               <TextInput
//                 style={Styles.second_input_text}
//                 multiline={false}
//                 placeholder={'e.g. Mansoor'}
//                 keyboardType="default"
//                 placeholderTextColor="#B8B8B8"
//                 onChangeText={(val) => onChangeCardHolderNameText('name', val)}
//                 value={txtCardHolderName}
//               />
//             </View>
//             <View style={Styles.cardFieldBase} />
//             <Image
//               source={require('../../../assets/images/ico_cardholder.png')}
//               resizeMode="contain"
//               style={Styles.iconStyle}
//             />
//           </View>
//           <View style={Styles.cardRowStyle}>
//             <Text style={Styles.headingStyle}>{Languages.Cardno}</Text>
//             <View style={Styles.cardFieldOuter}>
//               <TextInput
//                 style={Styles.input_text_1}
//                 multiline={false}
//                 placeholder={'e.g. 1234 1234 1234 1234'}
//                 keyboardType="number-pad"
//                 placeholderTextColor="#B8B8B8"
//                 onChangeText={(val) => onCardNoTextChange('card_number', val)}
//                 maxLength={16}
//                 value={txtCardNumber}
//               />
//             </View>
//             <View style={Styles.cardFieldBase} />
//             <Image
//               source={require('../../../assets/images/ico_cardnumber.png')}
//               resizeMode="contain"
//               style={Styles.iconStyle}
//             />
//           </View>
//           <View style={Styles.expiryOuter}>
//             <View style={{ flex: 1 }}>
//               <View style={Styles.cardRowStyle2}>
//                 <Text style={Styles.headingStyle2}>{Languages.ExpiryDate}</Text>
//                 <View style={Styles.cardFieldOuter2}>
//                   <TextInput
//                     style={Styles.input_text_1}
//                     multiline={false}
//                     placeholder={'mm/yy'}
//                     keyboardType="number-pad"
//                     placeholderTextColor="#B8B8B8"
//                     onChangeText={(val) => onExpiryTextChange('expiry', val)}
//                     maxLength={5}
//                     value={txtExpiry}
//                   />
//                 </View>
//                 <View style={Styles.cardFieldBase2} />
//                 <Image
//                   source={require('../../../assets/images/ico_expiry.png')}
//                   resizeMode="contain"
//                   style={Styles.iconStyle2}
//                 />
//               </View>
//             </View>
//             <View style={{ flex: 1 }}>
//               <View style={[Styles.cardRowStyle2, { alignItems: 'center' }]}>
//                 <Text style={[Styles.headingStyle2, { marginLeft: 20 }]}>
//                   {Languages.CVV}
//                 </Text>
//                 <View style={Styles.cardFieldOuter2}>
//                   <TextInput
//                     style={Styles.input_text_1}
//                     multiline={false}
//                     placeholder={'e.g. 123'}
//                     keyboardType="number-pad"
//                     placeholderTextColor="#B8B8B8"
//                     onChangeText={(val) => onCVVTextChange('cvv', val)}
//                     maxLength={3}
//                     value={txtCVV}
//                   />
//                 </View>
//                 <View style={Styles.cardFieldBase2} />
//                 <Image
//                   source={require('../../../assets/images/ico_cvv.png')}
//                   resizeMode="contain"
//                   style={[Styles.iconStyle2, { right: 5 }]}
//                 />
//               </View>
//             </View>
//           </View>

//           <View style={Styles.cardRowStyle}>
//             <TouchableOpacity
//               onPress={onAddClicked}
//               style={Styles.addClick_center}>
//               <View style={Styles.Add_btn_view}>
//                 <Text style={Styles.add_btn_text}>{Languages.ADD}</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//         {cardData != null &&
//           <View style={Styles.card_view_inner}>
//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//               <View style={Styles.left_blue_sec} />
//               <Image
//                 source={cardData.cardType == 'MASTER' ? masterCard : (cardData.cardType == 'VISA' ? visaCard : madaCard)}
//                 resizeMode="contain"
//                 style={Styles.master_card_size_img}
//               />
//               <Text style={Styles.card_num}>***** 33345</Text>
//               <View style={Styles.card_right}>
//                 <Text style={Styles.text_right}>{cardData.cardExipry}</Text>
//                 <View style={Styles.tick_arrow}>
//                   <Image
//                     style={Styles.tick_img}
//                     resizeMode="contain"
//                     source={require('../../../assets/images/black_tick.png')}
//                   />
//                 </View>
//               </View>
//             </View>
//           </View>
//         }

//         {cardData != null &&
//           <TouchableOpacity
//             onPress={onDeleteClicked} style={Styles.delete_card_view}>
//             <View style={Styles.delete_card_inner_view}>
//               <Text style={Styles.delete_card_text}>
//                 {Languages.Deletethecard}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         }
//       </View>
//     </SafeAreaView>
//   );
// }

// const mapStateToProps = ({ paymentMethod }) => {
//   return {
//     loading: paymentMethod.loading,
//     error: paymentMethod.error,
//     isCardAdded: paymentMethod.isCardAdded,
//     cardData: paymentMethod.cardData,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPaymentMethod: (cardData) => {
//       dispatch(addCardAction(cardData));
//     },
//     deletePaymentMethod: (cardData) => {
//       dispatch(deleteCardAction(cardData));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AddPaymentMethodScreen);