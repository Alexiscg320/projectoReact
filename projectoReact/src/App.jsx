import ItemCountContainer from "./components/common/ItemCount/ItemCountContainer"
import {Navbar} from "./components/layout/Navbar"
import ItemListContainer from "./components/pages/ItemListContainer"

function App() {

  return (
<div>
  <Navbar />
  <ItemListContainer greeting={"Buenos dias"} />
  <ItemCountContainer />
</div>
  )
}

export default App
