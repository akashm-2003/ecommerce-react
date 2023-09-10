import { useProductContext } from "../context/productcontext";
import Spinner from "./Spinner";
import styled from "styled-components";

import Product from "./Product";
const FeatureProduct = () => {
    const { isLoading,featuredProducts} = useProductContext();
    // {isLoading ? <Spinner/> : <h1>hello</h1>}
    return (
        <Wrapper className="section">
            {isLoading ? <Spinner/> :<div className="container">
                <div className="intro-data">Check Now</div>
                <div className="common-heading">Our Feature Service</div>
                <div className="grid grid-three-column">
                    {
                    featuredProducts.map((product) => {
                        return <Product key={product.id} {...product} />
                    })
                    }
                </div>
            </div>}
        </Wrapper>  
    )
}
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  
`;
export default FeatureProduct