export default function ReviewsDetails( { params,} :{
    params:{productId : string
        reviewsId : string
    }
 }){
     return(
         <h1>Reviews {params.reviewsId} for product {params.productId}</h1>
     );
 }