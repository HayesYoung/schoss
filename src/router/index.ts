/**
 *
 * @Young 2020 9.10
 * 路由信息
 * 
 */

import main from '../views/Main/Index'
import DataStructure from '../views/Computer/DataStructure'
// import Id from '../views/Index/IdInfo'

const routes = [
  {
    path: "/",
    exact: true,
    component: main,
  },
  {
    path: "/main",
    exact: true,
    component: main,
  },
  {
    path: "DataStructure",
   exact: true,
    component: DataStructure,
  },
//   {
//     path: "/text/:id",
//     exact: true,
//     component: Id,
//   } 
]



export default routes;