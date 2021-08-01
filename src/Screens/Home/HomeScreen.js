import React from 'react'
import Landing from 'Components/Landing'
import Contagion from 'Components/Contagion'
import WhatToDoComp from 'Components/WhatToDo'
import ReachUs from 'Components/ReachUs'
import LiveReports from 'Components/LiveReports'
export default function HomeScreen() {
    return (
        <div>
            <Landing />
            <Contagion/>
            <WhatToDoComp/>
            <LiveReports/>
            <ReachUs/>
        </div>
    )
}
