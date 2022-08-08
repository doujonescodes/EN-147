import React from 'react'
import styles from './styles'
import appleAuth, {
  AppleButton,
  AppleAuthError,
  AppleAuthRequestScope,
  AppleAuthRequestOperation,
} from '@invertase/react-native-apple-authentication'
import { authFetch } from './Utils'
import { getUniqueId } from 'react-native-device-info'


export const AppleSignIn = (props) => {

  const handleSignIn = async (data) => {
    /* Redux actions, persisting data with AsyncStorage, redirection...*/
  }

  const onAppleButtonPress = async () => {
    try {

      // make sign in request and return a response object containing authentication data
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [
          AppleAuthRequestScope.EMAIL,
          AppleAuthRequestScope.FULL_NAME
        ],
      });

      // retrieve identityToken from sign in request
      const {
        identityToken,
      } = appleAuthRequestResponse;

      // you may also want to send the device's ID to your server to link a device with the account
      const deviceId = getUniqueId();

      // identityToken generated
      if (identityToken) {

        // send data to server for verification and sign in
        const { ack, response } = await authFetch({
          url: 'sign-in-with-apple',
          body: {
            ...appleAuthRequestResponse,
            deviceId: deviceId
          }
        });
        if (ack === 'success') {
          // successfully verified, handle sign in 
          await handleSignIn(response);
        }
      } else {
        // no token, failed sign in
      }

    } catch (error) {
      if (error.code === AppleAuthError.CANCELED) {
        // user cancelled Apple Sign-in
      } else {
        // other unknown error
      }
    }
  }

  return (
    <AppleButton
      buttonStyle={AppleButton.Style.WHITE}
      buttonType={AppleButton.Type.SIGN_IN}
      style={styles.appleButton}
      onPress={() => onAppleButtonPress()}
    />
  )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 45,
        shadowColor: '#555',
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 0,
          height: 3
        },
        marginVertical: 15,
    },
  });

export default AppleSignIn;