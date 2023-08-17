export async function PUT(request, {params}){
    const {id} = params;
    const {newTitle: title, newDescription: description} = request.json()
}