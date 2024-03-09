import {
  AppRoot,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { MainPage } from "./pages/MainPage";
import { GroupsProvider } from "./redux/groupsContext";
import { FiltersProvider } from "./redux/filtersContext";

export default function App() {

  return (
    <AppRoot>
      <GroupsProvider>
        <FiltersProvider>
          <MainPage />
        </FiltersProvider>
      </GroupsProvider>
    </AppRoot>
  );
};
