import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./context/productcontext";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import FormatPrice from "./Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Spinner from "./components/Spinner";
import math from "mathjs";
// import { round } from "mathjs";
import Stars from "./components/Stars";
import AddToCart from "./components/AddToCart";
const SingleProduct = () =>{
  // id: ID is alias name
  const {id:productId} = useParams();
  const API =`https://api.pujakaitem.com/api/products`
  const {singleProduct,getSingleProduct,isSingleLoading}=useProductContext();
  // console.log(ID);
  useEffect(() => {
    getSingleProduct(`${API}?id=${productId}`);
  },[])
  
  const {id,name,price,company,colors,description,category,stock,reviews,stars,image}=singleProduct;
  // console.log(stars,x);
  return(
    <Wrapper>
      <PageNavigation title={name}/>
      {isSingleLoading? <Spinner/> :<div className="container">
        <div className="grid-two-column grid">
          {/* product imag */}
          <div className="product-images">
             <MyImage img={image}/>
          </div>
          {/* product data */}
          <div className="product-data">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews}/>
            <p className="product-data-price">
              MRP: 
              <del>
                <FormatPrice price={price*10*1.2}/>
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price*10}/>
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Akash Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>Available:<span>{stock>0?" In Stock":" Out of Stock"}</span></p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>

            <hr />
            {stock&&<AddToCart product={singleProduct}/>}
          </div>
        </div>
      </div>}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-images{
      display:flex;
      align-items:center;
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
