import Panel from './Panel/Panel'
import Sidebar from './Sidebar/Sidebar'
const Main = () => {
  return (
    <div style={{display:'flex',flex:1}}>
      <Sidebar/>
      <Panel/>
    </div>
  )
}

export default Main