import Sidebar from "@/components/partials/sidebar";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icons from "@/components/ui/Icon";
import { Icon } from "@iconify/react";
import Calculation from "@/components/partials/widget/chart/Calculation";
import StackBarChart from "@/components/partials/widget/chart/stack-bar";


function MainDashboard() {
    return (
<>
    <Sidebar/>
    <div className="flex gap-3 ml-[250px] flex-wrap">
  
    <Card title="201" subtitle="total users">
        
          
          <Button text="view details"></Button>
    </Card>
  
    <Card title="159" subtitle="total users">
          
    <Button text="view details"></Button>
    </Card>
    <Card title="500" subtitle="total users">
          
    <Button text="view details"></Button>
    </Card>
    <Card title="89" subtitle="total users">
          
    <Button text="view details"></Button>
    </Card>
    <Card title="69" subtitle="total users">
          
    <Button text="view details"></Button>
    </Card>
    <Card title="76" subtitle="total users">
          
    <Button text="view details"></Button>
    </Card>
    <Card title="66" subtitle="total users">
          
    <Button text="view details"></Button>
    </Card>
    </div>
    
    <Calculation/>
    <StackBarChart/>


   
    
</>
      ); 
}

export default MainDashboard;