const getToLs = ()=>{
    const donations = localStorage.getItem('donations')
    if(donations){
        return JSON.parse(donations)
    }
    return []
}



const savaToLs =(id)=>{
const donations = getToLs()
const isExist = donations.find(donationId=>donationId == id)
if(!isExist){
    donations.push(id)
    localStorage.setItem('donations',JSON.stringify(donations))
}
}

export {savaToLs, getToLs}