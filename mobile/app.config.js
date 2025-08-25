export default ({ config }) => ({
  ...config,
  name: "socialrn",
  slug: "socialrn",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "mobile",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.socialrn.mobile",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    package: "com.socialrn.mobile",
  },
  ios: {
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    "expo-secure-store",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    apiUrl: process.env.EXPO_PUBLIC_API_URL,
    clerkKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    eas: {
      projectId: "989d9743-01b2-4be5-bae4-cf9c9a4238e2",
    },
  },
});
