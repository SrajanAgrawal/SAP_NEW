import { Sidebar, Button } from "flowbite-react"
// import { BiBuoy } from "react-icons/bi";
// import { HiChartPie } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const Dashboard = () => {

    const [isOpenSideBar, setisOpenSideBar] = useState(true);

    
    return (
        <>
            {
                isOpenSideBar ? <Button onClick={() => setisOpenSideBar(false)}><MdClose /></Button> : <Button onClick={() => setisOpenSideBar(true)}><FaUser /></Button>

            }
            {
                isOpenSideBar && (
                    <Sidebar aria-label="Sidebar with content separator example">
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item href="#" icon={FaUser}>
                                    Dashboard
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={FaUser}>
                                    Kanban
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={FaUser}>
                                    Inbox
                                </Sidebar.Item>

                            </Sidebar.ItemGroup>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item href="#" icon={FaUser}>
                                    Upgrade to Pro
                                </Sidebar.Item>

                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>)
            }
        </>
    )
}

export default Dashboard