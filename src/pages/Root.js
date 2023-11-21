import { Outlet, useNavigation } from 'react-router-dom'

import MainNavigation from '../components/MainNavigation'

const RootLayout = () => {
    const navigation = useNavigation() //we can see whether we are loading data or not thanks to this hook - navigation.state stores if the nav is loading etc

    return(
        <>
            <MainNavigation/>
            <main>
                {/* {navigation.state === 'loading' && <p>Loading data...</p>} */}
                <Outlet/>
            </main>
        </>
    )
}

export default RootLayout