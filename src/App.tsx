import {
  AppRoot,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { MainPage } from "./pages/MainPage";
import { GroupsProvider } from "./storage/groupsContext";
import { FiltersProvider } from "./storage/filtersContext";

export default function App() {

  return (
    <AppRoot>
      <FiltersProvider>
        <GroupsProvider>
          <MainPage />
        </GroupsProvider>
      </FiltersProvider>
    </AppRoot>
  );
};
