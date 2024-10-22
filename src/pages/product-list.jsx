import React, {useEffect,useState} from 'react';
import {GetProductList} from "../APIRequest/APIRequest.js";
import {useSelector} from "react-redux";
import ProductRating from "../components/business-table/Product-Rating.jsx";
import ReactPaginate from "react-paginate";

const ProductList = () => {

    let [searchKeyword, setSearchKeyword] = useState('');
    let [perPage, setPerPage] = useState(10);

    useEffect(() => {
         GetProductList(perPage,1)
    }, []);

    let AllProduct = useSelector((state)=> state.product.allProduct);
    let Total = useSelector((state)=> (state.product.total));
    let Skip = useSelector((state)=> (state.product.skip));
    let Limit = useSelector((state)=> (state.product.limit));

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-6">
                                            <h4>My Product List</h4>
                                        </div>
                                        <div className="col-2">
                                        </div>
                                        <div className="col-4">
                                            <div className="input-group mb-3">

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Image</th>
                                <th>SKU</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Discount(%)</th>
                                <th>Rating</th>

                            </tr>
                            </thead>
                            <tbody>
                            {
                                AllProduct.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><img src={item.thumbnail} alt="thumbnail" width={60}/></td>
                                            <td>{item.sku}</td>
                                            <td>{item.title}</td>
                                            <td>{item.category}</td>
                                            <td>{item.brand}</td>
                                            <td><b>৳</b>{item.price}</td>
                                            <td>{item.discountPercentage}</td>
                                            <td className="col-2">
                                                <div>
                                                    <span>{parseFloat(item['rating'])}</span>
                                                    <ProductRating rating={parseFloat(item['rating'])}/>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-12 mt-5">
                    <nav aria-label="Page navigation example">
                        <ReactPaginate
                            previousLabel="<"
                            nextLabel=">"
                            pageClassName="page-item"
                            pagelinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breaklinkClassName="page-link"
                            pageCount={Total/perPage}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={10}

                            containerClassName="pagination"
                            activeClassName="active"
                        />
                    </nav>
                </div>
            </div>
        </>
    );
};

export default ProductList;