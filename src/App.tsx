import {
  AppRoot,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { MainPage } from "./pages/MainPage";
import { GroupsProvider } from "./redux/groupsContext";

export default function App() {

  return (
    <AppRoot>
      <GroupsProvider>
        <MainPage />
      </GroupsProvider>
    </AppRoot>
  );
};
