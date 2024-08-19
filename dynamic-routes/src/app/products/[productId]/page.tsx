export default function ProductDetails( { params,} :{
   params:{productId : string}
}){
    return(
        <h1>Product Details {params.productId}</h1>
    );
}