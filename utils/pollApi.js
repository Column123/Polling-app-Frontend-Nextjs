const url = `${process.env.NEXT_PUBLIC_API_URL}/poll`;

export const getAllPoll = async() =>{
    try{
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': localStorage.getItem('accessToken')
            },
        })
    }
    catch(error){
        console.log(error);
        throw error
    }
}