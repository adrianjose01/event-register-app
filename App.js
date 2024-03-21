import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import EventsScreen from "./screens/EventsScreen";
import EventsRegisterScreen from "./screens/EventsRegisterScreen";
import AboutScreen from "./screens/AboutScreen";
import { EventProvider } from "./store/event-contex";
import EventDetailsScreen from "./screens/EventDetailsScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Eventos" component={EventsScreen} />
      <Stack.Screen name="details" component={EventDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <EventProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#eecf02",
            },
            headerTintColor: "black",
            drawerContentStyle: {
              backgroundColor: "#eecf02",
            },
            drawerActiveBackgroundColor: "black",
            drawerActiveTintColor: "white",
            drawerInactiveTintColor: "black",
          }}
        >
          <Drawer.Screen name="Inicio" component={HomeScreen} />
          <Drawer.Screen
            name="Stack"
            component={StackNavigator}
            options={{
              title: "Eventos",
            }}
          />
          <Drawer.Screen
            name="RegistarEvento"
            component={EventsRegisterScreen}
            options={{
              title: "Registar Evento",
            }}
          />
          <Drawer.Screen name="Acerca" component={AboutScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </EventProvider>
  );
}
