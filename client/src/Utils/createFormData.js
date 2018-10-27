export default function createFormData(state) {
    //  debugger
    const formData = new FormData()
         
        formData.append('event[description]', state.description)
        formData.append('event[address]', state.address)
        formData.append('event[start_date]', state.start_date)
        formData.append('event[end_date]', state.end_date)
        formData.append('event[price]', state.price)
        formData.append('event[neighborhood_id]', parseInt(state.neighborhood.id))
        // if no image provided skip adding image to the form data
        if(state.avatar ){
            formData.append('event[avatar]', state.avatar)
        }
        return formData
}