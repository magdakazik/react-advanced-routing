import { useRouteLoaderData } from 'react-router-dom'

import EventForm from '../components/EventForm'

const EditEventPage = () => {
    const data = useRouteLoaderData('event-detail')
    const event = data.event
    return(
        <EventForm event = {data.event} method = 'PATCH'/>
    )
}

export default EditEventPage