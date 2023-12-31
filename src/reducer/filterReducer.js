const filterReducer = (state, action) => {

    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filtered_products: [...action.payload],
                all_products: [...action.payload]
            }
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: action.payload
            }
        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            };
        case "SORTING_PRODUCTS":
            let newSortData;
            const { filtered_products, sorting_value } = state;
            let tempSortProduct = [...filtered_products];
            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }

                if (sorting_value === "highest") {
                    return b.price - a.price;
                }

                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }

                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                }
            }
            newSortData = tempSortProduct.sort(sortingProducts);
            return {
                ...state,
                filtered_products: newSortData
            };
        case 'UPDATE_FILTER_VALUE':
            const { value, name } = action.payload;
            if (name === 'clear') {
                return {
                    ...state,
                    filter: {
                        text: "",
                        category: "all",
                        company: "all",
                        color: "all"
                    }
                }
            }
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [name]: value
                }
            }

        case 'USE_FILTER_SECTION':
            let all_products = action.payload;
            let tempFilterProduct = [...all_products];
            const { text, category, company, color } = state.filter;
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((product) => {
                    return product.name.toLowerCase().includes(text);
                })
            }
            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.category === category
                );
            }

            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
                );
            }

            // if (color) {
            //     tempFilterProduct = tempFilterProduct.filter((curElem) =>
            //         curElem.colors.includes(color)
            //     );
            // }

            return {
                ...state,
                filtered_products: tempFilterProduct
            };

        default:
            return state;
    }
}

export default filterReducer;