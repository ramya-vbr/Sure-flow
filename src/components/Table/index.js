import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IoFilterOutline } from "react-icons/io5";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { MdDelete } from "react-icons/md";
import "./table.css";

const Table = () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({
    productName: "",
    productID: "",
    category: "",
    price: "",
    quantity: "",
    expiryDate: "",
    threshold: "",
  });
  const [productList, setProductList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductList([...productList, product]);
    setProduct({
      productName: "",
      productID: "",
      category: "",
      price: "",
      quantity: "",
      expiryDate: "",
      threshold: "",
    });
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDel = (id) => {
    const Del = productList.filter((li, index) => index !== id);
    setProductList(Del);
  };
  return (
    <div className="productContainer">
      <div className="productHeader">
        <div>Products</div>
        <div className="btnContainer">
          <Button variant="contained" size="small" onClick={handleOpen}>
            Add Product
          </Button>
          {open ? (
            <Modal open={open} onClose={handleClose}>
              <Box className="boxStyle">
                <span className="modalHeader">New Product</span>
                <div className="modalUploader">
                  <div className="uploadImage"></div>
                  <div className="imageTextContainer">
                    <div className="uploadText">Drag image here</div>
                    <div className="orUploadText">or</div>
                    <div className="browseImage">Browse image</div>
                  </div>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <section className="secOne">
                    <label for="name">Product Name</label>
                    <input
                      type="text"
                      placeholder="Enter product name"
                      name="name"
                      value={product.productName}
                      onChange={(e) =>
                        setProduct({ ...product, productName: e.target.value })
                      }
                      className="modalInput"
                    />
                  </section>
                  <section>
                    <label for="productId">Product ID </label>
                    <input
                      name="productId"
                      className="modalInput"
                      placeholder="Enter Product ID"
                      value={product.productID}
                      onChange={(e) =>
                        setProduct({ ...product, productID: e.target.value })
                      }
                    />
                  </section>
                  <section>
                    <label for="category">Category </label>
                    <input
                      name="category"
                      className="modalInput"
                      placeholder="Select Product category"
                      value={product.category}
                      onChange={(e) =>
                        setProduct({ ...product, category: e.target.value })
                      }
                    />
                  </section>
                  <section>
                    <label for="price">Buying price </label>
                    <input
                      name="price"
                      className="modalInput"
                      placeholder="Enter buying price"
                      value={product.price}
                      onChange={(e) =>
                        setProduct({ ...product, price: e.target.value })
                      }
                    />
                  </section>
                  <section>
                    <label for="quantity">Quantity </label>
                    <input
                      name="quantity"
                      className="modalInput"
                      placeholder="Enter Product quantity"
                      value={product.quantity}
                      onChange={(e) =>
                        setProduct({ ...product, quantity: e.target.value })
                      }
                    />
                  </section>
                  <section>
                    <label for="date">Expiry Date </label>
                    <input
                      name="date"
                      className="modalInput"
                      placeholder="Enter expiry date"
                      value={product.expiryDate}
                      onChange={(e) =>
                        setProduct({ ...product, expiryDate: e.target.value })
                      }
                    />
                  </section>
                  <section>
                    <label for="threshold">Threshold value </label>
                    <input
                      name="threshold"
                      className="modalInput"
                      placeholder="Enter threshold value"
                      value={product.threshold}
                      onChange={(e) =>
                        setProduct({ ...product, threshold: e.target.value })
                      }
                    />
                  </section>
                  <div className="modalBtn">
                    <Button
                      variant="outlined"
                      color="inherit"
                      size="small"
                      onClick={handleClose}
                    >
                      Discard
                    </Button>
                    <Button variant="contained" size="small" type="submit">
                      Add Product
                    </Button>
                  </div>
                </form>
              </Box>
            </Modal>
          ) : (
            ""
          )}
          <Button
            variant="outlined"
            startIcon={<IoFilterOutline />}
            color="inherit"
            size="small"
          >
            Filters
          </Button>
          <Button variant="outlined" color="inherit" size="small">
            Download all
          </Button>
        </div>
      </div>
      <div className="tableContainer">
        <table>
          <tr>
            <td>Products</td>
            <td>Buying Price</td>
            <td>Quantity</td>
            <td>Threshold Value</td>
            <td>Expiry Date</td>
            <td>Availability</td>
            <td>Action</td>
          </tr>
          {productList.map((item, index) => (
            <tr>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.threshold}</td>
              <td>{item.expiryDate}</td>
              <td
                className="stockText"
                style={{ color: item.quantity >= 5 ? "green" : "red" }}
              >
                {item.quantity >= 5 ? "In-Stock" : "Out of stock"}
              </td>
              <td>
                <MdDelete
                  className="delIcon"
                  onClick={() => handleDel(index)}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
export default Table;
