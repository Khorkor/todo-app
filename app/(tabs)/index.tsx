import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createHomeStyles } from '@/assets/styles/home.styles';
import Header from '@/components/Header';
import TodoInput from '@/components/TodoInput';
import { useTheme } from '@/hooks/useTheme';

export default function Index() {
  const { toggleDarkMode, colors, isDarkMode } = useTheme();

  const homeStyles = createHomeStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        <TodoInput />
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text style={{ color: "gray", fontWeight: "bold", fontSize: 22 }}>
            Toogle the mode
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
