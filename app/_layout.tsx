// import { ConvexProvider, ConvexReactClient } from 'convex/react';
// import { Stack } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import { ThemeProvider } from '@/hooks/useTheme';

// const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
//   unsavedChangesWarning: false,
// });

// export default function RootLayout() {
//   return (
//     <ConvexProvider client={convex}>
//       <ThemeProvider>
//         <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
//           <Stack screenOptions={{ headerShown: false }}>
//             <Stack.Screen name="(tabs)" />
//           </Stack>
//         </SafeAreaView>
//       </ThemeProvider>
//     </ConvexProvider>
//   );
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

// }
import { ThemeProvider, useTheme } from '@/hooks/useTheme';

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

function AppContainer() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaView>
  );
}

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <AppContainer />
      </ThemeProvider>
    </ConvexProvider>
  );
}
