import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { classNames } from "primereact/utils";

import { useCart } from "../hooks/useCart";
import { useProductData } from "../hooks/useProductData";
import { useState, useEffect } from "react";

export default function ShopList({ toast, searchValue = "" }) {
  const { products } = useProductData();
  const { addCart } = useCart(toast);

  const [filterProducts, setFilterProducts] = useState(products);

  useEffect(() => {
    console.log("searchVal", searchValue);
    if (searchValue === "") {
      setFilterProducts(products);
    } else {
      setFilterProducts(
        products.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue, products]);

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";
      case "LOWSTOCK":
        return "warning";
      case "OUTOFSTOCK":
        return "danger";
      default:
        return null;
    }
  };

  const itemTemplate = (product, index) => {
    return (
      <div className="col-12" key={product.id}>
        <div
          className={classNames(
            "flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",
            { "border-top-1 surface-border": index !== 0 }
          )}
        >
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.name}</div>
              <Rating value={product.rating} readOnly cancel={false}></Rating>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{product.category}</span>
                </span>
                <Tag
                  value={product.inventoryStatus}
                  severity={getSeverity(product)}
                ></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${product.price}</span>
              <Button
                icon="pi pi-shopping-cart"
                className="p-button-rounded"
                disabled={product.inventoryStatus === "OUTOFSTOCK"}
                onClick={() =>
                  addCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    category: product.category,
                  })
                }
              ></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const listTemplate = (items) => {
    if (!items || items.length === 0) return null;

    let list = items.map((product, index) => {
      return itemTemplate(product, index);
    });

    return <div className="grid grid-nogutter">{list}</div>;
  };

  return (
    <div className="card">
      <DataView
        value={filterProducts}
        listTemplate={listTemplate}
        paginator
        rows={5}
      />
    </div>
  );
}
