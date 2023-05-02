import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.scss";
import cartEmpty from "../../assets/data";
import { useDispatch } from "react-redux";
import { removCart } from "../../app/feature/Slider/CartSlice";
import { handleActive } from "../../app/feature/Slider/listCartSlice";
import { toast } from "react-toastify";
const Cart = () => {
  const dispatch = useDispatch();
  const dataCart = useSelector((state) => state.cart);
  const activeFrom = useSelector((state) => state.listCart.isActive);
  const hanldeRemove = (item) => {
    dispatch(removCart(item));
    toast.warning("Removed !");
  };
  console.log(dataCart, dataCart.cart);
  return (
    <div className={activeFrom ? style.cart : style.none}>
      <div className={activeFrom ? style.cart_form : style.none}>
        <h1>Shopping Bag</h1>
        <span onClick={() => dispatch(handleActive())}>
          <i className="bi bi-x-lg"></i>
        </span>
        {dataCart.cart.length === 0 ? (
          <div className={style.cartEmpty}>
            <img src={cartEmpty} alt="empty" />
          </div>
        ) : (
          <div
            className={style.scroll}
            style={{ overflow: "auto", height: "300px" }}
          >
            {dataCart.cart.map((item, index) => {
              return (
                <div key={index} className={style.cartList}>
                  <div className={style.cartList_product}>
                    <img src={item.img} style={{ height: "80px" }} alt="img" />
                    <h3>{item.name}</h3>
                    <p>{item.title}</p>
                  </div>
                  <div className={style.cartList_delta}>
                    <h3>
                      Selected Size:{" "}
                      <p className={style.selcectSize}>{item.size}</p>
                    </h3>
                    <h3>
                      Selected Color:{" "}
                      <div style={{ backgroundColor: item.color }}></div>
                    </h3>
                    <h3>Amount: {item.amount}</h3>
                    <h3>Single Item price: ${item.price}</h3>
                    <h3>Total Item price: ${item.totalPrice}</h3>
                    <button onClick={() => hanldeRemove(item)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <h2 className={style.total_rice}>
          Total Price Of All Product : ${dataCart.totalPrice}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
