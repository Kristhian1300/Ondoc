import React, { useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import DetailsScreen from "../../screens/DetailsScreen";

import profile from "../../img/profile.jpg";
import home from "../../img/home.png";
// Tab ICons...
import search from "../../img/search.png";
import notifications from "../../img/notifications.png";
import settings from "../../img/settings.png";
import logout from "../../img/logout2.png";
// Menu
import menu from "../../img/menu3.png";
//import close from '../../img/close.png';
import CustomMenu from "../../components/CustomMenu";
import OD from "../../img/OD2.png";

function index() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [documentID, setDocumentID] = useState();
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start", padding: 15 }}>
        <Image
          source={profile}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
          }}></Image>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginTop: 20,
          }}>
          Jenna Ezarik
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              marginTop: 6,
              color: "white",
            }}>
            View Profile
          </Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Search", search)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}
        </View>

        <View>{TabButton(currentTab, setCurrentTab, "LogOut", logout)}</View>
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 0,
          paddingVertical: 0,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}>
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}>
          <TouchableOpacity
            onPress={() => {
              // Do Actions Here....
              // Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}>
            <View
              style={{
                backgroundColor: "#8C1C06",
                paddingHorizontal: 0,
                addingVertical: 30,
                width: 500,
                height: 80,
                display: "flex",
                flexDirection: "row",
              }}>
              <Image
                source={showMenu ? logout : menu}
                style={{
                  width: 50,
                  height: 30,
                  tintColor: "white",
                  position: "relative",
                  top: 30,
                }}></Image>
              <Image
                source={OD}
                style={[
                  styles.logo,
                  {
                    height: 80,
                    width: 80,
                    paddingTop: 130,
                    paddingBottom: 80,
                    marginTop: 30,
                    position: "relative",
                    bottom: 85,
                    left: 110,
                  },
                ]}
                resizeMode='contain'
              />
            </View>
          </TouchableOpacity>
          {currentTab == "Home" && (
            <CustomMenu
              setCurrentTab={setCurrentTab}
              setDocumentID={setDocumentID}
            />
          )}
          {currentTab == "Details" && <DetailsScreen itemId={documentID} />}
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
          // Do your Stuff...
        } else {
          setCurrentTab(title);
        }
      }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}>
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? "#8C1C06" : "white",
          }}></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? "#8C1C06" : "white",
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8C1C06",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerCenter: {
    width: "100%",
    height: "100%",
  },
});

export default index;
