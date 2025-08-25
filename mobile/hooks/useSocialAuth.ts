import { useSSO } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { useState } from "react";
import { Alert } from "react-native";

export const useSocialAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { startSSOFlow } = useSSO(); // ✅ New API

  const handleSocialAuth = async (strategy: "oauth_google" | "oauth_github") => {
    setIsLoading(true);
    try {
      const redirectUrl = Linking.createURL("/(tabs)");

      const { createdSessionId, setActive } = await startSSOFlow({
        strategy,
        redirectUrl,
      });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error("Error in social auth", err);
      const provider = strategy === "oauth_google" ? "Google" : "Github";
      Alert.alert("Error", `Failed to sign in with ${provider}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleSocialAuth };
};
