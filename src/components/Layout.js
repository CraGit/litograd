import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ locales, navigation, settings, children }) {
  return (
    <div className="text-dark">
      <Header locales={locales} navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} />
    </div>
  );
}
