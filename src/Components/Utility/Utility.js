import toast from "react-hot-toast";

const getAllfavorites=()=>{
    const all=localStorage.getItem('favorites');
    if(all){
        const favorites=JSON.parse(all);
        return favorites;
    }else{
        return []
    }
}

const addFavourite = gadget =>{
    const favorites=getAllfavorites();
    const isExist=favorites.find(item=>item.id===gadget.product_id);
    if(isExist) return toast.error('You can not make this order twice')
    favorites.push(gadget);
    localStorage.setItem('favorites',JSON.stringify(favorites))
    toast.success('Congratulations')
}
const removeFavorite=(product_id)=>{
    const favorites=getAllfavorites();
    const remainingFavorite=favorites.filter(gadget=>gadget.product_id != product_id);
    localStorage.setItem('favorites',JSON.stringify(remainingFavorite))
    toast.success('Congratulations removed from cart')

}

const getWishList=()=>{
    const wishItem= localStorage.getItem('favorite')
    if(wishItem){
        const favorite=JSON.parse(wishItem)
        return favorite;
    }
    else{
        console.log([])
        return[]
    }

}
const addWishList=gadget=>{
    const favorite=getWishList();
    console.log(favorite)
    const isExists=favorite.find(item=>item.product_id===gadget.product_id);
    if(isExists) return alert("welcome")
    favorite.push(gadget);
    localStorage.setItem('favorite',JSON.stringify(favorite))
}
const removeWishList=(product_id)=>{
    const favorite=getWishList();
    const remainingFavorites=favorite.filter(gadgets=>gadgets.product_id != product_id);
    localStorage.setItem('favorite',JSON.stringify(remainingFavorites))
    toast.success('Congratulations removed from wish list')

}


export {addFavourite,getAllfavorites,getWishList,addWishList,removeFavorite,removeWishList}