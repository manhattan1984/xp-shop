import React from "react";

const page = ({ searchParams: { status, tx_ref, transaction_id } }) => {
  return (
    <div className="text-center">
      <p>{status}</p>
      <p>{tx_ref}</p>
      <p>{transaction_id}</p>
    </div>
  );
};

export default page;
