import React from 'react';
import { TouchableOpacity, ScrollView, Linking, Image, View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import {
  BlueTextCentered,
  BlueSpacing20,
  BlueButton,
  SafeBlueArea,
  BlueCard,
  BlueListItem,
  BlueNavigationStyle,
} from '../../BlueComponents';
import { Icon } from 'react-native-elements';
import { getApplicationName, getVersion, getBundleId, getBuildNumber } from 'react-native-device-info';
import Rate, { AndroidMarket } from 'react-native-rate';
import loc from '../../loc';

const About = () => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();
  const { width, height } = useWindowDimensions();
  const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 54,
    },
    logo: {
      width: 124,
      height: 124,
    },
    textFree: {
      maxWidth: 260,
      marginVertical: 24,
      color: '#9AA0AA',
      fontSize: 15,
      textAlign: 'center',
      fontWeight: '500',
    },
    textBackup: {
      maxWidth: 260,
      marginBottom: 40,
      color: colors.foregroundColor,
      fontSize: 15,
      textAlign: 'center',
      fontWeight: '500',
    },
    buildWith: {
      backgroundColor: colors.inputBackgroundColor,
      padding: 16,
      paddingTop: 0,
      borderRadius: 8,
    },
    buttonLink: {
      backgroundColor: colors.lightButton,
      borderRadius: 12,
      justifyContent: 'center',
      padding: 8,
      flexDirection: 'row',
    },
    textLink: {
      color: colors.foregroundColor,
      marginLeft: 8,
      fontWeight: '600',
    },
  });

  const handleOnReleaseNotesPress = () => {
    navigate('ReleaseNotes');
  };

  const handleOnSelfTestPress = () => {
    navigate('Selftest');
  };

  const handleOnLicensingPress = () => {
    navigate('Licensing');
  };

  // const handleOnTwitterPress = () => {
  //   Linking.openURL('https://twitter.com/bluewalletio');
  // };

  const handleOnPoWxPress = () => {
    Linking.openURL('http://powx.org/');
  };
  const handleOnOBTCPress = () => {
    Linking.openURL('https://www.powx.org/obtc');
  };

  // const handleOnTelegramPress = () => {
  //   Linking.openURL('https://t.me/bluewallethat');
  // };
  const handleOnGithubPress = () => {
    Linking.openURL('https://github.com/Borland04/BlueWallet');
  };
  const handleOnRatePress = () => {
    const options = {
      AppleAppID: '1376878040',
      GooglePackageName: 'io.bluewallet.obtcwallet',
      preferredAndroidMarket: AndroidMarket.Google,
      preferInApp: true,
      openAppStoreIfInAppFails: true,
      fallbackPlatformURL: 'https://bluewallet.io',
    };
    Rate.rate(options, success => {
      if (success) {
        console.log('User Rated.');
      }
    });
  };

  return (
    <SafeBlueArea style={styles.root}>
      <ScrollView testID="AboutScrollView">
        <BlueCard>
          <View style={styles.center}>
            <Image style={styles.logo} source={require('../../img/o-btc.png')} />
            <Text style={styles.textFree}>{loc.settings.about_free}</Text>
            <Text style={styles.textBackup}>{loc.settings.about_backup}</Text>
            <BlueButton onPress={handleOnRatePress} title={loc.settings.about_review + ' ⭐🙏'} />
          </View>
        </BlueCard>

        <BlueListItem
          // leftIcon={{
          //   name: 'o-btc',
          //   type: 'font-awesome-5',
          //   color: '#7289da',
          // }}
          uri="'../../img/o-btc.png'"
          onPress={handleOnPoWxPress}
          title="PoWx"
        />
        <BlueListItem
            // leftIcon={{
            //   name: 'o-btc',
            //   type: 'font-awesome-5',
            //   color: '#7289da',
            // }}
            uri="'../../img/o-btc.png'"
            onPress={handleOnOBTCPress}
            title="oBTC"
        />
        <BlueCard>
          <View style={styles.buildWith}>
            <BlueSpacing20 />

            <BlueTextCentered>{loc.settings.about_awesome} 👍</BlueTextCentered>
            <BlueSpacing20 />
            <BlueTextCentered>React Native</BlueTextCentered>
            <BlueTextCentered>bitcoinjs-lib</BlueTextCentered>
            <BlueTextCentered>Nodejs</BlueTextCentered>
            <BlueTextCentered>Electrum server</BlueTextCentered>
            <BlueTextCentered>BlueWallet</BlueTextCentered>
            <BlueSpacing20 />

            <TouchableOpacity onPress={handleOnGithubPress} style={styles.buttonLink}>
              <Icon size={22} name="github" type="font-awesome-5" color={colors.foregroundColor} />
              <Text style={styles.textLink}>{loc.settings.about_sm_github}</Text>
            </TouchableOpacity>
          </View>
        </BlueCard>
        <BlueListItem
          leftIcon={{
            name: 'book',
            type: 'font-awesome',
            color: '#9AA0AA',
          }}
          chevron
          onPress={handleOnReleaseNotesPress}
          title={loc.settings.about_release_notes}
        />
        <BlueListItem
          leftIcon={{
            name: 'law',
            type: 'octicon',
            color: colors.foregroundColor,
          }}
          chevron
          onPress={handleOnLicensingPress}
          title={loc.settings.about_license}
        />
        <BlueListItem
          leftIcon={{
            name: 'flask',
            type: 'font-awesome',
            color: '#FC0D44',
          }}
          chevron
          onPress={handleOnSelfTestPress}
          testID="RunSelfTestButton"
          title={loc.settings.about_selftest}
        />
        <BlueSpacing20 />
        <BlueSpacing20 />
        <BlueTextCentered>
          {getApplicationName()} ver {getVersion()} (build {getBuildNumber()})
        </BlueTextCentered>
        <BlueTextCentered>{new Date(getBuildNumber() * 1000).toGMTString()}</BlueTextCentered>
        <BlueTextCentered>{getBundleId()}</BlueTextCentered>
        <BlueTextCentered>
          w, h = {width}, {height}
        </BlueTextCentered>
        <BlueSpacing20 />
        <BlueSpacing20 />
      </ScrollView>
    </SafeBlueArea>
  );
};

About.navigationOptions = () => ({
  ...BlueNavigationStyle(),
  headerTitle: loc.settings.about,
});
export default About;
