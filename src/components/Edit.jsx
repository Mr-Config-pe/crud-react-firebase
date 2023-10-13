import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebaseConfig/firebase";

export const Edit = () => {
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, "products", id);
    const data = { description: description, stock: stock };
    await updateDoc(product, data);
    navigate("/");
  };

  const getProductsById = async (id) => {
    const product = await getDoc(doc(db, "products", id));
    if (product.exists()) {
      setDescription(product.data().description);
      setStock(product.data().stock);
    } else {
      console.log("Este producto no existe");
    }
  };

  useEffect(() => {
    getProductsById(id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Edit Product</h1>
          <form onSubmit={update}>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Stock</label>
              <input
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
