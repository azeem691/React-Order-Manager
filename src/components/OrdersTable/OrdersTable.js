import React from "react";
import avatar from "./../../assets/avatar.jpg";
import "./OrdersTable.css";
import Tagline from "../ui/Tagline";
import { orders } from "../../Util/Orders";

const OrdersTable = () => {
  return (
    <div className="table-container card">
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="text-white">Customer</th>
            <th className="text-white">Order No.</th>
            <th className="text-white">Amount</th>
            <th className="text-white">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((x) => {
            return (
              <tr key={x.orderno}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={avatar}
                      alt="Not found"
                      className="avatar-sm rounded-circle"
                    />
                    <div className="ms-3">{x.name}</div>
                  </div>
                </td>
                <td>{x.orderno}</td>
                <td>{x.amount}</td>
                <td>
                  <Tagline status={x.status} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
