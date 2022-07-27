import type { App } from 'vue'
import { Button, Loading, Empty, Tabbar, TabbarItem, List, Cell, CellGroup,NavBar,Icon,Field,Search } from 'vant'
import pageWrapper from '@/components/pageWrapper.vue'

export function registerGlobComp(app: App) {
  app.component(pageWrapper.name, pageWrapper)
  app
    .use(Button)
    .use(Loading)
    .use(Empty)
    .use(Tabbar)
    .use(TabbarItem)
    .use(List)
    .use(CellGroup)
    .use(Cell)
    .use(NavBar)
    .use(Icon)
    .use(Field)
    .use(Search)
}
